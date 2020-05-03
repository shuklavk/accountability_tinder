import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import 'antd/dist/antd.css';
import './../../css/App.css';
import Logo from '../../../dist/assets/logo.png';

const { TabPane } = Tabs;

class Profile extends React.Component {
    render() {
        return (
            <div>
                <div><img src={Logo} alt="logo" width="25%"/></div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Profile" key="1">
                        <h2>Name: </h2><p>Isabel Abonitalla</p>
                        <h2>Username: </h2><p>isabiiil</p>
                        <p>Lorem ipsum dolor sit amet, an alia ipsum partiendo pro. Est tibique invenire ad. Vim wisi inermis voluptua ne, ex alii prompta platonem vel. Latine apeirian complectitur ex mea, at cum solet commune signiferumque. Nam libris facete mandamus ei, minim semper nonumes ius ea. Tantas temporibus voluptatibus qui ex, expetenda accusamus sadipscing no vim.</p>
                    </TabPane>
                    <TabPane tab="Goals" key="2">
                        <h2>Goal Category: </h2><p>Fitness</p>
                        <h2>Description: </h2>
                        <p>I want to lose at least five pounds by the end of the month.</p>
                        <p>Lorem ipsum dolor sit amet, an alia ipsum partiendo pro. Est tibique invenire ad. Vim wisi inermis voluptua ne, ex alii prompta platonem vel. Latine apeirian complectitur ex mea, at cum solet commune signiferumque. Nam libris facete mandamus ei, minim semper nonumes ius ea. Tantas temporibus voluptatibus qui ex, expetenda accusamus sadipscing no vim.</p>
                    </TabPane>
                    <TabPane tab="Points" key="3">
                        <h2>Points</h2><p>24 stars</p>
                        <h2>Tasks</h2>
                        <ul>
                            <li>25 squats</li>
                            <li>no soda every day</li>
                            <li>5 laps around the block</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, an alia ipsum partiendo pro. Est tibique invenire ad. Vim wisi inermis voluptua ne, ex alii prompta platonem vel. Latine apeirian complectitur ex mea, at cum solet commune signiferumque. Nam libris facete mandamus ei, minim semper nonumes ius ea. Tantas temporibus voluptatibus qui ex, expetenda accusamus sadipscing no vim.</p>
                    </TabPane>
                    <TabPane tab="Account Info" key="4">
                        <h2>Email</h2><p>isabelabonitalla@gmail.com</p><br />
                        <Button type="primary">Change Password</Button>
                        <p>Lorem ipsum dolor sit amet, an alia ipsum partiendo pro. Est tibique invenire ad. Vim wisi inermis voluptua ne, ex alii prompta platonem vel. Latine apeirian complectitur ex mea, at cum solet commune signiferumque. Nam libris facete mandamus ei, minim semper nonumes ius ea. Tantas temporibus voluptatibus qui ex, expetenda accusamus sadipscing no vim.</p>
                    </TabPane>
                </Tabs>
            </div>
            
        );
    }
}

export default Profile;