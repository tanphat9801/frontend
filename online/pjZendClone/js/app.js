$(document).ready(function () {

    var key = 'AIzaSyDTr18kbwOaBOkSG5PZatBkYK1Wbn1L1yw';
    var playlistId = 'PLv6GftO355AvAl13CUVcVvWu0hOZnpfW8';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 40,
        playlistId: playlistId
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
					<iframe width="850" height="500" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

		
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;


            $('main').append(`
							<aside class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4 id="idtext">${title}</h4>
									<p>${desc}</p>
								</div>

							</aside>
						`);
        });
    }

		// CLICK EVENT
    $('main').on('click', 'aside', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });


});






//highlighttext
const text = document.getElementById('idtext');
const resetText = text.innerHTML;
const input = document.getElementById('search');
const button = document.getElementById('button');

highlightText = () =>{
    if(input.value){
        const word     = input.value.trim();
        const regexp   = new RegExp(word, 'g')
        text.innerHTML = resetText.replace(regexp, `<mark>${word}</mark>`)
    }
}

button.addEventListener('click', highlightText())