class RedesSociaisView extends View{

	constructor(elemento){

		super(elemento);
	}

	template(model) {

		return`<ul>
					<li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
					<li><a href="#"><i class="fab fa-github"></i></a></li>
					<li><a href="#"><i class="fas fa-envelope"></i></a></li>
				</ul>`
	}
}