<template>
<div>
    <nav class="site-navbar navbar navbar-expand-lg navbar-light p-3 mb-5">
        <div class="container" style="display:flex; justify-content:space-between">
            <a class="navbar-brand" href="#">Evolution</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto site-block-tab">
                    <router-link class="nav-link active" to="/">Inicio<span class="sr-only">(current)</span></router-link>
                    <router-link class="nav-link" to="/services">Servicios</router-link>
                    <router-link class="nav-link" to="/about">Acerca</router-link>
                    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contacto</a>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>
