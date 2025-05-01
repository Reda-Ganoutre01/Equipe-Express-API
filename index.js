const express=require('express')
const app=express()
const equipes=require('./equipes.json')
app.listen(82,()=>{
    console.log('tester done!!')
    
})
// !
app.get('/equipes',(req,res)=>{
    // res.send('liste des equipes')
    res.status(200).json(equipes);


})
// !
app.use(express.json())
app.post('/equipes',(req,res)=>{
    equipes.push(req.body)
    res.status(200).json(equipes);
    })
app.put('/equipes/:id',(req,res)=>{
    const id=parseInt(req.params.id)
      const equipe=equipes.find(x=>x.id===id)  
      equipe.nom="DevOWFS";
      equipe.age=99;
      res.send('donne')
    res.status(200).json(equipe);
    })
// !
// app.get('/equipes/:id',(req,res)=>{
//     const id=parseInt(req.params.id)
//     const filter_ep=equipes.find(x=>x.id===id);
//     res.status(200).json(filter_ep);
// })
// !
// app.use(express.json())
// app.post('/equipes',(req,res)=>{
//     equipes.push(req.body)
//     res.status(200).json(equipes);
//     })



app.get('/equipes/:id',(req,res)=>{
    const id=parseInt(req.params.id)
      const equipe=equipes.find(x=>x.id===id)  
    res.status(200).json(equipe);
    })
app.use(express.json())
app.post('/equipes',(req,res)=>{
    equipes.push(req.body)
    res.status(200).json(equipes);
    })
app.put('/equipes/:id',(req,res)=>{
        const id=parseInt(req.params.id)
          const equipe=equipes.find(x=>x.id===id)  
          equipe.name="DevOWFS";
          equipe.country="Maroc";
        res.status(200).json(equipe);
        })
app.delete('/equipes/:id',(req,res)=>{
          const id=parseInt(req.params.id)
          const equipe=equipes.find(x=>x.id===id)  
         equipes.splice(equipes.indexOf(equipe),1)
        res.status(200).json(equipe);
    })