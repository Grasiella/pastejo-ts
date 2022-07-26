# Pastejo Rotacionado

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

> Projeto realizado com o objetivo de simular um Pastejo Rotacionado, método utilizado por pecuaristas a fim de distribuir bois em seus piquetes.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão mais recente de `NodeJS`
* Você tem uma máquina `Windows / Linux / Mac`.
* Você leu `o objetivo do projeto`.

## 🚀 Instalando as Dependências

Para instalar o Pastejo Rotacionado, siga estas etapas:

Abra o terminal e realize o Git Clone com o seguinte comando
```
git clone https://github.com/Grasiella/pastejo-ts.git
```
Esse comando criará um diretório chamado `pastejo-ts`

Ainda no terminal, acesse o diretório e execute o comando
```
npm install
```

## ☕ Usando o Pastejo Rotacionado

Para usar o projeto, siga estas etapas:

Acesse o diretório `pastejo-ts` que criamos em `Instalando as Dependências`

Para facilitar o uso do projeto, dentro desse diretório haverá uma pasta chamada `src`,
dentro dela existe um arquivo chamado `entrada.ts` que contém as informações de entrada do programa

Nesse arquivo você editará as informações desejadas no seguinte modelo:

```js
areas: [
        // id = nome desejado para a área a ser adicionada
        // capacidade = capacidade máxima de animais nessa área
        // gmd = ganho de peso diário para cada boi dentro dessa área
        
        { id: 'Area 1', capacidade: 3, gmd: 1.2 },
        { id: 'Area 2', capacidade: 2, gmd: 2 },
        
        // para adicionar mais aréas, basta acrescentar uma vírgula ao final da última área adicionada,
        // pular uma linha e colocar as informações entre { }
    ],
    animais: [
        // id = brinco desejado para o animal
        // pesoInicial = peso que o animal começará nessa simulação
        
        { id: 'V1', pesoInicial: 150 },
        { id: 'V2', pesoInicial: 150 },
        { id: 'V3', pesoInicial: 150 }
        
        // para adicionar mais animais, basta acrescentar uma vírgula ao final do último animal adicionado,
        // pular uma linha e colocar as informações entre { }
    ],
    movimentacoes: [
        // idAnimal = nome do animal que será rotacionado
        // idArea = nome da área que receberá o animal
        // dias = quantos dias ficará nessa área
        
        { idAnimal: 'V1', idArea: 'Area 1', dias: 5 },
        { idAnimal: 'V2', idArea: 'Area 1', dias: 5 },
        { idAnimal: 'V2', idArea: 'Area 1', dias: 5 },
        { idAnimal: 'V3', idArea: 'Area 2', dias: 2 },
        { idAnimal: 'V3', idArea: 'Area 1', dias: 3 },
    
        // para adicionar mais movimentações, basta acrescentar uma vírgula ao final da última movimentação realizada,
        // pular uma linha e colocar as informações entre { }    
        
    ]
```

Após adicionar todas as informações desejadas no arquivo `entrada.ts`, abra o terminal e rode o seguinte comando

```
npm run start
```

A saída será 2 tabelas, sendo a primeira correspondente às áreas e a segunda correspondente aos gados

**Primeira tabela**

X = Quantidades de animais alojados na área (linha) e dia (coluna)

| Áreas cadastradas   |    Dia 0    |    Dia 1    |    Dia 2    |  ........   |   Dia Final |
| ------------------- | ------------| ------------| ------------|-------------|-------------|
|  'Área 1'           |     X       |     X       |     X       |     X       |     X       |
|  'Área 2'           |     X       |     X       |     X       |     X       |     X       |
|    ...              |     X       |     X       |     X       |     X       |     X       |
|   Última área       |     X       |     X       |     X       |     X       |     X       |


**Segunda tabela**

X = Nome do animal cadastrado

Y = Peso do animal no início da simulação

Z = Peso final do animal após o cálculo na simulação

| Animais cadastrados |    id       |  peso inicial | peso final   |
| ------------------- | ------------|---------------| -------------|
|  0                  |    x        |     y         |     z        |
|  1                  |     X       |     y         |     z        |
|    ...              |     X       |     y         |     z        |
|   último animal     |     X       |     y         |     z        |


<h3>Tenha um bom uso!<h3>


## 📫 Contribuindo para Pastejo Rotacionado
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir com o Pastejo Rotacionado, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
