import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    console.log("Constructor called");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(0);
    this.setState({ loading: true });
    let url = this.constructUrl(this.state.page);
    try {
      this.props.setProgress(30);
      let data = await fetch(url);
      let parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        loading: false
      });
      this.props.setProgress(100);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      this.setState({ loading: false });
    }
  }

  constructUrl(page) {
    return `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4fd59b45cd13446a896dd21098cd1937&page=${page}&pageSize=${this.props.pageSize}`;
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    let nextPage = this.state.page + 1;
    this.setState({ page: nextPage, loading: true });
    let url = this.constructUrl(nextPage);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles || []),
        loading: false
      });
    } catch (error) {
      console.error("Failed to fetch more news:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <>
        <div className='container my-3'>
          {<h2>NewsMonkey - Top {this.props.category.charAt(0).toUpperCase()+ this.props.category.slice(1)} Headlines</h2>}
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length != this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row my-4">
                {this.state.articles.map((elem) => {
                  return (
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
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
        </div>
      </>
    );
  }
}

export default News;
