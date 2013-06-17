<?php
$url = explode('.', $_SERVER["SERVER_NAME"]);
$host = $url[count($url)-2];
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf8" />
    <meta name="author" content="corey" />
    <meta name="desciption" content="Landing page for parked domains" />
    <title><?php echo $host. " is still evolving as a digital lifeform." ?></title>

    <link href='http://fonts.googleapis.com/css?family=Fugaz+One' rel='stylesheet' type='text/css'>
    <link href="css/style.css" rel="stylesheet" />
  </head>

  <body>

  <header>
     <h1><?php echo $host ?></h1>
     <p class="instruction">Additional information here.</p>
     <!-- --------------------------------- -->
     <div class="hidden">
       <section class="information"><h3>Service</h3><p>If this is your website, then your websites url has successfully been pointed to the server. Your next step will be to make sure you upload your        mainpage to your website. </p> </section>
       <section class="information"> <h3>Information </h3> <p>Chances are if you are seeing this page, then your work is not done. Contact your webmaster and let them know you are willing to pay any amount  to have them help your digital lifeform journey into the real world.</p> </section>
       <section class="information"> <h3>Additional </h3> <p>There really isn't much else to say. As your website is evolving, so is this page. It really is just a temporary page while something more useful is being built" </p></section>
     </div>
  </header>

  <script src="js/header.js"></script>
  <script src="js/body.js"></script>

</body>

  <!-- <?php print_r($url) ?> -->

</html>