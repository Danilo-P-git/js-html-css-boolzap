$(document).ready(function() {

var risposte = [
  "Ehy guarda ci sentiamo dopo",
  "Scusami ti contatto più tardi",
  "Ehy è da tanto che non ci sentiamo che mi racconti?",
  "Si guarda ti manderò quei file appena possibile",
  "Perdonami sono in riunione ti posso chiamare più tardi?",
  "Ehy ciao ma quindi mi confermi per stasera ?",
  "Ciao",
  "Ehy",
  "Non sono molto sicuro"
];
// Inva un messaggio e quando premo il tasto invio sulla keyboard mi scrive il messaggio solo nella main chat che è selezionata al momento e dopo 1 secondo il computer risponde con OK
  $("#msg-input").keypress(function(e) {
    if (e.which == 13) {
      var valoreInserito = $(this).val();
      var messaggioInterno = $(".active .msg-structure .user").clone();
      var orario = time();
      if (valoreInserito !="") {
        messaggioInterno.find(".testo-msg").text(valoreInserito);
        messaggioInterno.find(".ora-msg").text(orario);
        $(".active").append(messaggioInterno);
        $(this).val("");
      }
      reply();
      automaticScroll();
    }

    });
// Inva un messaggio e quando premo il pulsatne di invio mi scrive il messaggio solo nella main chat che è selezionata al momento e dopo 1 secondo il computer risponde con OK
    $("#invia").click(function(){
      messaggioInviato()
      reply();
      automaticScroll();

  });

  // Funzione che fa funzionare la barra di ricerca dei contatti nella sezione di navigazione delle chat
  $(".search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".chat").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    // Questa serve a scambiare le classi active e delle main chat e delle anteprime delle chat a sinistra in modo che siano collegate e che funzioni tutto a dovere senza bug
  $(".chat").click(function() {
    $(".chat").removeClass("active-chat");
    $(this).addClass("active-chat");

    var indexChat = $(this).index();

    $(".main-chat").each(function() {
      $(this).removeClass("active");
    });
    $(".main-chat").eq(indexChat).addClass("active");

    $(".head-chat").each(function() {
      $(this).removeClass("active-head");
    });
    $(".head-chat").eq(indexChat).addClass("active-head");
  })

  // Dropdown menu e cancellazione del messaggio singolo

  $(document).on('click', '.utility-msg', function() {
    $(this).siblings('.dropdown').toggle(80);
  });
  $(document).on('click', '.dropdown .delete', function() {
    $(this).parents(".messaggio").remove();
  });
  $(document).on('click', '.impostazioni-dropdown', function() {
    $('.impostazioni').toggle(80);
  });

// funzione per inviare un messaggio
function messaggioInviato() {
  var valoreInserito = $("#msg-input").val();
  var messaggioInterno = $(".active .msg-structure .user").clone();
  var orario = time();

  if (valoreInserito !="") {
    messaggioInterno.find(".testo-msg").text(valoreInserito);
      messaggioInterno.find(".ora-msg").text(orario);
    $(".active").append(messaggioInterno);
    $("#msg-input").val("");
  };
}

function time() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var time = hours + ":" + minutes
  return time;
}


function reply() {
var statusAccesso = $(".active-head .name p").html();
$(".active-head .name p").text("Sta scrivendo..");
setTimeout(function () {
  var randRisposte = Math.floor(Math.random() * risposte.length);
  var valoreInserito = risposte[randRisposte];
  var messaggioInterno = $(".active .msg-structure .cpu").clone();
  var orario = time();

  if (valoreInserito !="") {
    messaggioInterno.find(".testo-msg").text(valoreInserito);
      messaggioInterno.find(".ora-msg").text(orario);
    $(".active").append(messaggioInterno);
    $("#msg-input").val("");
    $(".active-head .name p").html(statusAccesso);
    $(".active-head .name p span").text(orario);
    $(".active-chat .name-chat .orario-chat").text(orario);
    $(".active-chat .name-chat .chat-style").text(valoreInserito);
  };
}, 2000);
}
function automaticScroll() {
var scroll = $(".main-chat");
scroll.scrollTop(1000);
}
});
