console.log('Loaded!');

var submit = document.getElementById("submit");

submit.onCLick = function(){
    
    //create a request object
    var request = new XHttpRequest();
    
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    
    console.log(username);
    console.log(password);
    
    request.open("POST", "http://aroobam.imad.hasura-app.io/login", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({"username":username,"password":password}));
}