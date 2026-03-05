function debounce(fn,delay){
     let handler;
    return function(){
        clearTimeout(handler)
       handler= setTimeout(()=>{
            fn()
        },delay)
        
    }
}

let search=debounce(function(){
    console.log("after 500 second search")
},500)

search()