import React, {Component} from 'react';
import Filter from "../components/Filter"
import PictureList from "../containers/PictureList"



class Gallery extends Component{
    constructor() {
        super()
        this.state = {
            filter: "",
            displayedPictures: {}
        }
    }
    

    render() {
    return (
        <div className="gallery">
            <Filter/>
            <PictureList />
        </div>
    )
    }
}

export default Gallery