// let a = 10;
// let b = 4;

// let result = (a + b < 10) ? 'Yes' : 'No';
// console.log(result);



// function numPower(number,power){
//     let total=1
//     for(let i=1;i <=power; i++){
//         total*=number;
//     }
//     return total;
//     }
    
//     console.log(numPower(4,3));
//     // console.log(numPower(16,2));



let tbl = document.getElementById('tbl')
let slct = document.getElementById('slct')

function add() {
    tbl.style.display="table"

    let result = '';
    let color;
    for (let i = 1; i <= slct.value; i++) {
        result += `<tr>`;
        for (let j = 1; j <= slct.value; j++) {
            color=(i+j)%2==0 ?   'black':''; 
            
            result += `<td style="background-color:${color}">${i}+${j}</td>`;            
        }
        result += `</tr>`;
    }
    tbl.innerHTML = result;
}
slct.addEventListener('change', add);
    