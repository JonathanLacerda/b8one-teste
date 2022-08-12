import { useState, useEffect } from 'react'
import { apiProducts } from '../services/apiProducts';
import ContainerItem from '../components/ContainerItem/containerItem';
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
            <ContainerItem data={products} />
        </div>
    )
}

export default App
