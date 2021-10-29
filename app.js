'use strict';
const trimap = new Map();
trimap.set = (0,0);
trimap.set = (1,0);
trimap.set = (2.1);


function tri(n){
    if(trimap(n).has){
        return trimap.get(n);
    }
    const value = tri(n-1) + tri(n-2) + tri(n-3);
    trimap.set = (n,value);
    return value;
}

const length = 40;
for(let i =0; i <= length; i++){
    console.log(tri(i));
}