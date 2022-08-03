import React, { Component } from 'react';
import Main from '../template/Main';
import axios from 'axios';

const headerProps = {
  icon: 'users',
  title: 'Users',
  subtitle: 'User signup: Create, Read, Update and Delete'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
  user: { name: '', email: '' },
  list: []
}

export default class UserCrud extends Component {
  // using a class component to be able to have state and 'cycle of life'
  
  state = { ...initialState }

  clear() {
    this.setState({ user: initialState.user })
  }

  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post' // se tiver um id, atualizará o usuario, se não criará um usuário
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios({method: method, url: url, data: user})
      .then(resp => {
        const list = this.getUpdatedList(resp.data)
        this.setState({ user: initialState.user, list })
      });
  }

  getUpdatedList(user) {
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user)
    return list
  }

  updateField(event) {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value 
    this.setState({ user })
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-md-12 col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input type="text" 
                     className='form-control'
                     name='name' 
                     value={this.state.user.name} 
                     onChange={e => this.updateField(e)} 
                     placeholder="Type name..." />
            </div>
          </div>

          <div className="col-md-12 col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input type="text" 
                      className='form-control'
                      name="email"
                      value={this.state.user.email}
                      onChange={e => this.updateField(e)}
                      placeholder="Type email..." />
            </div>
          </div>

          <hr />
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={e => this.save(e)}>
                Save
              </button>
              <button className="btn btn-secondary mx-2" onClick={e => this.clear(e)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
      </Main>
    )
  }
}