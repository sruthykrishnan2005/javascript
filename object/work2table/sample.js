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

document.getElementById('editform').addEventListener('edit', function (event) {
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

