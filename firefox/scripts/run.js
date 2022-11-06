let msgAnnounce = document.querySelector(".js-badge-msg");
let msgMessageButton = document.querySelector(".js-btn-messages");
msgAnnounce.innerHTML = Number(parseInt(msgAnnounce.innerHTML));
if (isNaN(parseInt(msgAnnounce.innerHTML)))
  msgAnnounce.innerHTML = "Blijf eens van de Inspector af :-)";
else msgAnnounce.innerHTML = (parseInt(msgAnnounce.innerHTML) + 1).toString();
msgAnnounce.removeAttribute("hidden");
