/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn");
let input = document.getElementById("input");
let pLength = document.getElementById("length");
let pVolume =document.getElementById("volume");
let pMass = document.getElementById("mass");

convertBtn.addEventListener("click", function(){
    meterFeet();
    literGallons();
    kilosPounds();

});
function meterFeet(){
    let feet =(Number(input.value)*3.281).toFixed(3);
    let meters =(Number(input.value)/3.281).toFixed(3);
    pLength.textContent = `${input.value} metres = ${feet} feet / ${input.value} feet = ${meters} meters.`;
};
function literGallons(){
    let gallons = (Number(input.value)*0.264).toFixed(3);
    let liters = (Number(input.value)/0.264).toFixed(3);
    pVolume.textContent = `${input.value} liters = ${gallons} gallons / ${input.value} gallons = ${liters} liters` ;
};
function kilosPounds(){
    let pounds = (Number(input.value)*2.204).toFixed(3);
    let kilos = (Number(input.value)/2.204).toFixed(3);
    pMass.textContent = `${input.value} kilos = ${pounds} pounds / ${input.value} pounds = ${kilos} kilos.`;
};
