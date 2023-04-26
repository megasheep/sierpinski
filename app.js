const canvas = document.createElement( "canvas" ),
	  ctx = canvas.getContext( "2d" );
	  canvas.width = 1204;
	  canvas.height = 602;
	  document.body.appendChild( canvas );

let cells = [];

( function init() {

	ctx.scale( 2, 2 );
	ctx.fillStyle = "black";
	ctx.fillRect( 0, 0, 602, 301 );

	for ( let i = 0; i < 602; i++ ) {
		cells[i] = false;
		if ( i == 301 ) {
			cells[i] = true;
		}
	}

	run();
} )();

function run( nb ) {

	isNaN( nb ) ? nb = 0 : nb;

	if ( nb < 301 ) {

		const cells_copy = JSON.parse( JSON.stringify( cells ) );

		for ( let i = 1; i < 601; i++ ) {

			if ( cells_copy[i] ) {
				ctx.fillStyle = "white";
				ctx.fillRect( i, nb, 1, 1 );
			}

			if ( ( cells_copy[i] == true && cells_copy[i-1] == true && cells_copy[i+1] == true ) || ( cells_copy[i] == false && cells_copy[i-1] == false && cells_copy[i+1] == false ) ) {
				cells[i] = false;
			} else {
				cells[i] = true;
			}

		}

		setTimeout( run, 3, nb+=1 );
	}
}