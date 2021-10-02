import React from 'react';

const ConfirmDetails = (props) => {
    return (
        <div className="confirmContainer">
            <p id="title"><strong>Confirm your details :-</strong></p>
            <p className="car"><strong>Car name</strong>: Nissan/Tiida</p>
            <p className="date"><strong>Renewal date</strong>: {props.start}</p>
            <p className="date"><strong>Expiry date</strong>: {props.end}</p>
            <button className="btn-confirm">Confirm</button>
        </div>
    );
};

export default ConfirmDetails;