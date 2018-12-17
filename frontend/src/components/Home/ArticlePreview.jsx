import React, { Component } from 'react'
import {Link} from 'react-router-dom'
/*
"slug": "how-to-train-your-dragon",
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
*/ 
class ArticlePreview extends Component {
    render() {
        const {article} = this.props
        if(!article) return (<div>Loading</div> )
        else return (
            <div className="article-preview">
                <div className="article-meta">
                    <Link to={`/@${article.author.username}`}><img src={article.author.image} /></Link>
                    <div className="info">
                    <Link to={`/@${article.author.username}`} className="author">{article.author.username}</Link>
                    <span className="date">{new Date(article.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {article.favoritesCount}
                    </button>
                </div>
                <Link to={`/article/${article.slug}`} className="preview-link">
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                        <span>Read more...</span>
                    </Link>
            </div>
        )
    }
}
export default ArticlePreview