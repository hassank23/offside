import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider, useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./Main/Main"


function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className="App">
      <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Main />} /> {/* Main handles nested routes */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
