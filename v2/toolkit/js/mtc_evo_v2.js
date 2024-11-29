//toolkit/js/mtc_evo_v2.js
function mtc_evo_v2_add_route(add_route_array) {
    let add_route_div = '<div id="mtc_evo_v2_route">';
    for (let i = 0; i < add_route_array.length; i++) {
      add_route_div +=
        '<a class="mtc_evo_v2_route_link" href="' +
        add_route_array[i][1] +
        '">' +
        add_route_array[i][0] +
        "</a>";
      if (i <= add_route_array.length - 2) {
        add_route_div +=
          '/';
      }
    }
    add_route_div += "</div>";
    const add_route_pageContent = document.querySelector(".page_content");
    add_route_pageContent.insertAdjacentHTML("afterbegin", add_route_div);
  }



  document.addEventListener("DOMContentLoaded", function () {
    console.log("[DEV] : MTC Evolution V2 WebKit used");

    document.querySelectorAll('.mtc_evo_v2_popup_block').forEach(block => {
        block.setAttribute('onclick', `mtc_evo_v2_popoup('${block.id}')`);
        
        let svgElement = `<svg class="mtc_evo_v2_popup_close_button" onclick="mtc_evo_v2_popoup('${block.id}')" fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 19.5L19.425 4.5M19.5 19.5L4.575 4.5" stroke="#292C48" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
        block.querySelector('.mtc_evo_v2_popup_block_inside').insertAdjacentHTML('beforeend', svgElement);
        block.querySelector('.mtc_evo_v2_popup_close_button').insertAdjacentHTML('beforeend', svgElement);
        
        block.querySelector('.mtc_evo_v2_popup_block_inside').addEventListener('click', (event) => {
            event.stopPropagation();
        });
      });
      
      
      
      });
      
      function mtc_evo_v2_popoup(id) {
        target1 = document.getElementById(id);
        var inside = target1.querySelector(".mtc_evo_v2_popup_block_inside");
        if (target1.style.display === "none" || target1.style.display === "") {
          target1.style.display = "flex";
          setTimeout(function () {
            target1.classList.add("show");
          }, 10); // Delay to trigger transition
        } else {
          target1.classList.remove("show");
          setTimeout(function () {
            target1.style.display = "none";
          }, 300); // Match the transition duration
        }
      }
      
      function mtc_evo_v2_getCurrentUrl() {
        // Get the current URL including all query parameters
        var url = window.location.href;
        return url;
      }
      
      function mtc_evo_v2_form_comanda_new(
        formId,
        serviceValue,
        tagValue,
        infoValue
      ) {
        // Get the form element by its ID
        const evlutions_form = document.getElementById(formId);
      
        // Check if the form exists
        if (evlutions_form) {
          // Set the form attributes
          evlutions_form.action = "/comanda_marketing";
          evlutions_form.dataset.type = "thankyou-page-form";
          evlutions_form.method = "post";
      
          // Helper function to create and append hidden input
          const addHiddenInput = (name, value) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.value = value;
            evlutions_form.appendChild(input);
          };
      
          // Add the hidden inputs
      
          if (evlutions_form && !evlutions_form.querySelector('input[name="lang"]')) {
            addHiddenInput("lang", lang);
          }
          if (
            evlutions_form &&
            !evlutions_form.querySelector('input[name="source"]')
          ) {
            addHiddenInput("source", mtc_evo_v2_getCurrentUrl());
          }
          if (
            evlutions_form &&
            !evlutions_form.querySelector('input[name="service"]')
          ) {
            addHiddenInput("service", serviceValue);
          }
          if (evlutions_form && !evlutions_form.querySelector('input[name="tag"]')) {
            addHiddenInput("tag", tagValue);
          }
          if (evlutions_form && !evlutions_form.querySelector('input[name="info"]')) {
            addHiddenInput("info", infoValue);
          }
          if (
            evlutions_form &&
            !evlutions_form.querySelector('input[name="_token"]')
          ) {
            addHiddenInput("_token", "ymN6zXmxrKDbUCi1sq7MDG5YOhXhPz1m3QXNNNhW");
          }
        } else {
          console.error(`Form with id ${formId} does not exist.`);
        }
      }



      function mtc_evo_v2_mobile_initializeSlickCarousel() {
        var carousel = $('.mtc_evo_v2_carousell_options_mobile');
        if (carousel.length) { // Checks if the element exists
            carousel.slick({
      
              arrows: false,
              dots: false,
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2500,
              variableWidth: true,
              responsive: [
                  {
                      breakpoint: 1351,
                      settings: {
                          slidesToShow: 3,
                      },
                  },
                  {
                      breakpoint: 951,
                      settings: {
                          slidesToShow: 2,
                      },
                  },
                  {
                      breakpoint: 651,
                      settings: {
                          slidesToShow: 1,
      
                      },
                  },
              ],
        });
      } else {
          console.error('Carousel element not found');
      }
      }