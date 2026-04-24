function myAllsetled(promises){
    return new Promise((resolve,reject)=>{

    let result=[]
    let completed=0
        if(promises.length===0)return resolve([])
            promises.forEach((p,index)=>{
        Promise.resolve(p)
        .then(value=>{
            result[index]={status:"fullfilled",value}
        })
        .catch(reason=>{
            result[index]={status:"rejected",reason:reason}
        })
        .finally(()=>{
            completed++
            if(completed===promises.length){
                resolve(result)
            }
        })
    })
    })
}

function myAll(promises){
    return new Promise((resolve,reject)=>{
        let result=[]
        let completed=0
        if(promises.length===0)return resolve([])

            promises.forEach((p,index)=>{
                Promise.resolve(p)
                .then(value=>{
                    result[index]=value;
                    completed++
                    if(completed===promises.length){
                        resolve(result)
                    }
                })
                .catch(reject)
            })
    })
}

function myRace(promises){
    return new Promise((resolve,reject)=>{
        promises.forEach(p=>{
            Promise.resolve(p)
            .then(resolve)
            .catch(reject)
        })
    })
}

function myAny(promises){
    return new Promise((resolve,reject)=>{
        let err=[]
        let rejectcount=0
        if(promises.length===0){
            return reject(new AggregateError("all promses were rejected"))
        }
        promises.forEach((p,index)=>{
            Promise.resolve(p)
            .then(resolve)
            .catch(err=>{
                err[index]=err
                rejectcount++

                 if(promises.length===rejectcount){
            return reject(new AggregateError("all promses were rejected"))
        }
            })
        })
    })
}