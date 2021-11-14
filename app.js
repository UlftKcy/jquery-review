/* $('button').click(function () {
    $('p').hide();
}) */

/* $('.hide-btn').click(function(){
    $('#par').hide();
}) */

// click ile mouse'un sadece sol tuşu ile fonksiyon çalışır.
/* $('.paragraf').click(function () {
    $(this).hide()
}) */

// mousedown ile mouse'un sol-sağ-tekerlek tuşları ile fonksiyon çalışır.
/* $('.paragraf').mousedown(function () {
    $(this).hide()
}) */

/* $('.paragraf').hover(function () {
    $(this).hide()
}) */

/* $(".paragraf").hover(
    // mouseenter
  function () {
    $(this).hide();
  },
  // mouseleave
  function () {
    $(this).show();
  }
); */
/* $("input").focus(function () {
  $("div").hide();
});

$("input").blur(function () {
  $("div").show();
}); */

/* $('input').on("keydown",function () {
    alert("keydown")
}) */
/* $('input').on("keyup",function () {
    alert("keyup")
}) */
/* $('input').on("keypress",function () {
    alert("keypress")
}) */

/* $(".hide").click(function(){
  $("p").hide(1000,function(){
    alert("hide")
  })
})
$(".show").click(function(){
  $("p").show("slow",function(){
    alert("show")})
})
$(".toggle").click(function(){
  $("p").toggle("fast",function(){
    alert("toggle")})
}) */

/* $("#click").click(function(){
  $(".red").fadeTo(1000,0.5)
  $(".green").fadeTo(3000,0.6)
  $(".blue").fadeTo(5000,0.7)
}) */

/* $("#click").click(function(){
  $(".red").fadeToggle(1000)
  $(".green").fadeToggle(3000)
  $(".blue").fadeToggle(5000)
}) */

// animations
/* $(".btn").click(function () {
  let box = $(".box")
  box.animate({
    left:"100px",
    top:"100px",
    opacity:"0.9",
    width: "90px"
  },1500,function () {
    box.animate({
    left:"200px",
    top:"100px",
    opacity:"0.8",
    width: "80px"
    },1500,function() {
      box.animate({
        left:"400px",
        top:"100px",
        opacity:"0.6",
        width: "60px"
      },1500)
    })
  })
}) */

/* $(function(){
  $(".start").click(function () {
    var box = $(".box")
    box.animate({
      left:"+=100px"
    },1000);
    box.animate({
      fontSize:"30px"
    },2000);
  });
  
  $(".stop").click(function () {
    var box = $(".box")
    box.stop()
  });

  $(".stop-all").click(function () {
    var box = $(".box")
    box.stop(true)
  });

  // durur ve ikinci animasyon çalışmaz.
  $(".finish").click(function () {
    var box = $(".box")
    box.stop(true,true)
  });

  // durur ve ikinci animasyon çalışır.
  $(".finish").click(function () {
    var box = $(".box")
    box.stop(false,true)
  });
}) */

// get content
/* $(function(){
  $("input").click(function () {
    console.log($(this).val())
  })
  $(".paragraf").mouseenter(function () {
    console.log($(this).text())
  })
  $(".btn").click(function () {
    console.log($(".google").attr("href"))
  })
}) */

// set content
/* $(function () {
  $("#text").click(function () {
    $("#par").text("Merhaba Dünya")
  })
  $("#html").click(function () {
    $("#par").html("Merhaba <b>Dünya</b>")
  })
  $("#input").click(function () {
    $("#name").val("Kacay")
  })
  $("#btnLink").click(function () {
    $("#google").attr("href","https://www.google.com.tr/")
  })
  
  $("#newtext").click(function () {
    $("#par").text(function (i,originalText) {
      return "old text: "+originalText+" new text:Merhaba Dünya" + " index:" +i 
    })
  })

  $(".udemyBtn").click(function() {
    $("#udemy").attr("href",function(i,domainUrl){
      return domainUrl+"/courses/development/"
    })
  })
}) */
