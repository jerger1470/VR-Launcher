import React from 'react'
import '../assets/css/style.css'

export const TheEnd = () => {
  return (
    <div className="jumbotron col-4">
      <h1 className="display-4">Thank you for playing Space Orbital Station!</h1>
      <p className="lead"></p>
      <hr className="my-4"/> 
      <div className="signIn container col-12">
        <form className="form-signin">
          <img id="patch" class="patch" src="./assets/img/ISS_Insignia.png" alt=""/>
          <div>
            <p>Your score is =</p>
          </div>  
          <p id="hsDiv">High Scores</p>
          <div className="col-12 hiScores">



          </div>
          <br></br>
          <button className="btn btn-lg btn-block" type="submit">Play Again</button>
          <p className="mt-5 mb-3 text-muted">Copyright &copy; 2020 Team Matrix. All Rights Reserved. </p>
          </form> 
      </div>
    </div>


  )
}
