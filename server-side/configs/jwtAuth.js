require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateUserAccessToken = (user) => {
    return jwt.sign(user, process.env.SECRET_TOKEN, {expiresIn: "15s"})
}

const generateUserRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN)
}

const verifyCallback = (err, user) => {
    if(err) return undefined

    // console.log(user, "CALLBACK!!")
    // const generateToken = generateUserAccessToken({name: user.name})
    const generateToken = generateUserAccessToken(user)
    return generateToken;
}

const verifyRefreshTokenAndGenerateJwtAccessToken = (refreshToken) => {
    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN, verifyCallback)
}

module.exports = {
    generateUserAccessToken,
    generateUserRefreshToken,
    verifyRefreshTokenAndGenerateJwtAccessToken
}