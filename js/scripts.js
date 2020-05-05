



function getAkanName(){
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var myBirthday=document.getElementById("myBirthDate").value;
var dateOfBirth=new Date(myBirthday);
var dayOfTheWeek=dateOfBirth.getDay();

var myGender=document.getElementByName("gender");
for(var i=0;i<myGender.length;i++){
		if(myGender[i].checked){
			if(myGender[i].value === "Male"){
				document.getElementById("displayAkanName").innerHTML = maleAkanNames[dayOfTheWeek];
			}
      else if (myGender[i].value === "Female"){
       document.getElementById("displayAkanName").innerHTML=femaleAkanNames[dayOfTheWeek];
     }
   }
 else {document.getElementById('message').innerHTML = "";
 }
}
}
function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}
