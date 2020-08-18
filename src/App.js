import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if(button === "="){
      this.calculate()
    }

    else if(button === "C"){
      this.reset()
    }
    else if(button === "%"){
      this.percent()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--','+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      if(this.state.result.includes('%')){
        this.setState({
          result: (eval(checkResult)/100 || "" ) + ""
        })
      }
      this.setState({
        result: (eval(checkResult) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  // backspace = () => {
  //   this.setState({
  //     result: this.state.result.slice(0, -1)
  //   })
  // };

  percent = () => {
    this.setState({
      result: this.state.result/100
    })
  };

  render() {
    return (
        <div>
          <div className="calculator-body">
            <h1>Kalkulator Soal 5</h1>
            <ResultComponent result={this.state.result}/>
            <KeyPadComponent onClick={this.onClick}/>
          </div>
        </div>
    );
  }
}

export default App;
