import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import 'antd/dist/antd.css';
import './../../css/App.css';
import Logo from '../../../dist/assets/logo.png';

const validateMessages = {
    required: `{label} is required!`,
    types: { email: `{input} is not a valid email!`}
};

class Registration extends Component {
    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind();
    }
    onFinish(values) {
        console.log("Success: ", values)
    }
        render() {
            return (
                <div>
                    <div><img src={Logo} alt="logo" width="25%"/></div>
                    <Form name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                        <Form.Item
                            name={['user', 'name']}
                            label="Name"
                            rules={[{required: true}]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Email"
                            rules={[{required: true, type: 'email'}]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'username']}
                            label="Username"
                            rules={[{required: true}]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'password']}
                            label="Password"
                            rules={[{required: true}]}
                            >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'goal']}
                            label="Goal Category"
                            rules={[{required: true}]}
                            >
                            <Select placeholder="Select category">
                                <Option value="Fitness">Fitness</Option>
                                <Option value="Wellness">Wellness</Option>
                                <Option value="Academic">Academic</Option>
                                <Option value="Professional">Professional</Option>
                                <Option value="Personal">Personal</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name={['user', 'timezone']}
                            label="Timezone"
                            rules={[{required: true}]}
                            >
                            <Select placeholder="Select timezone">
                                <Option value="EST">EST</Option>
                                <Option value="CST">CST</Option>
                                <Option value="PST">PST</Option>
                                <Option value="IST">IST</Option>
                            </Select>
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button type="primary" htmlType="reset">
                            Cancel
                        </Button>
                    </Form>
                </div>
            );

        }
}

export default Registration;