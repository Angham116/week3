const url = 'https://api.github.com/user';
const fetchFunction = (method, url, callback) => {
	// if (!url) return 'Error';
	// function checkUrl(url){
	// if (!url) return 'Error';
 //        }
	// if (typeof callback !== 'function') return 'Pleaze enter function';
	checkUrl(url);
	checkCallbackType(callback);
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange(() => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const response = JSON.parse(xhr.responseText);
			callback(response);
			console.log(response);
		}
	})
	xhr.open('GET', url)
	xhr.send()
}


function checkUrl(url){
	if (!url) return 'Error';
}

function checkCallbackType(callback){
		if (typeof callback !== 'function') return 'Pleaze enter function';
	}

	fetchFunction('GET', url, callback);

if (typeof module !== "undefined") {
  module.exports = { checkUrl, checkCallbackType };
  }
  