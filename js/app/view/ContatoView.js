class ContatoView extends View{

	constructor(elemento) {

		super(elemento);
	}

	template(model) {

		return `

			<div class="chamada-contato">
				<h2>Como me Contatar</h2>
				<p>Você gostaria de me contratar, manda uma mensagem aí</p>
			</div>
			<form class="form">
				<input type="text" id="nome" placeholder="Digite seu Nome">
				<input type="email" id="email" placeholder="xxx@xxx.xxx">
				<textarea placeholder="Mensagem"></textarea>
				<button type="submit">Enviar</button>
			</form>
		`
	}
}