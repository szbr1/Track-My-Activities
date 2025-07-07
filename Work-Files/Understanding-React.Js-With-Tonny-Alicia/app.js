// Get the root DOM node where the React app will be mounted
const rootElement = document.getElementById('root');

// Define a simple React functional component
function App() {
    return React.createElement(
        'div',
        { className: 'text-2xl font-bold text-blue-600' },
        'Hello from React!'
    );
}

// Use ReactDOM to render the App component into the root element
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App, null));

// Now you can log them:
console.log('The DOM element:', rootElement);
console.log('The React root object:', root);

const Hello = ()=>{
    console.log(rootElement)
}