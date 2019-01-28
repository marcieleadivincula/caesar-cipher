String.fromCharCode(65, 66, 67)
string.charCodeAt(índice);

//Altere o texto entre as aspas e execute seu código para ver seu nome animado!
drawName('Marciele');
// O código abaixo permitirá que você interaja com as letras
bounceBubbles();

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var message = 'Change the message!';

drawName(message, blue);
bounceBubbles();

// Color variables:
red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];

// Letters in the message will cycle through these colors:
letterColors = [red, orange, green, blue, purple];

message = 'Multiple colors!';

drawName(message, letterColors);
bounceBubbles();


// Define color variables:
red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 60];
letterColors = [red, orange, green, blue, purple];

// This variable controls the smallest distance at which a mouse will 
mouseResponseThreshold = 50;

// This variable controls how strongly the dots will try to return to their starting position
friction = 0.85;

// This variable controls how much the dots will rotate when interacting
rotationForce = 0.0;

message = 'Change the physics!';

drawName(message, letterColors);
bounceBubbles();


