function demo(){
    let a='welcome to all'
    console.log(a);
    const main=document.querySelector('.main')
    const div=document.createElement('div')
    let count=59
    let c=setInterval(function(){
    div.innerHTML=`<h2 style=color:black">03:${count}</h2>`
    count--
    if(count==0){
        clearInterval(c)
        console.log('completed');
        div.innerHTML=`<h2 style="color:black">completed</h2>`
    }
    },1000)
    // div.innerHTML=`<h2 style="color:blue">${a}</h2>`
    // div.innerHTML=` <h2><p style="color:red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero asperiores nobis officiis amet pariatur ab quos enim! Cumque provident sapiente, alias inventore quas enim cum numquam natus aperiam quibusdam.</p></h2>`
    // const h2=document.createElement('h2')
    // h2.textContent=a
    // div.appendChild(h2)
    main.appendChild(div)
}
demo()