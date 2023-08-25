<template>
    <div class="loader-cont">
        <p>"Patience is not simply the ability to wait, it's how we behave while we're waiting." <br> Joyce Meyer</p>
        <div id="loader"></div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');

.loader-cont {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    background: var(--bg-ltr);
}

p {
    text-align: center;
    font-family: 'Libre Baskerville', serif;
    font-size: 2rem;
    color: white;
}

#loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: load 1s ease-in-out infinite alternate;
}

@keyframes load {
    0% {
        transform: translateX(-100px);
        offset: 10px 0px;
        background: black;
    }

    100% {
        transform: translateX(100px);
        background: white;
    }
}
</style>