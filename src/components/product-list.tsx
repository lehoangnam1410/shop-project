import { FaFilter } from 'react-icons/fa';

// Define the type for a single product
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number | null;
  image: string;
  badge: string | null;
}

// Mock data for products
const products: Product[] = [
    {
      id: 1,
      name: 'Adicolor Classics Joggers',
      category: 'Dress',
      price: 63.85,
      oldPrice: null,
      image: '/img-product1.jpg',
      badge: null,
    },
    {
      id: 2,
      name: 'Nike Sportswear Futura Luxe',
      category: 'Bag',
      price: 130.00,
      oldPrice: null,
      image: '/img-product2.jpg',
      badge: null,
    },
    {
      id: 3,
      name: 'Geometric Print Scarf',
      category: 'Scarf',
      price: 53.00,
      oldPrice: null,
      image: '/img-product3.jpg',
      badge: 'SALE',
    },
    {
      id: 4,
      name: 'Yellow Reserved Hoodie',
      category: 'Hoodie',
      price: 155.00,
      oldPrice: 364.00,
      image: '/img-product4.jpg',
      badge: null,
    },
    {
      id: 5,
      name: 'Basic Dress Green',
      category: 'Dress',
      price: 236.00,
      oldPrice: null,
      image: '/img-product5.jpg',
      badge: 'HOT',
    },
    {
        id: 6,
        name: 'Nike Air Zoom Pegasus',
        category: 'Shoe',
        price: 198.00,
        oldPrice: 220.00,
        image: '/img-product1.jpg', 
        badge: 'SALE',
    },
    {
        id: 7,
        name: 'Nike Repel Miler',
        category: 'Dress',
        price: 120.50,
        oldPrice: null,
        image: '/img-product2.jpg', 
        badge: null,
    },
    {
        id: 8,
        name: 'Nike Sportswear Futura Luxe',
        category: 'Glasses',
        price: 160.00,
        oldPrice: null,
        image: '/img-product3.jpg', 
        badge: null,
    }
  ];

// ProductCard component with correct type for props
const ProductCard = ({ product }: { product: Product }) => (
    <div>
        <div className="relative">
            <img src={product.image} alt={product.name} className="w-full object-cover aspect-square" />
            {product.badge && (
                <span className={`absolute top-4 left-4 px-2 py-1 text-xs font-bold text-white ${product.badge === 'SALE' ? 'bg-black' : 'bg-red-500'}`}>
                    {product.badge}
                </span>
            )}
        </div>
        <div className="mt-4">
            <h3 className="text-sm font-bold">{product.name}</h3>
            <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">{product.category}</p>
                <div className="text-sm">
                    {product.oldPrice && <span className="text-gray-400 line-through mr-2">${product.oldPrice.toFixed(2)}</span>}
                    <span className={product.oldPrice ? 'text-red-500 font-bold' : 'font-bold'}>${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    </div>
);

// Main component
export default function ProductList() {
    return (
        <div className="w-[75%] mx-auto my-12">
            {/* Title */}
            <h2 className="text-4xl font-bold text-center mb-8">Or Subscribe To The Newsletter</h2>

            {/* Filter Bar */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex gap-8 text-sm font-bold">
                    <a href="#" className="text-black border-b-2 border-black pb-1">All Products</a>
                    <a href="#" className="text-gray-500 hover:text-black">T-Shirt</a>
                    <a href="#" className="text-gray-500 hover:text-black">Hoodies</a>
                    <a href="#" className="text-gray-500 hover:text-black">Jacket</a>
                </div>
                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 text-sm font-bold">
                    <FaFilter />
                    Filter
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}