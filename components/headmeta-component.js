class HeadMetaComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>MindShift | Education2.0</title>
            <!-- favicons Icons -->
            <link rel="apple-touch-icon" sizes="180x180" href="../assets/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon-16x16.png" />
            <meta name="description" content="Education2.0 SchoolSense+ MindShift Services" />
  
        `;
    }
  }
  customElements.define("headmeta-component", HeadMetaComponent);
  