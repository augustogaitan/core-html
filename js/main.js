// Detecciones de ie 9 e ie8 (si no se usaran eliminar)

//conditionizr.add('ie9', function () {
//    return (Function('/*@cc_on return (/^9/.test(@_jscript_version) && /MSIE 9\.0(?!.*IEMobile)/i.test(navigator.userAgent)); @*/')());
//});

// Que hacer cuando sean positivas las detecciones (eliminar si no se usaran)

/*conditionizr.config({
    assets: 'js/',
    tests: {
        'ie8': ['class']
    }
});*/

//conditionizr.polyfill('js/min/placeholders.min.js', ['ie9','ie8']); (ejemplo de polyfill)
/*Conditionizr*/
conditionizr.config({
  assets: '/conditionizr/css/',
  tests: {
    'chrome': ['style', 'script', 'class'],
    'chromium': ['style', 'script', 'class'],
    'firefox': ['style', 'script', 'class'],
    'ie6': ['style', 'script', 'class'],
    'ie7': ['style', 'script', 'class'],
    'ie8': ['style', 'script', 'class'],
    'ie9': ['style', 'script', 'class'],
    'ie10': ['style', 'script', 'class'],
    'ie10touch': ['style', 'script', 'class'],
    'ie11': ['style', 'script', 'class'],
    'ios': ['style', 'script', 'class'],
    'linux': ['style', 'script', 'class'],
    'mac': ['style', 'script', 'class'],
    'opera': ['style', 'script', 'class'],
    'retina': ['style', 'script', 'class'],
    'safari': ['style', 'script', 'class'],
    'touch': ['style', 'script', 'class'],
    'windows': ['style', 'script', 'class'],
    'winPhone7': ['style', 'script', 'class'],
    'winPhone75': ['style', 'script', 'class'],
    'winPhone8': ['style', 'script', 'class']
  }
});
/*conditionizr.on('chrome', function () {
    alert("esto es crome");
});
conditionizr.on('firefox', function () {
    alert("esto es firefox");
});*/
/*Fin Conditionizr*/
// Main

var MyApp;

var MyApp = {

    seccion : {
        modulo : function() {
            alert("asdfsadf");
        }
    }
}

$(document).ready(function(){
    if($('.nuevaclasesss').length){
        MyApp.seccion.modulo();
    }
});