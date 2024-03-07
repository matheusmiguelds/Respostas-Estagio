function fibonacci(n) {
    let sequencia = [0, 1];

    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i-1] + sequencia[i-2];
    } 

    if(sequencia.includes(n)) return sequencia + '\nEstá na sequência!';

    return sequencia + '\nNão está na sequência';
}

const resultado = fibonacci(21);
console.log(resultado);