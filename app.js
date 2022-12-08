// Progression 1: create a function and fetch the api using axios
fetch('https://gnews.io/api/v4/top-headlines?token=b592c9edc1f63e05142fd3d34e1235f4&lang=en').then((data)=>{
  return data.json();
}).then((priyanshi)=>{
  let data="";
  for(i=0;i<10;i++){
    data+=` <div class="card">
    <h1 class="title">${priyanshi.articles[i].title}</h1>
    <img src="${priyanshi.articles[i].image}" alt="img">
    <p>${priyanshi.articles[i].content}</p>
  </div>`
  }
  document.getElementById("cards").innerHTML = data
}).catch((error)=>{
  console.log("Error")
})
