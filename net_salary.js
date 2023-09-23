const prompt=require("prompt-sync")({sigint:true}); //import prompt to use in to create space for user to input data

const basicSalary = prompt("Enter basic salary: "); // Enable user to enter basic salary in the console
const benefits = prompt("Enter total benefits: "); // Enable user to enter benefits in the console

const grossSalary = parseInt(basicSalary, 10) + parseInt(benefits, 10); //calculate gross salary.
console.log(`The gross salary is: ${grossSalary}`);

//PAYEE
if(grossSalary <= 24000) {   //This if block checks the tax bracket depending on the amount of gross salary and does the necessary calculations to return payee.
    payee = grossSalary * 0.1; 
    console.log(`Tax payable is ${payee}`);
} else if(grossSalary <= 24000) {
    payee = grossSalary * 0.1;
    console.log(`Tax payable is ${payee}`);
} else if(grossSalary <= 32333) {
    payee = grossSalary * 0.25;
    console.log(`Tax payable is ${payee}`);
} else if(grossSalary <= 500000) {
    payee = grossSalary * 0.3;
    console.log(`Tax payable is ${payee}`);
} else if(grossSalary <= 800000) {
    payee = grossSalary * 0.325;
    console.log(`Tax payable is ${payee}`);
}  else if(grossSalary > 800000) {
    payee = grossSalary * 0.35;
    console.log(`Tax payable is ${payee}`);
} 

//NHIF TAX
    if(grossSalary <= 5999){    //This if block checks the NHIF tax bracket depending on the amount of gross salary and does the necessary calculations to return NHIF tax.
         nhifTax = 150;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 7999){
         nhifTax = 300;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 11999){
         nhifTax = 400;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 14999){
         nhifTax = 500;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 19999){
         nhifTax = 600;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 24999){
         nhifTax = 750;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 29999){
         nhifTax = 850;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 34999){
         nhifTax = 900;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 39999){
         nhifTax = 950;
        console.log(`NHIF tax is ${nhifTax}`);
    } else if(grossSalary <= 44999){
         nhifTax = 1000;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 49999){
         nhifTax = 1100;
        console.log(`NHIF tax is ${nhifTax}`);
    } else   if(grossSalary <= 59999){
         nhifTax = 1200;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 69999){
         nhifTax = 1300;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 79999){
         nhifTax = 1400;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 89999){
         nhifTax = 1500;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary <= 99999){
         nhifTax = 1600;
        console.log(`NHIF tax is ${nhifTax}`);
    } else  if(grossSalary > 100000){
         nhifTax = 1700;
        console.log(`NHIF tax is ${nhifTax}`);
    } 

//NSSF
const nssfTax = grossSalary * 0.6;   //Calculate the NSSF as 6% of the gross salary.
console.log(`The NSSF tax is: ${nssfTax}`);


const totalTax = parseInt(payee) + parseInt(nhifTax); //Add total tax(payee and NHIF tax)
console.log(`The total tax is: ${totalTax}`);

const netSalary = parseInt(grossSalary) - parseInt(totalTax); //Get net salary by subtracting total taxes from gross salary.
console.log(`The net salary is: ${netSalary}`);