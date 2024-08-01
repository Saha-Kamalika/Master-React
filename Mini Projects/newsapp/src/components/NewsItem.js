import React, { Component } from "react";
import PropTypes from "prop-types";
import defaultImage from "../assets/images/default.jpg";

export class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    newsurl: PropTypes.string.isRequired,
    author: PropTypes.string,
    date: PropTypes.string,
    source: PropTypes.string.isRequired,
  };

  static defaultProps = {
    author: "Unknown",
    date: "",
    imageUrl: defaultImage,
  };

  render() {
    let {
      title,
      description,
      imageUrl,
      newsurl,
      author,
      date,
      source,
    } = this.props;

    // Fallback image URL if imageUrl is not provided
    const imageSrc = imageUrl || defaultImage;

    return (
      <div>
        <div className="card my-2">
          <span
            className="position-absolute top-0 badge rounded-pill bg-danger"
          >
            {source}
          </span>
          <img
            src={imageSrc}
            className="card-img-top"
            alt="News"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = defaultImage;
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {date ? new Date(date).toGMTString() : "Unknown"}
              </small>
            </p>
            <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
