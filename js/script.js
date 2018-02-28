

	$(function() {
  	setInterval(function(){
    var date = new Date();
    
 	var sec_deg = date.getSeconds() * (360/60);
 	var min_deg = date.getMinutes() * (360/60);
 	var hr_deg = date.getHours() * (360/12) + date.getMinutes() * (360/60/12);


    $('.sec').css({'-webkit-transform':'rotate(' + sec_deg + 'deg)'});

    $('.min').css({'-webkit-transform':'rotate(' + min_deg + 'deg)'});

    $('.hours').css({'-webkit-transform':'rotate(' + hr_deg + 'deg)'});
  
  }, 1000);
});