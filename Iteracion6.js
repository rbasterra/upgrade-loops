// Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'},
    {id: 40, name: 'mi cara bonita'}
    ];


// for (let i=0; i < toys.length; i++){
    
//     // for (let key in toys[i]){
//     //     if (key!='id' && toys[i][key].includes('gato')){
//     //         toys.splice(i);
//     //     }
//     // }

//     if (toys[i].name.includes('gato')){
//         toys.splice(i,1);
//     }
// }

let toysToRemove=[];

for (let toy of toys){
    
    if (toy.name.includes('gato')){
        // toys.splice (toys.indexOf(toy),1);
        toysToRemove.push(toy);
    }
}

toysToRemove.forEach(toy => {toys.splice(toys.indexOf(toy),1); }) 

// for (let toy of toysToRemove){
//     toys.splice(toys.indexOf(toy),1);
// }

console.log (toys);