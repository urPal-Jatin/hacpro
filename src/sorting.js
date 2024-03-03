// eslint-disable-next-line no-lone-blocks
{/* //bubble sort 
const bubblesort=(arr)=>{
    const n = arr.length;
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubblesort([3,5,7,4,2])); */}

/* //selection sort

const selectionSort=(arr)=>{
    const n = arr.length;
    for(let i=0; i<n; i++){
        let min = i;
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min!== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([6,8,9,4,5])); */


//