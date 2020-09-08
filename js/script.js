$(document).ready(function() {

  $("#msg-input").keypress(function(e) {
    if (e.which == 13) {
      var valoreInserito = $(this).val();
      var messaggioInterno = $(".msg-structure .msg-row").clone();
      if (valoreInserito !="") {
        messaggioInterno.find(".testo-msg").text(valoreInserito);
        $(".main-chat").append(messaggioInterno);
        $(this).val("");
      }
    }
    });

    $("#invia").click(function(){
      var valoreInserito = $("#msg-input").val();
      var messaggioInterno = $(".msg-structure .msg-row").clone();
      if (valoreInserito !="") {
        messaggioInterno.find(".testo-msg").text(valoreInserito);
        $(".main-chat").append(messaggioInterno);
        $("#msg-input").val("");
      };
  });
});
