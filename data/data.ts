type techUsed = "TypeScript" | "nuxt" | "contentful"| "Figma" | "deskree" | "daisyui" | "materiald" | "Vuetify" | "VueUse" | "swiper"

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

const colorPaletteSite: IProject= {
name: "color generator",
description: "it helps devs to generate color palettes for their sites",
slug: "palette-generator",
imageName: "color-generator.png",
githubLink: "https://github.com/3aluw/color-palette-generator",
demoLink: "https://color-palette-creator-hero.vercel.app/",
techUsed: ["Figma", "nuxt"],
motivation: "Picture this: I'm working on my first web project, 'Visit Algeria,' and bam, I hit a wall while picking a color palette. It's like choosing the right colors felt as tough as algebra! But guess what? I stumbled upon a cool API that hands out color palettes ready for websites. That got me thinking—why not help out other devs facing the same struggle? So, my motivation was to make color palette selection a piece of cake for everyone.",
challenges: [
  {
    title: "The need for a template",
    text: "I needed a place to apply these colors, so I went scouting for a free and decent HTML/CSS template. After some digging, I got one that fit the bill."
  },
  {
    title: "Integrating the template with Nuxt 3",
    text: "Integrating the chosen template with Nuxt, my trusty web framework, was trickier than I thought as the template had its own fancy third-party CSS and JS, mixed up with those CSS variables (oh, the learning opportunity!). So, I had to roll up my sleeves and deal with that."
  }
],
improvements: [
  {
    title: "Slick New Templates",
    text: "Giving the user not just one, but a bunch of modern, snazzy templates to try their generated color palette in. That would give the user more confidence and clarity."
  },
  {
    title: "Save the user’s favorite palettes",
    text: "Why not let the user save their favorite color palettes? They can always come back to them when inspiration runs dry!"
  }
]
}
const seatingPlannerSite: IProject= {
  name: "seating plan generator",
  description: "It can help teachers to manage their seating plans",
  slug: "seating-planner",
  imageName: "seating-planer.png",
  githubLink: "https://github.com/3aluw/seating-plan",
  demoLink: "https://seating-plan.vercel.app/",
  techUsed: ["Figma", "nuxt", "VueUse"],
  motivation: "Imagine the intricacies of molding a conducive learning environment via positioning students strategically to maximize focus and comprehension. This task, a cornerstone for educators, holds immense significance. As a teacher, I have experienced the power of a well-thought-out seating plan. The motivation? To transform this vital task from a laborious pen-and-paper chore into a seamless digital experience.",
  challenges: [
    {
      title: "The Puzzle of Placement",
      text: "Designing the initial seating arrangement proved demanding. Determining the optimal positions for each student within the virtual classroom was akin to solving a complex mathematical puzzle, especially since I wanted to offer three different types of plans."
    },
    {
      title: "Drag-and-Swap Dilemma",
      text: "The implementation of a drag-and-swap functionality emerged as a formidable challenge. After rigorous exploration, I adopted the VueUse UseDraggable composable. However, the road was bumpy, as issues cropped up, revealing the limitations of the chosen approach. Just to mention that the issue isn't solved yet."
    },
    {
      title: "Automated Scroll",
      text: "I wanted the page to scroll automatically as the user drags a student on the virtual classroom. I figured it out but again faced an issue with the composable I used."
    },
    {
      title: "Print Precision",
      text: "Enabling users to print seating plans proved to be more intricate than I expected. Adapting the output to various playground sizes influenced by the user data required some fine-tuning."
    }
  ],
  improvements: [
    {
      title: "Alternative Drag-and-Swap Solution",
      text: "Exploring alternate methods for seamless student rearrangement would be pivotal in refining the planner's functionality."
    },
    {
      title: "Upgrade the Playground UI",
      text: "The playground has a simple white background UI. It needs to be replaced by a modern one, but I haven't figured it out yet."
    },
    {
      title: "Save for Future Use",
      text: "Allowing users to save and revisit seating plans aligns with the planner's evolution. This functionality would facilitate continuity and flexibility in classroom management for teachers and schools."
    }
  ]
}
const teacherCalculatorSite: IProject= {  name: "a calculator for teachers",
  description: "It can help teachers in daunting marks' calculation",
  slug: "teacher-calculator",
  imageName: "teacher-calculator.png",
  githubLink: "https://github.com/3aluw/teachers-calculator",
  demoLink: "https://teachers-calculator.vercel.app/",
  techUsed: ["Figma", "nuxt", "materiald"],
  motivation: "As an educator —a profession I deeply cherish—I encountered a formidable challenge that resonated with my colleagues. Picture this: assessing the academic progress of a class, calculating intricate point systems for each student, and striving for accuracy while avoiding the pitfalls of human error. The daunting task of manually computing scores for 20 students (each one with like 20 small sum calculations to get the final mark) was not just time-consuming; it was an ordeal. A spark ignited within me to transform this cumbersome process into a seamless experience, allowing educators to make those calculations swiftly.",
  challenges: [
    {
      title: "Challenges",
      text: "Didn't face a lot of challenges building this web app as it was simple and didn't need any third-party libraries/APIs."
    }
  ],
  improvements: [
    {
      title: "A Mobile App",
      text: "Visualize an evolved version of the Teacher's Calculator, available as a mobile application. This transition ensures educators have this indispensable tool at their fingertips, whether they're at school, or at home..."
    }
  ]}
const cisitAlgeriaSite: IProject= {}
export const projects:IProject[] = [eCommerceSite]