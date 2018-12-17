import React, { Component } from 'react'
import ArticleList from './Home/ArticleList'
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: null,
            favoritedTag: false
        }
    }
    componentDidMount() {
        let {username} = this.props
        let req = new XMLHttpRequest()
        req.open('GET', `https://conduit.productionready.io/api/profiles/${username}`, true)
        req.onload = ()=> {
            let {profile} = JSON.parse(req.response)
            if(profile) this.setState({profile})
        }
        req.send()
    }
    render() {
        if (!this.state.profile) return <div>Loading...</div>
        let {profile, favoritedTag} = this.state
        return (
            <div className="profile-page">
                <div className="user-info">
                    <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-md-10 offset-md-1">
                        <img src={profile.image} className="user-img" />
                        <h4>{profile.username}</h4>
                        <p>
                            {profile.bio}
                        </p>
                        <button className="btn btn-sm btn-outline-secondary action-btn">
                            <i className="ion-plus-round"></i>
                            &nbsp;
                            Follow {profile.username} 
                        </button>
                        </div>

                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                        <ul className="nav nav-pills outline-active">
                            <li className="nav-item">
                            <a className={"nav-link "+(favoritedTag?"":"active")} href="#" onClick={()=>this.setState({favoritedTag: false})}>My Articles</a>
                            </li>
                            <li className="nav-item">
                            <a className={"nav-link "+(favoritedTag?"active":"")} href="#" onClick={()=>this.setState({favoritedTag: true})}>Favorited Articles</a>
                            </li>
                        </ul>
                        </div>
                        {favoritedTag ? <ArticleList favorited={profile.username}/> :<ArticleList author={profile.username}/>}
                        
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile