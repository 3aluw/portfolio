<template>
    <div class="s-one-main">
        <div class="messages-cont">

            <div class="my-message-cont py-4">
                <div class="personal-infos flex justify-between ">
                    <v-avatar>
                        <v-img src="/face.png" alt="my avatar"></v-img>
                    </v-avatar>
                    <p class="name">Abdellah</p>
                </div>
                <p class="message-body ml-12">
                    Hi, <span> I'm Abdellah.</span>A passionate web developer driven to learn, create, and deliver impactful digital experiences through collaboration and innovation.
                </p>
            </div>
            <Transition>
                <div class="visitor-message-cont py-4" v-show="showVisitorMessage">
                    <div class="personal-infos flex justify-between flex-row-reverse float-right">
                        <v-avatar>
                            <v-img src="/alien.svg" alt="John"></v-img>
                        </v-avatar>
                        <p class="name">You</p>
                    </div>
                    <p class="message-body mr-12 clear-both float-right">
                        {{ visitorMessage }}
                    </p>
                    <div class="clear-both"></div>
                </div>
            </Transition>
            <Transition>
                <div class="my-message-cont py-4" v-show="showMyReply">
                    <div class="personal-infos flex justify-between ">
                        <v-avatar>
                            <v-img src="/face.png" alt="John"></v-img>
                        </v-avatar>
                        <p class="name">Abdellah</p>
                    </div>
                    <p class="message-body ml-12">
                        Thank you , I will message you back soon.
                    </p>
                </div>
            </Transition>

        </div>
        <div class="type-message-cont" v-if="!showVisitorMessage">
            <div class="flex items-center pr-2">
                <v-textarea v-model="visitorMessage" class="elevation-0 h-full" auto-grow rows="1" max-rows="3" theme="dark"
                    bg-color="#41374E" variant="solo" label="type your message" placeholder="please insert your email too"
                    base-color="white" hide-details :rules="textareaRules" validate-on="input lazy"></v-textarea>
                <v-btn icon="mdi-send" color="white" variant="plain" :loading="sendingMessage" @click="sendMessage">
                    <template v-slot:loader>
                        <v-progress-circular indeterminate></v-progress-circular>
                    </template>
                </v-btn>
            </div>
            <small class="pl-4 text-red ">{{ messageValidation }}</small>
        </div>


        <!--Large screens-->




    </div>
</template>
<script setup lang="ts">
const sendingMessage = ref(false)
const showVisitorMessage = ref(false)
const showMyReply = ref(false)
const visitorMessage = ref('')
const sendMessage = () => {
    if (textareaRules[0](visitorMessage.value) !== true) return

    fetch("https://getintotouch.sh20raj.com/api.php?id=1075809286", {
        method: "POST",
        body: `name=${visitorMessage.value}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data as needed
            if (data.status === 'success') {

            } else if (data.status === 'failed') {

            }
        })
        .catch(error => {
        });

    sendingMessage.value = true;
    showVisitorMessage.value = true;
    setTimeout(() => { sendingMessage.value = false; showMyReply.value = true }, 4000)
}
const messageValidation = ref('')



const textareaRules = [
    (value: string) => {
        const reg = /\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i
        if (value.length < 20) { messageValidation.value = 'too short message'; return false }
        else if (value.length > 1000) { messageValidation.value = 'your message is too long'; return false }
        else if (!reg.test(value)) { messageValidation.value = 'please insert you email'; return false }
        else { messageValidation.value = ''; return true }
    }
]
</script>
<style scoped>
.s-one-main {
    background: hsla(268, 31%, 30%, 0.13);
    box-shadow: 0px 4px 37px 0px rgba(44, 19, 62, 0.47);
    min-height: 16rem;
    margin-block: 2rem;

}

.messages-cont {
    min-height: 16rem;
}

.my-message-cont:nth-child(1) {
    animation: 1s ease-out forwards slideInFromLeft;
    animation-delay: 2s;
    opacity: 0;
}

@keyframes slideInFromLeft {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    80% {
        transform: scale(1.1);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
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
    width: 200%;
}

.visitor-message-cont .personal-infos .name::after {
    content: "just now";
    color: #A0A0A0;
    font-size: 0.75rem;
    position: absolute;
    bottom: 1px;
    left: -80%;
    width: 200%;
}

.message-body {
    background: #292929;
    border-radius: 1rem;
    border-top-left-radius: 0rem;
    margin-right: 0.5rem;
    padding: 1rem;
    color: white;

}

.message-body span {
    color: #41B883;
}

.type-message-cont {
    background: #41374E;
}

.type-message-cont small {
    margin-top: -0.5rem;
    display: block;
    position: relative;

}

.visitor-message-cont .message-body {
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

.v-field--variant-solo,
.v-field--variant-solo-filled {
    box-shadow: none;
}
</style>