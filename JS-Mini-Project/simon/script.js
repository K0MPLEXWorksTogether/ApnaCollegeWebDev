let gameSeq = []
let userSeq = []
let started = false
let level = 0
let colors = ['pink', 'aqua', 'orange', 'blue']
let items = document.querySelectorAll('.item')
let h2 = document.querySelector('h2')
let maxLevel = 0;

for (btn of items) {
  btn.addEventListener('click', itemClick)
}

document.addEventListener('keypress', function () {
  if (started == false) {
    started = true
    console.log('Game Has Started.')

    levelUp()
  }
})

function itemFlash(item) {
  item.classList.add('flash')
  setTimeout(() => {
    item.classList.remove('flash')
  }, 500)
}

function userFlash(item) {
  item.classList.add('userFlash')
  setTimeout(() => {
    item.classList.remove('userFlash')
  }, 500)
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000)
    }
    console.log('Check Passed.')
  } else {
    h2.innerText = `Game Over. Press Any Key To Start. Your Maximum Score Was ${maxLevel}.`;
    reset()
  }
}

function itemClick() {
  userFlash(this)
  userSeq.push(this.getAttribute('id'))
  checkAns(userSeq.length - 1)
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

function levelUp() {
  userSeq = []
  level++
  maxLevel = Math.max(level, maxLevel);
  h2.innerHTML = `Level ${level}`

  let randIdx = Math.floor(Math.random() * 4)
  let randColor = colors[randIdx]
  gameSeq.push(randColor)
  let randItem = document.querySelector(`.${randColor}`)
  itemFlash(randItem)
}
