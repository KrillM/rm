import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from './A_Theory/B_TypeScript/theme'
// import {theme} from './B_CryptoCracker/theme'
import {QueryClient, QueryClientProvider} from "react-query"
import {RecoilRoot} from "recoil";

// TypsScript는 null을 허용하지 않으므로 null이 아님을 보증한다는 뜻으로 뒤에 !를 붙인다.
const root = ReactDOM.createRoot(document.getElementById('root')!);

// const darkTheme = {
//   textColor: "whitesmoke",
//   backgroundColor: "#111"
// }

// const lightheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmoke"
// }

// react-router-dom 자동처리
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <ThemeProvider theme={theme}> */}
          <App />
        {/* </ThemeProvider> */}
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);

