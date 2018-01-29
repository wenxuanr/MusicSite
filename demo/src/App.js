import React, { Component } from 'react';
import './App.css';

class Input extends Component {
  render() {
    return (
      <div className = "el-input">
      <input placeholder= "Type Your name" type = "text" className ="el-input__inner">
        
      </input>
      <input placeholder= "Type Your keyword" type = "text" className ="el-input__inner">

      </input>
      <input placeholder= "Type number of people" type = "number" className ="el-input__inner">
          
      </input>
      <input placeholder= "Type date" type = "date" className ="el-input__inner">
          
      </input>
      <button type = "button" className ="el-button el-button--default is-round">
        <span> submit </span>
      </button>
    </div>
    )
  }
}
class App extends Component {
  componentWillMount() {
    fetch("http://127.0.0.1/connect.php").then((response) => 
      response.json())
    .then((responseJson) => {  
      console.log(responseJson);  
    })
  }
  render() {
    return (
      <div className="App">
        <Input></Input>
      </div>
    )
  }
}

export default App;
