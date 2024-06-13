class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer class="footer-section">
            <div class="footer-bg" style="background-image: url(assets/images/footer-v1-bg.jpg);">
                <div class="container">
                    <div class="footer-cta pt-5 ">
                        <div class="row">
                            <div class="col-xl-4 col-md-4 mb-30 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div class="single-cta">
                                    <i class="fas fa-map-marker-alt" style="font-size: 2.5em; "></i>
                                    <div class="cta-text footer-text">
                                        <h4 class="ms-3">Find us</h4>
                                        <p class="ms-3">No.24, Benaka Complex, 2nd Cross, Sirur Park Rd, Jai Bheema Nagar, Seshadripuram, Bengaluru - 560020
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div class="single-cta">
                                    <i class="fas fa-phone"></i>
                                    <div class="cta-text footer-text">
                                        <h4>Call us</h4>
                                        <p>+91 79758 59061</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4 mb-30 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div class="single-cta">
                                    <i class="far fa-envelope-open"></i>
                                    <div class="cta-text footer-text">
                                        <h4>Mail us</h4>
                                        <p>info@education2.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 mb-50 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <a href="index.html">
                                            <img src="assets/images/footer-logo.png" class="img-fluid" alt="logo"></a>
                                    </div>
                                    <div class="footer-text">
                                        <p>Welcome to MindShift, the comprehensive mental health monitoring tool Education2.0's SchoolSense+ LMS/LXP provides....
                                            <a href="./about.html" class="text-primary fst-italic text-decoration-underline">Read more</a></p>
                                    </div>
                                    <div class="footer-social-icon d-none">
                                        <span>Follow us</span>
                                        <ul class="social_icon">
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3 class="text-center">Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="./services.html">Services</a></li>
                                        <li><a href="./team.html">Our Team</a></li>
                                        <li><a href="./about.html">About Us</a></li>
                                        <li><a href="./faq.html">FAQ</a></li>
                                        <li><a href="./blog.html">Blogs</a></li>
                                        <li><a href="./caseStudy.html">Case Study</a></li>
                                        <li><a href="./contact.html">Contact us</a></li>
                                        <li><a href="./clinicContact.html">Support 24x7</a></li>
                                        <li><a href="insurance.html">Insurance Providers</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50 wow animated fadeInUp" data-wow-delay="0.9s">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3 class="text-center">Subscribe</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address">
                                            <button><i class="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.11s">
                                <div class="copyright-text">
                                    <p>Copyright &copy; 2009-2023 by Education2.0 SchoolSense+ "MindShift", licensed
                                        under ArSquare Development Pvt. Ltd.</p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right wow animated fadeInUp"
                                data-wow-delay="0.13s">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="./index.html">Home</a></li>
                                        <li><a href="./terms.html">Terms &amp; Privacy</a></li>
                                        <li><a href="./contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      `;
  }
}
customElements.define("footer-component", FooterComponent);
