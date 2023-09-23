const prompt=require("prompt-sync")({sigint:true}); //import prompt to use in to create space for user to input data

   const marks = prompt("Enter student marks: "); // Enable user to enter marks in the console
   console.log(marks);
    if(marks > 100){
        console.log("Please enter valid marks"); //No marks above 100 can be graded as that data is invalid
    }
    else if(marks < 40){
        console.log("Your grade is E"); //0 - 40 marks is graded E
    }
    else if(marks <= 49){
        console.log("Your grade is D"); //41 -49 marks is graded D
    }
    else if(marks <= 59){
        console.log("Your grade is C"); //50 - 59 marks is graded C
    }
    else if(marks <= 79){
        console.log("Your grade is B"); //60 = 79 marks is graded B
    }
    else if(marks > 79){
        console.log("Your grade is A"); //80 marks and above is graded A
    }


