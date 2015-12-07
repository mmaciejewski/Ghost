/* jshint browser:true, jquery:true */

$(document).ready(function() {
    $("#message").text("The cave");
    
    //GHOST MOVEMENT
    $(document).keydown(function(e){
       
       //LEFT
       if (e.keyCode == 37) {
           //alert("left pressed");
           $("#ghost").css("padding-left", "-=50");
           return false;
       }
       
       //UP
       if (e.keyCode == 38) { 
           //alert( "u pressed" );
           $("#ghost").css("padding-top", "-=50");
           return false;
       }
       
       //RIGHT
       if (e.keyCode == 39) { 
           //alert( "r pressed" );
           if ($("#ghost").css("padding-left") !== '500px'){
                $("#ghost").css("padding-left", "+=50");
                return false;
        }
       }
       
       //DOWN
       if (e.keyCode == 40) { 
           //alert( "d pressed" );
           if ($("#ghost").css("padding-top") !== '500px'){
                $("#ghost").css("padding-top", "+=50");
                return false;
           }
       }
       
    });
    //END OF GHOST MOVEMENT
});