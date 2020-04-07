import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './assets/css/style.css'
import logo from '../../src/components/assets/img/ISS_Insignia.png'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="jumbotron col-4">
      <h1 className="display-4">Welcome to Space Orbital Station!</h1>
      <p className="lead"></p>
      <hr className="my-4"/> 
      <div className="signIn container col-12">
        <form className="form-signin">
          <img id="patch" class="patch" img src={logo}/>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">Username</label>
          <input type="text"
           id="username"
           class="form-control"
           placeholder="Username"
           value={this.state.username}
           onChange={this.handleChange}
           />
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password"
           id="inputPassword" 
           class="form-control" 
           placeholder="Password" 
           value={this.state.password}
           onChange={this.handleChange}
           />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
              <p className="create">Don't have a sign in? Create one <a href="./SignUp.html" class="link">Here</a></p>
            </label>
          </div>
          <button
              className="btn btn-lg btn-block"
                           
              onClick={this.handleSubmit}
              type="submit">Login</button>
          <p className="mt-5 mb-3 text-muted">Copyright &copy; 2020 Team Matrix. All Rights Reserved. </p>
        </form> 
      </div>
    </div>
            )
        }
    }
}

export default LoginForm
