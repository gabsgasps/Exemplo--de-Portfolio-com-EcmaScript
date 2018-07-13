class View{

	constructor(elemento){

		this._elemento = elemento;
	}

	template(model){

		throw new Error('É Necessário criar o método Template');
	}

	update(model){
		this._elemento.innerHTML = this.template(model);
	}
}