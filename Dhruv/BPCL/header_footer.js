//logo_main code 

  window.onscroll=function() {changeSize()};
 
 
  function changeSize(){
   let image=document.querySelector("#logo_main");
   let final_nav=document.querySelector(".final_nav")
 //   image.style.height=30+"px";
 // console.log(document.documentElement.scrollTop)
   if(document.documentElement.scrollTop > 30){
     final_nav.style.position="fixed";
     image.style.height=85+"px";
     image.style.width=70+"px";
   }else{
     final_nav.style.position="sticky";
     image.style.height=160+"px";
     image.style.width=128+"px";
   }
 
   image.style.transition="all";
   image.style.transition=0.25+"s";
   image.style.transition="ease";
 
 }
 
 // footer
 
 let up=document.querySelector(".up_button");
 let footer=document.querySelector(".down_button");
 let footer_min=document.querySelector(".footer_min")
 let footer_max=document.querySelector(".footer_max")
 up.addEventListener("click" , () =>{
   if(footer_min.style.display !="none"){
     footer_min.style.display="none"
     footer_max.style.display="flex"
     
   }
   else{
     footer_min.style.display="flex"
     footer_max.style.display="none"
   }
   console.log(footer_min.style.display)
 });
 
 footer.addEventListener("click" , () =>{
   if(footer_min.style.display !="none"){
     footer_min.style.display="none"
     footer_max.style.display="flex"
     
   }
   else{
     footer_min.style.display="flex"
     footer_max.style.display="none"
   }
   console.log(footer_min.style.display)
 });