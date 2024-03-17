import React from 'react';
import Header from './header';
import Footer from './footer';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />

            <main style={styles.main}>
                <Toaster />
                {children}
            </main>
            <Footer />
        </div>

    );
};

const styles = {
    main: {
        minHeight: "71.5vh",
        marginLeft: "10%", // Default margin for laptop
        marginRight: "10%", // Default margin for laptop

        boxSizing: "border-box",
        '@media (max-width: 1200px)': {
            marginLeft: "5%", // Margin for larger tablets
            marginRight: "5%", // Margin for larger tablets
        },
        '@media (max-width: 992px)': {
            marginLeft: "3%", // Margin for smaller tablets
            marginRight: "3%", // Margin for smaller tablets
        },
        '@media (max-width: 768px)': {
            marginLeft: "3%", // Margin for landscape-oriented smartphones
            marginRight: "3%", // Margin for landscape-oriented smartphones
        },
        '@media (max-width: 576px)': {
            marginLeft: "3%", // Margin for portrait-oriented smartphones
            marginRight: "3%", // Margin for portrait-oriented smartphones
        },
    },
};

export default Layout;
