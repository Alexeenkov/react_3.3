import React from 'react';
import propTypes from "prop-types";

const Typing = ({ from, time }) => {
    return (
        <>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
                <span className="message-data-time">{time}</span>
            </div>
            <div className="typing">
                <span>
                    <i className="fa fa-circle online" />
                </span>
                <span>
                    <i className="fa fa-circle online" />
                </span>
                <span>
                    <i className="fa fa-circle online" />
                </span>
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

export default Typing;