function sample(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value) 
    c=parseInt(document.getElementById("thno").value) 
    d=parseInt(document.getElementById("fono").value) 
    if(a>b){
        document.getElementById("h1").innerHTML=a
    }
    else if(b>c){
        document.getElementById("h1").innerHTML=b
    }
    else if(c>d){
        document.getElementById("h1").innerHTML=c
    }
    else{
        document.getElementById("h1").innerHTML=d
    }
    
}