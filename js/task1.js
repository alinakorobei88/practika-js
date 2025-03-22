/*const styles = [
   "jazz",
   "bluz"
];
styles.push("roc&roll");
styles.splice(1, 1, "Classic");
styles.shift(0);
styles.unshift("rap", "reggi");
console.log(styles);*/

/*function indexElement(){
    let indexes = ["Mango", "Poly", "Alex"];
    for(const index of indexes){
        console.log(`${indexes.indexOf(index)} - ${index}`);
    }
}
indexElement();*/

/*const getUserNames = (users) => {return users.map(user => user.name)} 
console.log(
    getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764
    },
  ])
  ); */

  /*const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName))}
    const allUsers = [
        {
          name: "Moore Hensley",
          friends: ["Sharron Pace"]
        },
        {
          name: "Sharlene Bush",
          friends: ["Briana Decker", "Sharron Pace"]
        },
        {
          name: "Ross Vazquez",
          friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
        },
        {
          name: "Elma Head",
          friends: ["Goldie Gentry", "Aisha Tran"]
        },
        {
          name: "Carey Barr",
          friends: ["Jordan Sampson", "Eddie Strong"]
        },
        {
          name: "Blackburn Dotson",
          friends: ["Jacklyn Lucas", "Linda Chapman"]
        },
        {
          name: "Sheree Anthony",
          friends: ["Goldie Gentry", "Briana Decker"]
        }
      ];
      
      console.log(getUsersWithFriend(allUsers, "Briana Decker")); */

      /*const sortByDescendingFriendCount = users => users.toSorted((a, b) => b.friends.length - a.friends.length);
      console.log(
        sortByDescendingFriendCount([
          {
            name: "Moore Hensley",
            friends: ["Sharron Pace"],
            gender: "male"
          },
          {
            name: "Sharlene Bush",
            friends: ["Briana Decker", "Sharron Pace"],
            gender: "female"
          },
          {
            name: "Ross Vazquez",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            gender: "male"
          },
          {
            name: "Elma Head",
            friends: ["Goldie Gentry", "Aisha Tran"],
            gender: "female"
          },
          {
            name: "Carey Barr",
            friends: ["Jordan Sampson", "Eddie Strong"],
            gender: "male"
          },
          {
            name: "Blackburn Dotson",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            gender: "male"
          },
          {
            name: "Sheree Anthony",
            friends: ["Goldie Gentry", "Briana Decker"],
            gender: "female"
          }
        ])
      );
      // [
      //   {
      //     name: "Ross Vazquez",
      //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      //     gender: "male"
      //   },
      //   {
      //     name: "Sharlene Bush",
      //     friends: ["Briana Decker", "Sharron Pace"],
      //     gender: "female"
      //   },
      //   {
      //     name: "Elma Head",
      //     friends: ["Goldie Gentry", "Aisha Tran"],
      //     gender: "female"
      //   },
      //   {
      //     name: "Carey Barr",
      //     friends: ["Jordan Sampson", "Eddie Strong"],
      //     gender: "male"
      //   },
      //   {
      //     name: "Blackburn Dotson",
      //     friends: ["Jacklyn Lucas", "Linda Chapman"],
      //     gender: "male"
      //   },
      //   {
      //     name: "Sheree Anthony",
      //     friends: ["Goldie Gentry", "Briana Decker"],
      //     gender: "female"
      //   },
      //   {
      //     name: "Moore Hensley",
      //     friends: ["Sharron Pace"],
      //     gender: "male"
      //   }
      // ]*/

      /*const getTotalBalanceByGender = (users, gender) => {return users.filter(user => user.gender === gender).reduce((total, user) => total + user.balance, 0)}
      const clients = [
        {
        name: "Moore Hensley",
        gender: "male",
        balance: 2811
      },
      {
        name: "Sharlene Bush",
        gender: "female",
        balance: 3821
      },
      {
        name: "Ross Vazquez",
        gender: "male",
        balance: 3793
      },
      {
        name: "Elma Head",
        gender: "female",
        balance: 2278
      },
      {
        name: "Carey Barr",
        gender: "male",
        balance: 3951
      },
      {
        name: "Blackburn Dotson",
        gender: "male",
        balance: 1498
      },
      {
        name: "Sheree Anthony",
        gender: "female",
        balance: 2764
      }
    ];
    
    console.log(getTotalBalanceByGender(clients, "male")); // 12053
    
    console.log(getTotalBalanceByGender(clients, "female")); // 8863*/

const getSortedFriends = (users) => {return [...new Set(users.flatMap(user => user.friends))].toSorted((a, b) => a.localeCompare(b)) }

const users = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace", "Briana Decker"]
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace", "Goldie Gentry"]
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"]
    }
  ];
  
  console.log(getSortedFriends(users));