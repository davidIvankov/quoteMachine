
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import {faTwitter} from '@fortawesome/free-brands-svg-icons';
 
 library.add(faTwitter) //The array element containing quotes
class Qvt {
  constructor(quote,author) {
    this.Q = quote;
      this.a = author;
  }
}
function createArr(arr1, arr2) {
 let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push( new Qvt(arr1[i],arr2[i]))
  }
  return result
}
let arr1 = ["Be yourself; everyone else is already taken.", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "So many books, so little time.", "A room without books is like a body without a soul.", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "You've gotta dance like there's nobody watching,\
Love like you'll never be hurt,\
Sing like there's nobody listening,\
And live like it's heaven on earth.", "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "You only live once, but if you do it right, once is enough.", "Be the change that you wish to see in the world.", "In three words I can sum up everything I've learned about life: it goes on." ];
let arr2 = ["Oscar Wilde", "Marilyn Monroe", "Albert Einstein", "Frank Zappa", "Marcus Tullius Cicero", "Bernard M. Baruch", "William W. Purkey", "Dr. Seuss", "Mae West", "Mahatma Gandhi", "Robert Frost"];
let quoteArr = createArr(arr1,arr2)
//React #quote-box component
  let i = Math.floor(Math.random() * quoteArr.length)
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = quoteArr[i];
    this.handleClick = this.handleClick.bind(this)
  };
  handleClick() {
  
     this.setState(quoteArr[Math.floor(Math.random() * quoteArr.length)]);
  };
  render() {
    
    return (<div id ="big">
        <h1 className="text-center text-primary" id ="title">Quote Machine</h1>
      <div id="quote-box" className = "text-center well ">
        <h2 id="text" className = "text-info ">{this.state.Q}</h2>
        <h3 id="author" >{this.state.a}</h3>
        <a id="tweet-quote" href = "twitter.com/intent/tweet"><FontAwesomeIcon icon={faTwitter} /></a>
        <button className ="btn btn-default btn-block btn-primary" onClick={this.handleClick} id="new-quote">New Quote</button>
        </div>
        </div>
    )
  }
}

ReactDOM.render(<Wrapper />, document.getElementById("root"))