function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const testimonialData = [
  {
    id: 1,
    name: "Husnain Bukhari",
    review: "Great experience with your service."
  },
  {
    id: 2,
    name: "Raheel Ahmed",
    review: "Your work is truly exceptional."
  },
  {
    id: 3,
    name: "Subhan Khan",
    review: "I highly recommend your services."
  },
  {
    id: 4,
    name: "Ayesha Hassan",
    review: "Outstanding service, highly satisfied."
  },
  {
    id: 5,
    name: "Saima Malik",
    review: "Impressive work, exceeded my expectations."
  },
  {
    id: 6,
    name: "Ali Raza",
    review: "Exceptional quality and professionalism."
  },
  {
    id: 7,
    name: "Fariha Sheikh",
    review: "Top-notch service, will definitely return."
  },
  {
    id: 8,
    name: "Asad Iqbal",
    review: "Very pleased with the results, great job!"
  },
  {
    id: 9,
    name: "Nida Shah",
    review: "Highly recommended, excellent work."
  },
  {
    id: 10,
    name: "Farhan Siddiqui",
    review: "Your team is truly remarkable, thank you."
  },
  {
    id: 11,
    name: "Rabia Khan",
    review: "Great service and a pleasure to work with."
  },
  {
    id: 12,
    name: "Usman Ali",
    review: "Impressed by the quality of your work."
  },
  {
    id: 13,
    name: "Hina Javed",
    review: "Exceptional customer service and results."
  },
  {
    id: 14,
    name: "Amir Akhtar",
    review: "Outstanding experience, highly recommended."
  },
];

shuffleArray(testimonialData);

testimonialData.forEach((item, index) => {
  item.id = index + 1;
});

export default testimonialData;
