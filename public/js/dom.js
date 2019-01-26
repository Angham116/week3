// const url = `https://api.themoviedb.org/3/search/movie?api_key=${config.apiKey }&language=en-US&query=`;
const submitBtn = document.querySelector('#submit-btn');
const searchInput = document.querySelector('#searchInput');
const container = document.querySelector('#movies');

// Create Node function
function makeNodes(nodeName, nodeType) {
	if (nodeName.length !== nodeType.length) {
		return 'Error';
	} else {
		const node = { };
		nodeName.map((name, index) => {
			node[name] = createElement(node[index])

		})
	}
	return node;
}

submitBtn.addEventListener('submit', () => {
			event.preventDefault();
			const query = searchInput.value.trim();
			if (query === "") {
				const {
					noResult
				} = makeNodes(['pargragh'], ['p']);
				noResult.textContent = 'Entaer a valid movie';
				container.appenChild(noResult);
			}

			searchInput.innnerHTML = "";
			var url = `https://api.themoviedb.org/3/search/movie?api_key=${config.apiKey }&language=en-US&query=${query}`;
			fetchFunction('GET', url, (response) => {
					var result = response.results;
					if (result.length == 0) {
						const {
							noMovies
						} = makeNodes(['pargragh'], ['p']);
						noMovies.textContent = ' There is no results';
						container.appenChild(noMovies);
					}
					result.forEach(movie => {
							const objct =  {
								movieTitle,
								movieImage,
								realseDate
							} = makeNodes(['movieTitle', 'movieImage', 'movieRelaseDate'], ['h2', 'img', 'span']);
							const containerObjct =  {
								movieContainer
							} = makeNodes(['movieContainer'], ['div']);
							movieContainer.appenChild(...objct);
							container.appenChild(containerObjct);						
						}
					 );
			})
			