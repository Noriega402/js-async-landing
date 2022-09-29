const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCXR7VjA26PcHP3vb6F2X3VQ&part=snippet%2Cid&order=date&maxResults=16';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '113d806294msh33b092e8a1ea474p1144d2jsne2dfd877f8dd',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


async function fecthData(url) {
    const response = await fecth(url, options);
    const data = await response.json(response);
    return data;
}

//funcion anonima autoejecutable
(async () => {
    try {
        const videos = await fecthData(API);
        let card = `${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `)}
        `;
    } catch (error) {

    }
})();