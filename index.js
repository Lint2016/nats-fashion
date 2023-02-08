$("h5").on("mouseover",function(){
  $("h5").html(' &#169;  Great pleasure having You visit My site !');
  $("h5").on("mouseout",function(){
    $("h5").html(" &#169; Queen K house of couture");
  });
});

$("h1").on("mouseover",function(){
$("h1").html("Bienvenue chez Queen K !" );
$("h1").on("mouseout",function(){
  $("h1").html(" Queen K House Of Couture");
});
});

$("#hover-image").on("mouseover",function(){
  $("#hover-image").fadeIn().fadeOut().fadeIn();
});

$("h4").on("mouseover",function(){
  $("h4").html("Please stay in touch via Email or Social Media !");

$("h4").on("mouseout",function(){
  $("h4").html("CONTACT US");
});
});

$("h6").on("mouseover",function(){
  $("h6").html("Get to know Me");

$("h6").on("mouseout",function(){
  $("h6").html("ABOUT ME");
});
});

$(document).ready(function(){
  $("#sending_btn").click(function(){

    var emailAddress =$("#exampleFormControlInput1").val();
    var fullName = $("#exampleFormControlInput2").val();
    var textArea = $("#exampleFormControlTextarea1").val();
    var isValid = true;

if( emailAddress == ""){
  $("#exampleFormControlInput1_error").text("the email is required");
  isValid=false;
}else{
  $("#exampleFormControlInput1").text("");
}
if( fullName == ""){
  $("#exampleFormControlInput2_error").text("the name is required");
  isValid=false;
}else{
  $("#exampleFormControlInput2").text("");
}
if( textArea == ""){
  $("#exampleFormControlTextarea1_error").text("the message is required");
  isValid=false;
}else{
  $("#exampleFormControlTextarea1").text("");
}
if(isValid){
  $("#nat-email").submit();
}


  });

  });

$(".nat-image1").on("mouseover",function(){
  $(".nat-image1").css({"width":"250px","opacity":"0.4",});
$(".nat-image1").on("mouseout",function(){
  $(".nat-image1").css({  "width":" 60%","border-radius":"100%","opacity":"1",});
});
});
