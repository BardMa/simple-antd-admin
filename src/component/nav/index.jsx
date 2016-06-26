import React, {PropTypes} from 'react';
import { Router, Route, Link, History } from 'react-router'
import { Menu, Icon, Breadcrumb } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <Menu mode="horizontal"
                      selectedKeys={[this.props.location && this.props.location.pathname]} style={{lineHeight: '64px'}}>
                    <Menu.Item key="/"><Link to="/">主页</Link></Menu.Item>
                    <Menu.Item key="/users"><Link to="/users">用户</Link></Menu.Item>
                    <Menu.Item key="/about"><Link to="/about">关于</Link></Menu.Item>
                </Menu>
            </div>
        )
    }

})

export default Nav;