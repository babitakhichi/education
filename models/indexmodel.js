var db = require('./connection')
function indexModel()
{
    this.registerUser=(userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection('register').find().sort({'_id':-1}).toArray((err,result)=>{
            if(err)
                reject(err)
            else
            {
                var _id
                if(result.length==0)
                    _id=1
                else
                    _id=result[0]._id+1
            }
            var flag=0
                for(let row of result)
                {
                    if(row.email==userDetails.email)
                    {
                        flag=1
                        break
                    }        
                }  
         if(flag==0)
        {
            userDetails._id=_id
            userDetails.status=1
            userDetails.info=Date()
            db.collection('register').insertOne(userDetails,(err,result)=>{
               if(err)
                    reject(err)
                else
                    resolve(flag)
            })
        }
        else
            resolve(flag)
            })

        })

    }
        this.userLogin=(userDetails)=>{
        return new Promise((resolve,reject)=>{
            userDetails.status=1
            db.collection('register').find(userDetails).toArray((err,result)=>{
                
                err ? reject(err): resolve(result);

            })

        })

        }
        this.adminLogin=(adminDetails)=>{
            return new Promise((resolve,reject)=>{
                   db.collection('adminlogin').find(adminDetails).toArray((err,result)=>{
                    console.log("adminlogin info",result)
                    err ? reject(err): resolve(result);
    
                })
    
            })
    
            }
         


}

module.exports= new indexModel()