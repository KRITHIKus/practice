main()
function main(){
    let i=0;
    let j=0;
   j=m1(++i) + m1(i++)
    console.log(i,j);
}
function m1(n)
{
   return n++;
    
}


