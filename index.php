<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Montserrat:wght@500;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Montserrat:wght@500;700&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/jquery.min.js"></script>
    <title>Document</title>
    
</head>
<body id="body">
  <div class="bg_img">
    <img id='bg_img'src="./img/mainbackground.jpg" alt="">
  </div>
  
  <div id="large-header" class="large-header not_MB">
    <canvas id="demo-canvas"></canvas> 
  </div>
  <div id="popUp" class="popUp">
          <img src="img/true.svg" alt="">
          <p class='popUp_text'>
            <span data-tr="Thank">Thank you for trusting us.</span>
             <br>
             <span data-tr="You">You will be notified when we launch the website.</span> 
          </p>
          <div id="popf">
            <button  class="close" id="close" data-tr="Close">Close</button>
          <a target="_blank" href="https://focal-x.com/" data-tr="OR" id="a" class="w">OR Countine to Our Website </a>
          </div>
  </div>
  <div id="popUpFalse" class="popUpFalse">
          <img src="img/false.png" alt="" width="96px">
          <p class='popUpFalse_text'>
            <span data-tr="error">Invalid email</span>
             <br>
             <span data-tr="Please">Please make sure the email you entered is valid</span> 
          </p>
          <div id="popff">
            <button  class="close" id="closea" data-tr="Close">Close</button>
          </div>
  </div>
    <div class="container " id="container">
        <header id="header">
            <h1 class="logo"><a href="https://focal-x.com/" target="_blank"><img src="./img/logo.svg" alt=""></a></h1>
            <div class="lang">
              <button class="EN active" id="EN" >EN</button><span></span><button id="AR" class="AR de-active">AR</button>
            </div>
        </header>
        <div class="wrapper" id="wrapper">
           <section>
            <h1 class="title">New Era will Begin</h1>
            <p class="p1"> <strong>focal app solution</strong> will be a vast <br class="MB"> business gate in Syria,<br>
                a safe place for you if you are: <br class="MB">Business owner, Freelancer,<br>
                job seeker, designer, marketer,<br class="MB"> developer, or blogger.</p>
            <p class="p2"> Also you can check our company<br class="MB"> website from <a href="https://focal-x.com/" target="_blank"><span>HERE</span></a></p>
           </section>
          </div>
          <div class="sb" id="sb">
              <div id="subscribe" class="subscribe">
                <p class="form_title">Subscribe to the newsletter<br class="MB"> to stay in latest news
                </p>
              </div>
            <form method="POST" id="fupForm" >
              <input class="input"  type="email" name="email"  placeholder="Enter your E-mail to subscribe" id="email" oninvalid="this.setCustomValidity(' ')" required>
              <button class="btn" type="submit" value="Subscribe" name="subscribe_Submit" id="subscribe_Submit" data-tr="Subscribe">Subscribe</button>
            </form>
          </div>
          <div class="counter counter_MB" id='counter'>
              <div class="months block">
                  <p id='month'></p>
                  <p>Months</p>
              </div>
              <div class="days block">
                  <p id='day'></p>
                  <p>Days</p>
              </div>
              <div class="hours block">
                  <p id='hour'></p>
                  <p>Hours</p>
              </div>
              <div class="minutes block">
                  <p id='minute'></p>
                  <p>Minutes</p>
              </div>
              <div class="seconds block not_MB" id="counter_block">
                  <p id='second'></p>
                  <p>Seconds</p>
              </div>
          </div>
          <footer id="footer">
              <p id="footer_p" class="footer_p">© 2021 - 2022 <a href="https://focal-x.com/" target="_blank">focal X L.L.C</a> All Right Reserved
              </p>
              <div id="socialIcons" class="socialIcons">
                <p class="MB" id="contact">Keep In Touch:</p>
                  <ul id="listIcons">
                      <li>
                        <a href="https://www.facebook.com/focal.x.agency" target="_blank" title="facebook" class="facebookIcon"><img src="./img/facebook.svg" alt=""></a>
                      </li>
                      <li>
                        <a href="https://www.behance.net/focal-x-agency" target="_blank" title="behance" class="behanceIcon"><img src="./img/behance.svg" alt=""></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/focal-x-agency/" target="_blank" title="linkedIn" class="linkedInIcon"><img src="./img/linkedIn.svg" alt=""></a>
                      </li>
                      <li>
                        <a href="Www.Instagram.com/focal.x.agency" title="instagram" target="_blank" class="instagramIcon"><img src="./img/insta.svg" alt=""></a>
                      </li>
                    <li>
                      <a href="https://twitter.com/focal_x_agency" title="Twitter" target="_blank" class="twitterIcon"><img src="./img/twiter.svg" alt=""></a>
                    </li>
                  </ul>
                </div>
          </footer>
        </div>

    <script>
        $(document).ready(function() { 
        $('#subscribe_Submit').on('click', function() {
          $("#subscribe_Submit").attr("disabled", "disabled");
        var email = $('#email').val();
        if(email!="" ){
          if(IsEmail(email)==true) {
        	$.ajax({
        		url: "subscribe.php",
        		type: "POST",
        		data: {email: email},
        		cache: false,
        		success: function(dataResult){
        			var dataResult = JSON.parse(dataResult);
        			if(dataResult.statusCode==200){
        				$("#subscribe_Submit").removeAttr("disabled");
                email = $('#email').val("");
                onSubscribe();
        			}
        			else if(dataResult.statusCode==201){
        				alert("Error occured !");
        			}
        		}
        	});}
          else{
            onerror();
            $("#subscribe_Submit").removeAttr("disabled");
          }
        	}
        	else{
            $("#subscribe_Submit").removeAttr("disabled");
        	}
        });
        });

        function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@+([a-zA-Z0-9\-])+\.+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}
    </script>
    <script src="./js/main.js"></script>
    <script src="js/TweenLite.min.js"></script>
    <script src="js/EasePack.min.js"></script>
    <script src="js/rAF.js"></script>
    <script src="./js/lang.js"></script>
    <script src="./js/animation.js"></script>
    <script src="./js/popUp.js"></script>

</body>
</html>