# Sobre esse projeto
### Se estiver aqui para estudar :point_down:
> _**Props**_:
> -
> - A Utilização de props, serve para receber valores e chamar funções que desempenharão comportamentos. Os _**commits 5 e 6**_ possuem exemplos de código somente sobre esse assunto.
> - Possuem valores **estáticos**. (Diferente das states que possuem valores **dinâmicos**.

>  _**Classes**_:
> _Exemplo de código:_ _**commit 7**_.
> -
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

> _**States**_
> _Exemplo de código:_ _**commit 8**_
> -
> - Possuem atributos que poderão ter seu valores alterados e impactarão na rendereização do componente; executam o método render()
> - Dentro do ***constructor*** existe "métodos" (ex: aumentar() ) que na verdade se comporta como um _**script**_, que executa da esquerda para a direita e de cima para baixo. Cuidado com isso, pois pensei que ele poderia se comportar como uma classe, que obedece a ordem do código. 
> - Cada método precisa ser "instanciado" por um bind dentro de um construro para que tal possa invocá-lo.
> > ~~~javascript
> > this.aumentar =  this.aumentar.bind(this);
> >  ~~~

> _**Ciclo de vida dos componentes**_
> _**Exemplo de código: commit 9**_
> -
> - Exemplo de código.
> 
> - **Inicialiazação**:
> > Nesta fase, o componente React se prepara para sua inicialização, configurando os `estados` iniciais e `props` padrões se houverem.
> 
> - **Montagem**:
> > Depois de preparar com todas as necessidades básicas, estado e props, o nosso Componente React está pronto para ser montado no DOM do navegador.
> > **componentWillMount()** É executado quando o componente estiver prestes a ser montado no DOM da página. Assim, após esse método ser executado o componente irá criar o nó no navegador. Todas as coisas que você deseja fazer antes do componente ser montado, devem ser definidas aqui.
> > **componentDidMount()** Este é o método que é executado depois que o componente foi montado no DOM
>
> - **Atualização**:
> > Esta fase começa quando o componente React já nasceu no navegador e cresce recebendo novas atualizações. O componente pode ser atualizado de duas maneiras, através do envio de novas props ou a atualização do seu estado.
> > **componentDidUpdate()** é chamado imediatamente após a atualização.
> > **componentWillUpdate()** É  executado somente quando `shouldComponentUpdate`devolver true.
> 
> - **Desmontagem**:
> > Nesta fase, o componente não é mais necessário e será desmontado do DOM. O método que se chama nesta fase é o: **componentWillUnmount()**

> _**Eventos**_
> _**Exemplo de código: commit 10**_
> -
> - Organizando o projeto em pastas com classes e como importá-las no App. 
> - Alé do modo de execução de chamada normal com o 
> ~~~javascript
> <button onClick={this.entrar}>
> ~~~
> - Agora é possível fazer uma execução com uma função anônima
> ~~~javascript
> <button onClick={() => this.setState( {nome:  ''} )}>
> ~~~
> - Nesse último caso :point_up: não é preciso um script e portanto nem é preciso fazer um bind. Somente o constructor. A saída será uma String vazia. 
> - Há ainda um últmo modo de se fazer com função anônima:
> ~~~javascript
> <button onClick = { () => this.entrar('Lucas') }> Entrar</button>
> ~~~
> No script fica assim: 
> ~~~javascript
> entrar(){
	> 	this.setState({nome: nome})
>	}
> ~~~

