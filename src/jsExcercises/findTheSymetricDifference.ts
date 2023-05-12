export const sym = (...args: Array<number[]>) => {

    const reduceArrayWithUniqueValues = (arg_1: Array<number>, arg_2: Array<number>): Array<number> => {
        /*
        * Función que toma ambos array y elimina lo que están en uno u en otro
        * Esta es la función que vamos a pasar como callback a reduce que itera sobre los elementos y toma el return de dicha operación. Pasamos el valor actual y el valor acumulado
        */
        return [
            ...arg_1.filter(e => !arg_2.includes(e)),
            ...arg_2.filter(e => !arg_1.includes(e))
        ]
    }

    // // Set devuelve los valores únicos en formato de arreglo. Lo transformamos a array con el operador ...
    
    return [...new Set(args.reduce(reduceArrayWithUniqueValues))]
  
}


  