import React, { Component } from "react";
import 'antd/dist/antd.css';
//import assets
import LoginImg from '../../../dist/assests/login.png';
import LogoImg from '../../../dist/assests/logo.png'


//import UI components
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{ width: "35%" }} ><div>
                    <Link to="/">
                        <div style={{ margin: "7%" }}><img src={LogoImg} alt="logo" width="75%" /></div>
                    </Link>
                </div>
                    <div style={{ float: "left", marginTop: "10%" }}>
                        <div style={{ margin: "15vh 7%", fontFamily: "Raleway", fontSize: "5vh", lineHeight: "100%", color: "#0e9e9b", float: "left" }}>
                            Login
                <div style={{ fontFamily: "Lato", lineHeight: "100%", fontSize: "3vh", margin: "2% 0 3% 0" }}>
                                Welcome back! Please enter your username and password.
                </div>

                            <div>
                                <Form
                                    name="basic"
                                    initialValues={{
                                        remember: true,
                                    }}
                                //   onFinish={onFinish}
                                //   onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your username!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item name="remember" valuePropName="checked">
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <Form.Item>
                                        <div style={{ marginRight: "5%" }}>
                                            <Button type="primary" shape="round" size="large" style={{ backgroundColor: "#0e9e9b", height: "7.5vh", width: "25vh", marginLeft: "2%" }}> Login </Button>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>


                        </div>
                    </div>
                </div>
                <div style={{ float: "right" }}><img src={LoginImg} style={{ margin: "50px" }} alt="home" height="400vh"></img></div>
            </div>
        );
    }
}

export default Login;