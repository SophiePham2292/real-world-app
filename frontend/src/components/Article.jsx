import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CommentsList from './Article/CommentsList'

class Article extends Component {
    constructor(props){
        super(props)
        this.state = {
            article: null
        }
    }
    componentDidMount() {
        const {slug}= this.props
        let req = new XMLHttpRequest()
        req.open('GET', `https://conduit.productionready.io/api/articles/${slug}`, true)
        req.onload = ()=> {
            let {article} = JSON.parse(req.response)
            if(article) this.setState({article})
        }
        req.send()
    }
    loadFooter() {
        const {c_user} = this.props
        if(c_user) {
            return( <form className="card comment-form">
                        <div className="card-block">
                            <textarea className="form-control" placeholder="Write a comment..." rows="3"></textarea>
                        </div>
                        <div className="card-footer">
                            <img src={c_user.image} className="comment-author-img" />
                            <button className="btn btn-sm btn-primary">
                            Post Comment
                            </button>
                        </div>
                        </form>)

        } else return <div><Link to="/login">Sign in</Link> or <Link to="/login">Sign Up</Link> to add comments on this article.</div>
    }
    render() {
        const {article} = this.state
        if(!article) return (<div>Loading...</div>)
        else {
            const {author} = article
            return (
            <div className="article-page">

                <div className="banner">
                    <div className="container">

                    <h1>{article.title}</h1>

                    <div className="article-meta">
                        <a href=""><img src={author.image} /></a>
                        <div className="info">
                        <a href="" className="author">{author.username}</a>
                        <span className="date">{new Date(article.createdAt).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <button className="btn btn-sm btn-outline-secondary">
                        <i className="ion-plus-round"></i>
                        &nbsp;
                        Follow {author.username}
                        </button>
                        &nbsp;&nbsp;
                        <button className="btn btn-sm btn-outline-primary">
                        <i className="ion-heart"></i>
                        &nbsp;
                        Favorite Post <span className="counter">({article.favoritesCount})</span>
                        </button>
                    </div>

                    </div>
                </div>

                <div className="container page">

                    <div className="row article-content">
                    <div className="col-md-12">
                        <p>
                        {article.body}
                        </p>
                    </div>
                    </div>

                    <hr />

                    <div className="article-actions">
                    <div className="article-meta">
                        <a href="profile.html"><img src={author.image} /></a>
                        <div className="info">
                        <a href="" className="author">{author.username}</a>
                        <span className="date">{new Date(article.updatedAt).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                        </div>

                        <button className="btn btn-sm btn-outline-secondary">
                        <i className="ion-plus-round"></i>
                        &nbsp;
                        Follow {author.username}
                        </button>
                        &nbsp;
                        <button className="btn btn-sm btn-outline-primary">
                        <i className="ion-heart"></i>
                        &nbsp;
                        Favorite Post <span className="counter">({article.favoritesCount})</span>
                        </button>
                    </div>
                    </div>

                    <div className="row">

                    <div className="col-xs-12 col-md-8 offset-md-2">
                        {this.loadFooter()}
                        <br/>
                        <CommentsList slug={this.props.slug}/>
                    </div>

                    </div>

                </div>

            </div>
            )
        }
    }
}
export default Article            
            