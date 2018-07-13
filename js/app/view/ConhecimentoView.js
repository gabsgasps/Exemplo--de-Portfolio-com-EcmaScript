class ConhecimentoView extends View{

	constructor(elemento) {

		super(elemento);
	}

	template(model) {

		return `

			<h2>Conhecimentos</h2>
			<p>O meu foco sem dúvida é para a área do <strong>desenvolvimento front-end</strong>,
			abaixo se encontra um pouco das minhas competências</p>
			<section class="secao-conhecimento">
				<h3>HTML5</h3>
				<p>O HTML5 um dos carros chefes, 
				é a linguagem de marcação que se estrutura um site para web usando as chamadas tags,
				a web se tornou mais dinâmica e atraente, proporcionando uma melhor experiência para os usuários 
				e uma maneira mais eficiente para o desenvolvimento web.</p>
			</section>
			<section class="secao-conhecimento">
				<h3>CSS3</h3>
				<p>O CSS é a parte responsável pela estilização (cores, tipografia, imagens, animações), 
				com o advento do CSS3 animações e 
				efeitos que eram feitos com flash ou JavaScript, 
				podem ser feitos em CSS3 através dos novos atributos.</p>
			</section>
			<section class="secao-conhecimento">
				<h3>EcmaScript</h3>
				<p>O EcmaScript conhecido como JavaScript, é a linguagem que mais está no hype,
				no qual está crescendo e aumentando a cada dia com novos adeptos com milhões de Frameworks e Bibliotecas, as mais conhecidas React(Facebook) e Angular(Google)</p>
			</section>
		`
	}
}