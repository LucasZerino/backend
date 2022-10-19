const express = require("express")
const user = require("./routes/user")
var cors = require('cors')

const app = express()

const port = process.env.PORT || 3333

app.use(express.json())
app.use(user)
app.use(cors())

app.get("/", function (req, res){
    res.send("Api para Bando de Talentos!")
})

app.get("/registro", (req, res) => {
    return res.json("Usuário registrado!")
})


app.listen(port, () => {
    console.log(`Aplicação rodando na porta: ${port}`)
})