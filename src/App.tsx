import React, { useState, useMemo } from 'react';
import ProductList from './components/ProductList';
import { Product } from './types';

const initialProducts: Product[] = [
    {
        id: 1,
        imageUrl: 'https://images.prom.ua/1289180610_w$%7Bwidth%7D_h$%7Bheight%7D_vse-pro-mango.jpg',
        name: 'Mango',
        count: 5,
        size: { width: 100, height: 100 },
        weight: '200g',
        comments: [
            {
                id: 1,
                productId: 1,
                description: 'Fresh',
                date: '14:00 06.08.2025',
            },
        ],
    },
    {
        id: 2,
        imageUrl: 'https://www.quanta.org/thumbs/thumb-orange-640x480-orange.jpg',
        name: 'Orange',
        count: 3,
        size: { width: 120, height: 80 },
        weight: '300g',
        comments: [],
    },
    {
        id: 3,
        imageUrl: 'https://candy-flavoring.com/wp-content/uploads/2016/09/shutterstock_158989157.jpg',
        name: 'Apple',
        count: 7,
        size: { width: 90, height: 90 },
        weight: '150g',
        comments: [
            {
                id: 2,
                productId: 3,
                description: ':)',
                date: '10:30 07.08.2025',
            },
        ],
    },
];

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [sortConfig, setSortConfig] = useState<{
        key: 'name' | 'count';
        direction: 'ascending' | 'descending';
    }>({ key: 'name', direction: 'ascending' });

    const sortedProducts = useMemo(() => {
        const sortableItems = [...products];
        sortableItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        return sortableItems;
    }, [products, sortConfig]);

    const handleDeleteProduct = (id: number) => {
        const confirmed = window.confirm('delete?');
        if (confirmed) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const requestSort = (key: 'name' | 'count') => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Products List View</h2>
            <div style={{ marginBottom: '20px' }}>
                <button
                    onClick={() => requestSort('name')}
                    style={{ marginRight: '10px', padding: '5px 10px' }}
                >
                    Sort by name {sortConfig.key === 'name' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : ''}
                </button>
                <button
                    onClick={() => requestSort('count')}
                    style={{ padding: '5px 10px' }}
                >
                    Sort by quantity {sortConfig.key === 'count' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : ''}
                </button>
            </div>
            <ProductList products={sortedProducts} onDelete={handleDeleteProduct} />
        </div>
    );
};

export default App;