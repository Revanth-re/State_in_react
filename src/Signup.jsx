// import React, { Component } from 'react'

// export default class Signup extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" placeholder='enter input' /> <br />
        
        
//         <input type="text" placeholder='enter input' /> <br />
//         <input type="text" placeholder='enter input' /> <br />
//         <input type="text" /> <br />
//         <button>Signup</button>
//       </div>
//     )
//   }
// }
// __________________________________________________________________________
import React, { Component } from 'react'
export default class Signup extends Component {

  constructor(){
    super()
    this.state={isSignup:true}
  }
  handleSignup=()=>{
    this.setState({isSignup:!this.state.isSignup})
  }

  render() {
    return (

    <div className="form-container">
      {this.state.isSignup?<form action="" className="form-container" >
        <h1>Signup</h1>
   
  <input type="text" placeholder="Enter input" /> <br />
  <input type="text" placeholder="Enter input" /> <br />
  <input type="text" placeholder="Enter input" /> <br />
  <input type="text" placeholder="Enter input" /> <br />
  <button className="primary-btn">Signup</button>
  </form>:
   <div class="form-container">
    <h2>Login Page</h2>
  <input type="text" placeholder="Enter input" /> <br />
  <input type="text" placeholder="Enter input" /> <br />
  <button class="primary-btn">Login</button>
  {/* {this.state.isLogin&& <Signup/>} */}
  
</div>
}
<div>
  <button onClick={this.handleSignup}>{this.state.isSignup?"Switch to login":"Switch to signup"}</button>
</div>
</div>

    )
  }
}
