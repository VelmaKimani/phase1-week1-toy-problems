const prompt=require("prompt-sync")({sigint:true});

   const marks = prompt("Enter student marks: ");
   console.log(marks);
    if(marks > 100){
        console.log("Please enter valid marks");
    }
    else if(marks < 40){
        console.log("Your grade is E");
    }
    else if(marks <= 49){
        console.log("Your grade is D");
    }
    else if(marks <= 59){
        console.log("Your grade is C");
    }
    else if(marks <= 79){
        console.log("Your grade is B");
    }
    else if(marks > 79){
        console.log("Your grade is A");
    }
    return marks;


