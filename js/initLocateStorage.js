if(!localStorage.getItem("users")){
    localStorage.setItem("users", JSON.stringify([{
        id: 1234567,
        firstName: "Juan",
        lastName: "Carrillo",
        birthday: {
          day: 12,
          month: 7,
          year: 2001,
        },
        email: "eyaaye@gmail.com",
        address: "calle 50D",
        password: "12345678Ja.",
      },{
        id:1325467,
        firstName: "Jose",
        lastName: "Dominguez",
        birthday: {
          day: 13,
          month: 8,
          year: 2002,
        },
        email: "admin@gmail.com",
        address: "calle 50D",
        password: "admin",
      },
      {
        id:13987546,
        firstName: "Adriana",
        lastName: "Serje",
        birthday: {
          day: 1,
          month: 8,
          year: 2004,
        },
        email: "an@gmail.com",
        address: "calle 50D #1d-16",
        password: "2165658Po.",
      },
      {
        id:13587951,
        firstName: "Alejandra",
        lastName: "Carrillo",
        birthday: {
          day: 18,
          month: 2,
          year: 2000,
        },
        email: "and@gmail.com",
        address: "calle #1d-16",
        password: "2165658Pt.",
      },
      {
        id:13254652,
        firstName: "Alvaro",
        lastName: "Eslait",
        birthday: {
          day: 17,
          month: 12,
          year: 1985,
        },
        email: "aca@gmail.com",
        address: "carerera 50D #1d-16",
        password: "21656587To.",
      }
    ]))
}