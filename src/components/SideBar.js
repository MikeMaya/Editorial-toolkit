import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import List, { ListItem } from 'material-ui/List';
import { startLogout } from '../actions/auth';


class SideBar extends React.Component {
  state = {
    clicked: false
  };

  toggle = () => {
    this.setState((prev) => ({clicked: !prev.clicked}));
  }
  render() {
    return (
      <div>
        <AppBar
            title="Editorial El Vortex"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={this.toggle}
        />
        <Drawer 
            docked={false}
            width={200}
            open={this.state.clicked}
            onRequestChange={(open) => this.setState({clicked: open})}
        >
            <List>
                <Link to="/columnists">
                    <ListItem 
                        primaryText="Columnistas" 
                        leftIcon={<FontIcon className="material-icons">account_circle</FontIcon>} />
                </Link>
                <Link to="/payments">
                    <ListItem 
                        primaryText="Pagos" 
                        leftIcon={<FontIcon className="material-icons">payment</FontIcon>} />
                </Link>
                <Link to="/calendar">
                    <ListItem 
                        primaryText="Calendario" 
                        leftIcon={<FontIcon className="material-icons">schedule</FontIcon>} />
                </Link>
                <ListItem 
                    primaryText="Salir" 
                    leftIcon={<FontIcon className="material-icons">power_settings_new</FontIcon>} 
                    onClick={this.props.startLogout}/>
            </List>
        </Drawer>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(SideBar);