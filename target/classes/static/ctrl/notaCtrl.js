app.controller("notaoController",
		function($scope, $routeParams, notaService) {
	$scope.nota = {};

			function novo() {
				$scope.nota = {};
			}
			$scope.create = function(nota) {
				notaService.salvar(nota).then(alert("Salvo com Sucesso"),function(e){
					alert("Erro ao Salvar");
					console.log(e);
				});
				listar();
				novo();
			};

			$scope.limpar=function(){
alert('ddd');			};
			var id = $routeParams.id;
			if (id) {
				notaService.getBanco(id).then(function(response) {
					$scope.matricula = response.data;
				});
			} else {
				$scope.matricula = {};

			}
			listar();
			function listar() {
				notaService.listar().then(function(resp) {
					$scope.notas = resp.data;
				});
			};
			$scope.alterar = function(nota) {
				$scope.nota.aluno = nota;

			};
			
		});
