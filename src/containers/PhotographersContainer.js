import React from 'react'
import { Component} from 'react'
import Photographers from '../components/Photographers'
import PhotographerForm from '../components/PhotographerForm'

class PhotographersContainer extends Component {
    render() {
        return (
            <div>
                <Photographers/>
                <PhotographerForm/>
            </div>
        )
    }
}

export default PhotographersContainer