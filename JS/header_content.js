const header = document.querySelector('header');

header.innerHTML = `  
  <div class=" container-fluid bg-dark d-md-block d-none py-2 px-5">
    <ul class="socials d-flex justify-content-end gap-4 my-0">
      <li><a href="#"><img src="Images/facebook.png" alt="facebook"></a></li>
      <li><a href="#"><img src="Images/twitter.png" alt="twitter"></a></li>
      <li><a href="#" class="ps-2">English</a></li>
      <li><a href="#">My Page</a></li>
      <li><a href="#">Log out</a></li>               
    </ul>
  </div>

  <nav class="container-fluid navbar navbar-expand-md py-3"> 
    <div class="nav-bar container-fluid">   
      <a class="navbar-brand logo text-center text-dark d-flex" href="index.html">
        <img src="Images/logo.png" alt="Penda" class="logo-img py-1">
        <span class="text-start ps-1 lato fw-bold">Ledership <br>Conference</span>
      </a>
      <button class="navbar-toggler d-lg-none menu-btn border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <img src="Images/mobile_menu.png" alt="menu" id="hamburger-menu">
        <span class='text-light fw-bolder fs-1 w3-animate-top d-none' id="close-menu">&times</span>
      </button>
      <div class="collapse navbar-collapse d-md-flex justify-content-end" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0" id="mobile-menu">
          <li class="nav-item"><a class="nav-link" href="about.html" aria-current="page">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Program</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Join</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Partners</a></li>
          <li class="nav-item"><a class="nav-link" href="#">News</a></li>
          <li class="nav-item"><a class="nav-link quote red-border p-2" href="#">PLC Campaign</a></li>             
        </ul>      
      </div>          
    </div>
  </nav>
`;