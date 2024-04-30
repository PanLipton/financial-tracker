import React from 'react';
import NavBar from './NavBar';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <NavBar />
    <main>{children}</main>
  </div>
);

export default Layout;
