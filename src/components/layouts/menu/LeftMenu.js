import React, {useState} from 'react';
import { Menu } from 'antd';
import logo from '../../../images/logo.png'
import { MailOutlined } from '@ant-design/icons';
import '../../../App.css';



const LeftMenu = ({handleClick, current}) => {
    

    const menuItemStyle = {marginLeft:'0rem'}
    return (
        <div style={{display:'flex'}}>
            
            <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
                style={{background:'#13172200', color:'white', borderBottom:'0px'}}
                
            >
                <Menu.Item key="home" style={menuItemStyle}>
                   <a style={{color: 'white'}}  href="/">Home</a> 
                </Menu.Item>
                <Menu.Item key="movies" style={menuItemStyle} >
                <a style={{color: 'white'}}  href="/movies">Movies</a> 
                </Menu.Item>
                <Menu.Item key="tvseries" style={menuItemStyle}>
                <a style={{color: 'white'}} href="/tvs">Tv</a> 
                </Menu.Item>

      </Menu>
        </div>
    )
}


export default LeftMenu
