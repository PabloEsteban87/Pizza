const tomate = "2 tomates";
const mozzarella = "100 gramos de mozarella"

let ingredients = ["pineapple", "grilled chicken", "anchovies", "black olives", "blue cheese"];

function start(){
console.log("connected");
base();
}

start();

function put_salt(){
    console.log("Harina con la sal");
}

function mix_water(){
    console.log("Mezclamos el agua con la levadura");
}

function add_oil(){
    console.log("Añadimos el aceite a la harina");
}

function mix_ingredients(){
    console.log("Mezclamos por encima los ingredientes y añadimos el agua");
}

function knead_dough(){
    console.log("Amasamos la masa ");
}

function rest_dough(){
    console.log("Una vez tengamos la masa homogénea dejamos reposar la masa una 1h");
}


function base(){
    put_salt();
    mix_water();
    add_oil();
    mix_ingredients();
    knead_dough();
    rest_dough();
}



