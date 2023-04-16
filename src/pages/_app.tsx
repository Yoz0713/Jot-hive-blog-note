import React from 'react';
import Header from '@/component/header';
import Footer from '@/component/footer';
import Menu from '@/component/menu';
import {lightTheme,darkTheme,Theme} from "@/styles/theme";
import {GlobalStyle} from "@/styles/global"
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import {store} from "../component/redux/store"
export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Theme theme={darkTheme}>
      <GlobalStyle/>
    <Provider store={store}>
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
    </Provider>
    </Theme>
    </>
   
  )
}
