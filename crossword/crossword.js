var input;
function valuetaken()
{   
    input= document.getElementById("gh").value;
    doing();
}
















function doing(){
   
    var bn;    
    if(input.charAt(0)!=0)
    bn=input.charAt(0)+input.charAt(1);
    else
    bn=input.charAt(1);
    
    var ch=input.charAt(3);
    
    var x= document.getElementById(bn);
    x.innerHTML=ch;
   
   
}


function check(){
    var f=true;
    var d=["T","G","F","V","P","","E" ,"B", "C", "H", "O", "R" ,"","","E", "L", "M", "A" ,"L" ,"K" ,"S" ,"E" ,"O" ,"I", "I", "A", "N", "T", "S", "A", "E", "E" ,"O" ,"H" ,"C" ,"R" ,"M", "N", "H", "H" ,"E", "E" ,"M", "D", "U", "E", "A", "L", "Y" ,"R" ,"I ","A" ,"N"]
       
    for(var i=1;i<54;i++)
    {   console.log(i);
        if(i==6 || i==14 || i==13)
        continue;
        else{
        var g=document.getElementById(i).innerHTML;
        console.log(g);
        console.log(d[i-1]);
        if(g!=d[i-1])
        {   console.log("false");
            f=false;
        break;}
    }}
    var h=document.getElementById("message");
    if(f==true)
    {
        
               h.innerHTML="CORRECT!!! GREAT GAME !! :)";
    }
    else{
        h.innerHTML="INCORRECT!!! BETTER LUCK NEXT TIME";
    }





}