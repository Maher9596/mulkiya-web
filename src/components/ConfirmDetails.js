import React from 'react';

const ConfirmDetails = (props) => {

    const handleFinalSubmit = () => {
        // POST request to backend so it saves to DB
    }

    return (
        <div className="confirmContainer">
            <p id="title"><strong>Confirm your details :-</strong></p>
            <p className="car"><strong>Car name</strong>: Nissan/Tiida</p>
            <p className="date"><strong>Renewal date</strong>: {props.start}</p>
            <p className="date"><strong>Expiry date</strong>: {props.end}</p>
            <button className="btn-confirm" onClick={handleFinalSubmit}>Confirm</button>
        </div>
    );
};

export default ConfirmDetails;