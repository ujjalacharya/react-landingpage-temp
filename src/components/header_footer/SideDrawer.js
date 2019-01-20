import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function SideDrawer(props) {
  console.log(props.open)
  return (
    <Drawer anchor="right" open={props.open} onClose={()=>props.onClose(false)}>
    <List>
      <ListItem button>
        Event Starts In
      </ListItem>
      <ListItem button>
        Venue NFO
      </ListItem>
      <ListItem button>
        Highlights
      </ListItem>
      <ListItem button>
        Pricing
      </ListItem>
      <ListItem button>
        Location
      </ListItem>
    </List>
    </Drawer>
  )
}

export default SideDrawer
