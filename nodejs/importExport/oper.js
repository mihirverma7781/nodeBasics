
const add =(a,b)=>{
    return a+b;
}
const sub =(a,b)=>{
    return a-b;
}
const mul =(a,b)=>{
    return a*b;
}

const name = "Mihir";
//only for one export
// module.exports = add;

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
//OR
module.exports = {add,sub,mul,name}