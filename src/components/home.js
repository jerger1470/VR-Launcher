import React, { Component } from 'react'
import space from '../../src/components/assets/img/ISS.jpg'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <h1>Welcome to the Space Station</h1>
                <img src = {space} />
            </div>
        )

    }
}

export default Home
