document.write('1 ) M\'afficher le resultat le plus grand<br>');

//en php pour afficher :
//  echo "blah blah";
//en JS on doit faire ça :
//  document.write("blah blah");

// pour définir une variable en php on utilise $
//  $variable = truc;
// en JS on utilise le mot clé var :
//  var variable = truc;

var a = 333;
var b = 666;
// document.write( ((a>b)?a:b)+"<br>");

if(a>b) {
    document.write(a); //si a>b on affiche a
} else { //sinon
    document.write(b); //on affiche b
}

document.write('2 ) M\'afficher le resultat le plus petit<br>');

document.write(((a<b)?a:b)+"<br>");

document.write('3 ) Echanger le contenu de la variable a et b<br>');

var temp = a;
a = b;
b = temp;
document.write('a = '+ a + ', b = '+ b +'<br>');


document.write('4 ) Additionner la variable a et b<br>');

var ab = a + b;
document.write(ab+'<br>');

document.write('5 ) Afficher un nombre aléatoire entre 1 et 100 ;<br>');

function random_int(min, max) {
    return Math.round(min + (Math.random() * Math.round(max-min)));
  }

// Math.floor(0.666) // 0
// Math.ceil(0.666) // 1




document.write(random_int(1,100)+"<br>");


document.write('6 ) Afficer un nombre aléatoire entre 5 et 10 ;<br>');
document.write(random_int(5,10)+"<br>");

document.write('7 ) Faire une fonction Addition ;<br>');

function addition(a, b) {
    return (a+b);
}

document.write('8 ) Générer un chiffre aléatoire entre 1 et 100, \"je suis nul si x < 50\" sinon je suis bon <br>');

$foo = random_int(1,100);
// document.write(($foo<50)?"Je suis nul !<br>":"Je suis BON!<br>");

if($foo<50) {
    document.write("Je suis nul !<br>");
} else {
    document.write("Je suis BON !<br>");
}



document.write('9 ) Faire une fonction qui prend en paramètre x (nombre aléatoire entre 0 et 5), si x==1 alors afficher AAAA, si x==2 alors afficher BBBB, si x==2 alors afficher CCCC, si x==4 alors afficher DDDD, sinon je suis une perruche.<br>');

function isItPerruche(x) {
    if(x==1) 
        document.write('AAAA');
    else if(x==2)
        document.write('BBBB');
    else if(x==3)
        document.write('CCCC');
    else if(x==4)
        document.write('DDDD');
    else
        document.write('Je suis une perruche.');
    }
            
    var x = random_int(0,5);
    isItPerruche(x);
    document.write('<br>');
    
document.write('9 ) Faire la question 10 avec l\'utilisation d\'un switch Case<br>');
            
function isItPerrucheSwitch(x) {
    switch(x) {
        case 1:
            document.write('AAAA');
        break;
        case 2:
            document.write('BBBB');
        break;
        case 3:
            document.write('CCCC');
        break;
        case 4:
            document.write('DDDD');
        break;
        default:
        document.write('Je suis une perruche.');
    }
}
            
x = random_int(0,5);
isItPerrucheSwitch(x);
document.write('<br>');

document.write('10) Générer 10 valeur aléatoire, et afficher les 10 variable<br>');

for(var i=0;i<10;i++){
    document.write('Nombre aléatoire n°'+(i+1)+' : '+random_int(0,1000)+'<br>');
}
            
document.write('11 ) Ajouter 10 valeur aléatoire dans un tableau<br>');

var tableau = [];

for(var i=0;i<10;i++){
    tableau[i] = random_int(0,1000);
}
            
document.write('12 ) Parcourir ce tableau et afficher l\'addition de tous ces résultats<br>');

var i = 1;
//for each (var value in tableau) {
// tableau.forEach(element => {
//     document.write('Valeur '+i+' : '+element+'<br>');    
//     i++;
// });

var total = 0;
for(var i=0; i<tableau.length ; i++) {
    total += tableau[i];
}
document.write('Total '+total+'<br>');    
