document.addEventListener('DOMContentLoaded',()=>{
    const header_1 = document.querySelector('#header_1'),
          activadores=document.querySelectorAll('.disparador'),
          navs=document.querySelectorAll('.header__nav'),
          formMorado=document.querySelector('form.form-morado');
    
    formMorado.addEventListener('submit',(e)=>{
        e.preventDefault();
    })
    activadores.forEach((activador,i) => {
        const enlaces=navs[i].querySelectorAll('a');
        enlaces.forEach((enlace,i)=>{
            enlace.addEventListener('click',()=>{
                console.log(enlace.parentNode.parentNode.parentNode)
               if (enlace.parentNode.parentNode.parentNode.classList.contains('active')) {
                enlace.parentNode.parentNode.parentNode.classList.remove('active')
               };
           });
        });
        activador.addEventListener('click',()=>{
            if(navs[i].classList.contains('active')){
                navs[i].classList.remove('active');
            }else{
                navs[i].classList.add('active');
            }
        });
    });
    window.addEventListener('scroll',(e)=>{
      let scroll = window.pageYOffset|| document.documentElement.scrollTop;
      if(scroll>400){
         header_1.style.top="0"
         }else{
            header_1.style.top="-120px"
         }
    })
    

})


