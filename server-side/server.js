require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const routes = require("./routes");

app.use(routes)
app.use(express.json());

const posts = [
    {
        username: "hoxie",
        title: "Post Een"
    },
    {
        username: "loxie",
        title: "Post Twee"
    }
];

let users = []

app.get("/posts", authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.body.name))
    // res.json(posts.filter(post => post.username === req.user.name))
})

app.get("/posts-unauth", (req, res) => {
    res.json(posts)
})

// app.post("/login", (req, res) => {
//     // to create a random SECRET TOKEN using crypto node js library
//     // require("crypto").randomBytes(64).toString("hex")

//     // After authentication using bcrypt hashed password
//     const username = req.body.name;
//     // to invoke jwt we need a user object (which we will get after authentication) and a secret token to serialize this with jwt sign function
//     const user = {name: username}

//     // we will be using two tokens, one of which is SECRET TOKEN and another is REFRESH TOKEN

//     const accessToken = jwt.sign(user, process.env.SECRET_TOKEN)
//     res.status(200).json({token: accessToken})
// })

function authenticateToken(req, res, next) {
    // this will come through an authorization header
    const authHeader = req.headers["authorization"];
    // authorization comes in a format of Bearer TOKEN, and we need TOKEN part of it
    const token = authHeader && authHeader.split(" ")[1];
    if(token === null) {
        return res.status(401).json({msg: "token undefined!!"})
    }

    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
        if(err) return res.sendStatus(403)
        // otherwise we have found a valid user, 
        // and we will keep it in req object for accesing from called function where it was used as a middleware
        console.log(user, "USER!!")
        req.user = user
        // move onto next function
        next()
    })
}

app.post("/users-noauth", (req, res) => {
    const user = { name: req.body.name, password: req.body.password }
    users.push(user);
    res.status(201).json({ success: true })
})

app.listen(3000, () => console.log("server running on 3000"))

/**
 * 
 * 
 // app.get("/users", (req, res) => {
//     res.json(users)
// })

// app.post("/users", async (req, res) => {
//     try {
//         // const salt = await bcrypt.genSalt();
//         // const hashedPassword = await bcrypt.hash(req.body.password, salt)

//         // shorthand version
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         console.log(hashedPassword)

//         // we dont need to save explicitly store salt in user record, as this already included into hash function
//         // const user = { name: req.body.name, password: hashedPassword, salt: salt }

//         const user = { name: req.body.name, password: hashedPassword }
//         users.push(user);
//         res.status(201).json({ success: true })
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({success: false})
//     }
// })

// app.get("/users/login", async (req, res) => {
//     const user = users.find(user => user.name === req.body.name)
//     if(user === null ) {
//         res.status(400).json({msg: "user is not found!!"})
//     }

//     try {
//         const compareCheck = await bcrypt.compare(req.body.password, user.password)
//         if(compareCheck) {
//             res.status(201).json({success: true})
//         } else {
//             res.status(500).json({success: false})
//         }
//     } catch(err) {
//         console.log(err);
//         res.status(500).json({success: false})
//     }
// })
 */