$(document).ready(function() {
	$('#form').on('submit', e => {
		e.preventDefault()

		let value = $('#search').val()

		for (let estado of estados) {
			if (estado.match(value)) {
				$('#modalEstado').modal()
				$('#sigla').val(estado.sigla)
				$('#estado').val(estado.nome)
				$('#capital').val(estado.capital)
				$('#regiao').val(estado.regiao)
				return
			}
		}
		$('#modalErro').modal()
	})
})
