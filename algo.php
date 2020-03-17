<hr>
Exo algo en PHP :
<hr>

<?php

echo "1 ) M'afficher le resultat le plus grand<br>";

    $a = 333;
    $b = 666;
    echo (($a>$b)?$a:$b)."<br>";

echo "2 ) M'afficher le resultat le plus petit<br>";

    echo (($a<$b)?$a:$b)."<br>";

echo "3 ) Echanger le contenu de la variable a et b<br>";

    $temp = $a; $a = $b; $b = $temp;
    echo "a = $a, b = $b<br>";

echo "4 ) Additionner la variable a et b<br>";

    $ab = $a + $b;
    echo $ab;

echo "5 ) Afficher un nombre aléatoire entre 1 et 100 ;<br>";

    echo random_int(1,100)."<br>";


echo "6 ) Afficer un nombre aléatoire entre 5 et 10 ;<br>";

    echo random_int(5,10)."<br>";

echo "7 ) Faire une fonction Addition ;<br>";

    function addition($a, $b) {
        return ($a+$b);
    }

echo "8 ) Générer un chiffre aléatoire entre 1 et 100, \"je suis nul si x < 50\" sinon je suis bon <br>";

    $foo = random_int(1,100);
    echo ($foo<50)?"Je suis nul !<br>":"Je suis BON!<br>";

    if($foo<50) {
        echo "Je suis NAZE";
    } else {
        echo "Je suis AWESOME";

    }


echo "9 ) Faire une fonction qui prend en paramètre x (nombre aléatoire entre 0 et 5), si x==1 alors afficher AAAA, si x==2 alors afficher BBBB, si x==2 alors afficher CCCC, si x==4 alors afficher DDDD, sinon je suis une perruche.<br>";

    function isItPerruche($x) {
        if($x==1):
            echo "AAAA";
        elseif($x==2):
            echo "BBBB";
        elseif($x==3):
            echo "CCCC";
        elseif($x==4):
            echo "DDDD";
        else:
            echo "Je suis une perruche.";
        endif;
    }
             

    $x = random_int(0,5);
    isItPerruche($x);
    echo "<br>";
    
echo "9 ) Faire la question 10 avec l'utilisation d'un switch Case<br>";
    
    function isItPerrucheSwitch($x) {
        switch($x) {
            case 1:
                echo "AAAA";
            break;
            case 2:
                echo "BBBB";
            break;
            case 3:
                echo "CCCC";
            break;
            case 4:
                echo "DDDD";
            break;
            default:
            echo "Je suis une perruche.";
        }
    }
    
    $x = random_int(0,5);
    isItPerrucheSwitch($x);
    echo "<br>";
    
    echo "10) Générer 10 valeur aléatoire, et afficher les 10 variable<br>";

    for($i=0;$i<10;$i++){
        echo "Nombre aléatoire n°".($i+1)." : ".random_int(0,666)."<br>";
    }
    
    
echo "11 ) Ajouter 10 valeur aléatoire dans un tableau<br>";
    
    for($i=0;$i<15;$i++){
        $tableau[$i] = random_int(0,1664);
    }
            
echo "12 ) Parcourir ce tableau et afficher l'addition de tous ces résultats<br>";

    $i = 1;
    foreach($tableau as $value){
        echo "Valeur $i : $value <br>";
        $i++;
    } 

    // $total = 0;

    // for($i=0; $i < count($tableau) ; $i++) {
        
    //     $total += $tableau[$i];

    // }

    // for($i=0;$i<count($tableau);$i++){
    //     echo "Nombre aléatoire n°".($i+1)." : ".random_int(0,666)."<br>";
    // }
    
    

?>

<hr>
La même en JS :
<hr>

<script src="./algo.js"></script>