import React from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
const styles = theme => ({
  list: {
    width: 400
  },
  fullList: {
    width: "auto"
  }
});

class DrawerComponent extends React.Component {
  state = {
    left: false
  };

  render() {
    const { classes } = this.props;

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.props.toggleDrawerHandler}
        onKeyDown={this.props.toggleDrawerHandler}
      >
        <List>
          {["My Day"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                 <WbSunnyOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
        <List>
          {["Important"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                 <StarBorderOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
        <List>
          {["Planned"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                 <DateRangeOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
        <List>
          {["Assigned to me"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                 <PersonOutlineOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
        <List>
          {["Flagged Email"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                 <FlagOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
        <List>
          {["Tasks"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                 <HomeOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
        <List>
          {["New list"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                 <AddOutlinedIcon/> 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <Drawer open={this.props.left} onClose={this.props.toggleDrawerHandler}>
        {sideList("left")}
      </Drawer>
    );
  }
}

export default withStyles(styles)(DrawerComponent);