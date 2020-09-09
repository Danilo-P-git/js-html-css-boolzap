$(document).ready(function() {

  $("#msg-input").keypress(function(e) {
    if (e.which == 13) {
      var valoreInserito = $(this).val();
      var messaggioInterno = $(".msg-structure .user").clone();
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var time = hours + ":" + minutes;
      if (valoreInserito !="") {
        messaggioInterno.find(".testo-msg").text(valoreInserito);
        messaggioInterno.find(".ora-msg").text(time);
        $(".main-chat").append(messaggioInterno);
        $(this).val("");
      }
      setTimeout(function () {
        var valoreInserito = "OK";
        var messaggioInterno = $(".msg-structure .cpu").clone();
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var time = hours + ":" + minutes;
        if (valoreInserito !="") {
          messaggioInterno.find(".testo-msg").text(valoreInserito);
            messaggioInterno.find(".ora-msg").text(time);
          $(".main-chat").append(messaggioInterno);
          $("#msg-input").val("");
        };
      }, 2000);
    }

    });

    $("#invia").click(function(){
      messaggioInviato()
      setTimeout(function () {
        var valoreInserito = "OK";
        var messaggioInterno = $(".msg-structure .cpu").clone();
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var time = hours + ":" + minutes;
        if (valoreInserito !="") {
          messaggioInterno.find(".testo-msg").text(valoreInserito);
            messaggioInterno.find(".ora-msg").text(time);
          $(".main-chat").append(messaggioInterno);
          $("#msg-input").val("");
        };
      }, 2000);
  });


function messaggioInviato() {
  var valoreInserito = $("#msg-input").val();
  var messaggioInterno = $(".msg-structure .user").clone();
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var time = hours + ":" + minutes;
  if (valoreInserito !="") {
    messaggioInterno.find(".testo-msg").text(valoreInserito);
      messaggioInterno.find(".ora-msg").text(time);
    $(".main-chat").append(messaggioInterno);
    $("#msg-input").val("");
  };
}




});
