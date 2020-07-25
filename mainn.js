/*code to fade offset top document gradually*/
$(document).ready(function(){
  var doc=$(document);
  var content=$(".fade-scroll");

  doc.on("scroll",function(){
    var scrolledpixel=doc.scrollTop();
    
    content.each(function(){
      var allcontents=$(this);
      var elementscrolled=allcontents.offset().top;
      var unit=scrolledpixel-elementscrolled;
      if(scrolledpixel>elementscrolled){
        allcontents.css({"opacity":1-(unit)/400});
      }
    })
  })
});
/*done*/

/*code to SLIDE IN ELEMENTS*/
var sliders=document.querySelectorAll(".slide-in");
const appearoptions={threshold:0, rootMargin:"0px 0px -100px 0px"};
var appearonscroll=new IntersectionObserver(function(entries,appearonscroll){
 entries.forEach(entry=>{
   if(!entry.isIntersecting){
     return;
   } else{
     entry.target.classList.add("appear");
     appearonscroll.unobserve(entry.target);
   }
 });
},appearoptions);

sliders.forEach(slider=>{
  appearonscroll.observe(slider);
});
