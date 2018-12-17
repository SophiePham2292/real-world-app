import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Article from './components/Article'
import Settings from './components/Settings'
import Editor from './components/Editor'
import Storage from './Storage'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            c_user: null
        }
        this.onLogin = (c_user) => {
            this.setState({c_user})
        }
        
    }
    componentDidMount() {
        const token = Storage.get()
        if(token) {
            let req = new XMLHttpRequest()
            req.open('GET', " https://conduit.productionready.io/api/user", true)
            req.setRequestHeader("Authorization", `Token ${token}`)
            req.onload = () => {
                let {user} = JSON.parse(req.response)
                if(user) this.setState({c_user: user})
            }
            req.send()
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Header c_user={this.state.c_user}/>
                    <Route path='/' exact render={()=>(<HomePage c_user={this.state.c_user}/>)}/>
                    <Route path='/login' render={()=>(<Login onLogin={this.onLogin}/>)}/>
                    <Route path='/register' render={()=>(<Register onLogin={this.onLogin}/>)}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/editor' component={Editor}/>
                    <Route path='/article/:slug' render={({match})=>(<Article slug={match.params.slug} c_user={this.state.c_user}/>)}/>
                    <Route path='/@:username' render={({match})=>(<Profile username={match.params.username} c_user={this.state.c_user}/>)}/>
                </div>
                
            </Router>
        )
    }
}

export default App