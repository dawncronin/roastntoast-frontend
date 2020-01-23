import React, {Component} from 'react';


function Filter(props) {
    let handleChange = (event) => {
        let value = event.target.value
        props.handleChange(value)
    }

    return (
        <div>
        <label for="filter-select">Filter:</label>

        <select onChange = {handleChange} id="filter-select">
            <option value="default">--Please choose an option--</option>
            <option value="most_likes">Most Likes</option>
            <option value="most_dislikes">Most Dislikes</option>
            <option value="least_likes">Newest</option>
            <option value="least_dislikes">Oldest</option>
         
        </select>
    </div>
    )
}

export default Filter