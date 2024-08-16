let express = require ("express")
let mysql = require ("mysql2")
let app = express()
app.use(express.json())

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'Nathandata',
    database : 'Art_Gallery'
})
con.connect((err)=>{
    if(err){
        console.log(err)
    }else {
        console.log("connected !!")
    }
}) 


app.post ('/', (req, res)=>{
res.send('Home')

})


app.post('/post',(req,res)=>{
    const id=req.body.id;
    const FirstName=req.body.FirstName;
    const LastName=req.body.FirstName;
    const ArtSkill=req.body.ArtSkill;
    const COUNTRY=req.body.COUNTRY;
    const Age=req.body.Age;
    const Email=req.body.Email;
    const Cellphone=req.body.Cellphone;

    con.query('insert into ArtistName values(?,?,?,?,?,?,?',[id,FirstName,LastName,ArtSkill,COUNTRY,Age,Email,Cellphone],(err,result)=>{

        if(err){
            console.log(err)
        }else {
            res.send("POSTED")
        }

    })
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else {
        console.log("on port 3000 !!")
    }

});