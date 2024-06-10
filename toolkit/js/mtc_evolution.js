function mtc_evolution_add_route(add_route_array) {
  let add_route_div = '<div id="mtc_evolution_route">';
  for (let i = 0; i < add_route_array.length; i++) {
    add_route_div +=
      '<a href="' +
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
});
