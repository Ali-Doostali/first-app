import Product from "./components/Product";

function App() {
  return (
    <div className="container" id="title">
      <h1>Shopping App</h1>
      <Product name="React.js" price="99$" />
      <Product name="Node.js" price="89$" />
      <Product name="JavaScript" price="79$" />
      <Product>
        <p>DisCout is 20%</p>
      </Product>
    </div>
  );
}

export default App;