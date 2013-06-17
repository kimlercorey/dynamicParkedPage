window.onload = function() {

    var header = document.getElementsByTagName('header')[0];
    var headerToggleTimeOut = -1;
    var headerMouseDown = false;

    // Event Listeners
    document.addEventListener( 'mousedown', function() { headerMouseDown = true; }, false );
    document.addEventListener( 'mouseup', function() { headerMouseDown = false; }, false );

    header.addEventListener('mouseover', function() {
        if (!headerMouseDown) {
            clearTimeout( headerToggleTimeOut );
            headerToggleTimeOut = setTimeout( function() {
                header.setAttribute( 'class', 'open' )
            }, 100 );
        }
    }, false);

    header.addEventListener('mouseout', function() {
        clearTimeout( headerToggleTimeOut );
        headerToggleTimeOut = setTimeout( function() {
            header.setAttribute( 'class', '' )
        }, 100 );
    }, false);

};