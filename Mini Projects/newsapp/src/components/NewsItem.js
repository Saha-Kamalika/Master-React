import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../assets/images/default.jpg";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  const imageSrc = imageUrl || defaultImage;
  return (
    <div>
      <div className="card my-2">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "85%", zIndex: "1" }}
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
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
