function sample1(){
        a=parseInt(document.getElementById("fno").value)
        b=parseInt(document.getElementById("sno").value) 
        if(a>b){
            document.getElementById("h1").innerHTML=a
        }
        else{
            document.getElementById("h1").innerHTML=b
        }
    }