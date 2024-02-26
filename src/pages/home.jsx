import React from 'react';
import Banner from '../components/banner/banner';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import '../style/pages/home.css'
import '../style/components/card.css'
import Card from '../components/card/card';

export default function home() { //main function for displaying the Home page
    return (<div>
        <Header />
        <main>
            <Banner />
            <Card />
        </main>
        <Footer />
    </div>
    );
}