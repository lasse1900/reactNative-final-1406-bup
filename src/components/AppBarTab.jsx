
import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    color: theme.colors.appBarText,
    fontSize: 24,
    padding: 10
  },
});

const AppBarTab = ({ text }) => (
  <TouchableWithoutFeedback style={styles.container}
    onPress={() => {
      console.log('tab pressed');
    }}
  >
    <Text style={styles.tab}>
      {text}
    </Text>
  </TouchableWithoutFeedback>
);

export default AppBarTab;