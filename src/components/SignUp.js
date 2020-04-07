import React from 'react'
import '../assets/css/style.css'

export const SignUp = () => {
  return (
    <div className="jumbotron col-4">
      <h1 className="display-4">Welcome to Space Orbital Station!</h1>
      <p className="lead"></p>
      <hr className="my-4"/> 
      <div className="signIn container col-12">
        <form className="form-signin">
          <img id="patch" class="patch" src="./assets/img/ISS_Insignia.png" alt=""/>
          <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Enter email address" required autofocus/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Enter password" required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Re-enter password" required/>
          <div className="checkbox mb-3">         
              <p className="signInLink">Already have a login? Click <a href="./SignIn.html" class="link"/> Here.</p>       
          </div>
          <button className="btn btn-lg btn-block" type="submit">Sign Up</button>
          <p className="mt-5 mb-3 text-muted">Copyright &copy; 2020 Team Matrix. All Rights Reserved. </p>
        </form>
      </div>
    </div>
  )
}
