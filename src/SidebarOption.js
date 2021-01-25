import React from 'react'
import './SidebarOption.css'

export const SidebarOption = ({title,Icon}) => {
    return (
        <div className='sidebarOption'>
             { Icon && <Icon />}
            <h3>{title}</h3>
        </div>
    )
}
