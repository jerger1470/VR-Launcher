import React, { Component } from 'react'
import space from './assets/img/ISS.jpg'
import {Container, Row, Col} from './grid'

class Game extends Component {
    constructor() {
        super()
    }


    render() {
        
        return (
            <Container>
            <div>
                <h1>Welcome to the Space Station</h1>
                <a href="#"><img src={space} alt="pwgen" width="400px" height="400px"/>
        </a>
            </div>
            </Container>
        )

    }
}

export default Game
