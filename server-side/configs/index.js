const bcrypt = require("bcrypt");

const generateHashedPassword = async (password, salt) => {
    try {
        const hashedPassword = await bcrypt.hash(password, salt)
        // console.log(hashedPassword, "hashedPassword!!");
        return hashedPassword
    } catch (err) {
        console.log(err, "ERROR!!")
    }
}

const compareHashedPassword = async (currentHash, storedHash) => {
    try {
        const comparePassword = await bcrypt.compare(currentHash, storedHash)
        return comparePassword
    } catch(err) {
        console.log(err, "ERROR!!")
    }
}

module.exports = {
    generateHashedPassword,
    compareHashedPassword
}