import { Title, Item, Prices, ListPrice, BestPrice, Installment } from './styles';
import Button from '../Button/button';
import Wishlist from '../Wishlist/wishlist';

function Card(item) {
    const product = item.data

    return <>
        <Item className="card_container" data-sku={product.attribute.sku}>
            <Wishlist 
                id={product.attribute.id} 
                name={product.attribute.name}
            />
            <a href={product.attribute.url}>
                <img src={ product.attribute.imageName } />
            </a>
            <Title>
                <a href={product.attribute.url}>
                    { product.attribute.name }
                </a>
            </Title>
            <Prices>
                <ListPrice>  
                    { product.prices.listPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }
                </ListPrice>
                <BestPrice>
                    { product.prices.bestPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }
                </BestPrice>
                <Installment>
                    em até <strong>{ product.prices.installment.max }x de { product.prices.installment.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</strong> sem juros
                </Installment>
            </Prices>
            <Button 
                id={product.attribute.id} 
                name={product.attribute.name}
            />
        </Item>
    </>
}
  
export default Card
  