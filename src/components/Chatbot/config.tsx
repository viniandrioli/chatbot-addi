import { createChatBotMessage } from 'react-chatbot-kit';
import { default as AddiLogo } from '../../assets/addi-logo.png';
import { BotAvatar } from '../BotAvatar';
//here we can change the first question
const config = {
  botName: 'Addi Assistent',
  initialMessages: [
    createChatBotMessage(`Hola, cuéntame ¿Qué buscas?`, {}),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(60, 106, 240)',
    },
    chatButton: {
      backgroundColor: 'rgb(60, 106, 240)',
    },
  },
  customComponents: {
    botAvatar: () => <BotAvatar />,
  }
};

export default config;
