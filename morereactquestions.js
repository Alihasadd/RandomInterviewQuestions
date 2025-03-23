//more react questions

const reactInterviewQuestionsExtended = {
    componentsAndState: [
      {
        question: "What are components in React?",
        answer: "Reusable UI building blocks that can be composed to create complex interfaces."
      },
      {
        question: "What are props?",
        answer: "Used to pass data from a parent component to a child component."
      },
      {
        question: "What is state?",
        answer: "Data that belongs to a component and can change its behavior."
      },
      {
        question: "Explain the difference between state and props.",
        answer: "State is local to a component, while props are passed down from parent components."
      },
      {
        question: "What are controlled and uncontrolled components?",
        answer: "Controlled components have their value controlled by the React component, while uncontrolled components use the DOM to manage their value."
      },
      {
        question: "What is prop drilling?",
        answer: "Passing props down through multiple levels of components when a component needs data from a distant ancestor."
      }
    ],
    reactHooks: [
      {
        question: "What are React Hooks?",
        answer: "Functions that let you use state and other React features in functional components."
      },
      {
        question: "Explain useState hook.",
        answer: "Used to add state to functional components."
      },
      {
        question: "Explain useEffect hook.",
        answer: "Used to perform side effects in functional components, such as fetching data or setting up subscriptions."
      },
      {
        question: "Explain useContext hook.",
        answer: "Used for sharing values between components without prop drilling."
      }
    ],
    stateManagement: [
      {
        question: "What is Redux?",
        answer: "A predictable state container for JavaScript apps, often used with React."
      },
      {
        question: "How does Redux work with React?",
        answer: "Redux stores the application state in a central store, and components can access and update the state through actions and reducers."
      }
    ],
    performanceAndOptimization: [
      {
        question: "How does React handle performance optimization?",
        answer: "Techniques like virtual DOM, memoization, and code splitting."
      },
      {
        question: "What are some techniques for optimizing React applications?",
        answer: "Memoization, code splitting, lazy loading, and avoiding unnecessary re-renders."
      }
    ],
    otherCommonQuestions: [
      {
        question: "Explain the concept of Higher-Order Components (HOCs).",
        answer: "Functions that take a component as an argument and return a new, enhanced component."
      },
      {
        question: "What are error boundaries?",
        answer: "Components that can catch JavaScript errors anywhere in their child component tree."
      },
      {
        question: "What are the differences between Flux and Redux?",
        answer: "Flux is a more general architecture for building applications, while Redux is a specific state management library."
      },
      {
        question: "How would you handle a complex form in React?",
        answer: "Using controlled components, form libraries, or libraries for handling form validation."
      },
      {
        question: "Explain the concept of React Router.",
        answer: "A library for adding routing to a React application."
      },
      {
        question: "What are some common challenges faced while working with React?",
        answer: "Performance optimization, complex state management, and learning curve."
      }
    ]
  };