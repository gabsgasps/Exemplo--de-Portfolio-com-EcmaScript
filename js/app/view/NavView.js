class NavView extends View{

	constructor(elemento){

		super(elemento);
	}

	template(model){

		return `
				<ul>
					<li><a href="#sobre">Home</a></li>
					<li><a href="#conhecimento">Sobre</a></li>
					<li><a href="#contato">Contato</a></li>
					
				</ul>
				`;
	}
}