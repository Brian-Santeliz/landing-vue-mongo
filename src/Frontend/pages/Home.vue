<template>
<div>

    <div class="site-blocks-cover" style="overflow: hidden;">
        <div class="container">
            <div class="row align-items-center justify-content-center">

                <div class="col-md-12" style="position: relative;" data-aos="fade-up" data-aos-delay="200">

                    <img src="../public/image/undraw_investing_7u74.svg" alt="Image" class="img-fluid img-absolute">

                    <div class="row mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="col-lg-6 mr-auto">
                            <h1>Lleva Tu Negocio Al Siguiente Nivel</h1>
                            <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                            <div>
                                <a href="#" class="btn btn-primary mr-2 mb-2">Get Started</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>

    <div class="site-section" id="features-section">
        <div class="container">
            <div class="row mb-5 justify-content-center text-center" data-aos="fade-up">
                <div class="col-7 text-center  mb-5">
                    <h2 class="section-title">Imagine Features</h2>
                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
                </div>
            </div>
            <div class="row align-items-stretch">
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">

                    <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap"><span class="text-primary icon-autorenew"></span></span>
                        </div>
                        <div>
                            <h3>Marketing Consulting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">

                    <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap"><span class="text-primary icon-store_mall_directory"></span></span>
                        </div>
                        <div>
                            <h3>Market Analysis</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4  mb-lg-4">
                    <div class="unit-4 d-block">
                        <div class="unit-4-icon mb-3">
                            <span class="icon-wrap"><span class="text-primary icon-shopping_basket"></span></span>
                        </div>
                        <div>
                            <h3>Easy Purchase</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="feature-big">
        <div class="container">
            <div class="row  site-section">
                <div class="col-lg-7" data-aos="fade-right">
                    <img src="../public/image/undraw_gift_card_6ekc.svg" alt="Image" class="img-fluid">
                </div>
                <div class="col-lg-5 pl-lg-5 ml-auto mt-md-5">
                    <h2 class="text-black">Communicate and gather feedback</h2>
                    <p class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>

                </div>
            </div>

        </div>
    </div>
    <Button />

    <div class="site-section mt-3 bg-image2 overlay" id="contact-section" style="background-image: url('../image/hero_1.jpg');">
        <div class="container">
            <div class="row mb-5">
                <div class="col-12 text-center">
                    <h2 class="section-title  pt-4 text-white">Contact Us</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-7 mb-5">

                    <form action="#" class="p-5 bg-white">

                        <h2 class="h4 text-black mb-5">Contact Form</h2>

                        <div class="row form-group">
                            <div class="col-md-6 mb-3 mb-md-0">
                                <label class="text-black" for="fname">First Name</label>
                                <input type="text" id="fname" class="form-control rounded-0">
                            </div>
                            <div class="col-md-6">
                                <label class="text-black" for="lname">Last Name</label>
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
                                <label class="text-black" for="subject">Subject</label>
                                <input type="subject" id="subject" class="form-control rounded-0">
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-md-12">
                                <label class="text-black" for="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="7" class="form-control rounded-0" placeholder="Leave your message here..."></textarea>
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-md-12">
                                <input type="submit" value="Send Message" class="btn btn-primary mr-2 mb-2">
                            </div>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    </div>
</div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
    components: {
        Button
    }
}
</script>
