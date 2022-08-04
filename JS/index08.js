let user = {
    userid : 369,
    firstName : 'Swaraj',
    lastName : 'Anand',
    password : 'root',
    country : 'India',
    continent : 'Asia'
}

// console.log(user);

delete user.country;
delete user.continent;

console.log(user)

for (let i in user) {
    console.log(user[i]);
  }


