const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://AdibRasel_Demo:KdWdv0oAYeCixIaf@cluster0.7fmcvan.mongodb.net/?retryWrites=true&w=majority";


MongoClient.connect(url, function(error, result){
    if(error){
        console.log("Your Connact Faild")
    }else{
        console.log("Your Connect Success");
        datainsert(result)
        // dataDelete(result)
        // deleteAllItem(result)
        // findOnewithoutcondition(result)
        // findAllDAta(result)
        // findAllDAtaByProjection(result)
        // findAllDAtaByqurie(result)
        // findAllDAtaBylimite(result)
        // findAllDAtaBysort(result)
        // update(result)
        // createNewcollaction(result)
    }
})


function datainsert(result){
    const myDatabase = result.db("school")
    const mycollaction = myDatabase.collection("student");

    const anyDAta = {
        name:"o kuddiccs",
        rool_no: "04",
        student_id: "5588",
        mobile_no: "010000000",
        email_address:"jani na"
    }


    mycollaction.insertOne(anyDAta, function(error){
        if(error){
            console.log("Data insert failed ")
        }else{
            console.log("data insert success")
        }
    })
}