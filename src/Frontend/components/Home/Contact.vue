<template>
<div class="site-section mt-3 bg-image2 overlay" id="contact-section" style="background-image: url('../image/hero_1.jpg');">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12 text-center">
                <h2 class="section-title  pt-4 text-white">Contactanos</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-7 mb-5">

                <form action="#" class="p-5 bg-white">

                    <h2 class="h4 text-black mb-5">Unete a nuestro equipo</h2>

                    <div class="row form-group">
                        <div class="col-md-6 mb-3 mb-md-0">
                            <label class="text-black" for="fname">Nombre</label>
                            <input type="text" id="fname" class="form-control rounded-0">
                        </div>
                        <div class="col-md-6">
                            <label class="text-black" for="lname">Apellido</label>
                            <input type="text" id="lname" class="form-control rounded-0">
                        </div>
                    </div>

                    <div class="row form-group">

                        <div class="col-md-12">
                            <label class="text-black" for="email">Email</label>
                            <input type="email" id="email" class="form-control rounded-0">
                        </div>
                    </div>

                    <div class="row form-group">

                        <div class="col-md-12">
                            <label class="text-black" for="subject">Asunto</label>
                            <input type="subject" id="subject" class="form-control rounded-0">
                        </div>
                    </div>

                    <div class="row form-group">
                        <div class="col-md-12">
                            <label class="text-black" for="message">Mensaje</label>
                            <textarea name="message" id="message" cols="30" rows="7" class="form-control rounded-0" placeholder="Cuentanos tus ideas..."></textarea>
                        </div>
                    </div>

                    <div class="row form-group">
                        <div class="col-md-12">
                            <input type="submit" value="Enviar Mensaje" class="btn btn-primary mr-2 mb-2">
                        </div>
                    </div>

                </form>
            </div>

        </div>

    </div>
</div>
</template>
