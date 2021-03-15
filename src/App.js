import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Matheus', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Lucas', curtidas: 120, comentarios: 24},
                {id: 3, username: 'Amanda', curtidas: 30, comentarios: 12},
                {id: 4, username: 'Diego', curtidas: 1, comentarios: 12},
            ]
        };
    }

    render(){
        return(
            <div> {this.state.feed.map((item) => {
                return(
                    <div>
                        <Feed
                        id={item.id} username={item.username} 
                        curtidas={item.curtidas} comentarios={item.curtidas}/>
                    </div>
                    );
               })}
            </div>
        );
    }

}

export default App;