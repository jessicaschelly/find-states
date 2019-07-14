class Estado {
	constructor(nome, sigla, capital, regiao) {
		this.nome = nome
		this.sigla = sigla
		this.capital = capital
		this.regiao = regiao
	}

	match(search) {
		return removerAcentos(search.toLowerCase()) === removerAcentos(this.nome.toLowerCase())
	}
}

function removerAcentos(s) {
	return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

let estados = [
	new Estado('Acre', 'AC', 'Rio Branco', 'Norte'),
	new Estado('Alagoas', 'AL', 'Maceió', 'Nordeste'),
	new Estado('Amapá', 'AP', 'Macapá', 'Norte'),
	new Estado('Amazonas', 'AM', 'Manaus', 'Norte'),
	new Estado('Bahia', 'BA', 'Salvador', 'Nordeste'),
	new Estado('Ceará', 'CE', 'Fortaleza', 'Nordeste'),
	new Estado('Distrito Federal', 'DF', 'Brasília', 'Centro-Oeste'),
	new Estado('Espírito Santo', 'ES', 'Vitória', 'Sudeste'),
	new Estado('Goiás', 'GO', 'Goiânia', 'Centro-Oeste'),
	new Estado('Maranhão', 'MA', 'São Luís', 'Nordeste'),
	new Estado('Mato Grosso', 'MT', 'Cuiabá', 'Centro-Oeste'),
	new Estado('Mato Grosso do Sul', 'MS', 'Campo Grande', 'Centro-Oeste'),
	new Estado('Minas Gerais', 'MG', 'Belo Horizonte', 'Sudeste'),
	new Estado('Pará', 'PA', 'Belém', 'Norte'),
	new Estado('Paraíba', 'PB', 'João Pessoa', 'Nordeste'),
	new Estado('Paraná', 'PR', 'Curitiba', 'Sul'),
	new Estado('Pernambuco', 'PE', 'Recife', 'Nordeste'),
	new Estado('Piauí', 'PI', 'Teresina', 'Nordeste'),
	new Estado('Rio de Janeiro', 'RJ', 'Rio de Janeiro', 'Sudeste'),
	new Estado('Rio Grande do Norte', 'RN', 'Natal', 'Nordeste'),
	new Estado('Rio Grande do Sul', 'RS', 'Porto Alegre', 'Sul'),
	new Estado('Rondônia', 'RO', 'Porto Velho', 'Norte'),
	new Estado('Roraima', 'RR', 'Boa Vista', 'Norte'),
	new Estado('Santa Catarina', 'SC', 'Florianópolis', 'Sul'),
	new Estado('São Paulo', 'SP', 'São Paulo', 'Sudeste'),
	new Estado('Sergipe', 'SE', 'Aracaju', 'Nordeste'),
	new Estado('Tocantins', 'TO', 'Palmas', 'Norte')
]
