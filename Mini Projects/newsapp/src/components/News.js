import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const constructUrl = (page) => {
    return `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3cf339a3f8fb45c88610dc5bc159ed1b&page=${page}&pageSize=${props.pageSize}`;
  };

  const updateNews = async () => {
    props.setProgress(0);
    setLoading(true);
    let url = constructUrl(page);
    try {
      props.setProgress(30);
      let data = await fetch(url);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults || 0);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);
    let url = constructUrl(nextPage);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles || []));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch more news:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container my-3">
        <h2>
          NewsMonkey - Top{" "}
          {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
          Headlines
        </h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-4">
              {articles.map((elem) => (
                <div className="col-md-4" key={elem.url}>
                  <NewsItem
                    title={elem.title ? elem.title.slice(0, 45) : ""}
                    description={elem.description ? elem.description.slice(0, 88) : ""}
                    imageUrl={elem.urlToImage}
                    newsUrl={elem.url}
                    author={elem.author}
                    date={elem.publishedAt}
                    source={elem.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;
