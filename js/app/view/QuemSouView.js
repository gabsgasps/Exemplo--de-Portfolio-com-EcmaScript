class QuemSouView extends View{
	
	constructor(elemento) {

		super(elemento);
	}

	template(model) {

		return `
				<h2>Quem sou</h2>
				<p>Desenvolvedor Front-End</p>
				<div>


				<p>Meu nome é <strong>Gabriel Gasparino</strong>. 
				Tenho 17 anos, moro em São Paulo(capital) meus familiares me chamam de Gabs 
				e sou entusiasta e estudante faz três anos, ao longo desse tempo fiz cursos
				e estudei muito por conta, sempre fui autodata para certos assuntos como a música,
				e nesse pequeno espaço de tempo tenho aprendido.</p>
				<div class="caixa-imagem"> <img src="./img/GGR.jpg"></div>
				</div>

		`;
	}	
}