class TryoutSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<!-- ======= Tryout Section ======= -->
        <section id="tryout">
            <div class="row text" data-aos="fade" data-aos-duration="1250">
                <h2>Demandez un essai de GreenTwins</h2>
                <p class="normal-regular">N'attendez plus pour commencer à économiser.</p>
                <p class="mini-bold">
                    Avec le jumeau numérique de Greentwins, transformez 
                    les données en actions concrètes et prenez le contrôle 
                    de votre efficacité opérationnelle pour un avenir 
                    industriel plus durable.
                </p>
                <a href="#" class="btn-primary" role="button">Demander une démo</a>
            </div>
        </section>
        <!-- End Tryout Section -->`
    }
}

customElements.define('tryout-section', TryoutSection)