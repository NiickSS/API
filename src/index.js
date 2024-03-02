import  express  from "express";

const app = express();

app.get('/projects', (req, res)=>{
    const {title, owner, page} = req.query;
    console.log(title, owner, page);

    res.json([
        "Projeto 1", 
        "Projeto 2"
    ]);
});

app.post('/projects', (req, res)=>{
    res.json([
        "Projeto 3"
    ]);
});

app.put('/projects/:id', (req,res)=>{
    res.json([
        "Projeto 4"
    ]);
});

app.delete('/projects/:id', (req, res)=>{
    res.json([
        "Projeto 2",
        "Projeto 3"
    ]);
});

app.listen(3000, () =>{
    console.log("Server rodando!");
});