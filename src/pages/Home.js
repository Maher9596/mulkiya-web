import React from 'react';

const Home = () => {
    return (
        <div>
            <label for="capture">Take a picture</label>
            <input type="file" id="capture" accept="image/*" capture />
        </div>
    );
};

export default Home;