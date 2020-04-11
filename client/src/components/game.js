import React, { Component } from 'react'
import space from './assets/img/ISS.jpg'
import video from './assets/img/SOS_ISS.mp4'
import {Container} from './grid'

class Game extends Component {
    constructor() {
        super()
    }


    render() {
        
        return (
            <Container>
            <div>
                <h1>Intro Video</h1>
                <video controls src={video} alt="video" width="400px" height="400px" type="video/mp4"></video>
                <h1>Welcome to the Space Station</h1>
                <a href="#"><img src={space} alt="space" width="400px" height="400px"/>
                </a>
            </div>
            </Container>
        )

    }
}

export default Game
