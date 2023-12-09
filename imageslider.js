let slides=document.querySelectorAll(".slide");
let button1=document.querySelector("button");
let count=0;



slides.forEach((slide,index)=>{
slide.style.left=`${index*100}%`;
})




function prev(){
if(count!=0){
    count--;
    slideimage();
   

}
else
button1.classList.add('button');

    
}



function next(){
   
    if(count<slides.length-1){
       
        count++;
        slideimage();
   }
}




const slideimage=()=>{
    slides.forEach((slide)=>{
slide.style.transform=`translate(-${count*100}%)`;
    })
}