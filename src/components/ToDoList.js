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
  _handleAddNewItem(e) {
    if (e.nativeEvent.key == "Enter" && this.refs.textField.input.value !== '') {
      this.props.addItems(this.refs.textField.input.value, false);
      this.refs.textField.input.value = ''
    }
  }

  componentDidMount(){
    this.props.getItems()
  }

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

    const items = this.props.data.items.map(i => {
      return <ListItem
        key={i.id}
        primaryText={i.title}
        onTouchTap={this.props.toggleItem.bind(this, i.id)}
        style={{textDecoration: (i.is_done ? 'line-through' : '') }}
        rightIconButton={<RaisedButton label="Delete" style={{margin: 5}} onClick={this.props.deleteItem.bind(this, i.id)} />}
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
              <MenuItem primaryText="Delete all" onClick={this.props.clearList}/>
            </IconMenu>
          }
        />

        <List style={styles.fillWidth}>
          {items}

          <ListItem>
            <TextField
              ref="textField"
              style={styles.fillWidth}
              hintText="Add item"
              onKeyDown={this._handleAddNewItem.bind(this)}
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

ToDoList.propTypes = {
  addItems: React.PropTypes.func.isRequired,
  deleteItem: React.PropTypes.func.isRequired,
  toggleItem: React.PropTypes.func.isRequired,
  getItems: React.PropTypes.func.isRequired,
  clearList: React.PropTypes.func.isRequired,
  data: React.PropTypes.shape({
    items: React.PropTypes.array.isRequired
  }).isRequired
};

export default ToDoList;
