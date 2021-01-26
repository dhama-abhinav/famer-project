import React,{useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

export const Header = () => {
    const [openSidebar , setOpenSidebar] = useState(false)
    const toggleSidebar = ()=>{
        setOpenSidebar(!openSidebar)
    }
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton onClick={toggleSidebar}>
                    <MenuIcon className='header__leftIcon'/>
                </IconButton>
            </div>
            <div className="header__right">
                <p>Details</p>
            </div>
        </div>
    )
}
