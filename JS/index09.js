let user = {
    userid : 369,
    firstName : 'Swaraj',
    lastName : 'Anand',
    password : 'root',
    country : 'India',
    continent : 'Asia',
    // age : 21,

    displayAge : function () {
        this.age = 21;
    }
        ,
    displayAccountCreated : function(){
        this.accountCreated = true;
    }

}

// console.log(user);

delete user.country;
delete user.continent;

// console.log(user)

// for (let i in user) {
//     console.log(user[i]);
//   };


  console.log(user.displayAge);
  console.log(user.displayAccountCreated);

  alert(user.displayAge)







