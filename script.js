const btnEl = document.querySelector('.ripple')

btnEl.addEventListener('click', function (e) {
  // claculate the top and left positions of span based on clicked point and the button location
  const x = e.clientX // left position of clicked point
  const y = e.clientY // top position of clicked point
  const xOffset = btnEl.offsetLeft // left corner of target element (button)
  const yOffset = btnEl.offsetTop // top corner of target element (button)
  const circleLeft = x - xOffset
  const circleTop = y - yOffset
  // create span element
  const circle = document.createElement('span')
  circle.classList.add('circle')
  btnEl.appendChild(circle)

  // Set the left and top position of span element
  circle.style.left = `${circleLeft}px`
  circle.style.top = `${circleTop}px`
})
