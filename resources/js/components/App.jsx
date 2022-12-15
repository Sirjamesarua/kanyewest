import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Component } from 'react';

function App() {
    const [quotes, setQuotes] = React.useState([]);

        const fetchquotes = async () => {
            setQuotes([]);
            for (let i = 0; i < 5; i++) {
                try{
                    const res = await fetch('https://api.kanye.rest/', {mode:'cors'});
                    const data = await res.json();

                    //setQuotes(data.quote);
                    setQuotes(state=>[...state,data.quote]);
                    //console.log(data.quote);
                }catch(error){
                    console.error(error);
                }
            }
        };

    useEffect(() => {
        fetchquotes();
    },[]);

        return (
            <div className="app">
                <center>
                    <h3 className="quote">
                        {quotes.map(quote=>(
                            <div  key={quote}>{quote}
                            <br /><hr /><br /></div>
                        ))}
                    </h3>
                    <button className="button"  onClick={fetchquotes}>
                        <span>Get my  qoutes</span>
                    </button>


                </center>
            </div>
        );
    
}
 
export default App;