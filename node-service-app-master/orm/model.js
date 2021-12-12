const Sequelize = require('sequelize');
var sequelize=require('./connection');

var user=sequelize.define('user',{
    username:{
      type: Sequelize.STRING,
      primaryKey:true
    },
    password:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    name:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    role:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    email:{
      type: Sequelize.TEXT,
      allowNull:false
    }
},{
      //don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false
}

  );

  var employee = sequelize.define('employee', {
    employee_id: {type: Sequelize.INTEGER, primaryKey:true},
    name: {type: Sequelize.TEXT, allowNull:false},
    status: {type: Sequelize.TEXT, allowNull:false},
    manager:{type: Sequelize.TEXT, allowNull:true},
    wfm_manager:{type: Sequelize.TEXT, allowNull:true},
    email:{type: Sequelize.TEXT, allowNull:false},
    lockstatus:{type: Sequelize.TEXT, allowNull:true},
    experience:{type: Sequelize.DECIMAL, allowNull:true},
    profile_id:{type: Sequelize.INTEGER, allowNull:true}
  },{
    freezeTableName: true,
    //don't add the timestamp attributes (updatedAt, createdAt)
timestamps: false,

// If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false
})

var skill = sequelize.define('skill', {
  skillid: {type: Sequelize.DECIMAL, primaryKey:true},
  name: {type: Sequelize.TEXT, allowNull:false}
},{
  //don't add the timestamp attributes (updatedAt, createdAt)
timestamps: false,

// If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false
})
var skillmap = sequelize.define('skillmap', {
  employee_id: {type: Sequelize.INTEGER, primaryKey:true},
  skillid: {type: Sequelize.DECIMAL, primaryKey:true}
},{
  freezeTableName: true,
  //don't add the timestamp attributes (updatedAt, createdAt)
timestamps: false,

// If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false
})

var profile1 = sequelize.define('profile', {
  profile_id: {type: Sequelize.INTEGER, primaryKey:true},
  name: {type: Sequelize.TEXT, allowNull:false}
},{
  //don't add the timestamp attributes (updatedAt, createdAt)
timestamps: false,

// If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false
})
var profilemap = sequelize.define('profilemap', {
  employee_id: {type: Sequelize.INTEGER, primaryKey:true},
  profile_id: {type: Sequelize.INTEGER}
},{
  freezeTableName: true,
  //don't add the timestamp attributes (updatedAt, createdAt)
timestamps: false,

// If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false
})

var softlock = sequelize.define('softlock', {
    employee_id: {type: Sequelize.INTEGER, allowNull:true},
    manager: {type: Sequelize.TEXT, allowNull:true},
    reqdate: {type: Sequelize.DATE, allowNull:true},
    status: {type: Sequelize.TEXT, allowNull:true},
    lastupdated: {type: Sequelize.DATE, allowNull:true},
    lockid: {type: Sequelize.TEXT, primaryKey:true},
    requestmessage: {type: Sequelize.TEXT, allowNull:true},
    wfmremark: {type: Sequelize.TEXT, allowNull:true},
    managerstatus: {type: Sequelize.TEXT, allowNull:true},
    mgrstatuscomment: {type: Sequelize.TEXT, allowNull:true},
    mgrlastupdate: {type: Sequelize.DATE, allowNull:true}
},{
  freezeTableName: true,
  //don't add the timestamp attributes (updatedAt, createdAt)
timestamps: false,

// If don't want createdAt
createdAt: false,

// If don't want updatedAt
updatedAt: false
})

employee.belongsToMany(skill, 
                        {
                          through: 'skillmap', 
                          foreignKey: 'employee_id',
                          otherKey: 'skillid'
                        });
skill.belongsToMany(employee, 
                        {
                          through: 'skillmap', 
                          foreignKey: 'skillid',
                          otherKey: 'employee_id'
                        });
employee.belongsTo(profile1, {foreignKey: 'profile_id'});
softlock.belongsTo(employee, {foreignKey: 'employee_id'});
employee.hasMany(softlock, {foreignKey: 'lockid'});

user.sync({force: false}).then(() => {
    
    console.log("User table Synched!!!");
  });

  employee.sync({force: false}).then(() => {
    
    console.log("Employee table Synched!!!");
  });

  skill.sync({force: false}).then(() => {
    
    console.log("Skill table Synched!!!");
  });
  profile1.sync({force: false}).then(() => {
    
    console.log("Profile table Synched!!!");
  });


  skillmap.sync({force: false}).then(() => {
    
    console.log("Skillmap table Synched!!!");
  });

  softlock.sync({force: false}).then(() => {
    
    console.log("Softlock table Synched!!!");
  });



  module.exports={
              user:user, 
              employee: employee,
              profile1: profile1,
              skill: skill,
              skillmap: skillmap,
              softlock: softlock
            };