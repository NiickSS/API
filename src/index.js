import  express  from "express";
import {v4 as uuidv4} from "uuid";

const app = express();
app.use(express.json());


const projects = [];

function logRoutes(req, res, next){
    //console.log(req);
    const {method, url} = req;
    const route = `[${method.toUpperCase()}] ${url}`;
    console.log(route);
    return next();
}

//app.use(logRoutes);

app.get('/projects', (req, res)=>{
    res.json(projects);
});

app.post('/projects',logRoutes, (req, res)=>{
    const {name, owner} = req.body;
    const project = {
        id: uuidv4(),
        name, 
        owner
    };
    projects.push(project);

    res.status(201).json("Criado com sucesso");
});

app.put('/projects/:id', (req,res)=>{
    const {id} = req.params;
    const {name, owner} = req.body;

    const projectIndex = projects.findIndex(p => p.id === id);

    if(projectIndex < 0 ){
        return res.status(404).json({error: "Project not found!"});
    };

    if(!name || !owner){
        return res.status(400).json({error: "Name and owner are required!"});
    }

    const project = {
        id,
        name,
        owner
    };

    projects[projectIndex] = project;

    res.json("Alterado com sucesso!");

});

app.delete('/projects/:id', (req, res)=>{
    const {id} = request.params;

    const projectIndex = projects.findIndex(p => p.id === id);

    if(projectIndex < 0){
        return res.status(404).json({error: "Project not found!"});
    }

    projects.splice(projectIndex, 1);

    res.status(204).send();
});

app.listen(3000, () =>{
    console.log("Server rodando!");
});