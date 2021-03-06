<?php

if($_POST["submit"]) {
    $recipient="dan@danwatson.us";
    $subject="Danwatson.us email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>
<!DOCTYPE html>

<html>

   <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Dan Watson, Front End Web Developer, Nashville, TN</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/lib/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fastcdn.org/Animate.css/3.4.0/animate.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/animate.css">
    <link href="/lib/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">

</head>

<body>

    <div class="body-container">

        <header>
            <div id="navbar">
                <img src="img/dw-logo1.png" id="nav-logo" alt="Dan Watson logo">
                <ul class="nav">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="portfolio.html">PORTFOLIO</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="resume.html">RESUME</a></li>
                    <!-- <li><a href="blog.html">BLOG</a></li> -->
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </div>
        </header>

        <main>
            <article class="proj-div">
                <h1>Contact</h1>
                <p>Thank for your visiting my site! I hope you found it enjoyable. I would love to hear from you! Please fill out the form below or email me at
                    <a href="mailto:dan@danwatson.us?Subject=Hello"
                        target="_top"> dan@danwatson.us</a>. </p> 
            </article>

            <?=$thankYou ?>

            <form id="contactForm" class="container" method="post" action="contact.php">
                <div class="row">
                    <div class="form-group col-sm">
                        <label>Your Name</label><input type="text" class="form-control" id="nameInput" name="sender" placeholder="Your name">
                        <label for="exampleFormControlInput1">Your email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="senderEmail" placeholder="name@example.com">
                    </div>
                    <div class="form-group col" id="messageInput-div">
                        <label for="messageInput">Message</label>
                        <textarea class="form-control" rows="5" id="messageInput" name="message" placeholder="Enter your message here..." rows="3"></textarea>
                        <input type="submit">
                    </div>
                </div>
            </form>

            <h3>You can also find me here</h3>
            
            <div class="socialIconBar">
                <a href="https://github.com/danwatson00">
                    <img src="img/Github.png" alt="Dan's Github Profile" class="socialIcon">
                </a>
                <a href="https://www.linkedin.com/in/danwatson00">
                    <img src="img/Linkedin.png" alt="Dan Watson's LinkedIn Profile" class="socialIcon">
                </a>
                <a href="https://www.twitter.com/watsonstudios">
                    <img src="img/Twitter.png" alt="Dan Watson's Twitter Profile" class="socialIcon">
                </a>
                <a href="https://www.instagram.com/watsonstudios">
                    <img src="img/Instagram.png" alt="Dan Watson's Instagram Profile" class="socialIcon">
                </a>
            </div>
        </main>

        <footer class="footer">All content &#169; Dan Watson, 2018</footer>
    </div>
    <script src="dist/app.js"></script>
   </body>

</html>