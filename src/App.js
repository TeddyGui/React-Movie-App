import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./Components/MovieList";
import Loading from "./Components/Loading";

const Content = Loading(MovieList);


class App extends Component{
  state = {
    isLoading : true
  } 
  
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }
  render() {
    return (
      <div>
        <Content
            isLoading={this.state.isLoading}
          
          />
      </div>
    )
  }
}
export default  App