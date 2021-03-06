import React, {useState} from 'react';
import ConfirmDetails from '../components/ConfirmDetails'
import axios from 'axios'

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [isConfirm, setIsConfirm] = useState(false)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const selectedFileHandle = (e) => {
        setSelectedFile(e.target.files[0])
        console.log(selectedFile)
    }

    const uploadFileHandle = async () => {
        try {
            const fd = new FormData()
            fd.append('image', selectedFile, selectedFile.name)
            let res = await axios.post("http://34.83.109.164/api/v1/ocr/upload/", fd, {
            })
            setStartDate(res.data.dates.StartDate)
            setEndDate(res.data.dates.ExpiryDate)
            setIsConfirm(true)
        } catch (error) {
           console.log(error.message)
        }
    }

    if(isConfirm === true){
           return <ConfirmDetails start={startDate} end={endDate}/>                        
    }
        return (
            <div className="home">
                <div className="instructions">
                    <p id="title"><strong>INSTRUCTIONS :-</strong></p>
                    <ul>
                        <li>Take or upload a picture of your card</li>
                        <li>Submit your card</li>
                        <li>Confirm your card details</li>
                        <li>Receive a notification one week before renewal date</li>
                    </ul>
            </div>
                <label for="upload">Choose file <i class="fa fa-upload"></i></label>
                <input type="file" id="upload" onChange={selectedFileHandle} accept="image/*"/>
                <button className="submit" onClick={uploadFileHandle}>Submit</button>
                <div>
                </div>
            </div>
        ) 
};

export default Home;
