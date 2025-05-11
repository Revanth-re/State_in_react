// import React, { Component } from 'react'

// export default class Login extends Component {
//   render() {
//     return (
//       <div>
//          <input type="text" placeholder='enter input' /> <br />
        
        
//         <input type="text" placeholder='enter input' /> <br />
//         <input type="text" placeholder='enter input' /> <br />
//         <input type="text" /> <br />
//         <button>Login</button>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'
import Signup from './Signup'
export default class Login extends Component {
  //   constructor(){
  //   super()
  //   this.state={isLogin:true}
  // }
  // handleLogin=()=>{
  //   this.setState({isLogin:!this.state.isLogin})
  // }

  render() {
   
    
    return (
   <div class="form-container">
  <input type="text" placeholder="Enter input" /> <br />
  <input type="text" placeholder="Enter input" /> <br />
  <button class="primary-btn">Login</button>
  {/* {this.state.isLogin&& <Signup/>} */}
  
</div>
    )
  }
}