//Checkoff specific toDos by clicking
$("ul").on("click","li", function(){
	console.log($(this).css("color"));
	if($(this).css("color")==="rgb(128, 128, 128)"){	
		$(this).css({
			color:"black",
			textDecoration:"none"
		});
	}
	else{
		$(this).css({
			color:"gray",
			textDecoration:"line-through"
		});
	}
});	
	
//Click on X to delete
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//new entry
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var newr=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newr + "</li>");
	}	
		
});
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
})