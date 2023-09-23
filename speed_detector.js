const prompt=require("prompt-sync")({sigint:true}); //import prompt to use in to create space for user to input data

   const carSpeed = prompt("Enter car speed: "); // Enable user to enter car speed in the console
   console.log(carSpeed);

   if(carSpeed <= 70){ // Display "Ok" if the speed is below 70.
    console.log("Ok");
   }
   else if(carSpeed > 70){
   let demerits = (carSpeed - 70) / 5; //Calculate demerit points for 5km/s speed above the recommended 70.
   console.log(`Points: ${demerits}`);
   
   if(demerits <= 12) {
    console.log("Please slow down!");  //Inform driver to slow down 
   } else{console.log("License suspended.")} //If the demerit points are above 12, suspend the driver's licence.
    
   }


