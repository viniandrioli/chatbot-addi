import React, { useState } from 'react';
import { sendMessage } from '../../adapters/messages';
//@ts-ignore
const MessageParser = ({ children, actions }) => {
  const [answers, setAnswer] = useState([]);
  const parse = (message: string) => {
    //@ts-ignore
    setAnswer([message, ...answers]);
     // if answer > 2 -> sendMessage(message);
     // send the answers somewhere   
    console.log(answers);
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
