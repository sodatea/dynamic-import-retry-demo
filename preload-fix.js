self.__import__ = (url) => new Promise((resolve, reject) => {
  const modulePath = '.'
  const baseURL = new URL(modulePath, location);
  const absURL = new URL(url, baseURL);

  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'script'
  link.href = absURL

  document.head.appendChild(link)

  link.addEventListener('load', () => {
    resolve(import(absURL))
  })
  link.addEventListener('error', (e) => {
    document.head.removeChild(link)
    console.log(e)
    reject(e)
  })
})
