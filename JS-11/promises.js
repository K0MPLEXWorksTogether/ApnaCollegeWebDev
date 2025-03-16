let h1 = document.querySelector('h1')

function changeHeadingColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        h1.style.color = color
        resolve('Color Changed.')
      } catch (error) {
        reject('Encounted Error')
      }
    }, delay)
  })
}

let requestPromise = changeHeadingColor('red', 1000)
  .then(() => {
    console.log('Successfully Color Changed To Red')
    return changeHeadingColor('blue', 1000)
      .then(() => {
        console.log('Successfully Changed To Blue')
      })
      .catch(() => {
        console.log('Failed To Change To Blue.')
      })
  })
  .catch(() => {
    console.log('Failed To Change Color.')
  })
