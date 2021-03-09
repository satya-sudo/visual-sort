
export const mergeSort = (array) => {
    const auxArry = array.slice();
    const animations  = []
    mergeSorter(array,0,array.length-1,auxArry,animations);
    return animations;
}


function  mergeSorter(mainArry,start,end,auxArry,animations){
    if (start === end){
        return;
    }
    const middle = Math.floor((start+end)/2); 
    mergeSorter(auxArry,start,middle,mainArry,animations);
    mergeSorter(auxArry,middle+1,end,mainArry,animations);
    mergeArr(mainArry,start,middle,end,auxArry,animations);
}


function  mergeArr(mainArry,start,middle,end,auxArry,animations){
    let i = start;
    let k = start;
    let j = middle+1;

    while (i <= middle && j<= end ){
        // comparing anima...
        animations.push([i,j]);
        // reverting color
        animations.push([i,j]);
        if(auxArry[i] <= auxArry[j]){
            // animations for vvalue replacement
            animations.push([k,auxArry[i]]);
            mainArry[k++] = auxArry[i++];
        } else {
            animations.push([k,auxArry[j]])
            mainArry[k++] = auxArry[j++];
        }
    }

    while (i <= middle){
        // not camparing 
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxArry[i]])

        mainArry[k++] = auxArry[i++];
    }

    while (j <= end){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxArry[j]]);

        mainArry[k++] = auxArry[j++];
    }
}
