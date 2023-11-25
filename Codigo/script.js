

function determineEligibility(gender, height, age, icfes) {

    let tuition = 11800000;

    if (
        (gender === "m" && height >= 1.70 && (age >= 18 && age <= 25) && icfes >= 60) ||
        (gender === "f" && height >= 1.50 && (age >= 18 && age <= 28) && icfes >= 60)
    ) {
        
        if (icfes < 65) {
            let price1 = tuition * 1.25;
            console.log(`You are eligible, and the tuition fee is $${price1} pesos.`);
            return; 
        } else if ((icfes > 66 && icfes < 70) && age > 22) {
            console.log(`You are eligible, and the tuition fee is $${tuition} pesos.`);
            return; 
        } else if ((icfes > 66 && icfes < 70) && age <= 22) {
            let price3 = tuition * 0.75;
            console.log(`You are eligible, and the tuition fee is $${price3} pesos.`);
            return; 
        } else if (icfes > 70) {
            let price4 = tuition * 0.5;
            console.log(`You are eligible, and the tuition fee is $${price4} pesos.`);
            return; 
        } else {
            console.log(`You are eligible, and the tuition fee is $${tuition} pesos.`);
            return;
        }
    } else {
        console.log("You are not eligible");
        location.reload();
        return;
    }
}

let gender = prompt("Enter your gender (F/M)").toLowerCase();
let age = parseInt(prompt("Enter your age"));
let icfes = parseInt(prompt("Enter your ICFES score"));
let height = parseFloat(prompt("Enter your height"));  

determineEligibility(gender, height, age, icfes);
