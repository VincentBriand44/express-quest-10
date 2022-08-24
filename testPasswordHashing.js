const User = require('./models/user')

User.verifyPassword(
  'myPlainPassword',
  '$argon2id$v=19$m=65536,t=5,p=1$sD6ER1vpluDZO2mQSfoeCQ$K5rh3WqE/2EARLmPgJXe8mo8oGKBuq+EmFG0yQesrUg'
).then(passwordIsCorrect => {
  console.log(passwordIsCorrect)
})

User.hashPassword('myPlainPassword').then(hashedPassword => {
  console.log(hashedPassword)
})
