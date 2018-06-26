app.service('notaService', function($http) {
	var urlb = 'http://localhost:8080/matricula';

	this.salvar = function(nota) {
		if (nota.id) {
			return $http.put(urlb, nota);
		} else {
			return $http.post(urlb + '/', nota);
		}
	};

	this.getBanco = function(id) {
		return $http.get(urlb + '/a/' + id);
	};
	this.listar = function() {
		return $http.get(urlb + '/listar');
	};
});