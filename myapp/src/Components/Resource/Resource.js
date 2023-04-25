// This contains the resources that will be displayed on the home page
// We will use the ResourceList component to display the list of resources
// We will pass the resources array as props to the ResourceList component
// Here we will have the links in the form of an array of objects

const resource = [
    {
        //github topic
        key: "8c2d009c-e37c-11ed-b5ea-0242ac120002",
        imgSrc: "https://img.youtube.com/vi/[insert-vid-id]/sddefault.jpg",
        imgAlt: "CSS Box Shadow Examples",
        link: "https://www.youtube.com/watch?v=q1HZj40ZQrM",
        title: "Game over… GitHub Copilot X announced",
        tags: github,
        resourceType: video
    },
    {
        //css topic
        key: "8c2cfdae-e37c-11ed-b5ea-0242ac120002",
        imgSrc: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fgetcssscan.com%2Fcss-box-shadow-examples%2Fog-image.jpg",
        imgAlt: "CSS Box Shadow Examples",
        link: "https://chrome.google.com/webstore/detail/pesticide-for-chrome/bakpbgckdnepkmkeaiomhmfcnejndkbi",
        title: "Beautiful CSS Box Shadow Examples",
        tags: css,
        resourceType: article
    },
    {
        //react topic
        key: "8c2d0254-e37c-11ed-b5ea-0242ac120002",
        imgSrc: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*%2F9ZQY8YQY8YQY8YQY8YQY8YQ.png",
        imgAlt: "React useReducer Hook ultimate guide",
        link: "https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/",
        title: "React useReducer Hook ultimate guide",
        tags: react,
        resourceType: article
    },
    {
        //testing topic
        key: "8c2d038a-e37c-11ed-b5ea-0242ac120002",
        imgSrc: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Frepository-images.githubusercontent.com%2F221981891%2F8c5c6942-c91f-4df1-825f-4cf474056bd7",
        imgAlt: "Playwright - Writing Tests",
        link: "https://playwright.dev/docs/writing-tests",
        title: "Playwright - Writing Tests",
        tags: testing,
        resourceType: article
    }

]


// to get the thumbnail of the YouTube video - img: src="https://img.youtube.com/vi/[insert-vid-id]/sddefault.jpg"