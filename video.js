$(document).ready(function() {

  var reload;
  var choice = "beach";
  var windowFrame;
  var city = [100, 101, 311, 313, 314, 315, 316, 332, 369, 392, 395, 407, 416, 422, 431, 432, 434, 495, 508, 509, 513, 519, 522, 538, 541, 545, 552, 607]
  var dark = [548, 559, 565, 566, 568, 572]
  var beachFront = [300, 301, 308, 335, 339, 341, 343, 352, 356, 366, 410, 414, 427, 485, 490, 491, 560, 503, 501, 504, 505, 507, 514, 516, 518, 520, 533, 556, 557, 558, 560, 561, 570, 571, 573, 574, 600, 604, 605, 606, 608, 609, 611, 612]
  var waterMountains = [487, 497, 506, 511, 515, 521, 524, 525, 542, 549, 554, 564, 551, 569]
  var remote = [319, 333, 360, 390, 391, 393, 397, 399, 412, 420, 499, 512, 526, 527, 528, 530, 532, 534, 539, 540, 553, 555, 567, 575, 577, 601, 603]
  var church = [543]
  var pyramids = [537]
  var unused = [563]
  var underwater = [342]
  var pool = [325, 350, 362, 363, 484]
  var sports = [322, 353, 396, 400, 426, 478]
  var ski = [354]
  var frequency = 10000;

// Event Listeners
// ***************

  $( "#choice" ).change(function() {
    choice = $('#choice').val()
    flip()
  });

  $( "#refresh" ).change(function() {
    console.log($('#refresh').val());

    if($('#refresh').val() == "on") {
      reload = setInterval(function(){flip()}, frequency);
    } else {
      console.log("clearing");
      clearInterval(reload);
    }
  });

  $( "#frequency" ).change(function() {
    frequency = $('#frequency').val()
    console.log(frequency)
    clearInterval(reload);
    reload = setInterval(function(){flip()}, frequency);
  });

  $( "#selectWindow" ).change(function() {
    windowFrame = $('#selectWindow').val()
    setWindowframe();
  });


// Functions
// ***************


  function flip(){

  $("main").empty();

  switch(choice) {
      case "city":
          render(city);
          break;
      case "beach":
          render(beachFront);
          break;
      case "mountains":
          render(waterMountains);
          break;
      case "remote":
          render(remote);
          break;
      case "church":
          render(church);
          break;
      case "pyramids":
          render(pyramids);
          break;
      case "underwater":
          render(underwater);
          break;
      case "pool":
          render(pool);
          break;
      case "sports":
          render(sports);
          break;
      case "ski":
           render(ski);
           break;       
  }
  }

  function render(vid) {

    var id = vid[Math.floor(Math.random()*vid.length)];

   
    var stream = '<iframe id="live" height="100%" width="100%" src="http://www.skylinewebcams.com/skyline/live-h.php?w=' + id + '&amp;lang=en&amp;b=5" frameborder="0" scrolling="no" marginwidth="0" marginheight="0"></iframe>'

    $("main").prepend(stream);

  }

  function setWindowframe() {
    $('#windows').css('background-image', 'url("' + windowFrame + '")');
  }


  flip()

});


