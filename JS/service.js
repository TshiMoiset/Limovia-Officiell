// Read the query parameter to get the selected service
const urlParams = new URLSearchParams(window.location.search);
const selectedService = urlParams.get("service");

// Update the title based on the selected service
if (selectedService) {
  document.title = `Limovia | ${selectedService}`;
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the service parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const service = urlParams.get("service");

  // Update the service name based on the selected service
  updateServiceName(service);
});

document.addEventListener("DOMContentLoaded", function () {
  function updateServiceName(service) {
    // Get the element with the id "serviceName"
    const serviceNameElement = document.getElementById("serviceName");
    const serviceExplanationIntro = document.getElementById("serviceIntro");
    const serviceExplanation = document.getElementById("serviceExplanation");
    const cancellationPolicy = document.getElementById("serviceCancellation");

    // Update the content based on the selected service
    if (service === "Privatleasing") {
      serviceNameElement.innerHTML = "Privatleasing";
      serviceExplanationIntro.innerHTML =
        "Drömmer du om att köra en exklusiv bil utan krångel? Med Limovia Privatleasing får du överlägsen komfort och fast månadskostnad utan kontantinsats eller oro för värdeminskning.";
      serviceExplanation.innerHTML =
        "Limovia Privatleasing erbjuder tillgång till exklusiva fordon utan krav på kontantinsats, oro för värdeminskning eller försäljningshantering. Tjänsten inkluderar fasta månadskostnader för en förstklassig körupplevelse.<br><br>" +
        "<ul>" +
        "<li>All-inclusive-paket – Service, försäkring och underhåll ingår.</li>" +
        "<li>Ingen kontantinsats – Endast en fast månadskostnad utan oväntade avgifter.</li>" +
        "<li>Flexibla avtal – Välj en leasingperiod som passar dina behov: 6, 12, 24 eller 36 månader.</li>" +
        "<li>Exklusiv komfort – Tillgång till de senaste högklassiga fordonen med överlägsen bekvämlighet.</li>" +
        "</ul>";
      cancellationPolicy.innerHTML =
        "Vi förstår att planer kan ändras och erbjuder därför en flexibel och rättvis avbokningspolicy. Nedan anges våra avbokningsvillkor för tjänsten.";
    } else if (service === "Abonnemang") {
      serviceNameElement.innerHTML = "Abonnemang";
      serviceExplanationIntro.innerHTML =
        "Vill du resa utan att tänka på kilometerkostnader? Med Limovia Abonnemang får du ett fast antal kilometer per månad till ett förmånligt pris, vilket ger dig friheten att resa när du vill – utan överraskningar.";
      serviceExplanation.innerHTML =
        "Limovia Abonnemang erbjuder en flexibel transportlösning med ett fast antal kilometer per månad till ett förmånligt pris. Tjänsten ger frihet att resa utan att behöva tänka på kilometerkostnader, vilket säkerställer en smidig och bekväm upplevelse.<br><br>" +
        "<ul>" +
        "<li>Fasta priser – Förutsägbara kostnader utan oväntade avgifter.</li>" +
        "<li>Flexibilitet – Möjlighet att uppgradera eller byta paket vid behov.</li>" +
        "<li>Ingen bindningstid – Alternativ finns för valfri bindningstid med rabatterat pris.</li>" +
        "</ul><br>" +
        "Registrering kan göras enkelt via hemsidan eller genom att kontakta kundservice för att hitta det mest passande paketet.<br><br>";
      cancellationPolicy.innerHTML =
        "Vi förstår att planer kan ändras och erbjuder därför en flexibel och rättvis avbokningspolicy. Nedan hittar du våra avbokningsvillkor för olika tjänster.<br><br>" +
        "<ul>" +
        "<li>Månatliga abonnemang kan sägas upp när som helst.</li>" +
        "<li>Ingen återbetalning ges för innevarande månad vid uppsägning.</li>" +
        "</ul>";
    } else if (service === "Flygplatstransfer") {
      serviceNameElement.innerHTML = "Flygplatstransfer";
      serviceExplanationIntro.innerHTML =
        "Res enkelt mellan flygplatsen och din destination med Limovia Flygplatstransfer. Våra professionella chaufförer och exklusiva fordon garanterar en avslappnad och trygg resa, oavsett om du ska resa bort eller precis har landat.";
      serviceExplanation.innerHTML =
        "Varför välja Limovia? Limovia erbjuder en smidig, bekväm och pålitlig transport mellan flygplatsen och din destination, oavsett om du är på väg att resa eller landar efter en lång flygning.<br><br>" +
        "<ul>" +
        "<li>Exklusiva fordon | Professionella chaufförer | Fast pris </li>" +
        "<li>Bekväma säten och generöst bagageutrymme för en avslappnad resa.</li>" +
        "<li>Transparent prissättning – inga dolda avgifter, du vet exakt vad du betalar.</li>" +
        "<li>Chauffören möter dig i ankomsthallen med en personlig namnskylt och hjälper till med bagaget.</li>" +
        "<li>Flyginformation övervakas för att anpassa hämtningen vid eventuella förseningar.</li>" +
        "<li>45 minuters kostnadsfri väntetid vid ankomst för extra flexibilitet.</li>" +
        "</ul>";
      cancellationPolicy.innerHTML =
        "Vi förstår att planer kan ändras och erbjuder därför en flexibel och rättvis avbokningspolicy. Nedan hittar du våra avbokningsvillkor för olika tjänster.<br><br>" +
        "<ul>" +
        "<li>Full återbetalning vid avbokning minst 24 timmar före planerad resa.</li>" +
        "<li>50 % av resans pris debiteras vid avbokning mellan 12 och 24 timmar före avresa.</li>" +
        "<li>Full debitering gäller vid avbokning inom 2 timmar före avresa eller vid utebliven närvaro.</li>" +
        "</ul><br>" +
        "<strong>Utebliven närvaro</strong><br>" +
        "Om en kund inte dyker upp vid den bokade avgångstiden och ingen kontakt har skett med Limovia, anses resan vara utebliven.<br><br>" +
        "<ul>" +
        "<li>Våra chaufförer väntar i 30 minuter efter bokad avgångstid innan resan betraktas som utebliven.</li>" +
        "<li>Vid utebliven närvaro debiteras fullt belopp för resan.</li>" +
        "</ul><br>" +
        "<strong>Avbokning vid sjukdom eller force majeure</strong><br>" +
        "Vid sjukdom eller oförutsedda händelser (force majeure) ber vi dig att kontakta vår kundtjänst så snart som möjligt. Vi hanterar dessa fall individuellt och strävar efter en rättvis lösning.";
    } else if (service === "Evenemangstransfer") {
      serviceNameElement.innerHTML = "Evenemangstransfer";
      serviceExplanationIntro.innerHTML =
        "Låt resan bli en del av upplevelsen. Med Limovia får du en stilren och bekväm transportlösning för galor, bröllop, företagsevent och exklusiva kvällar. ";
      serviceExplanation.innerHTML =
        "Oavsett om det gäller en gala, affärs konferens, bröllop, företagsevent eller en exklusiv utekväll, erbjuder Limovia en transportlösning präglad av elegans, stil och komfort. Professionella chaufförer och exklusiva fordon säkerställer en förstklassig upplevelse från dörr till dörr.";
      cancellationPolicy.innerHTML =
        "Vi förstår att planer kan ändras och erbjuder därför en flexibel och rättvis avbokningspolicy. Nedan hittar du våra avbokningsvillkor för olika tjänster.<br><br>" +
        "<ul>" +
        "<li>Avbokning minst 48 timmar före evenemanget: Full återbetalning.</li>" +
        "<li>Avbokning mellan 12 och 48 timmar före evenemanget: 50 % av bokningens pris debiteras.</li>" +
        "<li>Avbokning inom 12 timmar före evenemanget eller utebliven närvaro: Fullt belopp debiteras.</li>" +
        "</ul><br>" +
        "<strong>Utebliven närvaro</strong><br>" +
        "Om en kund inte dyker upp vid den bokade avgångstiden och ingen kontakt har skett med Limovia, anses resan vara utebliven.<br><br>" +
        "<ul>" +
        "<li>Våra chaufförer väntar i 30 minuter efter bokad avgångstid innan resan betraktas som utebliven.</li>" +
        "<li>Vid utebliven närvaro debiteras fullt belopp för resan.</li>" +
        "</ul><br>" +
        "<strong>Avbokning vid sjukdom eller force majeure</strong><br>" +
        "Vid sjukdom eller oförutsedda händelser (force majeure) ber vi dig att kontakta vår kundtjänst så snart som möjligt. Vi hanterar dessa fall individuellt och strävar efter en rättvis lösning.";
    } else if (service === "Timbokning") {
      serviceNameElement.innerHTML = "Timbokning";
      serviceExplanationIntro.innerHTML =
        "Med Limovia timbokning får du en exklusiv bil med professionell chaufför per timme, vilket ger dig full flexibilitet utan att behöva planera varje enskild resa.";
      serviceExplanation.innerHTML =
        "Limovia Timbaserad Bokning erbjuder möjligheten att hyra en exklusiv bil med professionell chaufför per timme. Tjänsten ger maximal flexibilitet utan behov av att planera varje enskild resa.<br><br>" +
        "<ul>" +
        "<li>Flexibel användning – Tillgång till bilen under hela bokningstiden.</li>" +
        "<li>Professionell chaufför – Diskret och serviceinriktad.</li>" +
        "<li>Fasta timpriser – Inga oväntade kostnader baserade på körsträcka.</li>" +
        "<li>Hög komfort – Exklusiva fordon med toppmodern utrustning.</li>" +
        "</ul>";
      cancellationPolicy.innerHTML =
        "Vi förstår att planer kan ändras och erbjuder därför en flexibel och rättvis avbokningspolicy. Nedan finns vår avbokningsvillkor för tjänsten.<br><br>" +
        "<ul>" +
        "<li>Full återbetalning vid avbokning minst 24 timmar före planerad resa.</li>" +
        "<li>50 % av resans pris debiteras vid avbokning mellan 12 och 24 timmar före avresa.</li>" +
        "<li>Full debitering gäller vid avbokning inom 2 timmar före avresa eller vid utebliven närvaro.</li>" +
        "</ul><br>" +
        "<strong>Utebliven närvaro</strong><br>" +
        "Om en kund inte dyker upp vid den bokade avgångstiden och ingen kontakt har skett med Limovia, anses resan vara utebliven.<br><br>" +
        "<ul>" +
        "<li>Våra chaufförer väntar i 30 minuter efter bokad avgångstid innan resan betraktas som utebliven.</li>" +
        "<li>Vid utebliven närvaro debiteras fullt belopp för resan.</li>" +
        "</ul><br>" +
        "<strong>Avbokning vid sjukdom eller force majeure</strong><br>" +
        "Vid sjukdom eller oförutsedda händelser (force majeure) ber vi dig att kontakta vår kundtjänst så snart som möjligt. Vi hanterar dessa fall individuellt och strävar efter en rättvis lösning.";
    } else if (service === "Lokal Transfer") {
      serviceNameElement.innerHTML = "Lokal Transfer";
      serviceExplanationIntro.innerHTML =
        "Res tryggt och bekvämt med Limovia Lokal Transfer – en exklusiv transportlösning för dig som vill ta dig runt i staden utan krångel.";
      serviceExplanation.innerHTML =
        "Limovia Lokal Transfer erbjuder en bekväm, exklusiv och pålitlig transportlösning inom staden. Med fasta priser, förstklassiga fordon och professionella chaufförer garanteras en smidig resa, oavsett om destinationen är ett möte, en restaurang eller hem efter en lång dag.<br><br>" +
        "<ul>" +
        "<li>Fasta priser – Förutsägbara kostnader utan taxameter eller prisvariationer.</li>" +
        "<li>Smidig bokning – Direktbokning eller planerade resor via appen.</li>" +
        "<li>Professionella chaufförer – Högsta standard av service och diskretion.</li>" +
        "<li>Snabb bokning | Fast pris | VIP-service</li>" +
        "</ul>";
      cancellationPolicy.innerHTML =
        "Vi förstår att planer kan ändras och erbjuder därför en flexibel och rättvis avbokningspolicy. Nedan anges våra avbokningsvillkor för tjänsten.<br><br>" +
        "<ul>" +
        "<li>Avbokning minst 2 timmar före avresa: Ingen avgift, full återbetalning.</li>" +
        "<li>Avbokning inom 2 timmar före avresa: 50 % av resans pris debiteras.</li>" +
        "<li>Avbokning inom 30 minuter före avresa eller utebliven närvaro: Full debitering av resans pris.</li>" +
        "</ul><br>" +
        "<strong>Utebliven närvaro</strong><br>" +
        "Om en kund inte dyker upp vid den bokade avgångstiden och ingen kontakt har skett med Limovia, anses resan vara utebliven.<br><br>" +
        "<ul>" +
        "<li>Våra chaufförer väntar i 30 minuter efter bokad avgångstid innan resan betraktas som utebliven.</li>" +
        "<li>Vid utebliven närvaro debiteras fullt belopp för resan.</li>" +
        "</ul><br>" +
        "<strong>Avbokning vid sjukdom eller force majeure</strong><br>" +
        "Vid sjukdom eller oförutsedda händelser (force majeure) ber vi dig att kontakta vår kundtjänst så snart som möjligt. Vi hanterar dessa fall individuellt och strävar efter en rättvis lösning.";
    } else if (service === "Stad till Stad-transfer") {
      serviceNameElement.innerHTML = "Stad till Stad-transfer";
      serviceExplanationIntro.innerHTML =
        "Res mellan städer med komfort, stil och smidighet. Med Limovia Stad-till-Stad Transfer slipper du stressen med tåg, flyg eller egen bil";
      serviceExplanation.innerHTML =
        "För resor mellan städer erbjuder Limovia Stad-till-Stad Transfer en bekväm och exklusiv transportlösning. Med en professionell chaufför och fast prissättning säkerställs en smidig och avkopplande resa utan stressen med tåg, flyg eller egen bil. Tjänsten är idealisk för affärsresor, semesterresor och bekväm pendling.<br><br>" +
        "<ul>" +
        "<li>Fast pris – Transparent prissättning utan dolda avgifter.</li>" +
        "<li>Bekväm resa – Ett avkopplande alternativ till tåg och flyg.</li>" +
        "<li>Professionell chaufför – Högsta standard av service och diskretion.</li>" +
        "<li>Dörr-till-dörr-service – Hämtning och avlämning på valfri adress.</li>" +
        "<ul>";
      cancellationPolicy.innerHTML =
        "Vi förstår att planer kan ändras och erbjuder därför en flexibel och rättvis avbokningspolicy. Nedan anges våra avbokningsvillkor för tjänsten.<br><br>" +
        "<ul>" +
        "<li>Full återbetalning vid avbokning minst 48 timmar före planerad resa.</li>" +
        "<li>50 % av resans pris debiteras vid avbokning mellan 12 och 48 timmar före avresa.</li>" +
        "<li>Full debitering vid avbokning inom 6 timmar före avresa eller vid utebliven närvaro.</li>" +
        "</ul><br>" +
        "<strong>Utebliven närvaro</strong><br>" +
        "Om en kund inte dyker upp vid den bokade avgångstiden och ingen kontakt har skett med Limovia, anses resan vara utebliven.<br><br>" +
        "<ul>" +
        "<li>Våra chaufförer väntar i 30 minuter efter bokad avgångstid innan resan betraktas som utebliven.</li>" +
        "<li>Vid utebliven närvaro debiteras fullt belopp för resan.</li>" +
        "</ul><br>" +
        "<strong>Avbokning vid sjukdom eller force majeure</strong><br>" +
        "Vid sjukdom eller oförutsedda händelser (force majeure) ber vi dig att kontakta vår kundtjänst så snart som möjligt. Vi hanterar dessa fall individuellt och strävar efter en rättvis lösning.";
    }
  }
});

// JavaScript for the slideshow functionality
const slideshowContainers = document.querySelectorAll(".slideshow-container");
let intervalID;

function showSlides(containerIndex) {
  return function () {
    let i;
    const slides =
      slideshowContainers[containerIndex].getElementsByClassName("mySlides");
    const dots =
      slideshowContainers[containerIndex].getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };
}

function currentSlide(n, containerIndex) {
  clearInterval(intervalID); // Clear the interval when a dot is clicked
  slideIndex = n;
  showSlides(containerIndex)();
  setTimeout(() => {
    intervalID = setInterval(() => {
      slideIndex++;
      if (slideIndex > 4) {
        slideIndex = 1;
      }
      slideshowContainers.forEach((container, index) => {
        showSlides(index)();
      });
    }, 2000);
  }, 5000); // Pause for 10 seconds
}

let slideIndex = 1;

// Initialize each slideshow
slideshowContainers.forEach((container, containerIndex) => {
  showSlides(containerIndex)();
});

// Automatic slideshow change
intervalID = setInterval(() => {
  slideIndex++;
  if (slideIndex > 4) {
    slideIndex = 1;
  }
  slideshowContainers.forEach((container, containerIndex) => {
    showSlides(containerIndex)();
  });
}, 3000);
