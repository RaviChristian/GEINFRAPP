const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3001; 

const { salvar, listar, deletar } = require('./repositoryInterface');

app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.post('/api/POSTformulario', (req, res) => {

    const {fullName,email,siape,unit,phone,description,isComplete} = req.body;
    salvar(fullName,email,siape,unit,phone,description,isComplete);

    return res.status(201).send("Created meu parceiro")

});
  
app.get('/api/GETformulario', async (req, res) => {

    const allForms = await listar()

    return res.status(200).send(allForms);
    
});

app.delete('/api/DELETEformulario/:id', async (req, res) => {

  const {id} = req.params;
  console.log(id)

  try{
    const deleteResponse = await deletar(id);
    return res.status(200).send(deleteResponse);
  } 
  catch(error) {
    return res.status(500).send("Internal Server Error")
  }

  
});
  
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});