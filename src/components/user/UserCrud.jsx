import React, { Component } from 'react';
import Main from '../template/Main';

const headerProps = {
  icon: 'users',
  title: 'Users',
  subtitle: 'User signup: Create, Read, Update and Delete'
}

export default class UserCrud extends Component {
  // using a class component to be able to have state and 'cycle of life'
  render() {
    return (
      <Main {...headerProps}>
        User signup
      </Main>
    )
  }
}