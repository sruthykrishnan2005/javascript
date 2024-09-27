// d=[{name:'anu',age:20,place:'ekm'},{name:'sanu',age:30,place:'ekm'},{name:'manu',age:40,place:'ekm'}]
// d.forEach(element =>{
//     console.log(element.name);
// });


d = [{ id: 1, name: 'sam', age: 20 }, { id: 2, name: 'ammu', age: 30 }, { id: 3, name: 'manu', age: 40 }]
function display() {
    const t_var = document.querySelector('#peopleTable tbody')
    t_var.innerHTML = ''
    d.forEach(element => {
        const t_row = document.createElement('tr')

        const t_id = document.createElement('td')
        t_id.textContent = element.id
        t_row.appendChild(t_id)


        const t_name = document.createElement('td')
        t_name.textContent = element.name
        t_row.appendChild(t_name)


        const t_age = document.createElement('td')
        t_age.textContent = element.age
        t_row.appendChild(t_age)


        const edit_td=document.createElement('td')
        const edit_btn=document.createElement('button')
        edit_btn.textContent='edit'
        edit_btn.onclick=function(){
            edit_frm(element.id)
        }
        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)

        const del_td=document.createElement('td')
        const del_btn=document.createElement('button')
        del_btn.textContent='delete'
        del_btn.onclick=function(){
            delete_data(element.id)
        }
        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)
        t_var.appendChild(t_row)
    });
}

document.getElementById('submitform').addEventListener('submit', function (event) {
    event.preventDefault() 
const id = document.getElementById('id').value
const name = document.getElementById('name').value
const age = parseInt(document.getElementById('age').value)
d.push({id:id,name:name,age:age})
document.getElementById('id').value = ''
document.getElementById('name').value = ''
document.getElementById('age').value = ''

display()
})

// document.getElementById('editform').addEventListener('edit', function (event) {
//     event.preventDefault() 
// const id = document.getElementById('id').value
// const name = document.getElementById('name').value
// const age = parseInt(document.getElementById('age').value)
// d.push({id:id,name:name,age:age})
// document.getElementById('id').value = ''
// document.getElementById('name').value = ''
// document.getElementById('age').value = ''


// display()
// })


let edit_id=''
function edit_frm(id){
    console.log('editing',id);
    document.getElementById('editform').style.display='block'
    document.getElementById('submitform').style.display='none'
    const edit_data=d.find(user=>user.id==id)
    document.getElementById('edit_id').value=edit_data.id
    document.getElementById('edit_name').value=edit_data.name
    document.getElementById('edit_age').value=edit_data.age
    edit_id=id
}

document.getElementById('editform').addEventListener('submit',function(event){
    event.preventDefault()
    const edit_id=document.getElementById('edit_id').value
    const edit_name=document.getElementById('edit_name').value
    const edit_age=document.getElementById('edit_age').value
    d=d.map(user=>{
        if(user.id==edit_id){
            return {...user,id:edit_id,name:edit_name,age:edit_age}
        }
        return user
    })
    // console.log(edit_id,edit_name,edit_age);
    document.getElementById('editform').style.display='none'
    document.getElementById('submitform').style.display='block'
    display()
})

function delete_data(id){
    d=d.filter(user=>{
        if(user.id!=id){
            return user
        }
    })
    display()
    // console.log(id);
}

display()