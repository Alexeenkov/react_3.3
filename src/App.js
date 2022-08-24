import './App.css';
import React from 'react';
import messages from './data/data';
import MessageHistory from './components/MessageHistory/MessageHistory';

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
