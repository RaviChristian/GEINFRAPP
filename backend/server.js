const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3001; 

const { salvarFormulario, salvarRelatorio, listar, deletar, acharPorId, listarRelatorios } = require('./repositoryInterface');

app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.post('/api/POSTformulario', (req, res) => {

    const {fullName,email,siape,unit,phone,description,isComplete} = req.body;
    salvarFormulario(fullName,email,siape,unit,phone,description,isComplete);

    return res.status(201).send("Created meu parceiro")

});

app.get('/api/GETformularioId/:id', async (req, res) => {

  console.log("[inicia] /api/GETformularioId/:id")
  const {id} = req.params
  const form = await acharPorId(id);
  console.log(form)
  console.log("[finaliza] /api/GETformularioId/:id")
  return res.status(200).send(form);
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
 
app.get('/api/GETformulario', async (req, res) => {

    const allForms = await listar()

    return res.status(200).send(allForms);
    
});


app.get('/api/GETrelatorioFormulario', async (req, res) => {

  console.log("[inicia] /api/GETrelatorioFormulario/")
  const allRelatorios = await listarRelatorios()
  console.log("[finaliza] /api/GETrelatorioFormulario/")
  return res.status(200).send(allRelatorios);
  
});



app.post('/api/POSTrelatorioFormulario', async (req, res) => {

  console.log("[inicia] /api/POSTrelatorioFormulario/")
  const {fullName,email,siape,unit,phone,description,isComplete} = req.body;
  salvarRelatorio(fullName,email,siape,unit,phone,description,isComplete);
  console.log("[finaliza] /api/POSTrelatorioFormulario/")
  return res.status(200).send("Ok");
  
});


app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
