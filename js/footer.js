const footerElement = `
  <footer class="footer">
    <div class="container c">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nunc vel ex blandit interdum.</p>
          <ul class="social-icons">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://github.com/ben64103/movie-database"><i class="fab fa-github"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h4>Quick Links</h4>
          <ul class="list-unstyled">
            <li><a href="../index.html">Home</a></li>
            <li><a href="./movies.html">Movies</a></li>
            <li><a href="./search.html">Search</a></li>
            <li><a href="#">Upcoming</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h4>Contact Us</h4>
          <p>Email: info@moviewebsite.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <p class="text-center">© 2023 Movie Website. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
`
const main = document.getElementsByTagName('main')[0]

const referenceElement = footerElement;

main.insertAdjacentHTML("afterend", footerElement)