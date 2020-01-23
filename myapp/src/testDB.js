const db = require('./util/database')
db.execute('SELECT username, password FROM users')
  .then(result => {
    console.log('BEFORE', result[0])
  })
  .catch(error => {
    console.log(error)
  })

db.execute('INSERT INTO users (username, password, plateno) VALUES (?, ?, ?)', ['testUserInsert2', 'fakePass123', 'PL8TN02']).catch(error => {
    console.log(error)
})

db.execute('SELECT username, password FROM users')
  .then(result => {
    console.log('AFTER', result[0])
  })
  .catch(error => {
    console.log(error)
  })