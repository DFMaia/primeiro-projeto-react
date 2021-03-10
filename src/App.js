import React from 'react';

const BemVindo = (props)  => { 
    return (
        <div>
            <h2> Bem vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    );
}

function App(){
    return (
        <div>
            Olá Mundo
            <BemVindo nome = "Lucas" idade = "24"/>
            <BemVindo nome = "Amanha" idade = "19"/>
            <h1>Curso React</h1>
        </div>
    );
}

export default App;