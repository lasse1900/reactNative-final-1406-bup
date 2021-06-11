import React from "react";
import { View, StyleSheet } from "react-native";
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  reviewRating: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold'
  },
  rating: {
    color: '#0366d6',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 15,
    color: 'gray'
  },
  text: {
    fontSize: 15,
    paddingRight: 55,
    textAlign: 'left',
  }
});

const ReviewItem = ({ review }) => {
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const d = formattedDate.getDate();
    const m = formattedDate.getMonth() + 1;
    const y = formattedDate.getFullYear();
    const day = d <= 9 ? '0' + d : d;
    const month = m <= 9 ? '0' + m : m;
    var dateToString = day + '.' + month + '.' + y;
    return dateToString;
  };

  return (
    <View style={styles.flexContainer}>
      <view>
        <Text style={styles.reviewRating} >{review.node.rating}</Text>
      </view>
      <View style={styles.flexContainer}>
        <Text style={styles.name} >{review.node.user.username}</Text>
        <Text style={styles.date} >{formatDate(review.node.createdAt)}</Text>
        <Text style={styles.text} >{review.node.text}</Text>
      </View>

    </View>
  );
};

export default ReviewItem;