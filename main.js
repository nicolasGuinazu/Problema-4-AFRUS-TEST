
function arrayInformation(array){
    let sum=0
    let overThousand=0
    let count=0
    let odd=0
    let even=0
    let max=-100000;
    let min=1000000;

    for(element of array){
        element%2==0?even++:odd++ 
        
        if (element>1000){
            overThousand++
        }
        if(element > max){
            max=element
        }
        if(element < min){
            min=element
        }
        count++
        sum+=element
    }

    
    console.log(`The array contains ${count} elements`)
    console.log(`${odd} odd numbers`)
    console.log(`${even} even numbers`)
    console.log(`${((overThousand/(count !=0 ? count : 1))*100).toFixed(2)} % of numbers greater than 1000`)
    console.log(`${max} highest number`)
    console.log(`${((min*100)/max).toFixed(5)} % of lowest`)
    console.log(`${sum/count}: mean`)
    console.log(`${(((sum/count)*100)/max).toFixed(5)} % of mean`)
 }
 
 arrayInformation(/*[]ingresar arreglo*/)