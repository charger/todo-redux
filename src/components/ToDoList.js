import React from 'react';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class ToDoList extends React.Component {
  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      fillWidth: {
        width: '100%'
      }
    };

    return (
      <div style={styles.root}>
        <AppBar
          title="To-do list"
          showMenuIconButton={false}
          iconElementRight={
            <IconMenu
              iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Delete all" />
            </IconMenu>
          }
        />

        <List style={styles.fillWidth}>
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Item #1"
            rightIconButton={<RaisedButton label="Delete" />}
          />
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Item #2"
            rightIconButton={<RaisedButton label="Delete" />}
          />

        <ListItem>
          <TextField
            style={styles.fillWidth}
            hintText="Hint Text"
          />
        </ListItem>
        </List>
      </div>
    );
  }
}

ToDoList.propTypes = {
};

export default ToDoList;
