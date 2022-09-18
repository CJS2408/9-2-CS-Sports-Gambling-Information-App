


	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'e582372e1amsh61b00d4f0c7496fp13ecf4jsn15d9fbef3010',
			'X-RapidAPI-Host': 'baseballapi.p.rapidapi.com'
			}
		};
	const fetchDataBtn = document.querySelector('#fetchdata')
    const result = document.querySelector('#result')
    
    
    const getData = function() {
      result.innerText = 'Loading....'
      fetch('https://baseballapi.p.rapidapi.com/api/baseball/match/9864379', options)
        .then(response => response.json())
        .then(data => {
          result.innerText = JSON.stringify(data, null, 2)
        })
        .catch(error => console.log(error))
    }
    
  
    // fetchDataBtn.addEventListener('click', getData)