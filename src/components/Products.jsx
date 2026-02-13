import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const Products = ({ product }) => {


    console.log(product);
    return (
        <div>
            <Card className=''>
                <Card.Img className='md:h-80 w-full' variant="top" src={product.image} />
                <Card.Body className='h-70'>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className='bg-green-700 w-13 h-5 p-2 flex justify-center items-center text-xs font-bold text-white rounded '>
                        {product.rating} ☆
                    </Card.Text>
                    <Card.Text className='font-bold text-black-100'>
                        ₹ {product.price}
                    </Card.Text>
                    <Card.Text>
                        Category : {product.category}
                    </Card.Text>
                    <Button variant="outline-primary" onClick={console.log(product)} className='absolute bottom-9'>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>


    );

}

export default Products