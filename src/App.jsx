import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import "./MobileFriendly.css"
class App extends Component {
  state = {
    name : "",
    first : ["sarcastic" , "happy", "Caring" , "hardWorking" , "ego" , "faithful" , "kindness"],
    second : ["creativity" , "analytical" , "patient" , "resilient" , "talented" , "pretty" , "Obsession"],
    chemical : ["toxic"  , "eats a lot" , "pride", "talkative"  ,"Gossiping" , "introvert"],
    result : {first : "" , second : "" , chemical : ""}
  }

  createResult = () => { 
    const {first , second , chemical , name} = this.state
    if (name.trim() === "") {
      toast.error('Cannot submit without a valid name..', { position: "top-center", autoClose: 5000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: false, progress: undefined, });
    }
    else {

    let firstChoice = randomChoice(first)
    let secondChoice = randomChoice(second)
    let Chemical = randomChoice(chemical)
    this.setState({result : {first : firstChoice , second : secondChoice , chemical : Chemical}})
    }
  }

  

  yourResult  = () => {
    const {first , second , chemical} = this.state.result
    if (first === "" && this.state.result.second.trim() === "") {
      return <h1 style = {{color : "#c4c2c2" , position:"absolute" , top : "300px" , left : "36%" }}>enter name and submit...</h1>
  }

    return (
      <section>

          <div><p className = "starting">{first}</p><img src={require("./pics/starting.jpg").default} alt=""/></div>
          <div><p className = "second">{second}</p><img src={require("./pics/secondary.jpg").default} alt=""/></div>
          <div><p className = "everything">everything nice</p><img src={require("./pics/everithin nice.jpg").default} alt=""/></div>
          <div><p className = "Stir">mixing</p><img src={require("./pics/strir.jpg").default} alt=""/></div>
          <div><p className = "break">uh oh!</p><img src={require("./pics/chemical x.jpg").default} alt=""/></div>
          <div><p className = "chemical">{chemical}!</p><img src={require("./pics/chciamnl.jpg").default} alt=""/></div>
          <div><p className = "chemical"></p><img src={require("./pics/boom.jpg").default} alt=""/></div>
          <div><p className = "chemical"></p><img src={require("./pics/waking.jpg").default} alt=""/></div>
          <div><p className = "final">{this.state.name}</p><img src={require("./pics/final_product.jpg").default} alt=""/></div>
        </section>
    )
  }

  handleChange =( event) => {
    this.setState({name : event.target.value})
  }
    
  render() {
    return (
      <React.Fragment>
        <ToastContainer  className ="toast" position="top-center" autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover />
        <nav>🔬 🔬 how Professor Utonium would create you ! 🔬 🔬</nav>
        <div className = "name">

        <input type="text" onChange = {this.handleChange} value = {this.state.name} placeholder = "enter your first name" name="" id=""/>
        <button onClick = {this.createResult} className = "pulseBtn">submit</button>
        </div>
        {this.yourResult()}

      </React.Fragment>
    )
  }
}

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}
export default App
