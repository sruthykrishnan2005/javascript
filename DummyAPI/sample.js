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
        <div class="card">
            <img class="card-img-top" src="${element.images}" alt="Card image" style="width:100%">
            <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.description}</p>
                <a href="#" class="btn btn-primary see-more-btn" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#productModal">See More</a>
            </div>
        </div>
        `
           // <img src="${element.images}" width="100%">
        // <h3>${element.title}</h3>
        // <h6>${element.price}</h6>
        // `

     row.appendChild(col)
    });
    document.querySelectorAll('.see-more-btn').forEach(btn => {
        btn.addEventListener('click',(e) => {
            const productId =e.target.getAttribute('data-id');
            const product = data.products.find(p => p.id==productId);
            
            if(product) {
                document.getElementById('modalImage').src=product.thumbnail;
                document.getElementById('modalTitle').textContent=product.title;
                document.getElementById('modalDescription').textContent=product.description;
                document.getElementById('modalPrice').textContent=`Price: $${product.price}`;
            }
        });
    });
})
.catch(error => {
    console.error('Error fetching the data:', error);
});