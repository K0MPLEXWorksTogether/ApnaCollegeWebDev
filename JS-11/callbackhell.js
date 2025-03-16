h1 = document.querySelector('h1')

function changeHeadingColor(color, delay, nextColor) {
  setTimeout(() => {
    h1.style.color = color
    if (nextColor) nextColor()
  }, delay)
}

changeHeadingColor('orange', 1000, () => {
  changeHeadingColor('blue', 1000, () => {
    changeHeadingColor('green', 1000, () => {
      changeHeadingColor('blue', 1000, () => {
        changeHeadingColor('yellow', 1000)
      })
    })
  })
})
