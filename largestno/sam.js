function sample(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value) 
    c=parseInt(document.getElementById("thno").value) 
    console.log(a,b,c);
    if(a>b){
        document.getElementById("h1").innerHTML=a
    }
    else if(b>c){
        document.getElementById("h1").innerHTML=b
    }
    else{
        document.getElementById("h1").innerHTML=c
    }
    
}