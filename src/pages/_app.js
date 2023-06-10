import '@/styles/globals.css'
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';


const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<App {...pageProps} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default MyApp;