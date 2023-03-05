import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import {Home, Enrollment, Students, Staff, Calendar, Contact, About} from './pages';
import Layout from './components/layout/layout';
import './styles/globals.scss';

ReactDOM.render(
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/students" element={<Students />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </Router>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
