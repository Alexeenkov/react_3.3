import React from 'react';
import Message from '../Message/Message';
import Response from '../Response/Response';
import Typing from '../Typing/Typing';
import propTypes from "prop-types";

const MessageHistory = ({ list }) => {
    if (list === []) return null;

    return (
        <ul>
            {list.map((element) => {
                const {type, from, text, id, time} = element;
                switch(type) {
                    case 'message':
                        return (
                            <li key={id}> <Message from={from} message={text} time={time} /> </li>
                        )
                    case 'response':
                        return (
                            <li key={id}> <Response from={from} message={text} time={time} /> </li>
                        )
                    case 'typing':
                        return (
                            <li key={id}> <Typing from={from} time={time} /> </li>
                        )
                    default:
                        return null;
                }
            })}
        </ul>
    );
}

MessageHistory.defaultProps = {
    list: [],
};

MessageHistory.propTypes = {
    list: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        from: propTypes.shape({
            name: propTypes.string,
        }),
        type: propTypes.string,
        time: propTypes.string,
        text: propTypes.string,
    })),
};

export default MessageHistory;