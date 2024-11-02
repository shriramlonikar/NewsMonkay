import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
   let {title, description, imgPath, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imgPath?"https://gizmodo.com/app/uploads/2024/09/macbook-pro-m3.jpg":imgPath} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
