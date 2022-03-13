var db = require('./connection')
function adminModel()
{
    this.fetchAll=(collection_name)=>{
        return new Promise((resolve,reject)=>{
               db.collection(collection_name).find().toArray((err,result)=>{
                err ? reject(err): resolve(result);

            })

        })
    }
        this.manageUserStatus=(data)=>{
            return new Promise((resolve,reject)=>{
                if(data.s=="block")
                {
                 db.collection('register').updateOne({'_id':parseInt(data.regid)},{$set:{'status':0}},(err,result)=>{
                    err ? reject(err) : resolve(result);            
                 })
                }
                else if(data.s=="verify")
                {
                 db.collection('register').updateOne({'_id':parseInt(data.regid)},{$set:{'status':1}},(err,result)=>{
                    err ? reject(err) : resolve(result);            
                 })
                }
                else
                {
                 db.collection('register').deleteOne({'_id':parseInt(data.regid)},(err,result)=>{
                    err ? reject(err) : resolve(result);            
                 })
                } 
            
            })                    
        }
    // this.registerUser=(userDetails)=>{
    //     return new Promise((resolve,reject)=>{
    //         db.collection('register').find().sort({'_id':-1}).toArray((err,result)=>{
    //         if(err)
    //             reject(err)
    //         else
    //         {
    //             var _id
    //             if(result.length==0)
    //                 _id=1
    //             else
    //                 _id=result[0]._id+1
    //         }
    //         var flag=0
    //             for(let row of result)
    //             {
    //                 if(row.email==userDetails.email)
    //                 {
    //                     flag=1
    //                     break
    //                 }        
    //             }  
    //      if(flag==0)
    //     {
    //         userDetails._id=_id
    //         userDetails.status=1
    //         userDetails.info=Date()
    //         db.collection('register').insertOne(userDetails,(err,result)=>{
    //            if(err)
    //                 reject(err)
    //             else
    //                 resolve(flag)
    //         })
    //     }
    //     else
    //         resolve(flag)
    //         })

    //     })

    // }
    //     this.userLogin=(userDetails)=>{
    //     return new Promise((resolve,reject)=>{
    //         userDetails.status=1
    //         db.collection('register').find(userDetails).toArray((err,result)=>{
                
    //             err ? reject(err): resolve(result);

    //         })

    //     })

    //     }
        
         


}

module.exports= new adminModel()