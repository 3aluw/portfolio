<template>
    <div class="my-8">
        <div class="s-three-main mx-8 flex justify-between items-center gap-8 px-12">
            <div class="pic-cont">
                <img src="~/assets/about-me-face.png" alt="my face">
            </div>
            <div class="text-cont w-10/12 flex flex-col justify-around gap-2 text-white">
                <h1 class="text-6xl">ABOUT ME</h1>
                <h2 class="text-2xl accent-text ">Abdellah Hoauche | Vue developer</h2>
                <p class="leading-relaxed pt-4"> I'm a web developer with a strong preference for working on<strong> Nuxt/Vue projects</strong>. I'm
                    always looking to
                    contribute to <strong>open-source projects</strong>, learn new things, and collaborate with like-minded developers. <br>

                    I've had hands-on experience with <strong>BAAS platforms</strong> like Firebase and Deskree, and I'm currently open
                    to job opportunities or internships where I can grow and make an impact.<br>

                    I'm also very curious about the <strong>Web3</strong> space and excited about its potential. When I'm not coding,
                    you'll probably find me watching or playing football, or trying (and usually failing) to get my
                    super lazy cat to do anything productive 😺.<br>

                    <strong class="text-lg">Let’s build something cool together!</strong> </p>
                <div class="links pt-4 flex gap-16">
                    <NuxtLink to="https://www.linkedin.com/in/abdellah-houache-479256185/" class="link" target="_blank"
                        rel="noopener">
                        <div>
                            <img src="~/assets/logos/linkedin.svg" alt="">
                        </div>
                    </NuxtLink>
                    <NuxtLink class="link" to="mailto:2000abdallah2014@gmail.com" target="_blank" rel="noopener">
                        <div><img src="~/assets/logos/mail.svg" alt=""></div>
                    </NuxtLink>
                    <NuxtLink class="link" to="https://twitter.com/3aluwa" target="_blank" rel="noopener">
                        <div><img src="~/assets/logos/twitter.svg" alt=""></div>
                    </NuxtLink>
                    <NuxtLink class="link" to="https://www.reddit.com/user/3aluw" target="_blank" rel="noopener">
                        <div><img src="~/assets/logos/reddit.svg" alt=""></div>
                    </NuxtLink>

                </div>
            </div>

        </div>
    </div>
</template>


<script setup lang="ts">



</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Fira+Mono&display=swap');

.s-three-main {

    margin: 0 auto;


}



.sentence-cont p {
    align-self: flex-end;
    color: white;
    font-family: 'Fira Mono';
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    margin-inline-start: 0.8rem;
}

.sentence-cont img {
    min-width: 1rem;
}

.link img{
      width: 40px;
    height: 40px
}
</style>
