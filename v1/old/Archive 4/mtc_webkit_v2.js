//bottom button scroll up
document.documentElement.addEventListener('click', function(e) {
    let target = e.target;
  while (target != document.documentElement) {
      if (target.matches('.mtc_bottom_buton')) {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
          break; 
      }
      target = target.parentNode; 
  }
});


//---------------------------------------------------------------------
//reveal script
function reveal() {
  var reveals = document.querySelectorAll(".reveal");



  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight * 1.2;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;



      if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");

      } else {
          reveals[i].classList.remove("active");
      }
  }
}
window.addEventListener("scroll", reveal);

//---------------------------------------------------------------------

function scroll_to_div(to_where) {
  document.getElementById(to_where).scrollIntoView({ behavior: 'smooth', block: 'center' });

}

//---------------------------------------------------------------------



function popoup(id) {
 
  target1 = document.getElementById("mtc_popup_block_" + id);
  if (target1.style.display == 'none') {
      target1.style.display = 'flex';
  }
  else {
      target1.style.display = 'none'
  }
}

function qa(id) {
  console.log('aaaa');
  target2 = document.querySelector("#mtc_qa_block_"+id+" .mtc_qa_block_bottom")
  target3 = document.querySelector("#mtc_qa_block_"+id+" .mtc_qa_block_svg")
  target4 = document.querySelector("#mtc_qa_block_"+id+" .mtc_qa_block_top")
  target5 = document.querySelector("#mtc_qa_block_"+id+" .mtc_qa_block_top .mtc_qa_block_svg_path")
 
  
 
  if (target2.style.display == 'none') {
      target2.style.display = 'flex';
      target3.style.transform = 'rotate(180deg)';
      target4.classList.add('mtc_qa_block_top_active');
      target5.classList.add('mtc_qa_block_svg_path_active');
  }
  else {
      target2.style.display = 'none';
      target3.style.transform = 'rotate(0deg)';
      target4.classList.remove('mtc_qa_block_top_active');
      target5.classList.remove('mtc_qa_block_svg_path_active');
  }
}












//---------------------------------------------------------------------
//mtc footer config
function set_footer(){
var mtc_footer_buttons = JSON.parse(localStorage.getItem('mtc_footer_buttons'));
document.getElementById('mtc_footer_contacte').innerHTML = mtc_footer_buttons[0];
document.getElementById('mtc_footer_magazine').innerHTML = mtc_footer_buttons[1];
document.getElementById('mtc_footer_licitaÈ›ii').innerHTML = mtc_footer_buttons[2];


  var mtc_footer = JSON.parse(localStorage.getItem('mtc_footer'));
var footer_content=''

mtc_footer.forEach(item => {
 footer_content+='<div class="mtc_footer_content_column">'
 footer_content+= '<div class="mtc_footer_content_title">'+item.name+'</div>'
 if (item.children) {
   item.children.forEach(child => {
     footer_content+= '<a class="mtc_footer_content_list" href="'+child.link+'"">'+child.name+'</a>'
   });
 }
 footer_content+='</div>'
});
document.getElementById('mtc_footer_content').innerHTML = footer_content;
}





//---------------------------------------------------------------------
//mtc importing jquery

// Create a script element
var script = document.createElement('script');

// Set the src attribute to the URL of the jQuery library
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';

// Set the type attribute
script.type = 'text/javascript';

// Append the script element to the head of the document
document.getElementsByTagName('head')[0].appendChild(script);

// Ensure jQuery is loaded before using it
script.onload = function() {
  // You can safely use jQuery in this block
  console.log('jQuery loaded successfully');
  // Example usage
  $('body').css('background-color', 'lightblue');
};




//---------------------------------------------------------------------
//seting the mtc-footer to auto-load
document.addEventListener('DOMContentLoaded', function() {

  fetch('https://www.moldtelecom.md/new/html/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('mtc_footer').innerHTML = data;
          set_footer()
      });

      const element = document.getElementById('mtc_footer');
      // If the element exists, log 'bbbb' to the console
      if (element) {
        // Select all elements with the class 'footer_holder' and 'back_top_container'
const footerHolders = document.querySelectorAll('.footer_holder');
const backTopContainers = document.querySelectorAll('.back_top_container');


      }

// Function to set display to none for a NodeList
function hideElements(elements) {
elements.forEach(element => {
  element.style.display = 'none';
});
}

// Hide the selected elements
hideElements(footerHolders);
hideElements(backTopContainers);
      

});