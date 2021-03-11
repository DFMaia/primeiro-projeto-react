import React from 'react';

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo}
            idade={props.idade}/>
            <Social facebook={props.facebook}/>
        </div>
    );
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h2>Cargo: {props.cargo}</h2>
            <he>Idade: {props.idade}</he>
            <hr/>
        </div>
    );
}

const Social = (props) => {
    return (
        <div>
            <a href={props.facebook}> Facebook </a>
            <a>LinkedIn </a>
            <a>YouTube </a>
        </div>
    );
}

function App(){
    return (
        <div>
            <h1>Curso React</h1>
            <Equipe nome="Lucas" cargo="Programador" idade="29"
            facebook="https://google.com"/>
            <Equipe nome="Lucas" cargo="Designer" idade="22"/>
        </div>
    );
}

export default App;