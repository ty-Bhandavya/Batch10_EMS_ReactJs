import React, {Component} from 'react';

export default class Home extends Component {
  componentWillUnmount() {
    console.log('Unmounted');
  }

  // goto =()=>{
  //         this.props.history.push("/createaccount")
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome to Employee Managament System</h1>
        {/* <button  onClick={this.goto}  >Go to Home Page</button> */}
      </div>
    );
  }
}
