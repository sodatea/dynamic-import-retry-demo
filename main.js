const btn = document.querySelector('#load-button')

btn.addEventListener('click', () => {
  if (__import__) {
    __import__('./lazy.js').then(mod => mod.modifyText(btn))
  } else {
    import('./lazy.js').then(mod => mod.modifyText(btn))
  }
})
