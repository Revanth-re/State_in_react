import React, { Component } from 'react'
// import "./Rquotes.css"

export default class Rquotes extends Component {
  constructor (){
    super()
    this.state={
      Rquotes:""
    }
  }

handleRandomquotes=()=>{
  
let englishQuotes=["A mother is she who can take the place of all others but whose place no one else can take.",
"All that I am, or ever hope to be, I owe to my angel mother.” — Abraham Lincoln",
"Mother’s love is peace. It need not be acquired, it need not be deserved.” — Erich Fromm",
"Life doesn’t come with a manual, it comes with a mother.” — Unknown",
"To the world, you are a mother, but to your family, you are the world.” — Unknown",
"A mother is the heartbeat in the home; and without her, there seems to be no heartthrob.” — Leroy Brownlow",
"Home is where your mom is.” — Unknown",
"God could not be everywhere, and therefore he made mothers.” — Rudyard Kipling",
"A mother’s love endures through all.” — Washington Irving",
"My mother is a walking miracle.” — Leonardo DiCaprio",
"There is no role in life that is more essential than that of motherhood.” — Elder M. Russell Ballard",
"A hug from mom lasts long after she lets go.” — Unknown",
"Mothers hold their children’s hands for a short while, but their hearts forever.” — Unknown",
"A mother’s arms are more comforting than anyone else’s.” — Princess Diana",
"Motherhood: All love begins and ends there.” — Robert Browning",
"A mother is your first friend, your best friend, your forever friend.” — Unknown",

"When you look into your mother’s eyes, you know that is the purest love you can find on this earth.” — Mitch Albom",

"No matter your age, you always need your mom.” — Unknown",
"The influence of a mother in the lives of her children is beyond calculation.” — James E. Faust",

"A mother understands what a child does not say.",

"There is no safer haven than a mother’s arms.",

"A mother is the one who fills your heart in the first place",

"A mother’s love is more beautiful than any fresh flower."]
// console.log(englishQuotes)
let rand=Math.floor(Math.random()*englishQuotes.length)
// console.log(rand)
let hexa=englishQuotes[rand]
// console.log(hexa)
this.setState({Rquotes:hexa})

}
  render() {
    return (
  <div className="quotes-container">
    <h1 className="quotes-heading">Random Quotations</h1>
    <h1 className="quote-text">{this.state.Rquotes}</h1>
    <button className="quote-button" onClick={this.handleRandomquotes}>Click</button>
  </div>
);
  }
}
