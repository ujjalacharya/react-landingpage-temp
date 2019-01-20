import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer';

class Header extends Component {
  state = {
    right: false,
    showHeader: false
  }

  componentDidMount(){
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 0){
        this.setState({showHeader: true})
      }else{
        this.setState({showHeader: false})
      }
    })
  }

  toggleClose = open => {
    this.setState({right: open})
  }

  render() {
    console.log(this.state)
    return (
      <AppBar position="fixed" 
      style={{
        backgroundColor: this.state.showHeader ? '#2f2f2f' : 'transparent',
        boxShadow: 'none',
        padding: '10px 0px'
      }}>
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">
              The Venue
            </div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton color="inherit" aria-label="Menu" onClick={
         () => this.toggleClose(true)
          }>
            <MenuIcon />
          </IconButton>
          <SideDrawer onClose={value =>this.toggleClose(value)} open={this.state.right}/>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
