# Sobre o repositório de React
> ### Qual o objetivo?
>
> > - Estudar
> > - Eventuais consultas nos códigos de exemplo.
> > - Eventuais consultas em diferentes versões com orientações pelos comentários do commit ou dos arquivos README
> 
> ### Se você está aqui para estudar, leia :point_down::
> _**Vou te passar as dicas para você não ter que sofrer como eu**_ :joy:.
> - Instale o [node.js](https://nodejs.org/en/download/)
> -- Instale sempre a versão LTS. Motivo? É a versão mais estável.
> - Depois de instalado execute dois comandos no terminal:
> - **node -v**
> - **npm -v**
> - É esperado que o terminal retorne a versão do node e do npm (para cada comando acima :point_up:).
> - Execute o comando:
> - **npm install -g create-react-app**
> ou então
> **npm i -g create-react-app**
> - Isso fará com que o comando **create-react-app** seja reconhecido no terminal e que execute o comando que queremos.
> - Vá até uma pasta onde você queira criar o seu projeto e digite o comando **create-react-app _nome-da-pasta_**.
> - Para iniciar a aplicação, dentro da pasta digite o seguinte comando:
> - **yarn start**
> ou
> - **npm start**
> - _**Aqui há observações importantíssimas**_:
> > - Se você usar o Windows PowerShell o comando **create-react-app** você receberá uma mensagem de erro. Diferente do processo de instalação, que pode ser feito no Windows PowerShell, o comando **create-react-app** só será executado com sucesso no _**cmd**_ do Windows.
> > - Repare que quando escrevi o comando logo em seguida separado por espaço, tem o nome da pasta onde o projeto sera alocado.
> > - Essa pasta não precisa ser previamente criada antes de executar o comando. A função do comando, dentre muitas, é criar a pasta e baixar as dependências para dentro da pasta.
> > - O nome da pasta **não** pode possuir caracteres maiúsculos, caso contrário o **cmd** retornará uma mensagem de erro.
> > - Quando for baixar o arquivo do git, seja pelo comando pull ou pelo o comando clone, a pasta modules não será baixada. Essa pasta são as dependências e o nome dela está no gitignore. É um arquivo muito pesado e a melhor coisa a se fazer é: depois de replicar o código do git na máquina, entre na pasta e execute os seguintes comandos:
> > **npm install**
> > ou
> > **yarn install**
> > Isso baixará os arquivos de dependência para a pasta.
> ### IDE:
> > - _Visual Studio Code_
> > - Plugins:
> > > - **React-Native/React/Redux snippets for es6/es7**
> > > - **Reactjs code snippets**
> > > - **Vscode-icons**
> ### Sugestões?
> Sinta-se livre para fornecê-las. :grinning: