// This contains the resources that will be displayed on the home page
// We will use the ResourceList component to display the list of resources
// We will pass the resources array as props to the ResourceList component
// Here we will have the links in the form of an array of objects
// Use a unique key for each object in the array (generate a UUID for each object via https://www.uuidgenerator.net/)

const resource = [
    {
        //git topic
        //item 1
        key: "bdcf3dd0-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://img.youtube.com/vi/watch?v=q1HZj40ZQrM/sddefault.jpg",
        imgAlt: "CSS Box Shadow Examples",
        link: "https://www.youtube.com/watch?v=q1HZj40ZQrM",
        title: "Game over… GitHub Copilot X announced",
        topic: git,
        resourceType: video
    },
    {
        //css topic
        //item 2
        key: "bdcf4122-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fgetcssscan.com%2Fcss-box-shadow-examples%2Fog-image.jpg",
        imgAlt: "CSS Box Shadow Examples",
        link: "https://chrome.google.com/webstore/detail/pesticide-for-chrome/bakpbgckdnepkmkeaiomhmfcnejndkbi",
        title: "Beautiful CSS Box Shadow Examples",
        topic: css,
        resourceType: article
    },
    {
        //react topic
        //item 3
        key: "bdcf5464-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*%2F9ZQY8YQY8YQY8YQY8YQY8YQ.png",
        imgAlt: "React useReducer Hook ultimate guide",
        link: "https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/",
        title: "React useReducer Hook ultimate guide",
        topic: react,
        resourceType: article
    },
    {
        //testing topic
        //item 4
        key: "bdcf58ce-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Frepository-images.githubusercontent.com%2F221981891%2F8c5c6942-c91f-4df1-825f-4cf474056bd7",
        imgAlt: "Playwright - Writing Tests",
        link: "https://playwright.dev/docs/writing-tests",
        title: "Playwright - Writing Tests",
        topic: testing,
        resourceType: article
    },
    {
        //css topic
        //item 5
        key: "bdcf5a18-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://lh3.googleusercontent.com/N5OVCja13NVUvatEknZpjA_15XNHnms05spb-MxDbs1UNNOD3izDVeiDNBQkQzIyIfevAeVnAm8VP2WP-ODa_EJ2x4s=w640-h400-e365-rj-sc0x00ffffff",
        imgAlt: "Pesticide CSS Demo",
        link: "https://chrome.google.com/webstore/detail/pesticide-for-chrome/bakpbgckdnepkmkeaiomhmfcnejndkbi",
        title: "Pesticide for Chrome",
        topic: css,
        resourceType: tool
    },
    {
        //testing topic
        //item 6
        key: "bdcf5b3a-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://img.youtube.com/vi/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&ab_channel=TheNetNinja/sddefault.jpg",
        imgAlt: "React Testing Library Crash Course",
        link: "https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&ab_channel=TheNetNinja",
        title: "React Testing Library Tutorial #1 - Introduction",
        topic: testing,
        resourceType: video
    },
    {
        //git topic
        //item 7
        key: "bdcf5c66-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://img.youtube.com/vi/watch?v=_Qzc0PgWEs8&ab_channel=NDCConferences/sddefault.jpg",
        imgAlt: "Master Git From the Inside",
        link: "https://www.youtube.com/watch?v=_Qzc0PgWEs8&ab_channel=NDCConferences",
        title: "Nitty-Gitty: Master Git from the Inside - Manu Magalhães - NDC London 2022",
        topic: git,
        resourceType: video
    },
    {
        //UI/UX topic
        //item 8
        key: "bdcf5d7e-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*XJkbhwwuIROH3zE4EYxqgQ.jpeg",
        imgAlt: "Fingers typing on old typewriter",
        link: "https://medium.com/@george_wilde/a-guide-to-writing-effective-user-stories-658823dec2e0",
        title: "A Guide To Writing Effective User Stories",
        topic: UI/UX,
        resourceType: article
    },
    {
        //css topic
        //item 9
        key: "bdcf5e96-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://gradients.shecodes.io/assets/tools/logo-96eb43375d3888a78da8563dfa7edb0154e0449f827b6ef8161d77546cd250f9.png",
        imgAlt: "SheCodes Coding Tools",
        link: "https://gradients.shecodes.io/gradients/763",
        title: "CSS gradients",
        topic: css,
        resourceType: article
    },
    {
        //git topic
        //item 10
        key: "bdcf5fa4-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://img.youtube.com/vi/watch?v=eLmpKKaQL54&ab_channel=SoftwareEngineerTutorials/sddefault.jpg",
        imgAlt: "How To Use GitHub on VSCode",
        link: "https://www.youtube.com/watch?v=eLmpKKaQL54&ab_channel=SoftwareEngineerTutorials",
        title: "How To Use GitHub + VSCode: Create a Repository & Merge Changes With a Pull Request",
        topic: git,
        resourceType: video
    },
    {
        //UI/UX topic
        //item 11
        key: "bdcf653a-e413-11ed-b5ea-0242ac120002",
        imgSrc: "https://img.youtube.com/vi/watch?v=C1rQQ_YpgcI&ab_channel=TheFuturAcademy/sddefault.jpg",
        imgAlt: "5 color theory tips every designer should know",
        link: "https://www.youtube.com/watch?v=C1rQQ_YpgcI&ab_channel=TheFuturAcademy",
        title: "How to Not Suck at Color - 5 color theory tips every designer should know",
        topic: UI/UX,
        resourceType: video
    }

]


// to get the thumbnail of the YouTube video - img: src="https://img.youtube.com/vi/[insert-vid-id]/sddefault.jpg"
// where the video id is the last part of the link - https://www.youtube.com/watch?v=q1HZj40ZQrM (after the .com/)