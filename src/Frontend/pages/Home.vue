<template>
<div>
    <Hero />
    <Service />
    <ServiceBig />
    <Button />
    <Contact />
</div>
</template>

<script>
import Button from "../components/Home/Button.vue";
import Hero from "../components/Home/Hero.vue";
import Service from "../components/Home/Service.vue";
import ServiceBig from "../components/Home/ServiceBig.vue";
import Contact from "../components/Home/Contact.vue";
export default {
    components: {
        Button,
        Hero,
        Service,
        ServiceBig,
        Contact,
    },
};
</script>
