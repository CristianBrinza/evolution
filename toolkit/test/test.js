let footerButtons = ["Contacte", "Magazine", "Licitații"];
localStorage.setItem("mtc_footer_buttons", JSON.stringify(footerButtons));
let mtcFooter = [
  {
    name: "Despre Moldtelecom",
    children: [
      {
        name: "Despre companie",
        link: "https://moldtelecom.md/ro/personal/Despre-companie",
      },
      {
        name: "Licitații",
        link: "https://moldtelecom.md/ro/personal/licitatii_list",
      },
      {
        name: "Consiliul de administrare",
        link: "https://moldtelecom.md/ro/personal/Consiliu_de_administrare",
      },
      {
        name: "Structura organizatorica",
        link: "https://moldtelecom.md/ro/personal/structura-organizatorica",
      },
      { name: "Cariera", link: "https://moldtelecom.md/ro/cariera" },
      { name: "Contacte", link: "https://moldtelecom.md/ro/personal/contacte" },
      { name: "Inima Codrilor", link: "http://ivancea.moldtelecom.md/" },
      {
        name: "Interconectare/ operatori (parteneri)",
        link: "https://moldtelecom.md/ro/personal/interconectare",
      },
      {
        name: "Internet Exchange",
        link: "https://moldtelecom.md/ro/personal/Internet-Exchange",
      },
      {
        name: "Freephone",
        link: "https://moldtelecom.md/ro/personal/freephone",
      },
    ],
  },
  {
    name: "Legal",
    children: [
      {
        name: "Servicii administrative",
        link: "https://moldtelecom.md/servicii-administrative",
      },
      {
        name: "Securitatea datelor",
        link: "https://moldtelecom.md/ro/personal/Securitatea Datelor",
      },
      { name: "Parametrii de calitate", link: "/Parametri-de-calitate" },
      {
        name: "Protejează-te de fraude",
        link: "https://moldtelecom.md/ro/personal/fraude",
      },
      {
        name: "Cum depui o reclamație?",
        link: "https://moldtelecom.md/ro/personal/Reclamatii",
      },
      {
        name: "Declarația în domeniul calității",
        link: "https://moldtelecom.md/files/Declaratia privind Politica in domeniul calitatii_ed.9.pdf",
      },
      {
        name: "Certificat de conformitate a SMC",
        link: "/files/Certificat SMC_4.pdf",
      },
      { name: "Rapoarte", link: "https://moldtelecom.md/ro/personal/Rapoarte" },
      {
        name: "Locațiune",
        link: "https://moldtelecom.md/files/Lista spatii libere pasibile de acordat in locatiune.pdf",
      },
      {
        name: "Cod de etică",
        link: "https://moldtelecom.md/files/Codul_Etic.pdf",
      },
      {
        name: "Codul de guvernanță corporativă",
        link: "/files/Cod-de-GC_S-AMoltelecom_redactratfinal.pdf",
      },
      {
        name: "Instrucțiune de lucru privind actele de corupție",
        link: "https://moldtelecom.md/files/Pages from IL prev. depist.  și  reacționare  acte coruptie varianta finala.pdf",
      },
      {
        name: "Lista de interdicție a agenților economici",
        link: "/files/lista de interdictii Moldtelecom.pdf",
      },
      {
        name: "Statutul Moldtelecom",
        link: "https://moldtelecom.md/files/Statutul%20MOLDTELECOM%20S.A..pdf",
      },
      {
        name: "Regulamentul cu privire la achiziționarea bunurilor, serviciilor și lucrărilor Moldtelecom",
        link: "files/Regulamentul cu privire la achizitionarea bunurilor serviciilor si lucrărilor MTC - APROBAT din 06.03.2024 .pdf",
      },
      {
        name: "Plan-prognoză achiziții anul 2024",
        link: "files/Plan_prognoza_achizitii_pentru_2024.xlsx",
      },
    ],
  },
  {
    name: "Util",
    children: [
      {
        name: "Ghidurile utilizatorului",
        link: "https://moldtelecom.md/ro/personal/Ghidurile-utilizatorului",
      },
      {
        name: "Ghiduri Video",
        link: "https://moldtelecom.md/ro/personal/Ghiduri-Video",
      },
      {
        name: "Condiții contractuale",
        link: "https://moldtelecom.md/ro/personal/Conditii_contractuale",
      },
      {
        name: "Modalități de achitare",
        link: "https://moldtelecom.md/ro/personal/modalitati_achitare",
      },
      {
        name: "Divertisment",
        link: "https://moldtelecom.md/ro/personal/Divertisment",
      },
      {
        name: "Întrebări frecvente",
        link: "https://moldtelecom.md/Intrebari-frecvente",
      },
      {
        name: "Speedtest",
        link: "https://moldtelecom.md/ro/personal/speedtest",
      },
      {
        name: "Hartă acoperire",
        link: "https://moldtelecom.md/ro/personal/acoperire-3g",
      },
      {
        name: "Eliberarea condițiilor tehnice si coordonarea proiectelor",
        link: "https://moldtelecom.md/Eliberarea condițiilor tehnice și coordonarea proiectelor",
      },
      {
        name: "Supravegherea lucrărilor în zona de protecție ",
        link: "https://www.moldtelecom.md/ro/personal/lucrari",
      },
      {
        name: "Procedura de selectie a partenerilor",
        link: "/files/procedura de selectie pdf.pdf",
      },
      {
        name: "Procedura de interdicție a agenților economici la operațiuni de achiziție",
        link: "/files/Lista interdictii_Furnizori_pe site.pdf",
      },
    ],
  },
];
localStorage.setItem("mtc_footer", JSON.stringify(mtcFooter));
let storedMtcFooter = JSON.parse(localStorage.getItem("mtc_footer"));
