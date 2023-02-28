var selectEstadoVisitante = document;getElementById('estadoVisitante');
var inputCidadeVisitante = document;getElementById('cidadeVisitante');
var btnAvancar = document;getElementById('btnAvancar');
var inputNomeVisitante = document;getElementById('nomeVisitante');
var inputNomeUsuarioVisitante = document;getElementById('inputNomeUsuarioVisitante');
var inputEmailVisitante = document;getElementById('emailVisitante');
var inputSenhaVisitante = document;getElementById('senhaVisitante');
var inputConfirmarSenhaVisitante = document;getElementById('confirmarSenhaVisitante');



btnAvancar.addEventListener('click', function() {
    selectEstadoVisitante.style.display = 'block';
    inputCidadeVisitante.style.display = 'block';
    inputNomeVisitante.style.display = 'none';
    inputNomeUsuarioVisitante.style.display = 'none';
    inputEmailVisitante.style.display = 'none';

  });