import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class ToDoCounter extends React.Component {
  render() {
    return (
      <Badge
        badgeContent={this.props.count}
        secondary={true}
        badgeStyle={{top: 12, right: 12}}
      >
        <IconButton tooltip="Items needs to be done">
          <NotificationsIcon />
        </IconButton>
      </Badge>
    );
  }
}

ToDoCounter.propTypes = {
  count: React.PropTypes.number.isRequired
};

export default ToDoCounter;
