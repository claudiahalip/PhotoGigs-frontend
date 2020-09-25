
import React, {Component} from 'react';
import Photographer from './Photographer';
import PhotographerProfile from './PhotographerProfile'

class Photographers extends Component {


    renderPhotographers=()=>{
      return this.props.photographers.map(photographer => {
        return <Photographer photographer={photographer} key= {photographer.id}/>
        })
    }

    render(){
      //debugger
      return (
        <div>
           {this.renderPhotographers()}
        </div>
      )
    }
}

export default Photographers;