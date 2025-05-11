// ____random color and Quote_____________________________________-
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       color:"#fff",
//       quote:"If you want to shine like a sun, first burn like a sun."
//     }
//   }
   
  
//   randomColor=()=>{
//     let chars="abcdef0123456789"
// let hexa="#"

// for(let i=0;i<6;i++){
// let colorRandom= Math.floor(Math.random()*chars.length)
// let hexaRandom=chars[colorRandom]
// // console.log(hexaRandom)
// hexa+=hexaRandom
// }
// let randomQuotes=[
//   "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.",
  
//    "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
  
//    "If you want to shine like a sun, first burn like a sun.",
  
//   "Man needs his difficulties because they are necessary to enjoy success.",
  
//   " Don't read success stories, you will only get a message. Read failure stories, you will get some ideas to achieve success. ",
  
//   "The only thing that's standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
  
//    "To succeed in your mission, you must have single-minded devotion to your goal.",
  
//    "Confidence and hard work is the best medicine to kill the disease called failure. It will make you a successful person.",
  
//    "Never stop fighting until you arrive at your destined place – that is, the unique you"
  
//   ]

// let QuoteRandom=Math.floor(Math.random()*randomQuotes.length)
// console.log(QuoteRandom);
// let RealQuote=randomQuotes[QuoteRandom]
// // colorRandom=chars[colorRandom]
// // hexa+=colorRandom
// this.setState({color:this.state.color=hexa,quote:this.state.quote=RealQuote})


//   }

 
//   render() {
    
//     return (
//       <div>
//       <div style={{backgroundColor:this.state.color,padding:"10%"}}> 
//       <h1>{this.state.quote}</h1>
     
//       </div> <br /> <br /> <br /> <br />
//        <button onClick={this.randomColor}>Click</button>
//        </div>
//     )
//   }
// }
// ____Theme Toggle___________________________________________________________________________
// import React, { Component } from 'react'
// import { IoMdSunny } from "react-icons/io";
// import { FaMoon } from "react-icons/fa";
// import "./App.css"
// export default class App extends Component {

//   constructor(){
//     super()
//     this.state={theme:false}
//   }
//   handleTheme=()=>{
//     this.setState({theme:!this.state.theme})
//   }
//   render() {
//     return (
//       <div >
// <div style={{backgroundColor:this.state.theme?"coral":"white",padding:"10%"}}>
//         <h1 style={{color:this.state.theme?"white":"black"}}>Hello</h1>
//         </div>
//         <button onClick={this.handleTheme}>{this.state.theme?<IoMdSunny/>:<FaMoon/>}</button>
//       </div>
//     )
//   }
// }



// _Signup and Login Page_________________________________________________________________________________________________
// import React, { Component } from 'react'
// // import Signup from './Signup'
// import Navbar from './Navbar'
// export default class App extends Component {
  
//   render() {
//     return (
//       <div>
        
        
//         <div>
//           <Navbar  ></Navbar>
//           {/* <button onClick={this.Signup}>Signup</button> */}
//           {/* <Signup/> */}
//         </div>
//       </div>
//     )
//   }
// }
// ______________________________________________________________________________________// import React, { Component } from 'react'
import Signup from './Signup'
import React, { Component } from 'react'
import "./App.css"
import RandomQuote from './RandomQuote'
import ThemeToggle from './ThemeToggle'
import Navbar from './Navbar'
export default class App extends Component {
  
  render() {
    return (
      <div>
        
        
        <div>
      <RandomQuote></RandomQuote>
      <ThemeToggle></ThemeToggle>
      <Navbar></Navbar>
          <Signup></Signup>
        
    
        </div>
      </div>
    )
  }
}