const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c6d5c2b9c3msh52e842dc5f58c26p174921jsn44a159ebc102',
		'X-RapidAPI-Host': 'baseballapi.p.rapidapi.com'
	}
};

fetch('https://baseballapi.p.rapidapi.com/api/baseball/match/9864379', options2)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
 
 
 
 
 
 const baseUrl = "https://baseballapi.p.rapidapi.com/api/baseball/match/9864379";
  const button = document.querySelectorAll(".myButton");
  const ol = document.querySelector("ol");
  const games = document.querySelector("games");

  button.forEach(item => {item.addEventListener("click", function() {

    ol.innerHTML = "";
    fetch(baseUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (!match.value) {
          window.alert("Choose a match!");
        } else {
          json.forEach((element) => {
            const gameTag = document.createElement("li");
            gameTag.textContent = element.name;
            ol.append(matchTag);
          });
        }
      })
      .catch((err)=> console.log(err));
  });

});
//     .catch((err) => {
//       console.log(err);
// })

