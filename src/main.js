const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '113d806294msh33b092e8a1ea474p1144d2jsne2dfd877f8dd',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCXR7VjA26PcHP3vb6F2X3VQ&part=snippet%2Cid&order=date&maxResults=16', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));