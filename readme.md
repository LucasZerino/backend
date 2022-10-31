# Seja bem vindo ao ME < CODE >

> Processo de seleção para estágio FrontEnd 

Este repositório contem informações sobre o processo de seleção, e será atualizado a cada etapa, seguindo as datas combinadas.

# O Projeto

🎯 O objetivo deste projeto é criar um app FullStack onde vamos criar um banco de talentos para futuros estagiários.

Para isso precisamos criar um site/plataforma/sistema por onde o interessado se inscreva no banco de talentos, e possa fazer o seu cadastro, recebendo no seu email nossos proximos testes.

👉 Ao final do processo de seleção, o projeto será publicado para utilização real.

É importante pra nós que todos se divirtam 😄 e aprendam 📚 enquanto estejam no processo conosco. 

# O Processo

O processo acontecerá em 3 ou 4 etapas, com dificuldade crescente, para encontrarmos aqueles estudantes mais animados, interessados e corajosos.

Ao final de cada etapa atualizaremos aqui o repositório com as orientações para próxima etapa!


# 1ª Etapa - Bootstraping

Nesta etapa queremos criar o projeto básico, o mínimo necessário para sairmos do zero.

**Início: 21/10/2022 - envio dos projetos: até 27/10/2022 - resultado: 28/10/2022**   

Tarefas da etapa:   
- Criar projeto frontend seguindo as instruções abaixo
- Criar repositório para seu projeto no github
- Deixar no readme apenas a informação sobre seu projeto
- Nos enviar a url do seu repositório por whatsapp: [este link](https://wa.link/zx8nma) para que possamos avaliar o que foi feito


## Frontend

- Criar projeto usando Next.js
- Na rota inicial, exibir com `<H1>` com "Usuários do banco de talentos"
- Instalar pacote AXIOS no projeto
- Ao renderizar a interface (apenas uma vez) fazer uma chamada get para [https://backendtalentos.herokuapp.com/listuser](https://backendtalentos.herokuapp.com/listuser) e obter a resposta, que será uma lista de usuários, exibindo seu login, senha, email e tenant
- Após receber esse array, você deve organizar esses usuários em forma de lista, cada um com suas respectivas informações!



# 1ª Etapa - Aprovados para 2ª etapa
Parabéns aos aprovados 🎉 vamos para a próxima etapa! 💪
- Hugo Rodrigues 
- Matheus William
- Grazyele Diniz


# 2ª Etapa - Formulário e envio dos dados

Nesta etapa queremos criar o formulário para enviar o currículo. O Candidato irá informar suas informações pessoais e carregar o seu currículo.

O frontend irá desenvolver a interface de envio!

**Início: 31/10/2022 - envio dos projetos: até 31/07/2022 - resultado: 06/10/2022**   

Estrutura dos dados a serem enviados.

```
{
    "name": "teste",
    "email": "teste",
    "number": "teste",
    "address": "teste",
    "func": "teste",
    "phone": "teste",
    "pdf": "teste"
}
```

Todos campos são obrigatórios, deve ser criado um formulário com as seguintes características para o envio do endereço(
    cep, 
    cidade,
    estado,
    rua,
    numeroCasa,
    complemento,) todas essa variáveis devem ser colocadas em uma string só e enviadas como address.

Tarefas da etapa:   
- Implementar sua parte do projeto de seleção
- Ao final das atividades, nos enviar a url do seu repositório por whatsapp: [este link](https://wa.link/zx8nma) para que possamos avaliar o que foi feito.

## Frontend

- O formulário deve ficar na primeira página, para facilitar o cadastro
- Manter o projeto usando o Next, ou seja, não implementar o react-router

### Primeira parte, dados pessoais
- A primeira parte recebe os dados pessoais do candidato
- Campos de dados pessoais: Nome, e-mail, telefone (name, email, number)
- Do endereço (address), o primeiro campo deverá ser o CEP 
- Ao digitar o CEP, exibir um loading enquanto se obtem o endereço
- Caso consiga obter o endereço, preencher os campos e levar o foco para o campo numero(numeroCasa)
- Após estes campos a o candidato, deve informar a função pretendida(usar um campo select com no mínimo três funções)

### Envio dos dados
- Enviar os dados (como apresentados acima) via POST para [BackTalentosAPI](https://backendtalentos.herokuapp.com/users)
- Trate as validações da Api e retorne para o usuário se ele já está cadastrado ou outro possível erro!
- O PDF enviado deve ser tratado no frontEnd e transformado para base64, só após isso o formulário deve ser enviado, caso necessário deve-se usar um loading enquanto converte o PDF em base64!

Bom código a todos!!