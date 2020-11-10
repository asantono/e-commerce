const Course = require("./schemas/course");

const sampleData = [
  {
    title: "The Alchemy of Automation",
    img: "/frontend/src/imgs/alchemy.jpg",
    author: "Doug Funny",
    price: 3900,
    saleOptIn: true,
    position: 0,
    length: "28 hours",
    accessType: "lifetime access",
    certification: "yes",
    tagline:
      "In this two week course, you will focus on the bigger picture while you implement the most powerful automated sales system ever created.",
    adText:
      "Did you know, 25% of business owners work over 60 hours per week? Learn to work smarter, by leveraging technology.",
    features: [
      "Automation training from real world computer scientists",
      "Learn google voice commands",
      "Email reminders that work for you and your clients",
      "Find digital assistance to do the repetitive work",
      "Learn how to hire virtual assistants to handle the things that come in last minute",
      "Know what you need to get done every day to write your own success story",
      "Take the stress out of developing your business",
    ],
  },
  {
    title: "Small Business Accelerator",
    img: "../imgs/accelerator.jpg",
    author: "Corey Matthews",
    price: 2300,
    sale: 90,
    position: 1,
    length: "28 hours",
    accessType: "lifetime access",
    certification: "yes",
    tagline:
      "In this two week course, you will focus on the bigger picture while you implement the most powerful automated sales system ever created.",
    adText:
      "Did you know, 25% of business owners work over 60 hours per week? Learn to work smarter, by leveraging technology.",
    features: [
      "Automation training from real world computer scientists",
      "Learn google voice commands",
      "Email reminders that work for you and your clients",
      "Find digital assistance to do the repetitive work",
      "Learn how to hire virtual assistants to handle the things that come in last minute",
      "Know what you need to get done every day to write your own success story",
      "Take the stress out of developing your business",
    ],
  },
  {
    title: "The Digital Nomads Guide To The Galaxy",
    img: "../imgs/airport.jpg",
    author: "Aubrey Plaza",
    price: 2900,
    saleOptIn: true,
    position: 2,
    length: "28 hours",
    accessType: "lifetime access",
    certification: "yes",
    tagline:
      "In this two week course, you will focus on the bigger picture while you implement the most powerful automated sales system ever created.",
    adText:
      "Did you know, 25% of business owners work over 60 hours per week? Learn to work smarter, by leveraging technology.",
    features: [
      "Automation training from real world computer scientists",
      "Learn google voice commands",
      "Email reminders that work for you and your clients",
      "Find digital assistance to do the repetitive work",
      "Learn how to hire virtual assistants to handle the things that come in last minute",
      "Know what you need to get done every day to write your own success story",
      "Take the stress out of developing your business",
    ],
  },
  {
    title: "The Employees Guide To Firing Your Boss",
    img: "../imgs/laptop.jpg",
    author: "Adam Demamp",
    saleOptIn: true,
    price: 1200,
    position: 3,
    length: "28 hours",
    accessType: "lifetime access",
    certification: "yes",
    tagline:
      "In this two week course, you will focus on the bigger picture while you implement the most powerful automated sales system ever created.",
    adText:
      "Did you know, 25% of business owners work over 60 hours per week? Learn to work smarter, by leveraging technology.",
    features: [
      "Automation training from real world computer scientists",
      "Learn google voice commands",
      "Email reminders that work for you and your clients",
      "Find digital assistance to do the repetitive work",
      "Learn how to hire virtual assistants to handle the things that come in last minute",
      "Know what you need to get done every day to write your own success story",
      "Take the stress out of developing your business",
    ],
  },
];

uploadSample = async (req, res, next) => {
  for (let i = 0; i < sampleData.length; i++) {
    let courseCatcher = await Course.create({
      title: sampleData[i].title,
      img: sampleData[i].img,
      author: sampleData[i].author,
      price: sampleData[i].price,
      saleOptIn: sampleData[i].saleOptIn,
      position: sampleData[i].position,
      length: sampleData[i].length,
      accessType: sampleData[i].accessType,
      certification: sampleData[i].certification,
      tagline: sampleData[i].tagline,
      adText: sampleData[i].adText,
      features: sampleData[i].features,
    });
    console.log(courseCatcher);
  }
};

uploadSample();
