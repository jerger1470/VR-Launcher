import React, { Component } from 'react'
import {Container, Row, Col} from './grid'
import logo from './assets/img/ISS_Insignia.png'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        
        return (
            <Container>
                <Row>
                <Col size="md-6">

            <img src={logo} alt="logo" width="500px" height="500px"/>
                </Col>            
                <Col size="md-6">
            <div className="card" style={{"width": "400px"}}>
                    <div className="card-body">
                      <h1 className="card-title" style= {{"text-align": "center"}}>VR Escape Room Games</h1>
                      
                      <p className="card-text">
                        Welcome to our VR Escape Room Game series. We are a group of web developers that want to create
                        an escape room application for people to play using React VR and soon React 360. In this crazy time
                        of social distancing, we want to give people a mind bending experience that anyone can play from the 
                        safety of their home.  
                     
                      </p>
                      <p className="card-text">
                        This project involves using Full Stack MERN as well as the React VR library. It was developed with the help
                        of several people in the Northwestern Full Stack Web Development Bootcamp.
                      </p>

                        <ul className="list-group list-group-flush">
                    <li className="list-group-item">Andre Barreto - Project Manager/React VR Developer</li>
                    <li className="list-group-item"> Bryan Jerger - Backend Developer/MERN VR Launcher application</li>
                    <li className="list-group-item">Shannon Ervin - Backend Developer/Assistant VR Developer</li>
                    <li className="list-group-item"> Nate Huber - Assistant VR Developer/CSS</li>
                    <li className="list-group-item">Jacob Rosenberg - Assistant VR Developer/CSS</li>
                    
                        </ul>

                        
                      
                     </div>
                     </div> 
                     </Col>
                     </Row>
                     </Container>
        )

    }
}

export default Home
