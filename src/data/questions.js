const questions = [
  {
    id: 1,
    type: "fill",
    question: "The capital of France is ______.",
    correctAnswer: "Paris",
  },
  {
    id: 2,
    type: "fill",
    question: "The capital of Germany is ______.",
    correctAnswer: "Berlin",
  },
  {
    id: 3,
    type: "fill",
    question: " ________ planet is known as the Red Planet",
    correctAnswer: "Mars",
  },

  //single choices
  {
    id: 4,
    type: "single",
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt"],
    correctAnswer: "Berlin",
  },
  {
    id: 5,
    type: "single",
    question: "What is the chemical symbol for water?",
    options: ["NH3", "H2O", "CO2"],
    correctAnswer: "H2O",
  },
  {
    id: 6,
    type: "single",
    question: "Which fruit is known as the King of Fruits?",
    options: ["Apple", "Banana", "Mango"],
    correctAnswer: "Mango",
  },
  //multiple choices
  {
    id: 7,
    type: "multiple",
    question: "Select all prime numbers:",
    options: ["2", "3", "4", "6"],
    correctAnswer: ["2", "3"],
  }, {
    id: 8,
    type: "multiple",
    question: "Which of the following are programming languages:",
    options: ["Python", "HTML", "Java", "CSS"],
    correctAnswer: ["Python", "Java"],
  }, {
    id: 9,
    type: "multiple",
    question: "Which of these file formats are commonly used for images:",
    options: ["PNG", "JPG", "JPEG", "DOCX"],
    correctAnswer: ["PNG", "JPG", "JPEG"],
  },
  //image choice
  {
    id: 10,
    type: "image",
    question: "Click on the triangle",
    options: [
      { image: "/images/square.avif", value: "square" ,alt: "Square"},
      { image: "/images/triangle.png", value: "triangle" ,alt: "Triangle"},
      { image: "/images/circle1.jpeg", value: "circle", alt: "Circle"},
    ],
    correctAnswer: "triangle",
  },
  {
    id: 11,
    type: "image",
    question: "which of the following is the Indian Flag?",
    options: [
      { image: "/images/india.avif", value: "india" ,alt: "India" },
      { image: "/images/uk.jpeg", value: "uk",  alt: "UK" },
      { image: "/images/america.avif", value: "america", alt: "America" },
    ],
    correctAnswer: "india",
  },
  {
    id: 11,
    type: "image",
    question: "which of the following are Fruits?",
    options: [
      { image: "/images/flower.avif", value: "flower" ,alt: "Flower" },
      { image: "/images/veg.avif", value: "veg" ,alt: "Vegetable" },
      { image: "/images/fruits.avif", value: "fruits" ,alt: "Fruits" },
    ],
    correctAnswer: "india",
  }
];

export default questions;
