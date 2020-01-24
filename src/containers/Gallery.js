import React, {Component} from 'react';
import Filter from "../components/Filter"
import PictureList from "../containers/PictureList"
import api from '../services/Api'

class Gallery extends Component{
    constructor(props){
        super()
        this.state = {
            filter: '',
            allPictures: [],
            displayPictures: []
        }
    }

    componentDidMount(){
        api.pictures.getPictures().then( pictures => {
            this.setState({
                allPictures: pictures.data,
                displayPictures: pictures.data
            })
        })
    }

    handleChange = (value) => {
        this.setState({
            filter: value
        }, () => this.filterPictures(this.state.filter));
        // this.filterPictures(value)
    }

    filterPictures = (filter) => {
        let newPictures = []
        let pictures = this.state.allPictures
        if(filter === 'most_likes'){
            return newPictures = pictures.sort(function(a, b){return b.attributes.picture_likes.length - a.attributes.picture_likes.length})    
        } else if (filter === 'most_dislikes'){
            return newPictures = pictures.sort(function(a, b){return b.attributes.picture_dislikes.length - a.attributes.picture_dislikes.length})
        } else if(filter ==='least_likes'){
            return newPictures = pictures.sort(function(a, b){return a.attributes.created_at - b.attributes.created_at})
        } else if(filter === 'least_dislikes'){
            return newPictures = pictures.sort(function(a, b){return b.attributes.created_at - a.attributes.created_at})
        } else if(filter === 'default'){
            return pictures
        }
        return pictures
        // this.setState({
        //     displayPictures: newPictures
        // })
        // console.log(this.state.displayPictures)
    }
    

    render() {

    const pictures = this.filterPictures(this.state.filter);
        
    return (
        <div className="gallery">
            <Filter handleChange = {this.handleChange}/>
            <PictureList pictures = {pictures}/>
            <button onClick= {this.testFunction}>Test</button>
        </div>
    )
    }
}

export default Gallery