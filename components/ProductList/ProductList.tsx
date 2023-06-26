import Link from 'next/link'
import React from 'react'

import { Card, Image } from 'semantic-ui-react'


interface Product {
    id: string
    image: string
    name: string
    price: number
    sku: string
}
interface ProductListProps {
    products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {


    return (
        <Card.Group itemsPerRow={4} >
            {products.map((product) => (

                <Card key={product.id} >
                    <Link href={`product/${product.id}`}>
                        <Image src={product.image} wrapped ui={false} />
                    </Link>

                    <Card.Content>
                        <Card.Header>{product.name}</Card.Header>
                        <Card.Meta>{product.price}</Card.Meta>

                    </Card.Content>

                </Card>
            ))}
        </Card.Group>
    )
}



export default ProductList