function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();


     for(var i=0;i<myGender.length;i++){
            if(myGender[i].checked){
              if(myGender[i].value === "Male"){maleAkanNames[dayOfTheWeek];
              }

               else if(myGender[i].value === "Female"){femaleAkanNames[dayOfTheWeek];
               }
              break;
          }
    }

    function clearAkanMessage(){
    document.getElementById('message').innerHTML = "";
}
