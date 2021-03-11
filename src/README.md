# Sobre esse projeto
### Se estiver aqui para estudar :point_down:
> _**Props**_:
> - A Utilização de props, serve para receber valores e chamar funções que desempenharão comportamentos. Os _**commits 5 e 6**_ possuem exemplos de código somente sobre esse assunto.

> - _**Classes**_:
> _Exemplo de código:_ _**commits 7**_.
> - Classes são o uso mais comum do que funções. Bem parecido com o Java. 
> Todo retorno de classes (e até mesmo de funções) precisa ter uma tag pai. Caso contrário haverá um erro.
> - Exemplo de código _**correto**_ :point_down:
> ~~~javascript
> class  Sobre  extends  Component{
> 		render(){
>			return(
>				<div>
>					<h1>Olá, sou: {this.props.nome}</h1>
>					<h2>Cargo: {this.props.cargo}</h2>
>					<h2>idade: {this.props.idade}</h2>
>				</div>
>			);
>		}
> }
> ~~~
> - Exemplo de código _**errado**_ :point_down:
>  ~~~javascript
> class  Sobre  extends  Component{
> 		render(){
>			return(
>				<div>
>					<h1>Olá, sou: {this.props.nome}</h1>
>					<h2>Cargo: {this.props.cargo}</h2>
>				</div>
> 				<h2>idade: {this.props.idade}</h2>
>			);
>		}
> }
> ~~~
> - A tag **h2** que contem o props **idade** não possui tag pai. Se ela fosse a única dentro dessa classe então então a tag dela sera a pai. 
