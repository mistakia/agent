const zillow = require('../lib/zillow')

zillow.info(process.argv[2], function(err, result) {
  if (err)
    return console.log(err)

  console.log(result)

  process.exit()
})
