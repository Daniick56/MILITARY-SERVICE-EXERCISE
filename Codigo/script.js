

function determinarApto(genero, estatura, edad, icfes) {

    let matricula = 11800000;

    if (
        (genero == "m" && estatura >= 1.70 && (edad >= 18 && edad <= 25) && icfes >= 60) ||
        (genero == "f" && estatura >= 1.50 && (edad >= 18 && edad <= 28) && icfes >= 60)
    ) {
        
        if (icfes < 65) {
            let precio1 = matricula * 1.25;
            console.log(`Usted aplica y el valor de la matricula es de $${precio1} pesos.`);
            return; 
        }else if ((icfes > 66 && icfes < 70) && edad > 22) {
            console.log(`Usted aplica y el valor de la matricula es de $${matricula} pesos.`);
            return; 
        }else if ((icfes > 66 && icfes < 70) && edad <= 22) {
            let precio3 = matricula * 0.75;
            console.log(`Usted aplica y el valor de la matricula es de $${precio3} pesos.`);
            return; 
        }else if (icfes > 70) {
            let precio4 = matricula * 0.5;
            console.log(`Usted aplica y el valor de la matricula es de $${precio4} pesos.`);
            return; 
        }else {
            console.log(`Usted aplica y el valor de la matricula es de $${matricula} pesos.`);
            return;
        }
    }else {
        console.log("Usted no aplica");
        location.reload;
        return;
    }
}

let genero = prompt("Ingresa tu genero (F/M)").toLowerCase();
let edad = parseInt(prompt(" Ingrese su edad"));
let icfes = parseInt(prompt(" Ingrese su puntaje de el icfes"));
let estatura = parseFloat(prompt(" Ingrese su estatura "));  



determinarApto(genero, estatura, edad, icfes);

