import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';

// TypsScript는 null을 허용하지 않으므로 null이 아님을 보증한다는 뜻으로 뒤에 !를 붙인다.
const root = ReactDOM.createRoot(document.getElementById('root')!);

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}

const lightheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke"
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

