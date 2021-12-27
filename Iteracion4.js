// Usa un for...in para imprimir por consola los datos del alienígena

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (let key in alien){

    console.log(`el alienigena tiene la propiedad ${key} con valor ${alien[key]}`);
}