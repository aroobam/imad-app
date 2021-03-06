console.log('Loaded!');

var submit = document.getElementById("submit_btn");

submit.onclick = function(){
    console.log("Clicked!");
    
    //create a request object
    var request = new XMLHttpRequest();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    console.log(username);
    console.log(password);
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                alert("Logged in successfully");
            } else if(request.status === 403) {
                alert("username/password is incorrect");
            } else if(request.status === 500) {
                alert("Something went wrong in the server");
            }
        }
    };
    
    
    request.open("POST", "http://aroobam.imad.hasura-app.io/login", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({"username":username,"password":password}));
};

console.log ("done!");