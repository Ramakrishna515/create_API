const express=require('express');
const app=express();
const port=3000;

app.use(express.json());

let items = [];
const names = [
    'Ramakrishna', 'Akshaya', 'Stephen', 'Chandu', 'Sujatha',
    'Vijayalaxmi', 'Sivaprasad'
];

for(let i=0; i<names.length; i++){
    items.push({
        id:i+1,
        name:names[i]
    })
}


app.get('/items',(request,response)=>{
     response.send(items);
})


app.get('/items/:name',(request,response)=>{
    const item=items.find(i=>i.name.toLowerCase()===(request.params.name.toLowerCase()));
    if(item){
        response.send(item);
    }else{
        response.status(404).send({message:'Item not found'});
    }
})


app.listen(port,()=>{
    console.log(`Server running:http://localhost:${port}`)
})