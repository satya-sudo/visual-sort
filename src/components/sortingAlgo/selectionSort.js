export const SelectionSort = (arry) =>{
    const animations  = [];
    for (let i = 0;i < arry.length;i++){
        animations.push([i,i,0])// light up
        let min_id = i;
        for (let j =  i+1; j < arry.length; j++){
            animations.push([j,j,1]) // compare ligh up
            if (arry[min_id] > arry[j]){
                min_id =  j;
            }
            animations.push([j,j,2]) // campare ligh up off
        }
        animations.push([min_id,min_id,0]);
        animations.push([i,arry[min_id],3]) //  switch
        animations.push([min_id,arry[i],3]) // switch
        animations.push([i,i,2])
        animations.push([min_id,min_id,2]);

        let temp = arry[min_id] ;
        arry[min_id] =  arry[i];
        arry[i] = temp;    

    }
    return animations;
}
