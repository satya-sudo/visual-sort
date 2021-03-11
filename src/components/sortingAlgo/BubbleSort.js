export const BubbleSort = (array) =>{
    const animations = [];
    let  i = 0,j = 0,temp;
    for( i = 0 ;i < array.length;i++){
        for (j = 0 ;j <array.length - i -1; j++){
            animations.push([j,j+1,0]);
            animations.push([j+1,j+1,0]);
            if (array[j] > array[j+1]){
                temp =  array[j];
                array[j] =  array[j+1];
                array[j+1] = temp;
                animations.push([j,array[j],2]);
                animations.push([j+1,array[j+1],2]);
            }
            animations.push([j,j+1,1]);
            animations.push([j+1,j+1,1]);
        }
    }
    return animations;
}

