// l=[1,2,3,4]
// l1=[...l,5,6,7]
// console.log(l1);


// d={name:'anu',age:24}
// d1={...d,place:'ktym'}
// console.log(d1);


// d={name:'anu',age:24}
// d1={...d,place:'ktym',name:'akku',age:22}
// console.log(d1);



// l=[1,2,3,4]
// const [a,...b]=l
// console.log(a);
// console.log('b=',b);


// d={name:'abc',age:24,place:'ekm'}
// const{name,age}=d
// console.log(name);
// console.log(age);



// console.log('start');
// function display(Callback){
//     console.log('welcome');
//     setTimeout(function(){
//         console.log('inside fun');
//         Callback()
//     },2000)
// }
// function display1(){
//     console.log('dis');
//     console.log('dis1');
// }
// console.log('before');
// display(display1)
// console.log('end');




// console.log('start');
// function display(){
//     setTimeout(function(){
//         console.log('inside fun');
        
//     },2000)
// }

// console.log('before');
// display()
// console.log('end');


// function display(){
//     console.log('display');
// }
// const a=setInterval(display,2000)



let count=10
let c=setInterval(function(){
    console.log(count);
    count--
    if(count==0){
        clearInterval(c)
        console.log('completed');
    }
},1000)