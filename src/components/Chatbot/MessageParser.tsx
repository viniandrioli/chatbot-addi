import React, { useState } from 'react';
import { sendMessage } from '../../adapters/messages';
//@ts-ignore
const MessageParser = ({ children, actions }) => {
  const [answers, setAnswer] = useState([]);
  const parse = (message: string) => {
    //@ts-ignore
    setAnswer([message, ...answers]);
    const messageString = `I looking for ${answers[1]}, in the region of ${answers[0]}, for the occasion of ${message}`

    if (answers.length === 2) {
      sendMessage(messageString);
    }

     // if answer > 2 -> sendMessage(message);
     // send the answers somewhere   
    actions.handleHello();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
