import React from 'react';
import { Product } from '../types';
import ProductItem from './ProductItem';

interface ProductListProps {
    products: Product[];
    onDelete: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => {
    return (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: 0 }}>
            {products.map(product => (
                <ProductItem key={product.id} product={product} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default ProductList;
