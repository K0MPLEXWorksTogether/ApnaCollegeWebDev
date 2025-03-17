const options = {
  method: 'GET',
  url: 'https://cataas.com/cat',
  params: { position: 'center' },
}

async function getCat() {
  try {
    const { data } = await axios.request(options)
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

getCat()
