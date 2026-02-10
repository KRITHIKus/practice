function debounce(fn,delay){
    let timerID;
    return function (){
        clearTimeout(timerID);
        timerID= setTimeout(()=>{
            fn()
        },delay)
    }

}

const debSearch=debounce(function (){
    console.log("search:500")
},500)

debSearch()