import React, { Component } from 'react'


export class NewsItem extends Component {

  render() {
    let {title,discription,imageurl,url,id,author,datePublished} =this.props;
    return (

      <div className='my-3 mx-4'>
        <div className="card" style={{ width: '18rem'}}>

          <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{discription}</p>
              <p className="card-text">By {(author!= null)?author:"Anonymous"} on {datePublished}</p>
              <a href={url} target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
