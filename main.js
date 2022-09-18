

function myButton(){

const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '732a40fa19msh7836d44be03a72fp1458f8jsnb4cc84dfe36b',
			'X-RapidAPI-Host': 'baseballapi.p.rapidapi.com'
		}
	};
	
	fetch('https://baseballapi.p.rapidapi.com/api/baseball/match/9864379', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));


		const options1 = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'e582372e1amsh61b00d4f0c7496fp13ecf4jsn15d9fbef3010',
				'X-RapidAPI-Host': 'baseballapi.p.rapidapi.com'
			}
		};
		
		fetch('https://baseballapi.p.rapidapi.com/api/baseball/player/977489/statistics/seasons', options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));

				
			}