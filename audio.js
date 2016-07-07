$(document).ready(function() {

  var ambience = "city";

  $( "#ambience" ).change(function() {
    ambience = $('#ambience').val()
    flipVideo()
  });

function flipVideo(){

  $("#video").empty();

  switch(ambience) {
      case "cityA":
          renderVideo("Xvwl4IfXW98");
          break;
      case "beachA":
          renderVideo("HTc_2XmKK-M");
          break;
      case "beachM":
          renderVideo("3kFhyMNnzew");
          break;
      case "mountainsA":
          renderVideo("dTW2MxfqVLI");
          break;
      case "cityMusic":
          renderVideo("f0WTg-RyCXc");
          break;
      case "churchA":
          renderVideo("VFROH_nzqfE");
          break;
  }

}


function renderVideo(choice) {

   var video = '<iframe id="ambient" width="560" height="315" src="https://www.youtube.com/embed/' + choice + '?autoplay=1" frameborder="0" allowfullscreen></iframe>'

    $("#video").prepend(video);

  }


});


