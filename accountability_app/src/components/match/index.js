import React, {Component} from "react";
import 'antd/dist/antd.css';

//import assets
import MatchImg from '../../../dist/assests/match.png';
import LogoImg from '../../../dist/assests/logo.png';
import CodeImage from '../../../dist/assests/coding.png';
import YesIcon from "../../../dist/assests/tick.png";



//import UI components
import {Card, Avatar, Button} from 'antd';
const { Meta } = Card;
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

class Match extends Component {
  constructor(props) {
    super(props);
  } 
    render() {
        return (
         <div>
            <div>
              <div style={{margin: "2% 0 0 2%"}}><img src={LogoImg} alt="logo" width="25%"/></div>
            </div>
            <div>
              <div style={{margin:"15vh 2.5%",fontFamily:"Raleway", fontSize:"4vh",lineHeight:"100%", color:"#0e9e9b", width:"41.7%", float: "left"}}>
                Find your accountability buddy!
                <div style={{fontFamily:"Lato", lineHeight:"100%", fontSize:"3vh", marginTop: "5%"}}>
                
                </div>
                <div style={{ marginRight:"5%"}}>
                     <Card
                        headStyle={{fontSize:"3vh"}}
                        bodyStyle={{fontSize:"1.5vh"}}
                        bordered="true"
                        style={{ width: "300px", height: "400px" , backgroundColor:"#a0edec", fontFamily:"Lato", fontSize:"3vh",listStyleType:"none"}}
                        cover={
                        <img
                            alt="example"
                            src={CodeImage}
                            style={{width:"70%", margin:"2%"}}
                        />
                        }
                        actions={[
                            <Button type="primary" shape="circle"  size="small" style={{background:"none", border:"none"}} ><img src={YesIcon}/></Button>,
                            <Button type="primary" shape="circle"  size="small" style={{background:"none", border:"none"}} ><img src={YesIcon}/></Button>
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://img.icons8.com/bubbles/50/000000/user.png"/>}
                        title="Hackathon Goal"
                        description="I just want everything to work"
                        />
                    </Card>
                </div>
                </div>
              <div style={{float: "right", margin:"0 4% 0 0"}}><img src={MatchImg} alt="home" height="600vh"></img></div>
            </div>
         </div>   
        );
    }
}

export default Match;