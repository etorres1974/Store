/*
const express = require("express")
const router = express.Router()

const mongodb = require("mongodb")
const user = "abc"
const pass = "123"
const mongo = `mongodb+srv://${user}:${pass}@mycluster-sbfan.gcp.mongodb.net/test?retryWrites=true&w=majority`


router.get("/", async (req,res) =>{
    const posts = await loadPostsCollections()
    res.send(await posts.find({}).toArray())
})

router.post("/", async (req,res) =>{
    const posts = await loadPostsCollections()
    await posts.insertOne({
        descricao: req.body.descricao,
        img: req.body.img,
        flex: req.body.flex,
        fav: req.body.fav,
        createdAt: new Date()
    })
    res.status(201).send()
})

router.delete("/delete/:id", async (req,res) =>{
    const posts = await loadPostsCollections()
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send() 
})

router.delete("/delAll", async (req,res) =>{
    
    const posts = await loadPostsCollections()
    await posts.deleteMany({})
    res.status(200).send("Clear")
})

async function loadPostsCollections(){
    const client = await mongodb.MongoClient.connect(mongo, { useUnifiedTopology: true })
    return client.db("Database_Name").collection("posts")
}
module.exports = router
*/