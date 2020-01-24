import React from 'react';


function Home(props) {

    return (
        <div className="home">
            <h1>Welcome to Roast & Toast</h1>
            {!props.currentUser.id? (
            <h3>pls sign up or login to start roasting (or toasting)</h3> ) : (
                <h3> This site is intended for you to get out all of your roasting and toasting needs.</h3>
            )}
        </div>
    )
}

export default Home