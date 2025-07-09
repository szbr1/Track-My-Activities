const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode)

root.render(React.createElement(App))

function App() {
    return (
      <div>
        <h1>Hell0000o</h1>
        <Button />
      </div>
    );
  }

  console.log(App())
  
  function Button() {
    return <button>Click</button>;
  }
  
