$(document).ready(function(){
	$("#button_entry").click(function(){
		$(this).css("background-color","#11DDFF");
		$("#page_1").css("display","block");
		$("#page_entry").css("display","none");
	});
	
	$(".card").click(function(){
		var count = $(this).attr("attr-count");
		$(this).attr("attr-count", parseInt(count)+1);
		if(count % 2 == 0){
			$(this).css("transform", "rotateY(180deg)");
			$(this).find(".ima").css("display","block");
			$(this).css("-webkit-transform", "rotateY(180deg)");
			
		}
		else{
			$(this).find(".ima").css("display","none");
			$(this).css("transform", "rotateY(0deg)");
			$(this).css("-webkit-transform", "rotateY(0deg)");
		}
		 
	});
	
});