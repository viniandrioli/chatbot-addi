import React, { useState } from 'react';
import { getMessage } from '../../adapters/messages';
// it's possible to modify the questions here
const firstMessages = ["What's your gender?", "What's your location?"];

//@ts-ignore
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [index, setIndex] = useState(0);
  const handleHello = () => {

    setIndex(index + 1);
    const botAnswer = index > 1 ? getMessage() : firstMessages[index];
    const botMessage = createChatBotMessage(botAnswer);
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
