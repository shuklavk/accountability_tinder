import React, {Component} from "react";
import 'antd/dist/antd.css';
//import assets
import LoginImg from '../../../dist/assets/home.png';
import LogoImg from '../../../dist/assets/logo.png'


//import UI components
import {Button} from 'antd';

class Home extends Component {
  constructor(props) {
    super(props);
  } 
    render() {
        return (
         <div style={{backgroundColor:"#fcf9ec"}}>
            <div>
              <div><img src={LogoImg} alt="logo" width="25%"/></div>
            </div>
            <div>
              <div style={{margin:"15vh 2.5%",fontFamily:"Raleway", fontSize:"10vh",lineHeight:"100%", color:"#0e9e9b", width:"41.7%", float: "left"}}>
                Accomplish your goals today!
                <div style={{fontFamily:"Lato", lineHeight:"100%", fontSize:"5vh", marginTop: "2%"}}>
                Sign up to find your accountability buddy. It only takes a few minutes!
                </div>
                <div style={{ marginRight:"5%"}}>
                <Button type="primary" shape="round" size="large" style={{backgroundColor:"#0d847e", height:"7.5vh", width: "15vh"}}> Sign Up </Button>
                <Button type="primary" shape="round" size="large" style={{backgroundColor:"#0e9e9b", height:"7.5vh", width: "15vh", marginLeft:"2%"}}> Login </Button>
                </div>
                </div>
              <div style={{float: "right"}}><img src={HomeImg} alt="home" height="600vh"></img></div>
            </div>
         </div>   
        );
    }
}

export default Home;