function isObj(obj){
    return obj&&typeof(obj)==='object';
}

export default function simpleEqual(a,b){
    if(a===b||(a!==a&&b!==b)) return true;

    if(isObj(a)&&isObj(b)){
        let aKeys = Object.keys(a);
        let bKeys = Object.keys(b);

        if(aKeys.length!=bKeys.length) return false;

        let isObjKeys = [];

        if(aKeys.every(key=>{
                let curA = a[key];
                let curB = b[key];
                if(!bKeys.includes(key)||curA===a||curB===b){
                    return false;
                }else if(isObj(curA)&&isObj(curB)){
                    return !!isObjKeys.push(key);
                }else{
                    return simpleEqual(a[key],b[key]);
                }
            })){
            let comparingKey;
            let ret = true;
            while(comparingKey=isObjKeys.shift()){
                if(!simpleEqual(a[comparingKey],b[comparingKey])){
                    ret =  false;
                    isObjKeys=[];
                }
            }
            return ret;
        }
    }

    return false;
}