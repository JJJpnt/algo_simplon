var formulaire = document.createElement('FORM');
formulaire.name = 'Ma petite perruche.';
formulaire.method = 'POST';
formulaire.action='http://www.another_page.com/index.htm';
var mabox=document.createElement('INPUT');
mabox.type='TEXT';
mabox.name='matextbox';
mabox.value='Je suis un petit pangolin';
formulaire.appendChild(mabox);
document.body.appendChild(formulaire);
// document.formulaire.submit();