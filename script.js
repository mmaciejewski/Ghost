/* jshint browser:true, jquery:true */

$(document).ready(function() {
    $("#location").text("The Cave");
    $("#ghost").css('visibility','visible').hide().fadeIn(15000); //Fade in ghost
    
    //map change
    function mapChange($newMap, $currentMap, $mapName) {
            $("#" + $currentMap).fadeOut("slow");
            $("#" + $currentMap).attr("id", $newMap)
            $("#" + $newMap).fadeIn("slow");
            $("#location").text($mapName);
    }
    
    $( "#light" ).click(function() {
        $("#description p").fadeIn("slow");
    });
    
    //GHOST MOVEMENT
    $(document).keydown(function(e){
   
       //LEFT
       if (e.keyCode == 37) {
           //alert("left pressed");
           if ($("#ghost").css("padding-left") !== '50px'){
                $("#ghost").css("padding-left", "-=50");
                return false;
           }
       }
       
       //UP
       if (e.keyCode == 38) { 
           //alert( "u pressed" );
           if ($("#ghost").css("padding-top") !== '50px'){
                $("#ghost").css("padding-top", "-=50");
                return false;
           }
       }
       
       //RIGHT
       if (e.keyCode == 39) { 
           //alert( "r pressed" );
           if ($("#ghost").css("padding-left") !== '450px'){
                $("#ghost").css("padding-left", "+=50");
                return false;
        }
       }
       
       //DOWN
       if (e.keyCode == 40) { 
           //LEAVING CAVE
           if ($("#ghost").css("padding-top") === '450px' && $("#ghost").css("padding-left") === '250px'){
                $("#ghost").css("padding-top", "500px");
                //alert("You are leaving cave.");
               mapChange("worldmap", "cavemap", "The World");
           }
           if ($("#ghost").css("padding-top") !== '450px'){
                $("#ghost").css("padding-top", "+=50");
                return false;
           }
       }
       
    });
    //END OF GHOST MOVEMENT
});