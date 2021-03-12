export const InsertionSort = (array)=> {
    const animetions =  [];
    let i = 1;
    for(i= 1;i<array.length;i++){
        let item = array[i];
        // animetions.push([i,item,0]);// 0 = light up
        let j = i-1;
        while(item < array[j] && j >= 0 ){
            animetions.push([j+1,j+1,0]);
            animetions.push([j,j+1,0]);
            animetions.push([j+1,array[j],1]); //  1=  switch
            animetions.push([j,item,1]); 
            animetions.push([j+1,j,3]);
            animetions.push([j,j,3]);
           
            array[j+1] = array[j];
            j--;
        } 
        if (i === j+1 ){
            animetions.push([i,array[j],0]); 
            animetions.push([i,item,3]);// 3 = light off
        }
        
        array[j+1] = item;
    }
    return animetions;
}    