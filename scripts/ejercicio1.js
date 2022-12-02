()=>{

}
function evaluarEx() {
    const A = parseFloat(document.getElementById("inputA").value);
    const B = parseFloat(document.getElementById("inputB").value);
    const C = parseFloat(document.getElementById("inputC").value);

    if(A != NaN && C != NaN ||C != NaN){
        const tabla = document.getElementById("table");
        tabla.innerHTML = `
        <tr>
            <th>Expresión</th>
            <th>Evaluación</th>
        </tr>
        <tr>
            <td>${A} > 3</td>
            <td>${A>3}</td>
        </tr>
        <tr>
            <td>${A} > ${C}</td>
            <td>${A>C}</td>
        </tr>
        <tr>
            <td>${A} < ${C}</td>
            <td>${A<C}</td>
        </tr>
        <tr>
            <td>${B} < ${C}</td>
            <td>${B<C}</td>
        </tr>
        <tr>
            <td>${B} != ${C}</td>
            <td>${B!=C}</td>
        </tr>
        <tr>
            <td>${A} == 3</td>
            <td>${A==3}</td>
        </tr>
        <tr>
            <td>${A} * ${B} == 15</td>
            <td>${A*B==15}</td>
        </tr>
        <tr>
            <td>${A} * ${B} == -30</td>
            <td>${A*B==-30}</td>
        </tr>
        <tr>
            <td>${C} / ${B} < ${A}</td>
            <td>${C/B < A}</td>
        </tr>
        <tr>
            <td>${C} / ${B} == -10</td>
            <td>${C/B == -10}</td>
        </tr>
        <tr>
            <td>${C} / ${B} == -4</td>
            <td>${C/B==-4}</td>
        </tr>
        <tr>
            <td>${A} + ${B} + ${C} == 5</td>
            <td>${A+B+C==5}</td>
        </tr>
        <tr>
            <td>(${A}+${B} == 8) && (${A}-${B} == 2)</td>
            <td>${A+B==8 && A-B==2}</td>
        </tr>
        <tr>
            <td>(${A}+${B} == 8) || (${A}-${B} == 6)</td>
            <td>${A+B==8 || A-B == 6}</td>
        </tr>
        <tr>
            <td>${A} > 3 && ${B} > 3 && ${C} < 3</td>
            <td>${A>3 && B>3 && C<3}</td>
        </tr>
        <tr>
            <td>${A} > 3 && ${B} >= 3 && ${C} < -3</td>
            <td>${A>3 && B>=3 && C<-3}</td>
        </tr>
        `;
    
    }
  
}