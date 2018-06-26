
app.controller("facturaController",
		function($scope, $http) {
			var urlBase = 'http://localhost:8080/fatura';
			var items = [];
			$scope.t=true;


			$scope.t=new Date();
			


			$scope.anos = [ {
				nome : '2017',
				valuei :1
			}, {
				nome : '2018',
				valuei : 2
							},
							{
								nome : '2019',
								valuei : 3
											},{
												nome : '2020',
												valuei : 4
															},
			];
					$scope.bancos = [ {
						nome : 'Caixa',
						valuei : 1
					}, {
						nome : 'Numerario',
						valuei : 2
					}, {
						nome : 'Banco B',
						valuei : 3
					}, {
						nome : 'Check',
						valuei : 4
					}, ];
			$scope.items = [ {
				nome : '5%',
				valuei : 0.05
			}, {
				nome : '10%',
				valuei : 0.10
			}, {
				nome : '15%',
				valuei : 0.15
			}, {
				nome : '25%',
				valuei : 0.25
			}, {
				nome : '50%',
				valuei : 0.50
			}, {
				nome : '100%',
				valuei : 0.100
			}, ];

			$scope.meses = [ {
				id : 1,
				nome : 'Janeiro',
					pago : true

			}, {
				id : 2,
				nome : 'Fevereiro',					pago : true

			}, {
				id : 3,
				nome : 'Marco',					pago : true

			}, {
				id : 4,
				nome : 'Abril',					pago : true

			}, {
				id : 5,
				nome : 'Maio',					pago : true

			}, {
				id : 6,
				nome : 'Junho',					pago : true

			}, {
				id : 7,
				nome : 'Julho',					pago : true

			}, {
				id : 8,
				nome : 'Agosto',					pago : true

			}, {
				id : 9,
				nome : 'Setembro',					pago : true

			}, {
				id : 10,
				nome : 'Outubro',					pago : true

			}, {
				id : 11,
				nome : 'Novembro',					pago : true

			}, {
				id : 12,
				nome : 'Dezembro',					pago : true

			} ];
			$scope.prestacao = [ {
				nome : '2-Prestacoes',
				valuei : 2
			}, {
				nome : '3-Prestacoes',
				valuei : 3
			}, {
				nome : '5-Prestacoes',
				valuei : 5
			}, {
				nome : '6-Prestacoes',
				valuei : 6
			}, {
				nome : '7-Prestacoes',
				valuei : 7

			}, {
				nome : '8-Prestacoes',
				valuei : 8

			}, {
				nome : '9-Prestacoes',
				valuei : 9

			}, {
				nome : '10-Prestacoes',
				valuei : 7

			}, {
				nome : '10-Prestacoes',
				valuei : 7

			}, ];

			$scope.time = new Date();
			var totalfatur = 1000;
			$scope.fatura = {};
			var novo = function() {
				$scope.fatura = {};
			}
			$scope.add = function() {
				var metodo = 'POST';
				if ($scope.fatura.id) {
					metodo = 'PUT';
				}
				$http({
					method : metodo,
					url : urlBase + '/',
					data : $scope.fatura
				}).then(function successCallback(response) {
					alert("Pagamento efectuado com sucesso");
					novo();

				}, function errorCallback(response) {
					alert("Houve um ERRO, se este erro persister, contacte o Provedor do Sistema");
					console.log(response);
				});
			};
			 $scope.listaAlunoa = function() {
				$http({
					method : 'GET',
					url : urlBase + '/listarTodos'
				}).then(function successCallback(response) {
					$scope.faturas = response.data;
					$scope.matricula = undefined;
				}, function errorCallback(response) {
				});
			};


			var listaAluno = function() {
				$http({
					method : 'GET',
					url : urlBase + '/listarAluno'
				}).then(function successCallback(response) {
					$scope.matriculas = response.data;
				}, function errorCallback(response) {
				});
			};

			listaAluno();
			

			var listatipo = function() {
				$http({
					method : 'GET',
					url : urlBase + '/listarTipo'
				}).then(function successCallback(response) {
					$scope.tipos = response.data;
				}, function errorCallback(response) {
				});
			};

			
			listatipo();

			var listatiposs = function() {
				$http({
					method : 'GET',
					url : urlBase + '/q'
				}).then(function successCallback(response) {
					$scope.quantas = response.data;
				}, function errorCallback(response) {
				});
			};

			
			listatiposs();

			var listatipo = function() {
				$http({
					method : 'GET',
					url : urlBase + '/turmas'
				}).then(function successCallback(response) {
					$scope.turmass = response.data;
				}, function errorCallback(response) {
				});
			};

			
			listatipo()
			var listatipoo = function() {
				$http({
					method : 'GET',
					url : urlBase + '/classes'
				}).then(function successCallback(response) {
					$scope.classess = response.data;
				}, function errorCallback(response) {
				});
			};

			
			listatipoo()
			$scope.alterar = function(matricula) {
				$scope.fatura.matricula = matricula;

			};
			$scope.refresh = function() {
				alert("Methodo ainda em construcao");
			};

			$scope.exportToPdf = function() {
				html2canvas(document.getElementById('customers'), {
					onrendered : function(canvas) {
						var data = canvas.toDataURL();
						var docDefinition = {
							content : [ {
								image : data,
								width : 550,
							} ]
						};
						pdfMake.createPdf(docDefinition)
								.download("example.pdf");
					}
				});
			}

			$scope.cal = function() {
				$scope.fatura.mes.pago=true;

				var multa = $scope.fatura.matricula.turma.nivel.valor
						* $scope.fatura.desconto;
				$scope.fatura.multa = multa;

				var total = $scope.fatura.matricula.turma.nivel.valor * 1
						+ $scope.fatura.multa * 1;
				$scope.fatura.caixa = total;

				var banco = $scope.fatura.matricula.turma.nivel.valor * 1
						+ $scope.fatura.multa * 1;
				$scope.fatura.banco.valor = banco;
				$scope.turma=$scope.fatura.matricula.turma.descricao;
				$scope.banco.valor=total;

			};

		});