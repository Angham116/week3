// const url = `https://api.themoviedb.org/3/search/movie?api_key=${config.apiKey }&language=en-US&query=`;
function selecElement(id) {
	return document.querySelector(id);
}
function addEventListenerForSelector(selectorElement, event, callback){
	return document.querySelector(selectorElement).addEventListener(event,callback);
}
function createElement(e){
	return document.createElement(e);
}
addEventListenerForSelector('#submit-btn', 'submit', (event) => {
	event.preventDefault();
	if (selecElement('#searchInput').value == ""){
		alert('Entar a movie name');
	}
	selecElement('#searchInput').innnerHTML = "";
	var url = `https://api.themoviedb.org/3/search/movie?api_key=${config.apiKey }&language=en-US&query= + ${selecElement('#searchInput').value}`;
	fetchFunction('GET', url, (response) => {
		var result = response.results;
		cosole.log(result);
		if (result.length == 0){
			var msg = createElement('p').innnerHTML = "No Results";
			selecElement('#movies').appenChild(msg);
		}
		for(var i = 0; i < result.length; i++){
			var id = result[i].id ;
			var title = result[i].original_title ;
			var image = result[i].poster_path ;
			var overview = result[i].overview ;
			var voteAverage = result[i].vote_average ;

			var movieName= createElement('h2');
			var movieImage = createElement('img');
			var movieOverview = createElement('h4');
			var voteAverageSpan = createElement('span');
			var movieDiv = createElement('div');
			movieDiv.appenChild(movieName);
			movieDiv.appenChild(movieImage);
			movieDiv.appenChild(movieOverview);
			movieDiv.appenChild(voteAverageSpan);
			selecElement('#movies').appenChild(movieDiv);
		}
	});
})
