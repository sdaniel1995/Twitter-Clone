import React from 'react'
import '../../css/SidebarOption.css'

const SidebarOption = ({ active, text, Icon }: any) => {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2> 
        </div>
    )
}

export default SidebarOption
