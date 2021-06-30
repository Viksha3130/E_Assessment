import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';


const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 18%;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 6.0em;      /* Stay at the top */
  background-color: #1d1d1d; 
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 40px;



`;


class Slidebar extends Component {
    render() {
        return (
            <div>
                <StyledSideNav>

                <ProSidebar>
  <Menu iconShape="square">
    <MenuItem icon={<FontAwesomeIcon icon="tachometer-alt"  size="2x" color="white" />}><Link to ='/Admin-dashboard'>Dashboard</Link></MenuItem>
    <SubMenu  title="Test Operations" icon={<FontAwesomeIcon icon="file"  size="2x" color="white" />}>
       
      <MenuItem ><Link to ='/Create-test'>Create Test</Link></MenuItem>
      <MenuItem ><Link to ='/View-test'>View Test</Link></MenuItem>
    
    </SubMenu>
    <MenuItem icon={ <FontAwesomeIcon icon="question"  size="2x" color="white" />}><Link to ='/Question'>Question Operations</Link></MenuItem>
  </Menu>
</ProSidebar>;
                </StyledSideNav>

            </div>
        )
    }
}

export default Slidebar
