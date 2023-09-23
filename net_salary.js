const prompt=require("prompt-sync")({sigint:true});

const basicSalary = prompt("Enter basic salary: ");
const benefits = prompt("Enter total benefits: ");

const grossSalary = parseInt(basicSalary, 10) + parseInt(benefits, 10);
console.log(`The gross salary is: ${grossSalary}`);

if(grossSalary <= 24000) {
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

    if(grossSalary <= 5999){
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

const nssfTax = grossSalary * 0.6;
console.log(`The NSSF tax is: ${nssfTax}`);


const totalTax = parseInt(payee) + parseInt(nhifTax);
console.log(`The total tax is: ${totalTax}`);

const netSalary = parseInt(grossSalary) - parseInt(totalTax);
console.log(`The net salary is: ${netSalary}`);