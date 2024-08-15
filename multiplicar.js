const TablasMultiplicar = () => {
    for (let factor1 = 0; factor1 <= 10; factor1++) {
        console.log(`Tabla del ${factor1}:`);
        for (let factor2 = 0; factor2 <= 10; factor2++) {
            let producto = factor1 * factor2;
            console.log(`${factor1} * ${factor2} = ${producto}`);
        }
        console.log('');
    }
};

TablasMultiplicar();