d=[]
function display(){
    const table = document.querySelector('student tbody')
    ttable.innerHTML = ''
    d.forEach(element =>{
        const row = document.createElement('tr')

        const t_id = document.createElement('td')
        studid.textContent = element.id
        row.appendChild(studid)

        const t_name = document.createElement('td')
        t_name.textContent = element.name
        t_row.appendChild(t_name)

        const t_age = document.createElement('td')
        studage.textContent = element.age
        row.appendChild(studage)

        const t_email = document.createElement('td')
        studemail.textContent = element.email
        row.appendChild(studemail)

        const t_course = document.createElement('td')
        studcourse.textContent = element.course
        row.appendChild(studcourse)

        const t_date = document.createElement('td')
        studdate.textContent = element.date
        row.appendChild(studdate)

        table.appendChild(row)
})
}
document.getElementById('submitform').addEventListener('submit',function(event){
    event.preventDefault()
const id = document.getElementById('id').value;   
const name = document.getElementById('name').value;
const age = parseInt(document.getElementById('age').value);
const  email = document.getElementById('email').value;
const  course = document.getElementById('course').value;
const  date = document.getElementById('date').value;
d.push({id,name,age,email,course,date})
document.getElementById('submitform').requestFullscreen();
display()
})
display()