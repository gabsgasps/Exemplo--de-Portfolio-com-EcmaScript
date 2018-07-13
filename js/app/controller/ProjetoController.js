class ProjetoController{

	constructor() {
		let $ = document.querySelector.bind(document);

		//na hora de manipular view apenas usar o $ ao inves de this_...
		/*
			$(".quemSou");
			$(".conhecimento");
			$(".contato");
		*/
		this._mensagem = new Mensagem();
		this._apresentacaoView = new ApresentacaoView($(".apresentation"));
		this._navView = new NavView($("nav"));
		this._redeSociais = new RedesSociaisView($(".redes-sociais"));
		this._quemSou = new QuemSouView($(".quemSou"));
		this._conhecimento = new ConhecimentoView($(".conhecimento"));
		this._contato = new ContatoView($(".contato"));


		this._manipulaView();
	}

	_manipulaView(){
				
		this._apresentacaoView.update(this._mensagem);

		this._navView.update(this._mensagem);

		this._redeSociais.update(this._mensagem);

		this._quemSou.update(this._mensagem);

		this._conhecimento.update(this._mensagem);

		this._contato.update(this._mensagem);
	}
}