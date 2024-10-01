const data=[{id:1, name:'anu', age:22,email:'anu@gmail.com',course:'science',date:2-4-2018},{id:2, name:'akku', age:20,email:'akku@gmail.com',course:'commerce',date:2-4-2019},{id:3, name:'appu', age:21,email:'appu@gmail.com',course:'computer engineering',date:2-4-2022}];
function display() {
    const tableBody = document.querySelector('#studenttable tbody')
    tableBody.innerHTML = ''
    data.forEach(element => {
        const row = document.createElement('tr')

        const studid = document.createElement('td')
        studid.textContent = element.id
        row.appendChild(studid)

        const studname = document.createElement('td')
        studname.textContent = element.name
        row.appendChild(studname)

        const studage = document.createElement('td')
        studage.textContent = element.age
        row.appendChild(studage)

        const studemail = document.createElement('td')
        studemail.textContent = element.email
        row.appendChild(studemail)

        const studcourse = document.createElement('td')
        studcourse.textContent = element.course
        row.appendChild(studcourse)

        const studdate = document.createElement('td')
        studdate.textContent = element.date
        row.appendChild(studdate)

        const edit_td=document.createElement('td')
        const edit_btn=document.createElement('button')
        edit_btn.textContent='edit'
        edit_btn.onclick=function(){
            edit_frm(element.id)
        }
        edit_td.appendChild(edit_btn)
        row.appendChild(edit_td)

        tableBody.appendChild(row);
})
}
document.getElementById('submitform').addEventListener('submit',function(event){
    event.preventDefault()
const id =  parseInt(document.getElementById('id').value);   
const name = document.getElementById('name').value;
const age = parseInt(document.getElementById('age').value);
const  email = document.getElementById('email').value;
const  course = document.getElementById('course').value;
const  date = document.getElementById('date').value;
data.push({id,name,age,email,course,date})
document.getElementById('submitform').reset();
display();
});

let edit_id=''
function edit_frm(id){
    console.log('editing',id);
    document.getElementById('editform').style.display='block'
    document.getElementById('submitform').style.display='none'
    const edit_data=data.find(user=>user.id==id);
    document.getElementById('edit_id').value=edit_data.id
    document.getElementById('edit_name').value=edit_data.name
    document.getElementById('edit_age').value=edit_data.age
    document.getElementById('edit_email').value=edit_data.email
    document.getElementById('edit_course').value=edit_data.course
    document.getElementById('edit_date').value=edit_data.date
    edit_id=id
}

document.getElementById('editform').addEventListener('submit',function(event){
    event.preventDefault()
    const edit_id=document.getElementById('edit_id').value
    const edit_name=document.getElementById('edit_name').value
    const edit_age=document.getElementById('edit_age').value
    const edit_email=document.getElementById('edit_email').value
    const edit_course=document.getElementById('edit_course').value
    const edit_date=document.getElementById('edit_date').value
    data=data.map(user=>{
        if(user.id==edit_id){
            return {...user,id:edit_id,name:edit_name,age:edit_age,email:edit_email,course:edit_course,date:edit_date}
        }
        return user
    })
    document.getElementById('editform').style.display='none'
    document.getElementById('submitform').style.display='block'
    display()
})



display();