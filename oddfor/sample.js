function sample(){
    a=parseInt(document.getElementById("startno").value)
    b=parseInt(document.getElementById("endno").value)
    for(i=a;i<=b;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}