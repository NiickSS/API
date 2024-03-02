import  express  from "express";

const app = express();

app.get('/', (req, res)=>{
    res.json({
        message: "Opa"
    });
});

app.listen(3000, () =>{
    console.log("Server rodando!");
});