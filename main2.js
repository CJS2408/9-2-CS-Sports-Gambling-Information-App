const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c6d5c2b9c3msh52e842dc5f58c26p174921jsn44a159ebc102',
		'X-RapidAPI-Host': 'baseballapi.p.rapidapi.com'
	}
};

fetch('https://baseballapi.p.rapidapi.com/api/baseball/match/9864379', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));