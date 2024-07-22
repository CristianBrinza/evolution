//toolkit/js/mtc_evolution.js
function mtc_evolution_add_route(add_route_array) {
  let add_route_div = '<div id="mtc_evolution_route">';
  for (let i = 0; i < add_route_array.length; i++) {
    add_route_div +=
      '<a class="mtc_evolution_route_link" href="' +
      add_route_array[i][1] +
      '">' +
      add_route_array[i][0] +
      "</a>";
    if (i <= add_route_array.length - 2) {
      add_route_div +=
        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3.5L10.25 8L5.75 12.5" stroke="black" stroke-opacity="0.4" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }
  }
  add_route_div += "</div>";
  const add_route_pageContent = document.querySelector(".page_content");
  add_route_pageContent.insertAdjacentHTML("afterbegin", add_route_div);
}

let disclamer_ro =
  "Stimate client, Moldtelecom.md face eforturi permanente pentru a păstra acuratețea informațiilor din acest site. Cu toate acestea, rareori, informațiile plasate pe site pot conține in advertențe punctuale, cum ar fi: unele specificații sau prețuri pot fi modificate de către producător, fără preaviz sau pot conține erori de operare. În cazul în care prețurile sau alte detalii referitoare la produse au fost afișate greșit, inclusiv din cauza faptului că au fost introduse greșit în baza de date, www.moldtelecom.md, S. A „Moldtelecom” își rezervă dreptul de a anula comercializarea produsului respectiv și de a anunța clientul în cel mai scurt timp despre eroarea aparută. Îți mulțumim pentru înțelegere.";
let disclamer_ru =
  'Уважаемый клиент, Moldtelecom.md прилагает постоянные усилия для обеспечения точности информации на этом сайте. Однако, в редких случаях, информация, размещенная на сайте может содержать точечные неточности, такие как: некоторые характеристики или цены могут быть изменены производителем без предварительного уведомления или могут содержать операционные ошибки. В случае, если цены или другие данные, относящиеся к продуктам, были отображены неправильно, в том числе из-за того, что они были неправильно введены в базу данных, www.moldtelecom.md, S.A „Moldtelecom" оставляет за собой право отменить продажу соответствующих продуктов и как можно скорее уведомить клиента о возникшей ошибке. Спасибо за понимание.';

//hide
function hideElements(elements) {
  elements.forEach((element) => {
    element.style.display = "none";
  });
}

// Insert the loading animation div as the first element of the body
function insertLoadingDiv() {
  const div = document.createElement("div");
  div.id = "mtc_evolution_loadingAnimationSVG";
  div.innerHTML =
    '<img id="mtc_evolution_loading_img" alt="loading" src="../../images/general/loading.png">';
  document.body.insertBefore(div, document.body.firstChild);
}

function redirectToPage(redirectToPageLink) {
  // Create and show the loading overlay
  var overlay = document.createElement("div");
  overlay.className = "mtc_evolution_loading-overlay";
  var spinner = document.createElement("div");
  spinner.className = "mtc_evolution_loading-spinner";
  overlay.appendChild(spinner);
  document.body.appendChild(overlay);
  overlay.style.display = "flex";

  // Redirect immediately
  window.location = redirectToPageLink;
}

function redirectToPageSVG(redirectToPageLinkSVG) {
  // Show the loading animation
  var mtc_loadingAnimationSVG = document.getElementById(
    "mtc_evolution_loadingAnimationSVG"
  );
  mtc_loadingAnimationSVG.style.display = "flex";

  // Redirect immediately
  window.location = redirectToPageLinkSVG;
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("[DEV] : MTC Evolution WebKit used");
  const mtc_evolution_footer_text = document.getElementById(
    "mtc_evolution_footer_text"
  );
  if (mtc_evolution_footer_text) {
    if (lang === "ro") {
      mtc_evolution_footer_text.innerText = disclamer_ro;
    } else if (lang === "ru") {
      mtc_evolution_footer_text.innerText = disclamer_ru;
    }
  }

  // Insert the loading animation div
  insertLoadingDiv();

  fetch("../../toolkit/html/mtc_evolution_footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footerElement = document.getElementById("mtc_evolution_footer");
      // Check if the element exists
      if (footerElement) {
        footerElement.innerHTML = data;
        mtc_evolution_set_footer();
        mtc_evolution_hideoldfooter();
      }
    });

  const elements = document.querySelectorAll(".mtc_evolution_glow_effect");

  elements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      element.style.setProperty("--mouse-x", `${x}px`);
      element.style.setProperty("--mouse-y", `${y}px`);
    });

    element.addEventListener("mouseleave", () => {
      element.style.setProperty("--mouse-x", "50%");
      element.style.setProperty("--mouse-y", "50%");
    });
  });

  const scrollSnaps = document.querySelectorAll(".scrollsnap");
  let isScrolling = false;

  function debounce(func, wait = 12) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  function handleScroll() {
    if (isScrolling) return;
    isScrolling = true;

    let centerOffset = window.innerHeight / 2;

    scrollSnaps.forEach((snap) => {
      let rect = snap.getBoundingClientRect();
      let elementCenter = rect.top + rect.height / 2;
      let distanceFromCenter = Math.abs(centerOffset - elementCenter);

      if (distanceFromCenter < 140) {
        window.scrollTo({
          top: window.scrollY + rect.top - centerOffset + rect.height / 2,
          behavior: "smooth",
        });
      }
    });

    setTimeout(() => {
      isScrolling = false;
    }, 700); // Adjust this if needed to better match the smoothness of the scroll
  }

  window.addEventListener("scroll", debounce(handleScroll, 100));
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mtc_evolution_qa_show').forEach(function(showElement) {
    showElement.addEventListener('click', function() {
        var hiddenElement = this.nextElementSibling;
        var svgElement = this.querySelector('svg');
        
        if (hiddenElement.style.display === 'none' || hiddenElement.style.display === '') {
            hiddenElement.style.display = 'block';
            svgElement.style.transform = 'rotate(45deg)';
        } else {
            hiddenElement.style.display = 'none';
            svgElement.style.transform = 'rotate(0deg)';
        }
    });
});
});


function evolution_popoup(id) {
  target1 = document.getElementById("mtc_evolution_popup_block_" + id);
  var inside = target1.querySelector(".mtc_evolution_popup_block_inside");
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

function mtc_evolution_getCurrentUrl() {
  // Get the current URL including all query parameters
  var url = window.location.href;
  return url;
}

function mtc_evolution_form_comanda_new(
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
      addHiddenInput("source", mtc_evolution_getCurrentUrl());
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

//---------------------------------------------------------------------
//mtc footer config
function mtc_evolution_set_footer() {
  var mtc_evolution_footer_buttons = JSON.parse(
    localStorage.getItem("mtc_footer_buttons")
  );
  document.getElementById("mtc_evolution_footer_contacte").innerHTML =
    mtc_evolution_footer_buttons[0];
  document.getElementById("mtc_evolution_footer_magazine").innerHTML =
    mtc_evolution_footer_buttons[1];
  document.getElementById("mtc_evolution_footer_licitatii").innerHTML =
    mtc_evolution_footer_buttons[2];

  var mtc_evolution_footer = JSON.parse(localStorage.getItem("mtc_footer"));
  var footer_content = "";

  mtc_evolution_footer.forEach((item) => {
    footer_content += '<div class="mtc_evolution_footer_content_column">';
    footer_content +=
      '<div class="mtc_evolution_footer_content_title">' + item.name + "</div>";
    if (item.children) {
      item.children.forEach((child) => {
        footer_content +=
          '<a class="mtc_evolution_footer_content_list" href="' +
          child.link +
          '"">' +
          child.name +
          "</a>";
      });
    }
    footer_content += "</div>";
  });
  document.getElementById("mtc_evolution_footer_content").innerHTML =
    footer_content;
}

// Function to set the footer content and apply necessary DOM manipulations
function mtc_evolution_hideoldfooter() {
  const footerElement = document.getElementById("mtc_evolution_footer");
  if (footerElement) {
    // Hide elements only if footer is successfully updated
    const footerHolders = document.querySelectorAll(".footer_holder");
    const backTopContainers = document.querySelectorAll(".back_top_container");
    hideElements(footerHolders);
    hideElements(backTopContainers);
  }
}
//---------------------------------------------------------------------

document.documentElement.addEventListener("click", function (e) {
  let target = e.target;
  while (target != document.documentElement) {
    if (target.matches(".mtc_evolution_bottom_button")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      break;
    }
    target = target.parentNode;
  }
});

//---------------------------------------------------------------------
//reveal script
function mtc_evolution_reveal() {
  var reveals = document.querySelectorAll(".mtc_evolution_reveal");

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
window.addEventListener("scroll", mtc_evolution_reveal);

//---------------------------------------------------------------------

function mtc_evolution_scroll_to_div(to_where) {
  document
    .getElementById(to_where)
    .scrollIntoView({ behavior: "smooth", block: "center" });
}



