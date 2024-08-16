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

