class User{
   // this.name, this.age
   constructor(name, age){
      this.name = name,
      this.age = age
   }
}

const printName = async (user)=>{
    console.log( user.name )
}

module.exports = { User, printName }