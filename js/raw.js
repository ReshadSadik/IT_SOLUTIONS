
const choosePaso = document.getElementById("accordionExample");
const tt = document.getElementsByClassName("single-option");


        choosePaso.addEventListener('click', event =>{

        // for(const item of tt){
        // item.classList.remove("option-blue");
        // }
        event.target.classList.add('active');

        choosePaso.querySelector('.option-blue').classList.remove('option-blue');
        
        // event.currentTarget.childNodes.item(11).classList.add('option-blue');
        // console.log(event.currentTarget.childNodes);


                if(choosePaso.querySelector('.active')){

                        choosePaso.querySelector('.single-option').classList.add('option-blue');
                
                }

        // if(parent.parentNode.classList.contains('single-option')
        // ){
                
        //         parent.parentNode.classList.add('option-blue');
        // }

        // else if(parent.classList.contains('single-option')){
        //         parent.classList.add('option-blue');
        // }

        // choosePaso.querySelector('.single-option').classList.add('option-blue');
        })




// for (const item of tt) {
//         choosePaso.addEventListener('click', function (event) {

//         //         item.classList.remove("option-blue");
//         //         if (event.target.parentNode.classList.contains("single-option")){
//         // event.target.parentNode.classList.add("option-blue");
//         //         }

//         console.log(event.target);

//         }
//         )
//         }


function myFunction() {
        document.documentElement.scrollTop = 0;
}



window.onscroll = function() {Red()};

function Red() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
   const singleServices= document.querySelectorAll('.single-service');
   singleServices.forEach(service=>{
 service.classList.add('red');

   })
}
}


// document.getElementById('service').onscroll = (event) =>{

//         const singleServices= document.querySelectorAll('.single-service');
//         singleServices.forEach(service=>{
//         service.classList.add('red');

// }


// function Red(){
// })
// }