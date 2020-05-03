import React, { Component } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './../../css/App.css';
import Logo from '../../../dist/assets/logo.png';

const { TabPane } = Tabs;

class Profile extends React.Component {
    render() {
        return (
            <div>
                <div><img src={Logo} alt="logo" width="25%"/></div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Profile" key="1">
                        <h2>Name</h2>
                        <h2>Username</h2>
                        <p>Lorem ipsum dolor sit amet, an alia ipsum partiendo pro. Est tibique invenire ad. Vim wisi inermis voluptua ne, ex alii prompta platonem vel. Latine apeirian complectitur ex mea, at cum solet commune signiferumque. Nam libris facete mandamus ei, minim semper nonumes ius ea. Tantas temporibus voluptatibus qui ex, expetenda accusamus sadipscing no vim.</p>
                    </TabPane>
                    <TabPane tab="Goals" key="2">
                        <h2>Goal Category</h2>
                        <h2>Description</h2>
                        <p>Nam propriae percipitur in. Te pri albucius inimicus instructior, eos ei utinam partiendo scribentur. Sed et nobis salutatus quaerendum. Atqui eligendi ea duo, eu sed purto mediocrem deterruisset, oratio constituam cu vel. Ullum accusam sapientem usu ei.</p>
                    </TabPane>
                    <TabPane tab="Points" key="3">
                        <h2>Points</h2>
                        <h2>Tasks</h2>
                        <p>Id senserit sapientem cum, his modus patrioque ea, ad aperiri saperet laoreet vel. His minim convenire an, ea movet vidisse oblique pro. Mei eu nominavi deterruisset. Id congue sadipscing his.</p>
                    </TabPane>
                    <TabPane tab="Account Info" key="4">
                        <h2>Email</h2>
                        <h2>Change Password</h2>
                        <p>Cu sit assum option. Ei eam mucius verterem deserunt. An quo impedit deleniti. Usu et labore adolescens, est diam timeam mandamus ex, cu sed iriure diceret omittam. Usu ad ullum putent, quo eius quodsi aperiri ea, eu has mollis dissentiunt.</p>
                    </TabPane>
                </Tabs>
            </div>
            
        );
    }
}

export default Profile;