window.addEventListener('load', () => {
  const button = document.querySelector('#hamburger')
  const nav = document.querySelector('#nav')
  const body = document.querySelector('body')
  button.addEventListener('click', () => {
    nav.classList.toggle('-translate-x-full')
    body.classList.toggle('overflow-hidden')
    window.scrollTo(0, 0)
  })
})
