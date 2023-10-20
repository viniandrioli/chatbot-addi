import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import ActionProvider from './ActionProviders';
import MessageParser from './MessageParser';

export const ChatbotComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        headerText="Sugerencias de tiendas"
        placeholderText={"   "}
      />
    </div>
  );
};
