
//typing text 
var typed = new Typed('#element', {
    strings: ['Jr.Software Engineer', ' Frontend Developer'],
    typeSpeed: 80,
    backSpeed: 50,
    startDelay:1000,
    loop : true,
  });

    /// mobile  ham menu function
    var menu=document.getElementById("menu")

    function popup(){
        menu.style.right="0"
    }
    
    function popdown(){
        menu.style.right="-200px"
    }


var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }  
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    } 
    event.currentTarget.classList.add("active-link")  
    document.getElementById(tabname).classList.add("active-tab") 

}
// Submit our details to my mail
var mgs = document.getElementById("mgs")
var form = document.getElementById("remove")
function sendmail(event){
    event.preventDefault()
    let parms={
        name :document.getElementById("name").value, 
        email :document.getElementById("email").value, 
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value,
        
    }
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var subject = document.getElementById("subject").value
    var message = document.getElementById("message").value
    
    if(name && email && subject && message){
        emailjs.send("service_k0jlkmr","template_29khwgn", parms).then(
            Response =>  {
                mgs.innerHTML ="Message sent successfully"
                setTimeout(function(){
                    mgs.innerHTML =""
                }, 4000)
                form.reset(1000)
            }
        )
    } 
    else{
        alert("Fill the all required fields")
    }
}


    

