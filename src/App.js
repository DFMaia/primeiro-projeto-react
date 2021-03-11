import React, {Component} from 'react';

class Equipe extends Component {
    render(){
        return (
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo}
                 idade={this.props.idade} />
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h1>Olá, sou: {this.props.nome}</h1>
                <h2>Cargo: {this.props.cargo}</h2>
                <h2>idade: {this.props.idade}</h2>
            </div>
        );
    }
}

function App(){
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Matheus" cargo="Desenvolvedor" idade="24"/>
            <Equipe nome="Lucas" cargo="Designer" idade="21"/>
        </div>
    );
}

export default App;