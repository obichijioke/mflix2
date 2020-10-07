import React from 'react'
import { Menu } from 'antd';
import { HeartOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
//import 'antd/dist/antd.css';
//import '../../../App.css';

const RightMenu = ({handleClick, current}) => {
    

    const menuItemStyle = {marginLeft:'0rem'}
    return (
        <div>
            <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
                style={{background:'#13172200', color:'white', borderBottom:'0px'}}
            >
                <Menu.Item key="watchlist" style={menuItemStyle}>
                <HeartOutlined/>WatchList
                </Menu.Item>
                <Menu.Item key="user" style={menuItemStyle}>
                <UserOutlined/>
                </Menu.Item>

      </Menu>
        </div>
    )
}


export default RightMenu;
