var btn = document.querySelector('#project1');

	btn.addEventListener('click', btnPress);

function btnPress(){
		if( btn.value === 'link_project1' ){
					console.log("made it");
					    window.open("quote_gen.html");
							    }
}
