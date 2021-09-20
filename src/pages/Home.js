import React, {useState} from 'react';
// import axios from 'axios'

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null)

    const selectedFileHandle = (e) => {
        setSelectedFile(e.target.files[0])
        console.log(selectedFile)
    }

    // const uploadFileHandle = () => {
    //     const fd = new FormData()
    //     fd.append('image', selectedFile, selectedFile.name)
    //     axios.post("ma7eer url", fd, {
    //         // I WILL USE THIS TO SHOW THE UPLOAD PROGRESS IN THE UI
    //         onUploadProgress: ProgressEvent => {
    //             console.log("upload progress " + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
    //         }
    //     })
    //     // TESTING
    //     .then(res => {
    //         console.log(res)
    //     })
    // }

    return (
        <div className="home">
            <div className="instructions">
                <p id="title"><strong>INSTRUCTIONS</strong></p>
                <ul>
                    <li>Take or upload a picture of your card</li>
                    <li>Submit your card</li>
                    <li>Confirm your card details</li>
                    <li>Receive a notification one week before renewal date</li>
                </ul>
            </div>
            <label for="upload">Choose file</label>
            <input type="file" id="upload" onChange={selectedFileHandle} accept="image/*"/>
            <button className="submit">Submit</button>
        </div>
    )
};

export default Home;
