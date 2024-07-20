const express = require('express')
const routes = express.Router()

//show - READ
routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if (err) return res.send(err)
        
        conn.query('SELECT * FROM books', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

//insert - CREATE
routes.post('/',(req, res)=>{
    req.getConnection((err,conn)=>{
        if (err) return res.send(err)
        //console.log(req.body)
        conn.query('INSERT INTO books set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)
            
            //res.json(rows)
            res.send('info book added!/saved on db')
        })
    })
})


routes.delete('/:id',(req, res)=>{
    req.getConnection((err,conn)=>{
        if (err) return res.send(err)
        //console.log(req.body)
        conn.query('DELETE FROM books WHERE id = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            
            //res.json(rows)
            res.send('this book deleted! on db success!!!')
        })
    })
})


//insert - CREATE
routes.put('/:id',(req, res)=>{
    req.getConnection((err,conn)=>{
        if (err) return res.send(err)
        //console.log(req.body)
        conn.query('UPDATE books set ? WHERE id = ?',[req.body,req.params], (err, rows)=>{
            if(err) return res.send(err)
            
            //res.json(rows)
            res.send('info book updated! on db')
        })
    })
})

module.exports = routes