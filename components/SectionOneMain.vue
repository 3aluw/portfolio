<template>
    <div class="s-one-main">
        <div class="my-mesaage-cont py-4">
            <div class="personal-infos flex justify-between ">
                <v-avatar>
                    <v-img src="/face.png" alt="John"></v-img>
                </v-avatar>
                <p class="name">Abdellah</p>
            </div>
            <p class="message-body ml-12">
                Hi, <span> I'm Abdellah.</span> An aspiring web developer eager to seize the opportunity to learn, grow,
                and
                collaborate closely with other talented developers and enthusiastic managers
            </p>
        </div>
        <Transition>
            <div class="visitor-mesaage-cont py-4" v-show="showVisitorMessage">
                <div class="personal-infos flex justify-between float-right">
                    <p class="name">Abdellah</p>
                    <v-avatar>
                        <v-img src="/face.png" alt="John"></v-img>
                    </v-avatar>
                </div>
                <p class="message-body  mr-12 float-left">
                    Hi, <span> I'm Abdellah.</span> An aspiring web developer eager to seize the opportunity to learn, grow,
                    and
                    collaborate closely with other talented developers and enthusiastic managers
                </p>
                <div class="clear-both"></div>
            </div>
        </Transition>
        <div class="type-message-cont" v-if="!showVisitorMessage">
            <v-textarea auto-grow rows="1" max-rows="3" theme="dark" bg-color="#41374E" variant="solo"
                label="type your message" base-color="white" hide-details></v-textarea>
            <v-btn icon="mdi-send" color="white" variant="plain" :loading="sendingMessage" @click="sendMessage">
                <template v-slot:loader>
                    <v-progress-circular indeterminate></v-progress-circular>
                </template>
            </v-btn>
        </div>
    </div>
</template>
<script setup>
const sendingMessage = ref(false)
const showVisitorMessage = ref(false)
const sendMessage = () => {
    sendingMessage.value = true;
    showVisitorMessage.value = true;
    setTimeout(() => (sendingMessage.value = false), 2000)

}
</script>
<style scoped>
.s-one-main {
    background: #928A9B;
    min-height: 10rem;

}

.personal-infos {
    max-width: 7rem;
}

.personal-infos .v-avatar {
    transform: translateY(0.5rem);
}

.personal-infos .name {
    color: #DADADA;
    position: relative;
}

.personal-infos .name::after {
    content: "just now";
    color: #A0A0A0;
    font-size: 0.75rem;
    position: absolute;
    bottom: 1px;
    left: 0;
}

.message-body {
    background: #292929;
    border-radius: 1rem;
    border-top-left-radius: 0rem;
    margin-right: 0.5rem;
    padding: 1rem;
    color: white;
    font-family: Inter;
}

.message-body span {
    color: #41B883;
}



.v-text-field {
    font-family: inter;
}

.type-message-cont {
    margin-top: 12.5rem;
    background: #41374E;
    display: flex;
    align-items: center;
    padding-right: 1rem;
}

.visitor-mesaage-cont .message-body {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0rem;
    margin-left: 0.5rem;

}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>