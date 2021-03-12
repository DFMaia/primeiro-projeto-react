import React, { Component} from 'react';

class Membro extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        this.setState({nome: 'Matheus'})
    }

    render(){
        return(
            <div>
                <h2>
                    Bem vindo {this.state.nome}
                    </h2>
                <button onClick={this.entrar}>
                {/**sdfsf */}
                    Entrar como Matheus
                </button>
                <button onClick={() => this.setState( {nome: ''} )}>
                    Sair
                </button>
            </div>
        );
    }
}

export default Membro;