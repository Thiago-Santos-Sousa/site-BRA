'use strict' /*Para combater deficiências, você pode ativar o modo estrito, que reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.*/
const switcher = document.querySelector('.btn')

switcher.addEventListener('click', function () {
  var className = document.body.className
  if (className == 'light-theme') {
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
    this.textContent = 'Dark'
  } else {
    this.textContent = 'Light'
    document.body.classList.remove('dark-theme')
    document.body.classList.add('light-theme')
  }
  console.log('current class name: ' + className)
})
