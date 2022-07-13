'use strict'/*Para combater deficiências, você pode ativar o modo estrito, que reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.*/
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
  document.body.classList.toggle('dark-theme')

   var className = document.body.className;
   if(className == "light-theme"){
       this.textContent = "Dark";
     }
       else{
       this.texrContent = "Light";
       }
       console.log('current class name: ' + className);
         });