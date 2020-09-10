$(document).ready(function() {

  $("#msg-input").keypress(function(e) {
    if (e.which == 13) {
      var valoreInserito = $(this).val();
      var messaggioInterno = $(".active .msg-structure .user").clone();
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var time = hours + ":" + minutes;
      if (valoreInserito !="") {
        messaggioInterno.find(".testo-msg").text(valoreInserito);
        messaggioInterno.find(".ora-msg").text(time);
        $(".active").append(messaggioInterno);
        $(this).val("");
      }
      setTimeout(function () {
        var valoreInserito = "OK";
        var messaggioInterno = $(".active .msg-structure .cpu").clone();
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var time = hours + ":" + minutes;
        if (valoreInserito !="") {
          messaggioInterno.find(".testo-msg").text(valoreInserito);
            messaggioInterno.find(".ora-msg").text(time);
          $(".active").append(messaggioInterno);
          $("#msg-input").val("");
        };
      }, 2000);
    }

    });

    $("#invia").click(function(){
      messaggioInviato()
      setTimeout(function () {
        var valoreInserito = "OK";
        var messaggioInterno = $(".active .msg-structure .cpu").clone();
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var time = hours + ":" + minutes;
        var index
        if (valoreInserito !="") {
          messaggioInterno.find(".testo-msg").text(valoreInserito);
            messaggioInterno.find(".ora-msg").text(time);
          $(".active").append(messaggioInterno);
          $("#msg-input").val("");
        };
      }, 2000);
  });


  $(".search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".chat").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

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






function messaggioInviato() {
  var valoreInserito = $("#msg-input").val();
  var messaggioInterno = $(".active .msg-structure .user").clone();
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var time = hours + ":" + minutes;
  if (valoreInserito !="") {
    messaggioInterno.find(".testo-msg").text(valoreInserito);
      messaggioInterno.find(".ora-msg").text(time);
    $(".active").append(messaggioInterno);
    $("#msg-input").val("");
  };
}




});
