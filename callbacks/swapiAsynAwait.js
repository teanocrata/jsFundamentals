const https = require('https')

function get (URL) {
  return new Promise((resolve, reject) => {
    https.get(URL, (response) => {
      response.on('data', (data) => {
        resolve(JSON.parse(data))
      })
    }).on('error', (error) => {
      reject(new Error(`Error on request: ${error.message}`))
    })
  })
}

function handleError (error) {
  console.log(`Request failed: ${error.message}`)
}

async function getLuke () {
  try {
    const luke = await get('https://swapi.co/api/people/1/?format=json')
    const homeworld = await get(luke.homeworld)
    console.log(`${luke.name} was born in ${homeworld.name}`)
  } catch (err) {
    handleError(err)
  }
}

getLuke()
