const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../modules/pool');
const router = require('./user.router');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  //this route fetches upcoming hunts from the database for the logged in user
router.get('/upcoming' , rejectUnauthenticated, ( req , res ) => {
    
    let userId = req.user.id
    let sqlValues = [userId]
  
    const sqlQuery = `SELECT * FROM "hunt"
	                    WHERE "hunt"."user_id" = $1
		                    AND "hunt"."date" > now(); `
    pool.query(sqlQuery, sqlValues)
    .then ((dbRes)=>{
        res.send(dbRes.rows)
        console.log(dbRes.rows);
    })
    .catch((dbErr)=>{
        console.log('GET upcoming hunt server side route error', dbErr);
        res.sendStatus(500)
    })
})

//this route fetches previous hunts from the database for the logged in user
router.get('/previous' , rejectUnauthenticated, ( req , res ) => {
    let userId = req.user.id
    let sqlValues = [userId]

    const sqlQuery = `SELECT * FROM "hunt"
	                    WHERE "hunt"."user_id" = $1
		                    AND "hunt"."date" < now(); `
    pool.query(sqlQuery, sqlValues)
    .then ((dbRes)=>{
        res.send(dbRes.rows)
    })
    .catch((dbErr)=>{
        console.log('GET upcoming hunt server side route error', dbErr);
        res.sendStatus(500)
    })
})

router.post('/' , rejectUnauthenticated , ( req , res)=>{
    let dataToSend = req.body
    let userId = req.user.id

    const sqlQuery = `INSERT INTO "hunt"("date","location", "species","equipment","bagged","notes","image","restrictions", "user_id")
	                    VALUES 
	                        ( $1 , $2 , $3 , $4 , $5 , $6 , $7 , $8 , $9);`

    const sqlValues = [
                    dataToSend.date, 
                    dataToSend.location, 
                    dataToSend.species, 
                    dataToSend.equipment, 
                    dataToSend.bagged, 
                    dataToSend.notes,
                    dataToSend.image,
                    dataToSend.restrictions,
                    userId
                ]
    pool.query(sqlQuery, sqlValues)
        .then((dbRes)=>{
            res.sendStatus(201)
        })
        .catch((dbErr)=>{
            console.log('error in POST serverside:', dbErr)
            res.sendStatus(500)
        })

})


module.exports = router