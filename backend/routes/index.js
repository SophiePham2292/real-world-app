const router = require('express').Router()
const path = require('path')
router.get('/login', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.get('/register', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.get('/settings', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.get('/editor', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.get('/editor/:slug', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.get('/@:username', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
router.get('/article/:slug', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router