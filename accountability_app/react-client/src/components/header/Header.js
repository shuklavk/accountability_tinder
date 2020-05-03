import React from 'react';
import 'antd/dist/antd.css';
import './../../css/App.css';
import { PageHeader } from 'antd';

const routes = [
    {
        path: 'index',
        breadcrumbName: 'Home',
    },
    {
        path: 'first',
        breadcrumbName: 'Profile',
    },
    {
        path: 'second',
        breadcrumbName: 'Goals',
    },
];

const Header = () => {
    return(
        <PageHeader
            className="site-page-header"
            title="AccounTwin"
            breadcrumb={{ routes }}
            subTitle="Accomplish your goals today!"
        />
    );
};

export default Header;