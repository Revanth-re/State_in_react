import React, { Component } from 'react'

export default class RandomQuote extends Component {
  constructor(){
    super()
    this.state={
      color:"#fff",
      quote:"If you want to shine like a sun, first burn like a sun."
    }
  }
   
  
  randomColor=()=>{
    let chars="abcdef0123456789"
let hexa="#"

for(let i=0;i<6;i++){
let colorRandom= Math.floor(Math.random()*chars.length)
let hexaRandom=chars[colorRandom]
// console.log(hexaRandom)
hexa+=hexaRandom
}
let randomQuotes=[
  "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.",
  
   "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
  
   "If you want to shine like a sun, first burn like a sun.",
  
  "Man needs his difficulties because they are necessary to enjoy success.",
  
  " Don't read success stories, you will only get a message. Read failure stories, you will get some ideas to achieve success. ",
  
  "The only thing that's standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
  
   "To succeed in your mission, you must have single-minded devotion to your goal.",
  
   "Confidence and hard work is the best medicine to kill the disease called failure. It will make you a successful person.",
  
   "Never stop fighting until you arrive at your destined place – that is, the unique you"
  
  ]

let QuoteRandom=Math.floor(Math.random()*randomQuotes.length)
console.log(QuoteRandom);
let RealQuote=randomQuotes[QuoteRandom]
// colorRandom=chars[colorRandom]
// hexa+=colorRandom
this.setState({color:this.state.color=hexa,quote:this.state.quote=RealQuote})


  }

 
  render() {
    
    return (
      <div>
      <div style={{backgroundColor:this.state.color,padding:"10%"}}> 
      <h1>{this.state.quote}</h1>
     
      </div> <br /> <br /> <br /> <br />
       <button onClick={this.randomColor}>Click</button>
       </div>
    )
  }
}