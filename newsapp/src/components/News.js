import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=4fd59b45cd13446a896dd21098cd1937&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults});
  }

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=4fd59b45cd13446a896dd21098cd1937&page=${this.state.page - 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading: false });
    }
  }

  handleNextClick = async () => {
    if(this.state.page>Math.ceil(this.totalResults/20))
    {}
    else{
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=4fd59b45cd13446a896dd21098cd1937&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, page: this.state.page + 1, loading: false });
    }
    
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <p>Loading...</p>}
        <div className="row my-4">
          {this.state.articles.map((elem) => {
            return (
              <div className="col-md-4" key={elem.url}>
                <NewsItem 
                  title={elem.title ? elem.title.slice(0, 45) : ""} 
                  description={elem.description ? elem.description.slice(0, 88) : ""} 
                  imageUrl={elem.urlToImage} 
                  newsUrl={elem.url} 
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
