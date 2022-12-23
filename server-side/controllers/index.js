const { generateHashedPassword, compareHashedPassword } = require("../configs");

const users = [];

const getAllUsers = (req, res, next) => {
    res.json({ sucess: true, users: users })
}

const createNewUser = (req, res, next) => {
    const name = req.body.name;

    const passwordPromise = generateHashedPassword(req.body.password, 10);

    passwordPromise.then(hashedPssword => {
        const user = { name: name, password: hashedPssword }
        users.push(user)
        res.status(201).json({ success: true })
    }).catch(err => {
        next(err)
        res.status(500).json({ success: false })
    })
}

const loginUser = (req, res, next) => {
    const name = req.body.name;
    const password = req.body.password;

    const user = users.find(user => user.name === name);
    
    if (user === null) {
        res.status(400).json({ msg: "user is not found!!" })
    }

    const comparedPromise = compareHashedPassword(password, user.password)
    // console.log(comparedPromise, user, password, "compared")
    
    comparedPromise.then(checkMatched => {
        if (checkMatched) {
            res.status(201).json({ success: true, user: user })
        } else {
            res.status(500).json({ success: false })
        }
    }).catch(err => {
        next(err)
        res.status(500).json({ success: false })
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    loginUser
}