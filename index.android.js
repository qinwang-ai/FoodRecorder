/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Alert,
  FlatList,
  Text,
  View
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Hehe');
}

export default class FoodRecorder extends Component {
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          renderIcon={() => 
              <Icon name={'md-create'} />
          }
          title="食记"
        >
        </TabNavigator.Item>

        <TabNavigator.Item
          renderIcon={() => 
              <Icon name={'md-analytics'} />
          }
          title="分析"
        >
        </TabNavigator.Item>

        <TabNavigator.Item
          renderIcon={() => 
              <Icon name={'md-cube'} />
          }
          title="食库"
        >
        </TabNavigator.Item>

        <TabNavigator.Item
          renderIcon={() => 
              <Icon name={'md-person'} />
          }
          title="我的"
        >
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FoodRecorder', () => FoodRecorder);
