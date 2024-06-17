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
  const form = document.getElementById(formId);

  // Check if the form exists
  if (form) {
    // Set the form attributes
    form.action = "/comanda_new";
    form.dataset.type = "thankyou-page-form";
    form.method = "post";

    // Helper function to create and append hidden input
    const addHiddenInput = (name, value) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    // Function that checks for the existence of the lang variable and logs it if it exists
    if (typeof lang !== "undefined") {
      console.log(lang);
    } else {
      console.log("lang is not defined");
    }

    // Add the hidden inputs
    addHiddenInput("lang", lang);
    addHiddenInput("source", mtc_evolution_getCurrentUrl());
    addHiddenInput("service", serviceValue);
    addHiddenInput("tag", tagValue);
    addHiddenInput("info", infoValue);
    addHiddenInput("_token", "FrAtgRPx5WTf87lXzyon9zDDt0F6YSq9VmLJsYlc");
  } else {
    console.error(`Form with id ${formId} does not exist.`);
  }
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the form from submitting immediately

  // Show the loading animation
  var mtc_loadingAnimationSVG = document.getElementById(
    "mtc_evolution_loadingAnimationSVG"
  );
  mtc_loadingAnimationSVG.style.display = "flex";

  // Optionally, use AJAX here to submit the form data without redirecting
  setTimeout(() => {
    event.target.submit(); // This is where you'd replace with AJAX if not redirecting
  }, 1000); // Adjust delay as needed
}

// Add event listener to the form
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".mtc_evolution_form_comanda_new_form");
  if (form) {
    form.addEventListener("submit", handleFormSubmission);
  }
});
