// List of Plug-ins

// TYPE-WRITER
$(document).ready(function(){

// Header type writer plug-in
$('#headerTitle').typeOut(); 
// SHOW AND HIDE TABLES in an orderly fashion manner
		//To hide the menu
		$("#hidediv").click(function () {
			alert("I am being clicked!");
		$(".men_ex").hide("fast",function(){
		alert("Menu is hidden!");
		});
		});


		//To show the menu
		$("#showdiv").click(function () {
		alert("I am being clicked!");
		$(".men_ex").show(2000,function(){
		alert("Menu is displayed!");
		});
	});  

});

