let age;
let retry = "Do you want to try again?";
function enterAge() {
    while(true){
         age = prompt("Enter the age:");
        if(isNaN(age) ||  age.trim() ==="" || age>100) {
            alert("Please enter Valid Age");
            console.error("Please enter Valid Age");
            continue;
        }
        age = parseInt(age);
        if(age >= 18 && age < 70){
            alert("Congratulations! You are Eligible for the Driving Licence, You can Drive");
            if(confirm("Do you want to visit Google")){
                window.location.replace("http://www.google.com")
            }
            break;
        }
        else if(age >= 70){
            alert("Sorry, You are too old to Drive")
        }
        else if(age > 0){
            alert("Sorry! You are underage, You are not Elidgible for the Driving Licence, You can't Drive");
        }
        else if(!age){
            break;
        }
        if(!confirm(retry)){
            break;
        }
    }
}
enterAge();