function heapify(arr,n,i,animations){
    
    let  largest  =   i;
    let l =  2 * i  + 1;
    let r =  2 * i  + 2; 

    if (l < n  && arr[largest] < arr[l] ){
        largest = l;
    }

    if (r < n && arr[largest] < arr[r]){
        largest = r;
    }

    if  (largest !== i){

        animations.push([largest,arr[i],0]);
        animations.push([i,arr[largest],0]);

        animations.push([largest,arr[i],1]);
        animations.push([i,arr[largest],1]);

        animations.push([i,arr[largest],2]);
        animations.push([largest,arr[i],2]);


        [arr[i],arr[largest]] = [arr[largest],arr[i]];
        heapify(arr,n,largest,animations);
    }    
}

function heapSortBuild(arr,n,animations){
    for (let i = Math.floor(n/2) -1;i > -1; i-- ){
        heapify(arr,n,i,animations);
    }

    for (let i = n-1;i > -1 ;i--){

        animations.push([i,arr[0],0]);
        animations.push([0,arr[i],0]);

        animations.push([i,arr[0],1]);
        animations.push([0,arr[i],1]);

        animations.push([0,arr[i],2]);
        animations.push([i,arr[0],3]);

        [arr[i], arr[0]] = [arr[0], arr[i]];
        heapify(arr,i,0,animations);
    }
}

export const heapSort  = (arr) => {
    let animations  = [];
    heapSortBuild(arr,arr.length,animations);
    return animations;
}
