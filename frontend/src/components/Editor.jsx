import React, { Component } from 'react'
import Storage from '../Storage'

class Editor extends Component {
    constructor(props){
        super(props)
        this.onSubmit = e => {
            e.preventDefault()
            const token = Storage.get()
            let data = new FormData(e.target)
            let title = data.get('title')
            let description = data.get('description')
            let body = data.get('body')
            let tagList = data.get('tags').trim().split(" ")
            let article = {title, description, body, tagList}
            let req = new XMLHttpRequest()
            req.open('POST', 'https://conduit.productionready.io/api/articles', true)
            req.setRequestHeader("Content-Type", "application/json")
            req.setRequestHeader("Authorization", `Token ${token}`)
            req.onload = ()=> {
                let {article} = JSON.parse(req.response)
                if(article) this.setState({slug: article.slug})
            }
            req.send(JSON.stringify({article}))
        }
    }
    render() {
        return (
            <div className="editor-page">
                <div className="container page">
                    <div className="row">

                    <div className="col-md-10 offset-md-1 col-xs-12">
                        <form onSubmit={this.onSubmit}>
                        <fieldset>
                            <fieldset className="form-group">
                                <input name="title" type="text" className="form-control form-control-lg" placeholder="Article Title" required/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input name="description" type="text" className="form-control" placeholder="What's this article about?" required/>
                            </fieldset>
                            <fieldset className="form-group">
                                <textarea name='body' className="form-control" rows="8" placeholder="Write your article (in markdown)" required></textarea>
                            </fieldset>
                            <fieldset className="form-group">
                                <input name="tags" type="text" className="form-control" placeholder="Enter tags"/><div className="tag-list"></div>
                            </fieldset>
                            <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                                Publish Article
                            </button>
                        </fieldset>
                        </form>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Editor

            




// import React, { Component } from 'react'

// class HomePage extends Component {
//     render() {
//         return (
//         )
//     }
// }
// export default HomePage