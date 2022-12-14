const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCanMxWvOoiwtjLYm08Bo8QQ&part=snippet%2Cid&order=date&maxResults=20';

const content = document.getElementById('content');
const profile = document.getElementById('img-profile');

profile.setAttribute('src', 'https://scontent-gua1-1.xx.fbcdn.net/v/t1.6435-9/161437376_199791038535325_1848588809446346346_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=_mwCjouTST4AX-UZIKY&_nc_ht=scontent-gua1-1.xx&oh=00_AT_4gHQLMEnr6t6YILipEiFf9u-TU1EVE8XfAYI84Tmfig&oe=635B3BE8');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '113d806294msh33b092e8a1ea474p1144d2jsne2dfd877f8dd',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(url) {
    const response = await fetch(url, options);
    const data = await response.json(response);
    return data;
}

//funcion anonima autoejecutable
(async () => {
    try {
        const videos = await fetchData(API);
        //https://www.youtube.com/watch?v=OwSCzRMSgsI
        let card = `${videos.items.map(video => `
                <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank" rel="noopener noreferrer" class="video">
                    <div class="group relative">
                        <div
                            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none ">
                            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <h3 class="text-sm text-slate-100">
                                <span aria-hidden="true" class="absolute inset-0 "></span>
                                ${video.snippet.title}
                            </h3>
                        </div>
                    </div>
                </a>
            `).slice(0, 8).join('')}
        `; // .slice().join() utiliza solo 8 datos y los une
        content.innerHTML = card;
    } catch (error) {
        console.log(error);
    }
})();