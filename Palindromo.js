<!DOCTYPE html>
<html lang="pt-br">
<head>
  <title>PALINDROMO WEB</title>
  <style>
    body { font: 40pt Arial; }
    button { font-size: 20pt; padding: 30px; }
</style>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="">
  <script type="text/javascript">
    var fraseUser = prompt("Escreva uma frase para ver se é um palindromo","EX: RETER ");
    function frasePalindromo(fraseUser){
      fraseUser=fraseUser.toLowerCase().replace(/\s/g,"");
      fraserReverse=fraseUser.split("").reverse().toString();
      for (var i = 0; i < ((fraserReverse.length)-1); i++) {
        fraserReverse=fraserReverse.replace(",","");
      }; 
      if(fraseUser==fraserReverse){ 
        resultado="é um palíndromo";
      }
      else{   
        resultado="não é um palíndromo!";
      }
      document.write("Sua palavra  "+resultado);
    }
    frasePalindromo(fraseUser);
  </script>
</head>
<body>


</body>
</html>
