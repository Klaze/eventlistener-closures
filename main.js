window.onload = function () {

	var catListInit = {
			"Petunia" : "cat1.jpg",
			"George" : "cat2.jpg",
			"Lopez" : "cat3.jpg",
			"Arm" : "cat4.jpg",
			"Leggless" : "cat5.jpg"
		};

	var Cat = function(name, imgSrc) {
		this.name = name;
		this.imgSrc = imgSrc;
		this.clicks = 0;
		this.hiddenCont = 0;

	};

	var cats = [];

	var catDisplay = document.getElementById('catDisplay');
	var catList = document.getElementById('catList-UL');
	var currentCat = false;

	for (var item in catListInit) {
		cats.push(new Cat(item, catListInit[item]));
	}



	//Generate containers for all the cats, complete with images and event binding to image
	for (var i = 0; i < cats.length; i++) {
		var cat = cats[i];

		var container = document.createElement('div');
		container.id = cat.name+"-Div";
		container.style.display = "none";

		var nameCont = document.createElement('div');
		nameCont.id = cat.name+"-name";
		nameCont.textContent = cat.name;

		var picCont = document.createElement('img');
		picCont.id = cat.name;
		picCont.src = cat.imgSrc;

		var clickCont = document.createElement('div');
	    clickCont.id = cat.name+'-clicks';

	    container.appendChild(nameCont);
	    container.appendChild(picCont);
	    container.appendChild(clickCont);


	    catDisplay.appendChild(container);
	    cat.hiddenCont = container;

		picCont.addEventListener('click', (function(catCopy, clickContCopy, containerCopy) {
	        return function() {
	        	containerCopy.display = "block";
	            catCopy.clicks++;
	            clickContCopy.innerHTML = catCopy.name + " has been clicked: " + catCopy.clicks + " times!";
	        };
	    })(cat, clickCont, container));

	}

		//Generate list of cats as links to a callback that will unhide the images
	for (var i = 0; i < cats.length; i++) {
		var cat = cats[i];
		var container = document.createElement('li');
		container.id = cat.name+"-ListItem";
		container.textContent = cat.name;

	    catList.appendChild(container);

		container.addEventListener('click', (function(cat) {
	        return function() {
	        	//var elem = document.getElementById(cat.name+"-Div");
	        	console.log(currentCat);
	        	if (currentCat) {
	        		currentCat.hiddenCont.style.display = "none";
	        	}
	        	cat.hiddenCont.style.display = "block";
	        	currentCat = cat;
	        };
	    }) (cat));

	}
};