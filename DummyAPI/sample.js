// fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
//     data.products.forEach(element => {
//         console.log(element.title);
//     });
// })



fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
    data.products.forEach(element => {
        const row=document.querySelector(".row")
        const col=document.createElement("div")
        col.classList.add('col-lg-3')
        col.innerHTML=`
        <img src="${element.images}" width="100%">
        <h3>${element.title}</h3>
        <h6>${element.price}</h6>
        `
        row.appendChild(col)
    });
});