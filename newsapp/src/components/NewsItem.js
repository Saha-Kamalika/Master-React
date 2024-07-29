import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
    let {title,description,imageUrl,newsurl,author,date,source}=this.props;
    return (
      <div>
        <div className="card my-2">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '78%',zIndex: '1'}}>
    {source}
  </span>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
          
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
