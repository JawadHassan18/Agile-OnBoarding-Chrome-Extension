
$(document).on('click','#login-button', ()=>{
    var email = document.getElementById('email').value ;
    var password = document.getElementById('password').value;
    if(email == '' && email == 'undefined')
    {
        //Show some error
        return false;
    }
    if(password == '' && password == 'undefined')
    {
        //Show error message for password
        return false;
    }
    //alert("Hello world!");
    chrome.browserAction.setPopup({
        popup: "popup.html",
      });
    //window.location.href = ".../popup.html";
});

