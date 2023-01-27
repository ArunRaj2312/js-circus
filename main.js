var age=parseInt(prompt("enter your age"));
if(age<=16){
    var permission=confirm("permission your parent")
    if(permission==true){
        console.log("you eligible");
    }
    else{
        console.log("not eligible");
    }
}
else if(age>16 && age<=50){
    console.log("you eligible");
}
else{
    console.log("not eligible");
}