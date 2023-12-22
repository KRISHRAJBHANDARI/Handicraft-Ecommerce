import React from 'react';
import Header from './header';
import Footer from './footer';

import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: "71.5vh" }}>
                <Toaster />
                {children}</main>
            <Footer />
        </div>
    );
};

export default Layout;