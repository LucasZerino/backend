const express = require("express")
const user = require("./routes/user")
const {PrismaClient} = require("@prisma/client")
const { response } = require("express")
var cors = require('cors')

const app = express()

const port = process.env.PORT || 3333
const prisma = new PrismaClient()

app.use(express.json())
app.use((req, res, next) => {
    app.use(cors());
    next();
})

app.get("/", function (req, res){
    res.send("Api para Bando de Talentos!")
})

app.get("/registro", (req, res) => {
    return res.json("Usuário registrado!")
})


app.listen(port, () => {
    console.log(`Aplicação rodando na porta: ${port}`)
})

// Criar usuário
app.post("/newuser", async (req, res) => {
    const { user, email, senha} = req.body
    const createUser = await prisma.users.create({data: {
        user,
        email,
        senha,
    },
});
    return res.status(201).json( {
        "status": "sucess",
        "Sucess": "Usuário criado com sucesso!"
    })
})

// Ler usuários
app.get("/listuser", async (req, res) => {
    const allUsers = await prisma.users.findMany()
    return res.status(200).json( {
        "status": "sucess",
        "Sucess": allUsers
    })
})
