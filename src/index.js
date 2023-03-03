import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import {Home, About} from './pages';
import Layout from './components/layout/layout';

ReactDOM.render(
  <Router>
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </Router>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
