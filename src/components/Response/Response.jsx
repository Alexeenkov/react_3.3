import React from 'react';
import propTypes from "prop-types";

const Response = ({ from, message, time }) => {
    return (
        <>
            <div className="message-data align-right">
                <span className="message-data-time">{time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {message}
            </div>
        </>
    );
}

Response.propTypes = {
    from: propTypes.shape({
        name: propTypes.string,
    }),
    message: propTypes.string,
    time: propTypes.string,
};

export default Response;