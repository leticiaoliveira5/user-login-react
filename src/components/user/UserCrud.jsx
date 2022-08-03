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

  componentWillMount() {
    axios(baseUrl).then(resp => {
      this.setState({ list: resp.data })
    })
  }

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

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id)
    if(add) list.unshift(user)
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
  
  load(user) {
    this.setState({ user })
  }

  remove(user) {
    axios.delete( `${baseUrl}/${user.id}`).then(resp => {
      const list = this.getUpdatedList(user, false)
      this.setState({ list })
    })
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderRows() {
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning"
              onClick={() => this.load(user)}>
              <i className='fa fa-pencil'/>
            </button>
            <button className="btn btn-danger mx-2"
              onClick={() => this.remove(user)}>
              <i className='fa fa-trash'/>
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    )
  }
}