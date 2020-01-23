import React, {Component} from 'react';
import PictureCard from "../components/PictureCard"



class PictureList extends Component{

    render() {
    return (
        <div className="pictureList">
            {this.props.pictures.map(picture => <PictureCard key = {picture.id} id = {picture.id} attribute = {picture.attributes}/>)}
        </div>
    )
    }
}

export default PictureList