import { useState, useEffect } from 'react'
import { apiProducts } from '../services/apiProducts';
import CardContainer from '../components/cardContainer/cardContainer';
import { GlobalStyle } from './styles';

function App() {
    const [products, setProducts] = useState();
  
    useEffect(() => {
        apiProducts().then((res) => {
            setProducts(res)
        });
    },[]);

    return (
        <div className="App">
            <GlobalStyle />
            <CardContainer data={products} />
        </div>
    )
}

export default App
