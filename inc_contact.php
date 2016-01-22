
<script type='text/javascript' src='js/form_c.js'></script>


<div id='formulaire'>

  <form action='send.php' method='post' id='contact_form'>
    <p>
	<strong><span style="color:#ea463c;">//</span> Votre nom/soci&eacute;t&eacute; :</strong>
    <div id='name_error' class='error'><img style="margin-top:5px;" src='images/error.png'> veuillez entrer votre nom !!</div>
    <div>
      <input type='text' name='name' id='name'>
    </div>
    </p>
    <p>
    <strong><span style="color:#ea463c;">//</span> Votre Email :</strong>
    <div id='email_error' class='error'><img style="margin-top:5px;" src='images/error.png'> veuillez entrer votre e-mail !!</div>
    <div>
    <input type='text' name='email' id='email'>
    </div>
    </p>
    <p>
    <strong><span style="color:#ea463c;">//</span> Votre num&eacute;ro de t&eacute;l&eacute;phone :</strong>
    <div id='subject_error' class='error'><img style="margin-top:5px;" src='images/error.png'> veuillez pr&eacute;ciser votre num&eacute;ro !!</div>
    <div>
      <input type='text' name='subject' id='subject'>
    </div>
    </p>
    <p>
    <strong><span style="color:#ea463c;">//</span> Votre message :</strong>
    <div id='message_error' class='error'><img style="margin-top:5px;" src='images/error.png'> Champs message est requis !!</div>
    <div>
      <textarea name='message' id='message'></textarea>
    </div>
    </p>
    <div id='mail_success' class='success'><img style="margin-top:5px;" src='images/success.png'> Merci ! Votre message a bien &eacute;t&eacute; envoy&eacute; !!</div>
    <div id='mail_fail' class='error'><img style="margin-top:5px;" src='images/error.png'> votre message n'a pas &eacute;t&eacute; envoy&eacute;, r&eacute;essayer plus tard !!</div>
    <p id='cf_submit_p'>
      <input type='submit' id='send_message' value='Envoyer votre message' style="background:#ea463c;color:#fff;border:0;width:200px;margin:20px 0 0 110px;display:block;">
    </p>
  </form>
    <br />
</div>
