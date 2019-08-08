//toggle color
$("ul").on("click","li",(function () {  //instead of li used ul and on instead of directly use click to make dynamic when add new object
 $(this).toggleClass("completed");
}));

//click on x to delete
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();  //very important, if we don't use all event will trigger
});

$("input[type='text'").keypress(function (event) {
    if(event.which === 13){
        //grabbing text after press Enter(13)
        var todoText = $(this).val();
        $(this).val("");  //to make empty
        //create a new li and add to ul
        $("ul").append('<li><i class="fa fa-trash"></i> '+todoText+"</li>")
    }
    
});