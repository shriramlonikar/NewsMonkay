import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    console.log("cdm")
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7cacae183b384ea8b65447d2f737841d&pagesize=5`;
    this.setState({loading:true}); 
    let data = await fetch(url);
    let pastdata = await data.json();
    console.log(pastdata);
    this.setState({articles: pastdata.articles, totalResults: pastdata.totalResults, loading:false})

  }

  handlePrevClick = async()=>{
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7cacae183b384ea8b65447d2f737841d&page=${this.state.page - 1}&pagesize=5`;
    this.setState({loading:true});
      let data = await fetch(url);
      let pastdata = await data.json()
      console.log(pastdata);
      this.setState({
        page: this.state.page - 1,
      articles: pastdata.articles,
      loading:false
     })
  }
  
  handleNextClick = async()=>{
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/5))){
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7cacae183b384ea8b65447d2f737841d&page=${this.state.page + 1}&pagesize=5`;
    this.setState({loading:true});
      let data = await fetch(url);
      let pastdata = await data.json()
      this.setState({
        page: this.state.page + 1,
      articles: pastdata.articles,
      loading:false
     })
    }
  }
  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgPath={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
          
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Privious</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/5)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
