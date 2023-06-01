const header = document.querySelector('header');

header.innerHTML = `
  <div class="socials container-fluid bg-dark d-md-flex d-none justify-content-end gap-4 py-1">
    <a href="#"><img src="Images/facebook.png" alt="facebook"></a>
    <a href="#"><img src="Images/twitter.png" alt="twitter"></a>
    <a href="#" class="ps-2">English</a>
    <a href="#">My Page</a>
    <a href="#">Log out</a>
  </div>
  
  <nav class="container-fluid navbar navbar-expand-md navbar-dark"> 
    <div class="nav-bar container-fluid">   
      <a class="navbar-brand logo text-center text-dark d-flex" href="#">
        <img src="Images/logo.png" alt="Penda" class="logo-img py-1">
        <span class="text-start ps-1 lato fw-bold">Ledership <br>Conference</span>
      </a>     
      <button class="navbar-toggler d-lg-none menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <img src="Images/mobile_menu.png" alt="menu" id="hamburger-menu">
        <span class='text-light fw-bolder fs-1 w3-animate-top d-none' id="close-menu">&times</span>
      </button>
      <div class="collapse navbar-collapse d-md-flex" id="collapsibleNavId">
        <ul class="mobile-menu navbar-nav me-auto mt-2 mt-lg-0 bg-dark">
          <li class="nav-item"><a class="nav-link" href="about.html" aria-current="page">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Program</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Join</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Partners</a></li>
          <li class="nav-item"><a class="nav-link" href="#">News</a></li>
          <li class="nav-item"><a class="nav-link quote red-border" href="#">PLC Campaign</a></li>             
        </ul>      
      </div>          
    </div>
  </nav>
`;