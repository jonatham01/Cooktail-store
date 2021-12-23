 import {AppProps}from 'next/app'
 //import Layout from 'components/Layout/Layout'
 import {Provider} from 'react-redux';
 import {store} from '../redux/store'


function MyApp({ Component, pageProps }:AppProps) {

    //providers
    //layout
    //props adicionales

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp