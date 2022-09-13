const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e582372e1amsh61b00d4f0c7496fp13ecf4jsn15d9fbef3010',
		'X-RapidAPI-Host': 'mlb-data.p.rapidapi.com'
	}
};

fetch('https://mlb-data.p.rapidapi.com/json/named.player_info.bam?sport_code='mlb'&player_id='493316'', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  function displayPlayerData(data) {
    const player = data.drinks[0];
    const playerDiv = document.getElementById("Player"); 
  }   

  const playerName = player.id;
  const heading = document.createElement("h1");
  heading.innerHTML = playerName;

  