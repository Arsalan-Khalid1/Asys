import React from 'react';
import Header from '../components/Header'
import Card from '../components/Card'
import './Content.css'

 const Content = () => {
    return (
        <>
        <Header/>
        <div className="content">
            <Card/>
        </div>
        </>
    )
 }

 export default Content;