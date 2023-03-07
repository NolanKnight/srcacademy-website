import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Layout from './components/layout';
import './styles/globals.scss';
import navLinks from './data/navLinks';

ReactDOM.render(
  <Router>
    <Layout>
      <Routes>
        {navLinks.map((item) => (
            <Route path={item.link} element={item.element} />
          ))}
      </Routes>
    </Layout>
  </Router>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
