import Head from 'next/head';
import {getProducts} from "../api/getProducts"

const App = () => {
    const products = getProducts('chicken sausage')
    console.log(products, "PRODUCST !!!!!!!!")
return <div>hello</div>};

export default App;
