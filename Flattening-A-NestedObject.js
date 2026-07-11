let user={
    name: "Prem",
    address: {
        currently:['tagarapuvalasa', 'siripuram'],
        personal:{
            city:"visakhapatnam",
            state:"AP",
            hobbies:["cricket","badminton","watching movies"]
        },
        office:{
            city:"hyd",
            state:"telangana"
        }
    }
}

let user_info={}

let magicFunction= (obj, parent) => {
    for(let key in obj){
        if(typeof(obj[key]) === "object"){
            magicFunction(obj[key],parent+"_"+key)
        }
        else if(typeof(key) === "Array") {
            for(let i=0;i<obj[key].length;i++){
                user_info[parent+"_"+key+"."+i]=obj[key][i]
            }
        }
        else{
            user_info[parent+"_"+key]=obj[key]
        }
    }
}

magicFunction(user,"user")
console.log(user_info)