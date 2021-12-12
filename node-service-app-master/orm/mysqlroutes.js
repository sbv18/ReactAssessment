const model=require('../orm/model')
const route=require("express").Router();
const passport=require('passport')


route.get("/employees/:manager",passport.authenticate('jwt',{session:false}),function(request,response){
    let manager = request.params.manager
    model.employee.findAll(
                {
                    where:{manager:manager, lockstatus:"not_requested"},
                    include: [{model: model.skill},{model:model.profile1}]
                }).then(function(data){
          response.json(data);
      }).catch(function(err){
          console.log(err)
          response.render([]);
      })
})

route.put("/employees/:employee_id",passport.authenticate('jwt',{session:false}),async function(request,response){
    let employee_id = request.params.employee_id
    let { comment } = request.body
    let emp = await model.employee.findOne({where:{employee_id:employee_id}, })
    let result = emp.dataValues
    if(result){
        model.employee.update({lockstatus:"request_waiting"}, {where:{employee_id:employee_id}})
        .then(function() { 
            model.softlock.create(
                                {
                                    employee_id: employee_id,
                                    manager: result.manager,
                                    reqdate: new Date(),
                                    status: "waiting",
                                    lastupdated: new Date(),
                                    requestmessage: comment,
                                    managerstatus: "awaiting_confirmation"
                                }).then(function(){
                                    console.log("Employee updated successfully!");
                                    model.employee.findAll(
                                        {
                                            where:{manager:result.manager, lockstatus:"not_requested"},
                                            include: {model: model.skill}
                                        }).then(function(data){
                                            response.json(data);
                                        }).catch(function(err){
                                            console.log(err)
                                            response.render([]);
                                        })
                                }).catch(function(err){
                                    console.log("Employee update failed !", err);
                                    response.send("Employee update failed").status(500)
                                })

        }).catch(function(err) { 
            console.log("Employee update failed !", err);
            response.send("Employee update failed").status(500)
        });
    }
    else{
        response.send("Employee not found").status(204)
    }
})

route.put("/softlock/:lockid",passport.authenticate('jwt',{session:false}),async function(request,response){
    let lockid = request.params.lockid
    let { managerstatus, mgrstatuscomment, manager } = request.body
    try{
    let emp = await model.softlock.findOne({
                                            where:{lockid:lockid}
                                        })
    let result = emp.dataValues
    if(result){
        console.log(result)
        let lockstatus = managerstatus === "accepted" ? "locked" : "not_requested"
        model.softlock.update({
                                managerstatus: managerstatus,
                                mgrstatuscomment: mgrstatuscomment,
                                mgrlastupdate: new Date(),
                                status: "approved"
                            }, 
                            {where:{lockid:lockid}
                        })
                            .then(function() {
                                model.employee.update({lockstatus: lockstatus}, {where:{employee_id:result.employee_id}})
                                .then(function() {

                                    console.log("softlock updated successfully!");
                                    model.softlock.findAll(
                                        {
                                            where: {status: "waiting"},
                                            include: {model: model.employee, where: {wfm_manager: manager}}
                                        }).then(function(data){
                                            response.json(data);
                                        }).catch(function(err){
                                            console.log(err)
                                            response.render([]);
                                        })
                                }).catch(function(err){
                                    console.log("softlock update failed !", err);
                                    response.send("softlock update failed").status(500)
                                })
                            }).catch(function(err){
                                console.log("softlock update failed !", err);
                                response.send("softlock update failed").status(500)
                            })
    }
    else{
        response.send("softlock not found").status(204)
    }
}
catch(e){
    console.log(e)
    response.send("Internal Server Error").status(500)
}
})


route.get("/softlock/:wfm_manager",passport.authenticate('jwt',{session:false}),async function(request,response){
    let manager = request.params.wfm_manager
    model.softlock.findAll(
                {
                    where: {status: "waiting"},
                    include: {model: model.employee, where: {wfm_manager: manager}}
                }).then(function(data){
          response.json(data);
      }).catch(function(err){
          console.log(err)
          response.render([]);
      })
})

route.get("/softlock",passport.authenticate('jwt',{session:false}),async function(request,response){
    let {id} = request.query
    model.softlock.findOne(
                {
                    where: {lockid: id},
                    include: {model: model.employee}
                }).then(function(data){
          response.json(data);
      }).catch(function(err){
          console.log(err)
          response.render([]);
      })
})

module.exports=route;