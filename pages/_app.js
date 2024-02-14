// import '@/styles/globals.css';
// import Spinner from './components/Spinner';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// function MyApp({ Component, pageProps }) {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChangeStart = (url) => {
//       console.log(url);

//       if (!url.startsWith('/add-to-cart')) {
//         setLoading(true);
//       }
//     };

//     const handleRouteChangeComplete = () => {
//       setTimeout(() => {
//         setLoading(false);
//       }, 4000);
//     };

//     router.events.on('routeChangeStart', handleRouteChangeStart);
//     router.events.on('routeChangeComplete', handleRouteChangeComplete);

//     // Set loading to false after 4000 milliseconds (4 seconds) even if route change events are not triggered
//     setTimeout(() => {
//       setLoading(false);
//     }, 4000);

//     return () => {
//       // Remove event listeners
//       router.events.off('routeChangeStart', handleRouteChangeStart);
//       router.events.off('routeChangeComplete', handleRouteChangeComplete);
//     };
//   }, [router.events]);

//   return <>{loading ? <Spinner /> : <Component {...pageProps} />}</>;
// }

// export default MyApp;
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
