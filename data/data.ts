type techUsed = "TypeScript" | "nuxt" | "contentful" | "deskree" | "daisyui" | "materiald" | "Vuetify" | "VueUse" | "swiper"

interface sectionItem {
    title:string
    text: string
}

interface IProject {
name:string
description:string
slug : string
imageName : string
githubLink : string
demoLink : string
techUsed: techUsed[]
motivation : string
challenges : sectionItem[]
improvements : sectionItem[]
}


const eCommerceSite:IProject = 
    {
    name : 'My ecommerce store',
    description: "An e-store that sells some interesting goods! ",
    imageName: "ecom-store.png",
    slug: "ecom-store",
    githubLink: "https://github.com/3aluw/Store",
    demoLink: "https://test-store-smoky.vercel.app/",
    techUsed:["TypeScript","nuxt","contentful","deskree","daisyui"],
    motivation : "It all begins around August-September 2022, when the Vue Forge event beckoned. Excitement filled the air as I geared up to participate. However, life had its own plans, and I couldn't follow the event live. So, I decided to tackle the challenge solo, learning from the recorded sessions when needed. My motivation was clear asI wanted to create a functional e-commerce store, far from a mere copy-paste endeavor, as I tried to implement more features as reviews validation, admin panel..",
    challenges : [
        {title:"Deciphering the Codebase",text:"The provided boilerplate was the creation of a high-level developer. Understanding the intricate web of components, composables, and state management took time and patience. But every 'aha' moment was worth the struggle."},
        {title:"Conquering Deskree",text:"My introduction to Deskree, an impressive SaaS solution. Navigating it meant diving into authentication, databases, API testing via Postman, and more. It felt like riding a bicycle for the first time, but it was fun overall as I can see myself discovering new lands in web development."},
        {title:"Admin Panel API issue",text:"Crafting an admin panel brought its own set of hurdles. My project suffered a problem with its permissions, so I reached out to the Deskree team."},
    ],
improvements : [ 
    
        {
          title: "Diversify Products",
          text: "Aiming to broaden my expertise with the CMS I employed (contentful), I may introduce a different category of goods. It will allow testing my familiarity with the platform."
        },
        {
          title: "Enhanced Admin Panel",
          text: "Empowering admins to manage reviews and address user behavior is a priority for every social site on the web."
        },
        {
          title: "Site Launch",
          text: "It may be my gateway to e-commerce. It will be fun to see how I can climb the search engine ladder and test some marketing ideas."
        }
      ]
}


const leaderboardSite:IProject = 
    {
    name : 'interactive leaderboard',
    description: "it organises any kind of game",
    imageName: "ecom-store.png",
    slug: "leaderboard-planner",
    githubLink: "https://github.com/3aluw/interactive-leaderboard",
    demoLink: "https://interactive-leaderboard.vercel.app/",
    techUsed:["TypeScript", "Vuetify", "nuxt", "materiald"],
    motivation: "While I was in the process of arranging a competition for my students, the task of manually tracking the progress of each individual team on paper caused an idea to spark within me: why not create an interactive digital leaderboard instead?",
  challenges: [
    {
      title: "Sounds",
      text: "The inclusion of playful sounds to enrich the interactive experience became an exciting yet time-consuming task. It was about searching for the perfect sound effects, organizing them in folders, and ensuring their timely playback after importing them in the project."
    }
  ],
  improvements: [
    {
      title: "Round-based games",
      text: "This enhancement could introduce a new layer of engagement, making each phase of the competition even more exhilarating."
    },
    {
      title: "Flexible game Modifications",
      text: "Empowering educators to tailor the leaderboard according to specific scenarios is a pivotal advancement. i.e., adding the ability to add or deduct bonus points under specific conditions."
    }
  ]
}




export const projects:IProject[] = [eCommerceSite]