import React, { Component } from 'react'
import axios from 'axios'
import './assets/css/style.css'
import logo from './assets/img/ISS_Insignia.png'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div className="jumbotron col-4">
      <h1 className="display-4">Welcome to Space Orbital Station!</h1>
      <p className="lead"></p>
      <hr className="my-4"/> 
      <div className="signIn container col-12">
        <form className="form-signin">
          <img id="patch" class="patch" img src={logo}/>
          <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
          <label className="form-label" htmlFor="username">Username</label>
          <input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
							/>

          <label className="form-label" htmlFor="password">Password</label>
          <input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
              
          <div className="checkbox mb-3">         
          <p className="signInLink">Already have a login? Click <a href="./SignIn.html" class="link"/> Here.</p>       
          </div>
          <button
						className="btn btn-lg btn-block"
						onClick={this.handleSubmit}
						type="submit">Sign up</button>
          <p className="mt-5 mb-3 text-muted">Copyright &copy; 2020 Team Matrix. All Rights Reserved. </p>
        </form>
      </div>
    </div>

	)
}
}

export default Signup
