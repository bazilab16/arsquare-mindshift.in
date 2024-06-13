class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header class="main-header main-header--one  clearfix">
            <div class="main-header--one__top clearfix">
                <div class="container">
                    <div class="main-header--one__top-inner clearfix">
                        <div class="main-header--one__top-left">
                            <div class="main-header--one__top-logo">
                                <a href="index.html"><img src="../assets/images/logo.png" alt="" /></a>
                            </div>
                        </div>

                        <div class="main-header--one__top-right clearfix">
                            <div class="main-header--one__top-logo">
                                <img src="../assets/images/HIPAA.png" alt="" height="48" />
                            </div>
                            <div class="main-header--one__top-logo">
                                <a href="appointment.html" class="thm-btn ms-3">Book an Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-header-one__bottom clearfix">
                <div class="container">
                    <div class="main-header-one__bottom-inner clearfix">
                        <nav class="main-menu main-menu--1">
                            <div class="main-menu__inner">
                                <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>

                                <div class="left">
                                    <ul class="main-menu__list">
                                        <li><a href="./clinicContact.html">Helpline 24/7</a></li>
                                        <li><a href="./whyImportant.html">Why It's Important</a></li>
                                        <li class="dropdown">
                                            <a href="javascrip:void(0);">About</a>
                                            <ul>
                                                <li><a href="./about.html">About Us</a></li>
                                                <li><a href="./team.html">Team</a></li>
                                                <!-- <li><a href="./gallery.html">Gallery</a></li> -->
                                                <li><a href="./caseStudy.html">Case Studies</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./services.html">Services</a></li>
                                        <li class="dropdown">
                                            <a href="javascrip:void(0);">Partners</a>
                                            <ul>
                                                <li><a href="https://www.cadabamshospitals.com/" target="_blank">Cadabam
                                                        Health Group</a></li>
                                                <li><a href="https://annantasource.com/" target="_blank">Annanta
                                                        Source</a></li>
                                                <li><a href="https://one4patient.com/" target="_blank">One4Patient</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="./blog.html">Blogs</a></li>
                                        <li><a href="">Live Stream</a></li>
                                    </ul>
                                </div>

                                <div class="right">
                                    <div class="main-menu__right">
                                        <div class="main-menu__right-login-register">
                                            <ul class="list-unstyled">
                                                <li>
                                                    <a href="#" class="thm-btn text-white py-0 px-2 text-capitalize"
                                                        data-bs-toggle="modal" data-bs-target="#register">Register</a>
                                                </li>
                                                <li><a href="https://dashboard.one4patient.com/account/login" target="_blank"
                                                        class="thm-btn text-white py-0 px-2 text-capitalize">Access My
                                                        Records</a></li>
                                            </ul>
                                        </div>
                                        <!-- <div class="main-menu__right-cart-search">
                                                <div class="main-menu__right-cart-box">
                                                    <a href="#"><span class="icon-shopping-cart"></span></a>
                                                </div>
                                                <div class="main-menu__right-search-box">
                                                    <a href="#" class="thm-btn search-toggler">Search</a>
                                                </div>
                                            </div> -->
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <!-- Reg Modal -->
        <div class="modal fade" id="register" tabindex="-1" aria-labelledby="registerLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="register">Hey There!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Welcome to our online patient registration portal, "One4Patient"! We value your privacy and
                            are
                            committed to ensuring that your information is secure. As part of our compliance with HIPAA
                            regulations, we have implemented a secure and convenient way for you to access and manage
                            your
                            medical records.</p>

                        <p>
                            To complete your registration process, we will redirect you to our HIPAA-compliant
                            portal, "One4Patient." Once registered, you can access your medical records,
                            test results, and treatment plans. In addition, you can conveniently communicate
                            with your healthcare professionals through this secure platform.
                        </p>
                        <p>
                            To ensure the confidentiality of your information, we will share your login
                            credentials via email and text message to the mobile number provided during
                            registration. We understand the importance of safeguarding your data and have taken
                            necessary measures to protect it.
                        </p>
                        <p>
                            If you have any concerns regarding the security of email communication, please let
                            us know, and we will make alternative arrangements to suit your preferences. Your
                            peace of mind is our priority.
                        </p>
                        <p class="fw-bold">
                            Thank you for choosing our online patient registration portal. We look forward
                            to providing you with exceptional care and a seamless experience.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="thm-btn bg-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="https://dashboard.one4patient.com/account/register-patient" class="thm-btn"
                            target="_blank">
                            Registration
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of Reg Modal-->

        <div class="stricky-header stricked-menu main-menu">
                <div class="sticky-header__content">

                </div><!-- /.sticky-header__content -->
            </div><!-- /.sticky-header -->
      `;
  }
}
customElements.define("header-component", HeaderComponent);
