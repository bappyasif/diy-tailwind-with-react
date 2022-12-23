require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const routes = require("./routes");

app.use(routes)
app.use(express.json());

let refreshTokens = [];

app.post("/rToken", (req, res) => {
    const refreshToken = req.body.token

    if(refreshToken === null) return res.sendStatus(401);

    console.log(refreshTokens, refreshToken, "RTOKEN")

    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    // at this point it means user is authenticated and ready for jwt sign process
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
        if(err) return res.sendStatus(403);

        // we are just sending in required informations for user object, not those other already included props
        const accessToken = generateAccessToken({name: user.name})
        res.status(201).json({accessToken: accessToken})
    })
})

app.delete("/logout", (req, res) => {
    // we would normally delete this from database sessions/cookies
    // but in this scenario we are just clearing it up from out refreshTokens array
    const currentToken = req.body.token;
    refreshTokens = refreshTokens.filter(token => token !== currentToken)

    console.log(refreshTokens, currentToken, "LOGOUT")

    res.status(204).json({msg: "user logged out successfully"})
})

app.post("/login", (req, res) => {
    // to create a random SECRET TOKEN using crypto node js library
    // require("crypto").randomBytes(64).toString("hex")

    // After authentication using bcrypt hashed password
    const username = req.body.name;
    // to invoke jwt we need a user object (which we will get after authentication) and a secret token to serialize this with jwt sign function
    const user = {name: username}

    // we will be using two tokens, one of which is SECRET TOKEN and another is REFRESH TOKEN
    const accessToken = generateAccessToken(user)
    
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN)
    refreshTokens.push(refreshToken);

    res.status(200).json({token: accessToken, refreshToken: refreshToken})
})


function generateAccessToken (user) {
    // this token will expire in 15 sec, usefull for testing purposes
    return jwt.sign(user, process.env.SECRET_TOKEN, {expiresIn: "15s"})
}

// this server will be only responsible for authentication based requests, such as login and Refresh Token
app.listen(4000, () => console.log("server running on 4000"))