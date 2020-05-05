function getAkanName(){
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var myBirthday=document.getElementById("myBirthDate").value;
var myGender=document.getElementByName("gender");

var dateOfBirth=new Date(myBirthday);
var dayOfTheWeek=dateOfBirth.getDay();

for(var i=0;i<myGender.length;i++){
		if(myGender[i].checked){
			if(myGender[i].value === "Male"){
			// Here's where the logic for getting male akan name according to the submitted gender goes
				document.getElementById("displayAkanName").innerHTML = maleAkanNames[dayOfTheWeek];
			}
      else if (myGender[i].value === "Female"){
       // Here's where the logic for getting female akan name according to the submitted gender goes
       femaleAkanNames[dayOfTheWeek];
     }
   }
 else {document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Should Select a Gender Too Determine Your Akan Name!</div>";
                $('#message').addClass("animated shake");
   // Gender not selected error display here.
 }
}
}
