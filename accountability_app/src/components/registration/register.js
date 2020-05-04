import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'antd';
import 'antd/dist/antd.css';
// import '../../css/App.css';
import '../../css/Register.css'
import Logo from '../../../dist/assests/logo.png';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import addUserQuery from '../../../graphQL_Queries/addUser';
import { withRouter } from 'react-router-dom';

const validateMessages = {
    required: `This input is required!`,
    types: { email: `This is not a valid email!` }
};

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            description: '',
            time_zone: '',
            email: '',
            goal: '',
            name: ''
        }
        this.onFinish = this.onFinish.bind(this);
    }
    onFinish(values) {
        console.log("Success: ", values);
        const { name, email, username, description, password, time_zone, goal } = this.state;
        this.props.mutate({
            variables: {
                username: username,
                password: password,
                description: description,
                time_zone: time_zone,
                email: email,
                goal: goal,
                name: name
            }
        })
        this.props.history.push('/login');
    }
    render() {
        return (
            <div className="container">
                <div>
                    <Link to="/">

                        <img src={Logo} alt="logo" width="35%" />
                    </Link>
                </div>
                <Form name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <Input onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[{ required: true, type: 'email' }]}
                    >
                        <Input onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'username']}
                        label="Username"
                        rules={[{ required: true }]}
                    >
                        <Input onChange={(e) => { this.setState({ username: e.target.value }) }} />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'password']}
                        label="Password"
                        rules={[{ required: true }]}
                    >
                        <Input.Password onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'goal']}
                        label="Goal Category"
                        rules={[{ required: true }]}
                    >
                        <Select placeholder="Select category" onChange={(value) => { this.setState({ goal: value }) }}>
                            <Option value="Fitness">Fitness</Option>
                            <Option value="Wellness">Wellness</Option>
                            <Option value="Academic">Academic</Option>
                            <Option value="Professional">Professional</Option>
                            <Option value="Personal">Personal</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['user', 'description']}
                        label="Description"
                        rules={[{ required: true }]}
                    >
                        <Input onChange={(e) => { this.setState({ description: e.target.value }) }} />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'timezone']}
                        label="Timezone"
                        rules={[{ required: true }]}
                    >
                        <Select placeholder="Select timezone" onChange={(value) => { this.setState({ time_zone: value }) }}>
                            <Option value="EST">EST</Option>
                            <Option value="CST">CST</Option>
                            <Option value="PST">PST</Option>
                            <Option value="IST">IST</Option>
                        </Select>
                    </Form.Item>
                    {/* <Button type="primary" htmlType="reset">
                        Cancel
                        </Button> */}
                    <Button type="primary" htmlType="submit" style={{ float: "right" }}>
                        Submit
                    </Button>
                </Form>
            </div>
        );

    }
}

const mutation = addUserQuery;

export default withRouter(graphql(mutation)(Registration));