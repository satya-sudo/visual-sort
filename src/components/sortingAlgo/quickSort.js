export const quickSorter = (arry) =>{
    const animations = [];
    quickSort(arry,0,arry.length-1,animations);
    return animations
}

function  quickSort(arry,s,e,animations){
    if(s < e){
        let q =  partition(arry,s,e,animations);
        quickSort(arry,s,q-1,animations);
        quickSort(arry,q+1,e,animations);
    }
}


function partition(arry,s,e,animations){
    let x = arry[e],i = s;
    
    animations.push([e,x,0]); // light up the pivet 
    
    for(let j =  s; j < e;j++ ){
        
        // animations.push([j,x,3])// light the current point
        
        if (arry[j] < x) {
            animations.push([i,x,3]);
            animations.push([j,x,3]);
            animations.push([i,arry[j],1]);// switch
            animations.push([j,arry[i],1]);// switch
            animations.push([j,x,2]);
            animations.push([i,x,2]);
            
            [arry[j], arry[i]] = [arry[i], arry[j]];
            i++;
            
        }
    
        // animations.push([j,x,2])// delight the current point

    }
    [arry[i], arry[e]] = [arry[e], arry[i]] 
    animations.push([i,x,0]);
    animations.push([i,x,1])// switch
    animations.push([e,arry[e],1])// switch
    animations.push([i,x,2]);
    animations.push([e,x,2]); // delight up the pivet 
   
    return  i;
}

