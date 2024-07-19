import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
      articles: [],
      loading: false
    };
  }

  async componentDidMount() {
      let url = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=4fd59b45cd13446a896dd21098cd1937";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles});
    
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
                  newsurl={elem.url} 
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
