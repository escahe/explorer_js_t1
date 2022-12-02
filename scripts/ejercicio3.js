function iniciar() {
    const valor = parseFloat(prompt("Digite un número"));
    console.log(valor)
    if (isNaN(valor)) {
        alert("Debe ingresar un número válido");
        iniciar();
    } else {
        const resultado = `Tu número es ${valor}, y sumado 10 = ${valor+10}`;

        const resultInDoc = document.getElementById("results");
        resultInDoc.innerHTML = `
            <h2>
                ${resultado}<br><br>
            </h2>
            <h3>también puedes ver el resultado en consola presionando ctrl + shift + j</h3>
        `;
        console.log("Hola esta es la consola, aquí está tu resultado:");
        console.log(resultado);
    }
    

    
}