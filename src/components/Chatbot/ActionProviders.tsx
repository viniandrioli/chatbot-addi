import React, { useState } from 'react';
import { getMessage } from '../../adapters/messages';

const firstMessages = [
  '¿Dónde te encuentras?',
  '¿Esto es para alguna ocasión especial? (Cumpleaños, Aniversario, Navidad, Logro Importante)',
];

//@ts-ignore
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [index, setIndex] = useState(0);

  const getAnswers = async () => {
    const answers = await getMessage();
    const answersArr = answers.split('</br>');
    answersArr.map((item: any) => {
      const botMessage = createChatBotMessage(item);

      if (item) {
        setState((prev: any) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      }
    });
  };

  const handleHello = async () => {
    setIndex(index + 1);
    const botAnswer = index > 1 ? await getAnswers() : firstMessages[index];

    if (index < 2) {
      const botMessage = createChatBotMessage(botAnswer);
      setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
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
