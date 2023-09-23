const prompt=require("prompt-sync")({sigint:true});

   const carSpeed = prompt("Enter car speed: ");
   console.log(carSpeed);

   if(carSpeed <= 70){
    console.log("Ok");
   }
   else if(carSpeed > 70){
   let demerits = (carSpeed - 70) / 5;
   console.log(`Points: ${demerits}`);
   
   if(demerits <= 12) {
    console.log("Please slow down!");
   } else{console.log("License suspended.")}
    
   }


