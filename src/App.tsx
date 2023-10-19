import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Styled from './App.styled';
import { ChatbotComponent } from './components/Chatbot';
import { ButtonWidget } from './components/ButtonWidget';

function App() {
  const [showWidget, setWidget] = useState(false);
  return (
    <Styled.AppStyled className="App">
      {!showWidget && <ButtonWidget onClick={() => setWidget(true)} />}
      {showWidget && <ChatbotComponent />}
    </Styled.AppStyled>
  );
}

export default App;
