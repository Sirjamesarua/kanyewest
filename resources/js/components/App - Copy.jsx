import React from 'react';
import axios from 'axios';
import { Component } from 'react';

class App extends Component {
    state = { 
        qoutes: []
     } ;

     
    componentDidMount() {
        this.fetchqoutes();
    }
  
    fetchqoutes = () => {
        /*const response = fetch('https://api.kanye.rest/', {mode:'cors'}).then(response => response.json())
        .then(json => console.log(json));*/
        const response = fetch('https://api.kanye.rest/');
        //const data = response.json();
        console.log(response)
    }
    

    render() { 
        const { qoutes } = this.state;

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">
                    {this.state.qoutes}
                    </h1>
                    <button className="button" onClick=
                    {this.fetchqoutes}>
                        <span>Give Me qoutes</span>
                    </button>
                </div>
            </div>
        );
    }
}
 
export default App;