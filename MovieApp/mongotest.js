import mongodb, { Db } from 'mongodb';
const mongo = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const url1 ='mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";'
mongo.connect(url, (err,db)=>{
    if(err) throw err;
    const dbObj = db.db('CRUD');
    dbObj.collection('MovieData').find({name:'Incredibles 2'})
                           .toArray((err,data)=>{
                            if(err) throw err
                            console.log(data)
                           });
});
