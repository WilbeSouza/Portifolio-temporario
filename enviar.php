<?php
$nome = addslashe($_POST['nome']);
$email = addslashe($_POST['email']);
$telefone = addslashe($_POST['telefone']);
$comentario = addslashe($_POST['comentario']);

$para = "wilbe.souza.ribeiro@hotmail.com";
$assunto = "Novo comentário do portfólio";

$corpo = "nome: ".$nome. "\n"."E-mail: ".$email."\n"."Telefone: "."Mensagem: ".$comentario."\n";

$cabeca = "From: $email"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

if(mail($para,$assunto,$cabeca)){
    echo("E-mail Enviado com Sucesso!");
}else{
    echo("Houve um erro ao enviar o email!")
}
?>
