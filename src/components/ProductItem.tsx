import React from 'react';
import { Product } from '../types';

interface ProductItemProps {
    product: Product;
    onDelete: (id: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onDelete }) => {
    return (
        <li style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '16px', width: '250px', listStyle: 'none' }}>
            <img src={product.imageUrl} alt={product.name} width={100} />
            <h3>{product.name}</h3>
            <p>Count: {product.count}</p>
            <p>Size: {product.size.width}x{product.size.height}</p>
            <p>Weight: {product.weight}</p>
            <button onClick={() => onDelete(product.id)}>Delete</button>

            <div style={{ marginTop: '10px' }}>
                <strong>Comments:</strong>
                <ul>
                    {product.comments.length > 0 ? (
                        product.comments.map(c => (
                            <li key={c.id}>
                                {c.description} – <em>{c.date}</em>
                            </li>
                        ))
                    ) : (
                        <li>No comments</li>
                    )}
                </ul>
            </div>
        </li>
    );
};

export default ProductItem;
