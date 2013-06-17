(function(){
    var d = document,
        canvas = d.body.appendChild( d.createElement( 'canvas' ) ),
        context = canvas.getContext( '2d' ),
        time = 0,
        w = 1,
        h = 1,
        cos = Math.cos,
        sin = Math.sin,
        PI = Math.PI;

    function resize() {
        canvas.width = w = innerWidth;
        canvas.height = h = innerHeight;
    }

    // Monitor browser resize
    addEventListener( 'resize', resize, false );

    // Initial size
    resize();

    // The main animation loop
    setInterval( function() {
        context.clearRect( 0, 0, w, h );
        context.fillStyle = 'rgba(39,89,39,.2)';
        context.globalCompositeOperation = 'lighter';

        time += .1;

        // The number of particles to generate
        i = 10000;

        while( i-- ) {
            r = ( ( w*2 + h*1.855555 ) * 0.4 ) * ( sin(( time + i/2 ) * ( .005 + ( ( sin(time/100000) / PI/10 ) * .2 ) ) ) /2* PI );
            context.fillRect( sin(i) * r + (w/2),
                              cos(i) * r + (h/2),
                              40 ,
                              40 );
        }
    }, 8 );
})()