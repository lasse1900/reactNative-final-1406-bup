import React from 'react';

import Text from './Text';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';
import FormikTextInput from './TextInput';
import { Formik } from 'formik';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15
  },
  textInput: {
    borderColor: theme.appBar.backgroundColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
  },
  button: {
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 16,
    textAlign: 'center',
  }
});

const initialValues = {
  username: '',
  password: '',
};


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name='username'
        placeholder='Username'
        style={styles.textInput}
      />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry={true}
        style={styles.textInput}
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text
          fontSize='subHeading'
          fontWeight='bold'
          style={styles.button}
        > Sign in </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;