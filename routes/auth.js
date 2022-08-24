const authRouter = require('express').Router()
const User = require('../models/user')

authRouter.post('/checkCredentials', async (req, res) => {
  const { password, email } = req.body
  User.findByEmail(email)
    .then(user => {
      if (!user) return Promise.reject('USER_NOT_FOUND')
      return User.verifyPassword(password, user.hashedPassword)
    })
    .then(passwordIsCorrect => {
      if (!passwordIsCorrect) return Promise.reject('WRONG_PASSWORD')
      res.status(200).json({ message: 'OK' })
    })
    .catch(err => {
      console.error(err)
      if (err === 'USER_NOT_FOUND')
        res.status(404).json({ message: 'User not found' })
      else if (err === 'WRONG_PASSWORD')
        res.status(401).json({ message: 'Wrong password' })
      else res.status(500).send('Error retrieving user from database')
    })
})

module.exports = authRouter
