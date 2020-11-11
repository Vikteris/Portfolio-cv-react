import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu

} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>  
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About me</SidebarLink>
                    <SidebarLink to='skills' onClick={toggle}>Skills</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to='contacts' onClick={toggle}>Contacts</SidebarLink>
                </SidebarMenu>     
            </SidebarWrapper>          
        </SidebarContainer>
    )
}

export default Sidebar
