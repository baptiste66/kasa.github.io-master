import React from 'react'; //importing react
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import '../style/pages/error.css'

export default function error() {
    return (
        <div>
            <Header />
            <main className='error'>
                <div className='message'>
                    <h1><span className='error__number'>404</span></h1>
                    <div className='error__txt'>
                        <p className='txt'>Oups! La page que </p>
                        <p className='txt'>vous demandez n'existe pas.</p>
                    </div>
                    <a className='underline' href='/home'>Retourner sur la page d’accueil</a>
                </div>

            </main>
            <Footer />
        </div>
    );
}




