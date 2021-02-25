let id = parseInt(window.localStorage.getItem('idMax') || '0');
const createId=()=>{
     id+=1
    window.localStorage.setItem('idMax', JSON.stringify(id))
    console.log(id,'id')
    return id
}

export {createId}