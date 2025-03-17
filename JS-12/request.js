let url = 'https://catfact.ninja/fact'

async function getFacts() {
  try {
    let response = await fetch(url)
    let data = await response.json()
    console.log(data.fact)
  } catch (err) {
    console.log('error due to', err)
  }
}

getFacts()
