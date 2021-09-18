import React, {useState} from 'react';
// import axios from 'axios'

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null)

    const selectedFileHandle = (e) => {
        setSelectedFile(e.target.files[0])
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
        <div>
            <label>Take  picture</label>
            <input type="file" id="capture" onChange={selectedFileHandle} accept="image/*" capture />
            <hr/>
            <label>Upload picture</label>
            <input type="file" id="upload" onChange={selectedFileHandle} accept="image/*"/>
            <hr />
            <button disabled>Submit</button> 
        </div>
    );
};

export default Home;