const questions = [
  {
    id: 1001,
    question: "What is React?",
    answer: "Library",
  },
  {
    id: 1002,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 1003,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 1004,
    question: "What is a component in React?",
    answer: "UI Block",
  },
  {
    id: 1005,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1006,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 1007,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 1008,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: 1009,
    question: "What is the use of useState hook?",
    answer: "State Management",
  },
  {
    id: 1010,
    question: "What is useEffect hook used for?",
    answer: "Side Effects",
  },
  {
    id: 1011,
    question: "What is props in React?",
    answer: "Data Transfer",
  },
  {
    id: 1012,
    question: "What is state in React?",
    answer: "Internal Data",
  },
  {
    id: 1013,
    question: "What is virtual DOM?",
    answer: "In-memory DOM",
  },
  {
    id: 1014,
    question: "What is React.Fragment used for?",
    answer: "Grouping",
  },
  {
    id: 1015,
    question: "What is Strict Mode's impact?",
    answer: "Performance Check",
  },
  {
    id: 1016,
    question: "What does key in React help with?",
    answer: "List Rendering",
  },
  {
    id: 1017,
    question: "What is a Pure Component?",
    answer: "Optimized Component",
  },
  {
    id: 1018,
    question: "What is the purpose of useReducer?",
    answer: "State Logic",
  },
  {
    id: 1019,
    question: "What is the use of useRef?",
    answer: "Mutable Reference",
  },
  {
    id: 1020,
    question: "What is context used for in React?",
    answer: "Global Data",
  },
  {
    id: 1021,
    question: "What does render() method do?",
    answer: "Renders UI",
  },
  {
    id: 1022,
    question: "What is React Router?",
    answer: "Navigation",
  },
  {
    id: 1023,
    question: "What is lazy loading in React?",
    answer: "On-demand Loading",
  },
  {
    id: 1024,
    question: "What is higher-order component (HOC)?",
    answer: "Component Wrapper",
  },
  {
    id: 1025,
    question: "What is the role of setState?",
    answer: "Update State",
  },
  {
    id: 1026,
    question: "What is reconciliation in React?",
    answer: "DOM Diffing",
  },
  {
    id: 1027,
    question: "What does useMemo optimize?",
    answer: "Performance",
  },
  {
    id: 1028,
    question: "What is conditional rendering?",
    answer: "Dynamic Rendering",
  },
  {
    id: 1029,
    question: "What is controlled component?",
    answer: "Form Control",
  },
  {
    id: 1030,
    question: "What is prop drilling?",
    answer: "Passing Props",
  },
  {
    id: 1031,
    question: "What is React.StrictMode?",
    answer: "Debugging Mode",
  },
  {
    id: 1032,
    question: "What is ReactDOM?",
    answer: "Rendering API",
  },
  {
    id: 1033,
    question: "What is a functional component?",
    answer: "Stateless Function",
  },
  {
    id: 1034,
    question: "What is a class component?",
    answer: "Stateful Class",
  },
  {
    id: 1035,
    question: "What is a default prop?",
    answer: "Fallback Value",
  },
  {
    id: 1036,
    question: "What is an event in React?",
    answer: "User Interaction",
  },
  {
    id: 1037,
    question: "What is the purpose of componentDidMount?",
    answer: "Initial Setup",
  },
  {
    id: 1038,
    question: "What does componentDidUpdate handle?",
    answer: "Post-Update",
  },
  {
    id: 1039,
    question: "What is shallow rendering?",
    answer: "Single-Level Test",
  },
  {
    id: 1040,
    question: "What is deep rendering?",
    answer: "Full Component Tree",
  },
  {
    id: 1041,
    question: "What is useCallback for?",
    answer: "Memoized Function",
  },
  {
    id: 1042,
    question: "What is componentWillUnmount used for?",
    answer: "Cleanup",
  },
  {
    id: 1043,
    question: "What is React.StrictMode’s primary purpose?",
    answer: "Warnings",
  },
  {
    id: 1044,
    question: "What does React.memo do?",
    answer: "Component Caching",
  },
  {
    id: 1045,
    question: "What is useLayoutEffect used for?",
    answer: "DOM Synchronous Effect",
  },
  {
    id: 1046,
    question: "What is an error boundary?",
    answer: "Error Catcher",
  },
  {
    id: 1047,
    question: "What is the purpose of keys in lists?",
    answer: "Uniqueness",
  },
  {
    id: 1048,
    question: "What does useContext allow?",
    answer: "Context Access",
  },
  {
    id: 1049,
    question: "What is a custom hook?",
    answer: "Reusable Logic",
  },
  {
    id: 1050,
    question: "What is propTypes in React?",
    answer: "Prop Validation",
  },
  {
    id: 1051,
    question: "What is React Fiber?",
    answer: "Reconciliation Engine",
  },
  {
    id: 1052,
    question: "What is Strict Mode's impact?",
    answer: "Performance Check",
  },
  {
    id: 1053,
    question: "What is controlled vs uncontrolled input?",
    answer: "State Control",
  },
  {
    id: 1054,
    question: "What is server-side rendering (SSR)?",
    answer: "Pre-rendering",
  },
  {
    id: 1055,
    question: "What is the purpose of useImperativeHandle?",
    answer: "Expose Methods",
  },
  {
    id: 1056,
    question: "What is the difference between useMemo and useCallback?",
    answer: "Memoization Scope",
  },
  {
    id: 1057,
    question: "How does React's reconciliation algorithm work?",
    answer: "Diffing",
  },
  {
    id: 1058,
    question: "What is React's Concurrent Mode?",
    answer: "Asynchronous Rendering",
  },
  {
    id: 1059,
    question: "What is the role of Suspense in React?",
    answer: "Code Splitting",
  },
  {
    id: 1060,
    question: "What is Server Components?",
    answer: "Server-Side Logic",
  },
  {
    id: 1061,
    question: "What are synthetic events in React?",
    answer: "Unified Event System",
  },
  {
    id: 1062,
    question: "What is the difference between Context API and Redux?",
    answer: "State Management",
  },
  {
    id: 1063,
    question: "How does React handle memory leaks?",
    answer: "Component Cleanup",
  },
  {
    id: 1064,
    question: "What is the use of useDeferredValue?",
    answer: "Deferred Rendering",
  },
  {
    id: 1065,
    question: "What does useTransition handle?",
    answer: "Transition State",
  },
  {
    id: 1066,
    question: "What are side effects in React?",
    answer: "External Interactions",
  },
  {
    id: 1067,
    question:
      "What is the difference between shallow and deep comparison in React?",
    answer: "Equality Check",
  },
  {
    id: 1068,
    question:
      "What is the difference between controlled and uncontrolled components?",
    answer: "Input Management",
  },
  {
    id: 1069,
    question: "What is the React Profiler API used for?",
    answer: "Performance Monitoring",
  },
  {
    id: 1070,
    question: "How do you handle large lists in React efficiently?",
    answer: "Virtualization",
  },
  {
    id: 1071,
    question: "What is memoization in React?",
    answer: "Caching",
  },
  {
    id: 1072,
    question: "What is hydrate() in React?",
    answer: "DOM Hydration",
  },
  {
    id: 1073,
    question: "What is reconciliation in React?",
    answer: "DOM Update Optimization",
  },
  {
    id: 1074,
    question: "What is Strict Mode used for in React?",
    answer: "Debugging",
  },
  {
    id: 1075,
    question: "What is a React key prop's importance?",
    answer: "Unique Identification",
  },
  {
    id: 1076,
    question: "What is React.lazy used for?",
    answer: "Code Splitting",
  },
  {
    id: 1077,
    question: "What are hooks in React?",
    answer: "State & Lifecycle",
  },
  {
    id: 1078,
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer: "Execution Timing",
  },
  {
    id: 1079,
    question: "How does fiber architecture improve React's performance?",
    answer: "Incremental Rendering",
  },
  {
    id: 1080,
    question: "What is the purpose of useDebugValue?",
    answer: "Custom Hook Debugging",
  },
  {
    id: 1081,
    question: "What is the difference between static and dynamic rendering?",
    answer: "Render Timing",
  },
];

export default questions;
