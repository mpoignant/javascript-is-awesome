//Ces tests sont pour vérifier que tout fonctionne chez vous
//S'ils ne passent pas, vous avez un problème
describe("Vérifions que tout est fonctionnel", function() {
	it("jQuery est correctement chargé", function() {
		expect(jQuery instanceof Function).toBeTruthy();
		expect($ instanceof Function).toBeTruthy();
	});

	it("jasmine-jquery est correctement chargé", function() {
		expect($('<div id="some-id"></div>')).toBe('div#some-id');
	});
});

describe("Avant de commencer", function() {
	it("jasmine-jquery", function() {
		//jasmine-jquery va nous permettre de tester simplement du code écrit en jQuery
		//La méthode setFixtures(html) permet de créer un bout
		//d'html qui ne sera vivant que le temps de notre test
		setFixtures('<div id="mon-id"></div>');

		//On peut donc maintenant faire des tests sur ce bout d'html
		//toExist() nous permet de savoir si l'élément existe (mais vous l'aviez deviné)
		expect($('#mon-id')).toExist();

		//Source : https://github.com/velesin/jasmine-jquery
	});
});

//C'est ici que ça commence vraiment
describe("$ vs $()", function() {

	it("les principales différences", function() {
		//$ est une fonction (et donc un objet)
		//$() est l'appel à la méthode $

		expect(typeof $).toBe( /**/ );
		expect(typeof $()).toBe( /**/ );
	});

	it("$ est plus qu'une fonction", function() {
		//$ (ou jQuery) est un objet qui comporte plusieurs méthodes utilitaires
		var a = " les     espaces c'est super bien            ";
		expect($.trim(a)).toBe( /**/ );

		//$.each() permet d'itérer sur une collection
		$.each([0, 1, 2], function(i, value) {
			expect(i).toBe(value);
		});

		//Ça fonctionne aussi sur les objets
		$.each({foo: "foo", bar:"bar"}, function(key, value) {
			expect(key).toBe(value);
		});

		//Pour plus de détails : http://api.jquery.com/category/utilities/
	});

	it("document.ready", function() {
		//Pas de tests ici, il suffit de regarder et d'afficher les pages dans le répertoire :
		// src/main/test/html dans l'ordre
	});
})

describe("DOM", function() {
	//jQuery permet entre autre de trouver des tags HTML dans une page web
	//Pour ça on utilise l'objet jQuery (ou $ plus simplement), comme une fonction
	//jQuery gère les sélecteurs CSS

	it("trouver un élément par son id", function() {
		setFixtures('<div id="div-id"></div>');

		//Le selecteur pour un id est # suivi de son id : #mon-id
		expect( /**/ ).toExist();
	});

	it("trouver un élément par son nom", function() {
		setFixtures('<h1>Mon gros texte</h1>');

		//Le selecteur pour un élément est son nom : div
		expect( /**/ ).toExist();
	});

	it("trouver un élément par sa classe", function() {
		setFixtures('<span class="mon-span">Ceci est un span</span>');

		//Le selecteur pour une classe est . suivi de sa classe : .ma-classe
		expect( /**/ ).toExist();
	});

	it("trouver plusieurs élements", function() {
		setFixtures('<div class="klass"></div><div class="klass"></div>');

		//Les selecteurs jQuery peuvent rendre plusieurs élements
		expect($('.klass').length).toBe( /**/ );
	});

	it("combiner plusieurs sélecteurs", function() {
		setFixtures('<div class="klass klass2"></span><div class="klass"></div>');

		//Les selecteurs jQuery peuvent être combinés
		//Écrivez un sélecteur qui ne renvoi que le div avec la class klass2
		var selecteur = $( /**/ );
		expect(selecteur).toHaveClass("klass");
		expect(selecteur).toHaveClass("klass2");
	});

	it("les éléments qui n'existent pas", function() {
		//En jQuery on peut écrire des sélecteurs qui ne pointent sur rien
		var selecteur = $('nimp');
		//Ça ne déclenche pas d'erreur, et on peut même appeler des méthodes dessus
		selecteur.find('.ma-classe');
		//Et ça ne déclenche toujours pas d'erreur

		//Il est donc conseillé de regarder la taille de la selection avant de la traiter
		expect(selecteur.length).toBe(0);
	});
});

describe("Changement de DOM", function() {
	it("Récupérer du texte", function() {
		setFixtures('<span>Mon texte</span>');

		//Pour récupérer le contenu sous format texte d'une balise c'est .text()
		expect( /**/ ).toBe('Mon texte');
	});

	it("Changer le texte", function() {
		setFixtures('<span>Mon texte</span>');

		//De manière générale, en jQuery, une méthode qui permet de récupérer une valeur
		//permet de la changer en lui passant un paramètre.

		//Changer le texte du span en "Mon super texte"

		expect($('span').text()).toBe("Mon super texte");
	});
});