// with the async await method

// async function getjokes(){

//     const setHeader = {
//         headers:{
//             accept : 'application/json'
//         }
//         }

//     jokes = document.querySelector('.lead');
//     try{
//         const result = await fetch('https://icanhazdadjoke.com',setHeader);
//         const data = await result.json();
//         jokes.innerHTML = data.joke;
//     }
//     catch(e){
//         console.log(e);
//     }

// }

//with fetch-promise method

async function getjokes() {
  const setHeader = {
    headers: {
      accept: "application/json",
    },
  };

  jokes = document.querySelector(".lead");
  try {
    fetch("https://icanhazdadjoke.com", setHeader).then((response) =>
      response.json().then((data) => {
        jokes.innerHTML = data.joke;
      })
    );
  } catch (e) {
    console.log(e);
  }
}
