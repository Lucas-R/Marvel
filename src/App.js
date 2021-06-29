import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './Styles/Global.css';

export default function App(){
    return(
        <>
        <div className="container">
        <header>
          <Header />
        </header>

          <main>
            <Outlet />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
        </>
    );
}