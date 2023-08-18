<template>
    <div class="cont">
        <h1 class="text-center title"> Visit Algeria </h1>
        <div class="tech-used">tech used : </div>
        <main class="main-content">
            <div>
                <h1>Motivation:</h1>
                <p></p>
            </div>
            <div>
                <h1>Challenges</h1>
                <p></p>
            </div>
            <div>
                <h1>possible improvments:</h1>
                <p></p>
            </div>

        </main>
    </div>
</template>
<script setup>
const icons = []
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua&family=Inter:wght@700&display=swap');


.cont {
    max-width: 800px;
    margin: 0 auto;
    background: #F5F4F4;
}

.title {
    color: #000;
    font-family: 'Inter';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.tech-used {
    color: #000;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 1rem;
    border-bottom: solid 1px black;
}

.main-content h1 {
    color: #000;
    font-family: 'Inknut Antiqua';
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 2rem;
    padding-bottom: 1rem;
}
</style>