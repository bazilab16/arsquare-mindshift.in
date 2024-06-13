class StylesComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/bootstrap.css" />
        <link rel="stylesheet" href="assets/css/animate.css" />
        <link rel="stylesheet" href="assets/css/custom-animate.css" />
        <link rel="stylesheet" href="assets/css/all.min.css" />
        <link rel="stylesheet" href="assets/css/jarallax.css" />
        <link rel="stylesheet" href="assets/css/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/nouislider.min.css" />
        <link rel="stylesheet" href="assets/css/nouislider.pips.css" />
        <link rel="stylesheet" href="assets/css/odometer.min.css" />
        <link rel="stylesheet" href="assets/css/swiper.min.css" />
        <link rel="stylesheet" href="assets/css/icomoon.css">
        <link rel="stylesheet" href="assets/css/tiny-slider.min.css" />
        <link rel="stylesheet" href="assets/css/stylesheet.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="assets/css/twentytwenty.css" />
        <link rel="stylesheet" href="assets/css/skeletonLoader.css"/>
    
        <!-- template styles -->
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/custom.css" />
        <link rel="stylesheet" href="assets/css/mob-responsive.css" />
        <link rel="stylesheet" href="assets/css/skeleton-data-fields.css" />
        `;
    }
  }
  customElements.define("styles-component", StylesComponent);
  