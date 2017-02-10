import React from 'react';
import {Text} from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export.modules = ListItem;
