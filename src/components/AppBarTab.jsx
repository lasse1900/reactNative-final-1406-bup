import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  tab: {
    color: theme.colors.contrastTextColor,
    fontSize: 24,
    padding: 15
  },
});

const AppBarTab = ({ link, label, onPress }) => {
  return (
    <Link to={link} component={TouchableWithoutFeedback} style={styles.container} onPress={onPress} >
      <Text style={styles.tab}>{label}</Text>
    </Link>
  );
};

export default AppBarTab;