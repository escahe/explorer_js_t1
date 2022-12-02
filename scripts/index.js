const cuadros = document.getElementById("grid");
const numEjercicios = 5;
console.log(cuadros.innerHTML.length);
for (let indice = 1; indice < numEjercicios; indice++) {
    const rotulo = `Ejercicio #${indice}`;
    cuadros.innerHTML+= `
    <a href="https://escahe.github.io/explorer_js_t1/pages/ejercicio${indice}.html">
        <div class="col">
            <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">${rotulo}</text></svg>
            </div>
        </div>
    </a>
    `;
}