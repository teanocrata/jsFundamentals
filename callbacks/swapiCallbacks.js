const https = require('https')

function get (URL, callback) {
  https.get(URL, (response) => {
    response.on('data', (data) => {
      callback(null, JSON.parse(data))
    })
  }).on('error', (error) => {
    callback(new Error(`Error on request: ${error.message}`))
  })
}

function handleError (error) {
  console.log(`Request failed: ${error.message}`)
}

get('https://swapi.co/api/people/1/?format=json', (error, luke) => {
  if (error) return handleError(error)
  return get(luke.homeworld, (err, homeworld) => {
    if (error) return handleError(err)
    return console.log(`${luke.name} was born in ${homeworld.name}`)
  })
})
