document.addEventListener('DOMContentLoaded', function () {
  // Scroll Smooth
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  // Burger
  const burger = document.querySelector('.site-header__burger')
  const line1 = document.querySelector('.burger-header__line_1')
  const line2 = document.querySelector('.burger-header__line_2')
  const line3 = document.querySelector('.burger-header__line_3')
  const line4 = document.querySelector('.burger-header__line_4')
  const menu = document.querySelector('.site-header__nav')
  const link = document.querySelectorAll('.site-header__link')

  burger.addEventListener('click', function () {
    line1.classList.toggle('is-active')
    line2.classList.toggle('is-active')
    line3.classList.toggle('is-active')
    line4.classList.toggle('is-active')
    menu.classList.toggle('menu-active')
  })

  link.forEach(function (domEls) {
    domEls.addEventListener('click', function () {
      menu.classList.remove('menu-active')
      line1.classList.remove('is-active')
      line2.classList.remove('is-active')
      line3.classList.remove('is-active')
      line4.classList.remove('is-active')
    })
  })

})
