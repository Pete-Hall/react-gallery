const { query } = require('express');
const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

/* // PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route */

// PUT Route STRETCH
router.put('/like/:id', (req, res)=>{
    console.log(req.params);
    let queryString = `UPDATE gallery SET likes=likes+1 WHERE id=$1;`
    let values = [req.params.id]
    pool.query(queryString, values).then((results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
}) // END PUT route STRETCH

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    let queryString = `SELECT * FROM gallery ORDER BY id ASC;`
    pool.query(queryString).then((results)=>{
        res.send(results.rows);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
}); // END GET Route

// POST Route STRETCH
router.post('/', (req, res)=>{
    console.log(req.body);
    let queryString = `INSERT INTO gallery (path, description) VALUES ($1, $2);`;
    let values = [req.body.path, req.body.description];
    pool.query(queryString, values).then((results)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
}) // END POST Route

// DELETE Route STRETCH
router.delete('/delete/:id', (req, res) =>{
    console.log(req.params);
    let queryString = `DELETE FROM gallery WHERE id=$1;`;
    let values = [req.params.id];
    pool.query(queryString, values).then((results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;