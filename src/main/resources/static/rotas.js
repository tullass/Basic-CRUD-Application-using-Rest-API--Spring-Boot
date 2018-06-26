var app = angular.module('bancoo', [ 'ngRoute' ]);

app.config(function($routeProvider, $locationProvider) {

	$routeProvider.when('/bancoa/:id', {
		controller : 'bancooController',
		templateUrl : 'pages/bancoa.html'

	}).when('/bancoa', {
		controller : 'bancooController',
		templateUrl : 'pages/bancoa.html'
	}).when('/cad/matricula', {
		controller : 'matriculaController',
		templateUrl : 'pages/matricula.html'

	}).when('/tabela', {
		controller : 'tabelaController',
		templateUrl : 'pages/tabela.html'
	}).when('/fatura/data', {
		controller : 'datassController',
		templateUrl : 'pages/datasfatura.html'

	}).when('/notas/:id', {
		controller : 'notaoController',
		templateUrl : 'pages/notas.html'

	}).when('/notas', {
		controller : 'notaoController',
		templateUrl : 'pages/notas.html'

	}).when('/faturaa', {
		controller : 'facturaController',
		templateUrl : 'pages/fatura.html'
	}).when('/fatura/Report', {
		controller : 'ReportFaController',
		templateUrl : 'pages/datasadiantadofatura.html'

	}).when('/report/faturas', {
		controller : 'facturaController',
		templateUrl : 'pages/relatorios.html'

	}).when('/listaNota', {
		controller : 'notaListaController',
		templateUrl : 'pages/notaLista.html'

	}).when('/adiantadoo', {
		controller : 'adiantadoController',
		templateUrl : 'pages/adiantado.html'

	}).when('/adiantadoo/:id', {
		controller : 'adiantadoController',
		templateUrl : 'pages/adiantado.html'

	}).when('/cad/classe', {
		controller : 'classeController',
		templateUrl : 'pages/classe.html'

	}).when('/cad/turma', {
		controller : 'turmaController',
		templateUrl : 'pages/turma.html'

	}).when('/cad/aluno', {
		controller : 'alunoController',
		templateUrl : 'pages/aluno3.html'

	}).when('/adiantadoReport', {
		controller : 'adiantadoTabelaController',
		templateUrl : 'pages/adiantadoRelatorios.html'

	}).when('/mes/pagos', {
		controller : 'facturaController',
		templateUrl : 'pages/meses.html'

	}).when('/cad/servicos', {
		controller : 'ServicosController',
		templateUrl : 'pages/servico.html'
	}).when('/cad/semestre', {
		controller : 'SemestreController',
		templateUrl : 'pages/semestree.html'

	}).when('/cad/semestre/disciplina', {
		controller : 'SemestreController',
		templateUrl : 'pages/semdisc.html'

	}).when('/dashboard', {
		controller : 'genController',

		templateUrl : 'pages/dash.html'

	}).otherwise('/dashboard');

});
