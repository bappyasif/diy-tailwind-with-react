const { generateUserAccessToken, generateUserRefreshToken, verifyRefreshTokenAndGenerateJwtAccessToken } = require("../configs/jwtAuth");

let refreshTokens = [];

const loginAndGenerateTokens = (req, res) => {
    // to create a random SECRET TOKEN using crypto node js library
    // and use it twice to get two distinct strings and save them into env variables(SECRET_TOKEN, REFRESH_TOKEN)
    // require("crypto").randomBytes(64).toString("hex")

    const username = req.body.name;
    // to serialize current user, and we would only need its username for now, rest will be generated from jwt
    const user = {name: username}

    // we will be generating two tokens, one of Access token will be very short lived, and a Refresh token which will be used to get new Access token to get authentication into protected routes
    const accessToken = generateUserAccessToken(user)
    const refreshToken = generateUserRefreshToken(user);

    // this is where we will store it someplace, preferably in a database but in this case we will store it in array for simplicity
    refreshTokens.push(refreshToken)

    res.status(200).json({accessToken: accessToken, refreshToken: refreshToken})
}

const logoutUser = (req, res) => {
    const currentToken = req.body.refreshToken;

    // removing refresh token from refreshTokens array so that it doesnt find that token for verification process
    refreshTokens = refreshTokens.filter(token => token !== currentToken)

    // console.log(refreshTokens, "LOGOUT!!", currentToken)

    res.status(204).json({msg: "user is logged out!!"})
}

const getAccessUsingRefreshToken = (req, res) => {
    const currentRefreshToken = req.body.refreshToken;

    if(currentRefreshToken === null) return res.status(401).json({msg: "token is not found!!"})

    if(!refreshTokens.includes(currentRefreshToken)) return res.status(403).json({msg: "token does not match!!"})

    const verifyAndGenerateToken = verifyRefreshTokenAndGenerateJwtAccessToken(currentRefreshToken)
    
    if(verifyAndGenerateToken === undefined) return res.status(403).json({msg: "token does not match!!"})

    res.status(201).json({accessToken: verifyAndGenerateToken})
}

module.exports = {
    loginAndGenerateTokens,
    logoutUser,
    getAccessUsingRefreshToken
}