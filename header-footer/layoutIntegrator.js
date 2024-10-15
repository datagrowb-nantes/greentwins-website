class CustomHeader extends HTMLElement {
    connectedCallback() {
        const currentPage = window.location.pathname;
        this.innerHTML =
            `<!-- Header -->
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center">
        
                <div class="logo me-auto">
                    <!-- <h1><a href="index.html">Scaffold</a></h1>
                        Uncomment below if you prefer to use an image logo -->
                    <a href="../index.html"><img src="../assets/img/logo.png" alt="Logo de GreenTwins" class="img-fluid"></a>
                </div>
        
                <nav id="navbar" class="navbar order-last order-lg-0">
                    <ul>
                        <li class="dropdown"><a href="#"><span>Produits</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a class="nav-link scrollto" href="#">Dashboard & suivi de consommation</a></li>
                                <li><a class="nav-link scrollto" href="#">Audit énergétique</a></li>
                                <li><a class="nav-link scrollto" href="#">Bilan carbone</a></li>
                                <li><a class="nav-link scrollto" href="#">Cartographie d'énergie</a></li>
                                <li><a class="nav-link scrollto" href="#">Subvention</a></li>
                                <li><a class="nav-link scrollto" href="#">Financement des travaux</a></li>
                                <li><a class="nav-link scrollto" href="#">Digitalisation</a></li>
                                <li><a class="nav-link scrollto" href="#">Data & IA</a></li>
                                <li><a class="nav-link scrollto" href="#">ISO 51001</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="../technologies-pages/technologies-landing.html" class="${currentPage.includes('technologies-') ? 'current-page' : ''}"><span>Technologies</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li class="mobile-section-link"> <a href="../technologies-pages/technologies-landing.html">Présentation</a></li>
                                
                                <li><a href="../technologies-pages/technologies-iot.html" class="nav-link scrollto">Internet of Things (IoT)</a></li>
                                <li><a href="../technologies-pages/technologies-ia.html" class="nav-link scrollto">Module IA</a></li>
                                <li><a href="../technologies-pages/technologies-digital-twins.html" class="nav-link scrollto">Jumeaux numériques</a></li>
                                <li><a href="../technologies-pages/technologies-saas.html" class="nav-link scrollto">Plateforme SaaS</a></li>
                                <li><a href="../technologies-pages/technologies-data.html" class="nav-link scrollto">Data</a></li>
                                <li><a href="../technologies-pages/technologies-metierEE.html" class="nav-link scrollto">MétierEE</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="../domaines-pages/domaines-landing.html" class="${currentPage.includes('domaines-') ? 'current-page' : ''}"><span>Domaines</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li class="mobile-section-link"> <a href="../domaines-pages/domaines-landing.html">Présentation</a></li>
                                
                                <li><a href="../domaines-pages/domaines-smart-building.html">Smart Building</a></li>
                                <li><a href="../domaines-pages/domaines-methanisation.html">Méthanisation</a></li>
                                <li><a href="#">Vidéo</a></li>
                                <li><a href="#">Article</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#"><span>Actualités</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a class="nav-link scrollto" href="#">@Télévision</a></li>
                                <li><a class="nav-link scrollto" href="#">Facebook</a></li>
                                <li><a class="nav-link scrollto" href="#">Twitter</a></li>
                                <li><a class="nav-link scrollto" href="#">LinkedIn</a></li>
                            </ul>
                        </li>
                        <li class="dropdown"><a href="https://green-twins-web-app.vercel.app"><span><strong>Espace client</strong></span>
                        </li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav><!-- .navbar -->        
            </div>
        </header>
        <!-- End Header -->`
    }
}

customElements.define('custom-header', CustomHeader)



class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<!-- Footer -->
        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
        
                        <div class="col-lg-2 col-md-6">
                            <div class="footer-info">
                                <a href="../index.html"><img src="../assets/img/logo-white.png" alt="Logo de GreenTwins" class="img-fluid"></a>
        
                                <div class="social-links mt-3">
                                    <a href="#" class="tv"><i class="bi bi-tv"></i></a>
                                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
        
                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4>Produits</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Dashboard & suivi de consommation</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Audit énergétique</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Bilan carbone</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Cartographie d'énergie</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Subvention</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Financement des travaux</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Digitalisation</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Data & IA</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">ISO 51001</a></li>
                            </ul>
                        </div>
         
                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4><a href="../technologies-pages/technologies-landing.html">Technologies</a></h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="../technologies-pages/technologies-iot.html">Internet of Things (IoT)</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="../technologies-pages/technologies-ia.html">Module IA</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="../technologies-pages/technologies-digital-twins.html">Jumeaux numériques</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="../technologies-pages/technologies-saas.html">Plateforme SaaS</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="../technologies-pages/technologies-data.html">Data</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="../technologies-pages/technologies-metierEE.html">Métier EE</a></li>
                            </ul>
                        </div>
        
                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4><a href="../domaines-pages/domaines-landing.html">Domaines</a></h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="../domaines-pages/domaines-smart-building.html">Smart Building</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="../domaines-pages/domaines-methanisation.html">Méthanisation</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Vidéo</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Article</a></li>
                            </ul>
                        </div>
        
                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4>Espace client</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Industriel</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Bureau d'études</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Collectivité</a></li>
                            </ul>
                        </div>
        
                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4>À propos</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">CGU</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Mentions légales</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a href="#">Conditions d'utilisation</a></li>
                            </ul>
                        </div>
        
                        <!-- <div class="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email"><input type="submit" value="Subscribe">
                            </form> 
        
                        </div> -->
        
                    </div>
                </div>
            </div>
        
            <div class="container">
                <div class="copyright">
                    &copy; Copyright <strong><span>GreenTwins</span></strong>. Tous droits réservés
                </div>
                <div class="credits">
                        <!-- All the links in the footer should remain intact. -->
                        <!-- You can delete the links only if you purchased the pro version. -->
                        <!-- Licensing information: https://bootstrapmade.com/license/ -->
                        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/scaffold-bootstrap-metro-style-template/ -->
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
        <!-- End Footer -->`
    }
}

customElements.define('custom-footer', CustomFooter)