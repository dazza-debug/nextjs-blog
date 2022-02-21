import '../styles/global.css'
//you an ONLY import global css in _app.js file 
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}