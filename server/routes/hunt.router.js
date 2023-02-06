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

module.exports = router