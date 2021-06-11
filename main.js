const btn = document.querySelector('#load-button')

btn.addEventListener('click', () => {
  if (typeof __import__ !== 'undefined') {
    __import__('./lazy.js').then(mod => mod.modifyText(btn))
  } else {
    import('./lazy.js').then(mod => mod.modifyText(btn))
  }
})
