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

    const items = this.props.items.map(i => {
      return <ListItem
        key={i.id}
        leftCheckbox={<Checkbox defaultChecked={i.isDone} />}
        primaryText={i.title}
        rightIconButton={<RaisedButton label="Delete" style={styles.button} />}
      />
    });

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
          {items}

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
  items: React.PropTypes.array.isRequired
};

export default ToDoList;
