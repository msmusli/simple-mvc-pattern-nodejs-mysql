

var connection = require('./connection');

  connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
      connection.query('SELECT * FROM students', function(err, results) {
        if (err) throw err
        console.log(results)
      })
    
})
 
