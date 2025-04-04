

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

document.addEventListener("DOMContentLoaded", function () {
    var mtcHeroInside = document.querySelector(".mtc_hero_inside");
    var bgVal = mtcHeroInside.getAttribute("mobile-color");
  
    if (bgVal) {
      mtcHeroInside.style.background = bgVal;
    }
  });
  