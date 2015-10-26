jQuery(document).ready(function($){
	/*
	var video = document.getElementById("one");

	function toggleControls() {
	  if (video.hasAttribute("controls")) {
	     video.removeAttribute("controls")   
	  } else {
	     video.setAttribute("controls","controls")   
	  }
	}

	$(".cortina").mouseover(function(){
		$(this).fadeOut("slow");
	})

	var video = $("#one").get(0);
	var increments = 50; //steps two seconds for each scroll event
	var videoReady = false; //set to true when video loads
	var continueUpdatingVideo = false;
	$("#one").get(0).pause();
	$(document).ready(function(){
	  $("#one").bind('DOMMouseScroll mousewheel', function(e){
	      e.preventDefault();

	      console.log("Hola mundo");

	      $("#one").get(0).play();

	      setTimeout(function(){$("#one").get(0).pause()}, 1000);      
	      
	      if(videoReady && continueUpdatingVideo) {
	        var delta = Math.max(-1, Math.min(1, (e.originalEvent.wheelDelta || -e.originalEvent.detail)));
	        updateVideo(delta * increments);
	      }

	      return false;
	  });
	});

	function updateVideo(delta) {
	  var videoLength = video.duration;
	  var videoPosition = (video.currentTime + delta > videoLength) ? videoLength : ((video.currentTime + delta < 0) ? 0 : video.currentTime + delta);
	  video.currentTime = videoPosition;
	}
	*/

	$(window).load(function(){
		$("#contentLoader").fadeOut("slow");
	})

	$("#openKraken").click(function(){
		$("#off").fadeOut("fast");
		$("#queEsKraken").fadeIn("slow");
		console.log("Aca estoy")
	});

	$("#openHistorias").click(function(){
		$("#off").fadeOut("fast");
		$("#historiasVida").fadeIn("slow");
	});

	$("#backMenu").click(function(){
		$("#off").fadeIn("slow");
		$("#queEsKraken").fadeOut("fast");
	})

	$("#backMenu2").click(function(){
		$("#off").fadeIn("slow");
		$("#historiasVida").fadeOut("fast");
	})

	$("#backMenu3").click(function(){
		$("#off").fadeIn("slow");
		$("#transformacion").fadeOut("fast");
	})

	$("#opentransformacion").click(function(){
		$("#off").fadeOut("fast");
		$("#transformacion").fadeIn("slow");
	});

	$("#backMenu4").click(function(){
		$("#off").fadeIn("slow");
		$("#filminutos").fadeOut("fast");
	})

	$("#openfilminuto").click(function(){
		$("#off").fadeOut("fast");
		$("#filminutos").fadeIn("slow");
	});

	$("#backMenu5").click(function(){
		$("#off").fadeIn("slow");
		$("#universidad").fadeOut("fast");
	})

	$("#openuniversidad").click(function(){
		$("#off").fadeOut("fast");
		$("#universidad").fadeIn("slow");
	});

	$("#openVideoKraken").click(function(){
		$("#videoKraken").fadeIn();
	});

	$("#cerrarVideo").click(function(){
		$("#videoKraken").fadeOut();
	})

});