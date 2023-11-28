 
const accordionItem = document.querySelectorAll('.accordion-item'); 
accordionHeader = document.querySelectorAll('.accordion-header')
// const accordionContent = document.getElementsByClassName('.accordion-content'); 


// form stuff

// const form = document.getElementsByTagName('form')
// const fullName = document.querySelectorAll('.fName'); 
// const email = document.querySelectorAll('.email'); 
// // const btn= document.getElementById('btn')
// form.addEventListener('submit', (e)=>{
//   let messages=[]
//   if(fullName.value===''|| fullName.value=null){
//     messages.push('full name is required')
//   }

//   e.preventDefault()
// })

// btn.addEventListener('submit', function(){
//       accordionContent.for((btn)=>{
//         form.addEventListener('click',()=>{
          
//           })
//       }
// });



document.addEventListener('DOMContentLoaded', function () {   


  accordionHeader.forEach((header)=>{
    header.addEventListener('click', ()=>{
        const accordionItem1 = header.closest('.accordion-item');
        const accordionContent = accordionItem1.querySelector('.accordion-content');


        const allAccordionContent = document.querySelectorAll('.accordion-content');
        allAccordionContent.forEach((content)=>{
          if(content!==accordionContent && content.classList.contains('active')){
              content.classList.remove('active');
              content.style.display = 'none';
          }
        });

        header.classList.toggle('active');
        accordionContent.classList.toggle('active');
        
        if(accordionContent.classList.contains('active')){
          accordionContent.style.display = 'block';
        }
        else{
          accordionContent.style.display = 'none';
        }

    });
  })


})