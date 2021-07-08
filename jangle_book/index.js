console.log("Welcome to Tiger jungle Safari Park");
// let btn=document.getElementsByTagName("button");

let info=[];
function store(){
    let inputEmail= document.getElementById("email");
    localStorage.setItem("email",inputEmail.value); 


    let client_name=document.getElementById("name1");
   localStorage.setItem("name1",client_name.value);
    

    let phoneNo=document.getElementById("contactNo");
    localStorage.setItem("ContactNo",phoneNo.value);

    alert("Your booking is Done !!");
   }


   
   