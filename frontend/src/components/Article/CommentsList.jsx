import React, { Component } from 'react'

class CommentsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        let {slug} = this.props
        let req = new XMLHttpRequest()
        req.open("GET", `https://conduit.productionready.io/api/articles/${slug}/comments`, true)
        req.onload = () => {
            const {comments} = JSON.parse(req.response)
            if(comments) this.setState({comments})
        }
        req.send()
    }
    loadComments() {
        let rows = []
        this.state.comments.forEach((comment, index)=> rows.push(
            <div className="card" key={index}>
                <div className="card-block">
                    <p className="card-text">{comment.body}</p>
                </div>
                <div className="card-footer">
                    <a href="" className="comment-author">
                    <img src={comment.author.image} className="comment-author-img" />
                    </a>
                    &nbsp;
                    <a href="" className="comment-author">{comment.author.username}</a>
                    <span className="date-posted">{new Date(comment.createdAt).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                </div>
            </div>
        ) )
        return rows
    }
    render() {
        return (
            <div>
                {this.loadComments()}
            </div>
            
        )
    }
}
export default CommentsList






                    