const express = require('express');
const bodyParser = require('body-parser');
const pool = require('../modules/pool');
const router = require('./user.router');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
  
  //this route fetches the details for one hunt using the id
  router.get('/edit/:id',rejectUnauthenticated,(req, res) => {
    const huntDetailId = req.params.id
    console.log(huntDetailId);
    let sqlQuery = `
    SELECT * FROM "hunt"
    WHERE "id" = $1;
    `
    let sqlValues = [huntDetailId]
    pool.query(sqlQuery, sqlValues)
      .then((dbRes) =>{
        console.log(dbRes.rows[0]);
        res.send(dbRes.rows[0])
      })
      .catch((dbErr) =>{
        console.log('/hunt/:id GET ERROR:', dbErr)
        res.sendStatus(500)
      })
  });

  //this route fetches the hunt(s) relating to the user ID sent over from the client side
  router.get('/details/:id',rejectUnauthenticated,(req, res) => {
    const huntDetailId = req.params.id
    let sqlQuery = `
    SELECT * FROM "hunt"
    WHERE "id" = $1;
    `
    let sqlValues = [huntDetailId]
    pool.query(sqlQuery, sqlValues)
      .then((dbRes) =>{
        res.send(dbRes.rows)
      })
      .catch((dbErr) =>{
        console.log('/hunt/:id GET ERROR:', dbErr)
        res.sendStatus(500)
      })
  });

  //this route fetches upcoming hunts from the database for the logged in user
router.get('/upcoming' , rejectUnauthenticated, ( req , res ) => {
    
    let userId = req.user.id
    let sqlValues = [userId]
  
    const sqlQuery = `SELECT * FROM "hunt"
	                    WHERE "hunt"."user_id" = $1
		                    AND "hunt"."date" > now()
                            ORDER BY "hunt"."id" ASC; `
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
		                    AND "hunt"."date" < now()
                            ORDER BY "hunt"."id" ASC; `
    pool.query(sqlQuery, sqlValues)
    .then ((dbRes)=>{
        res.send(dbRes.rows)
    })
    .catch((dbErr)=>{
        console.log('GET upcoming hunt server side route error', dbErr);
        res.sendStatus(500)
    })
})

//this route stores data from the front end user and sends it to the database
router.post('/' , rejectUnauthenticated , ( req , res)=>{
    
    let dataToSend = req.body
    let userId = req.user.id
    console.log(dataToSend);
    console.log(userId);
    const sqlQuery = `INSERT INTO "hunt"("date","location", "species", "equipment","restrictions","bagged","notes","image", "user_id")
	                    VALUES 
	                        ( $1 , $2 , $3 , $4 , $5 , $6 , $7 , $8 , $9);`

    const sqlValues = [
                    dataToSend.date, 
                    dataToSend.location, 
                    dataToSend.species, 
                    dataToSend.equipment, 
                    dataToSend.restrictions,
                    dataToSend.bagged, 
                    dataToSend.notes,
                    dataToSend.image,
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

//delete this single hunt
router.delete('/:id', rejectUnauthenticated , ( req, res )=> {
    let huntToDelete = req.params.id
    let sqlValues = [huntToDelete]
    let sqlQuery = `DELETE FROM "hunt"
	                    WHERE "id" = $1;`
    pool.query(sqlQuery, sqlValues)
    .then((result)=>{
        res.sendStatus(200)
    }).catch((error)=>{
        console.log('error in DELETE serverside', error);
        res.sendStatus(500)
    })
})

router.put('/:id', rejectUnauthenticated, (req, res) => {
    // Update this single hunt
    const data = req.body
    console.log('req.body =' , data)
    
    const sqlText = `
    UPDATE "hunt"
        SET "date" = $1, 
            "location" = $2 , 
            "species" = $3, 
            "equipment" = $4, 
            "bagged" = $5, 
            "notes" = $6, 
            "image" = $7, 
            "restrictions" = $8 
		WHERE "id" = $9;

    `;
    const sqlValues = [
        data.date,
        data.location,
        data.species,
        data.equipment,
        data.bagged,
        data.notes,
        data.image,
        data.restrictions,
        data.id
    ];
    pool.query(sqlText, sqlValues)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


module.exports = router