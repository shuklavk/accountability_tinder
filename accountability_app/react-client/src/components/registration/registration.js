import React from 'react';
import 'antd/dist/antd.css';
import './../../css/App.css';
import { Form, Input, Select, Button } from 'antd';

const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 100,
    },
};

const Registration = () => {
    const onFinish = values => {
        console.log('Success: ', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
                {
                required: true,
                message: 'Please input your name!'
                },
            ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
                {
                    required: true,
                    type: 'email',
                    message: 'Please input your email!'
                },
            ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
            name={['user', 'username']}
            label="Username"
            rules={[
                {
                required: true,
                message: 'Please input your username!'
                },
            ]}
        >
        <Input />
        </Form.Item>
        <Form.Item
            name={['user', 'password']}
            label="Password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!'
                },
            ]}
        >
        <Input.Password />
        </Form.Item>
        <Form.Item 
            name={['user', 'goal']} 
            label="Goal Category" 
            rules={[
                {
                    required: true,
                    message: 'Please input the category of your goal or habit!'
                }
            ]}
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
            rules={[
                {
                    required: true,
                    message: 'Please input your timezone!'
                }
            ]}
        >
        <Select placeholder="Select timezone">
            <Option value="EST">EST</Option>
            <Option value="CST">CST</Option>
            <Option value="PST">PST</Option>
            <Option value="IST">IST</Option>
        </Select>
        </Form.Item>
        <Form.Item name={['user', 'Description']} label="Description">
        <Input.TextArea />
        </Form.Item>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
    </Form>
  );
};

export default Registration;
