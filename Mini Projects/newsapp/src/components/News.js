import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize: 0,
    category: 'general'
  }
  static propTypes={
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
      page: 1
    };
    document.title=`${this.props.category}+' - NewsMonkey`;
  }
  async updateNews(){
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4fd59b45cd13446a896dd21098cd1937&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false });
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
      this.setState({ page: this.state.page-1 });
      this.updateNews();
    }

  handleNextClick = async () => {
    this.setState({ page: this.state.page+1 });
    this.updateNews();
    }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row my-4">
          {!this.state.loading && this.state.articles.map((elem) => {
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
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
