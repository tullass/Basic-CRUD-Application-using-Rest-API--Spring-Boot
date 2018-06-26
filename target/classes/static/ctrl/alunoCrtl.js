app.controller("alunoController", function($scope, $routeParams,$http, alunoService) {

	
	function novo() {
		$scope.aluno = {};
	}
	$scope.create = function(aluno) {
		alunoService.salvar(aluno).then(alert("Aluno Salvo com Sucesso"),function(e){
			alert("Erro ao Salvar");
			console.log(e);
		});
		listar();
		novo();
	};

	var id = $routeParams.id;
	if (id) {
		alunoService.getAluno(id).then(function(response) {
			$scope.aluno = response.data;
		});
	} else {
		$scope.aluno = {};

	}
	$scope.turnos = [ {
		nome : 'Matutuino',
		id : 1
	}, {
		nome : 'Verpestino',
		id : 2
	}, {
		nome : 'Nocturno',
		id : 3
	}, ];
	

	listar();
	function listar() {
		alunoService.listar().then(function(resp) {
			$scope.alunos = resp.data;
		});
	}
	;
	listarTurm();
	function listarTurm() {
		alunoService.listarTurma().then(function(resp) {
			$scope.turmas = resp.data;
		});
	};
	listarSemes();
	function listarSemes() {
		alunoService.listarSemese().then(function(resp) {
			$scope.semestress = resp.data;
		});
	};
	
	listarProv();
	function listarProv() {
		alunoService.listarProvincia().then(function(resp) {
			$scope.pronvicias = resp.data;
		});
	};
	

	$scope.alterar = function(aluno) {
		$scope.aluno = aluno;
	};

	
});
