$(document).ready(function() {
    // jQuery("#error1").hide();
    // jQuery("#error2").hide();
    
    $("#add").click(function() {
        var login = $("#login").val();
        var password = $("#password").val();
        
        if(login === ""){
            $("#error1").fadeIn();
        }
        if(password === ""){
            $("#error2").fadeIn();
        }
        if(login){
            $("#error1").fadeOut();
        }
        if(password){
            $("#error2").fadeOut();
        }
    })
    
    
    
})