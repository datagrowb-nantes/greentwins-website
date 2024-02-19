$(function () {
    var bar = '';
    var bar = '';
    bar += '<footer id="footer">';
    bar += '<div class="footer-top">';
    bar += '<div class="container">';
    bar += '<div class="row">';

    bar += '<div class="col-lg-2 col-md-6">';
    bar += '<div class="footer-info">';
    bar += '<a href="index.html"><img src="assets/img/logo-white.png" alt="Logo de GreenTwins" class="img-fluid"></a>';

    bar += '<div class="social-links mt-3">';
    bar += '<a href="#" class="tv"><i class="bi bi-tv"></i></a>';
    bar += '<a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>';
    bar += '<a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>';
    bar += '<a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>';
    bar += '</div>';
    bar += '</div>';
    bar += '</div>';

    bar += '<div class="col-lg-2 col-md-6 footer-links">';
    bar += '<h4>Produits</h4>';
    bar += '<ul>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Dashboard & suivi de consommation</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Audit énergétique</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Bilan carbone</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Cartographie d\'énergie</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Subvention</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Financement des travaux</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Digitalisation</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Data & IA</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">ISO 51001</a></li>';
    bar += '</ul>';
    bar += '</div>';

    bar += '<div class="col-lg-2 col-md-6 footer-links">';
    bar += '<h4>Solutions</h4>';
    bar += '<ul>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Énergie Management</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Smart Grid Management</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Collecte et valorisation Data</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Digitalisation</a></li>';
    bar += '</ul>';
    bar += '</div>';

    bar += '<div class="col-lg-2 col-md-6 footer-links">';
    bar += '<h4>Médias</h4>';
    bar += '<ul>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Blog</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Webinaire</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Vidéo</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Article</a></li>';
    bar += '</ul>';
    bar += '</div>';

    bar += '<div class="col-lg-2 col-md-6 footer-links">';
    bar += '<h4>Espace client</h4>';
    bar += '<ul>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Industriel</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Bureau d\'études</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Collectivité</a></li>';
    bar += '</ul>';
    bar += '</div>';

    bar += '<div class="col-lg-2 col-md-6 footer-links">';
    bar += '<h4>À propos</h4>';
    bar += '<ul>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">CGU</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Mentions légales</a></li>';
    bar += '<li><i class="bx bx-chevron-right"></i> <a href="#">Conditions d\'utilisation</a></li>';
    bar += '</ul>';
    bar += '</div>';

    bar += '</div>';
    bar += '</div>';
    bar += '</div>';

    bar += '<div class="container">';
    bar += '<div class="copyright">';
    bar += '&copy; Copyright <strong><span>GreenTwins</span></strong>. Tous droits réservés';
    bar += '</div>';
    bar += '<div class="credits">';
    bar += '<!-- All the links in the footer should remain intact. -->';
    bar += '<!-- You can delete the links only if you purchased the pro version. -->';
    bar += '<!-- Licensing information: https://bootstrapmade.com/license/ -->';
    bar += '<!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/scaffold-bootstrap-metro-style-template/ -->';
    bar += 'Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>';
    bar += '</div>';
    bar += '</div>';
    bar += '</footer>';

    $("#footer_info").html(bar);
});
