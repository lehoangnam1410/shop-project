const cartItems = [
    {
        id: 1,
        name: "Adicolor Classics Joggers",
        category: "Dress",
        price: 63.85,
        image: "img-product1.jpg",
        badge: null
    },
    {
        id: 2,
        name: "Nike Sportswear Futura Luxe",
        category: "Bag",
        price: 130.00,
        image: "img-product2.jpg",
        badge: null
    },
    {
        id: 3,
        name: "Geometric Print Scarf",
        category: "Scarf",
        price: 53.00,
        image: "img-product3.jpg",
    },
    {
        id: 5,
        name: "Basic Dress Green",
        category: "Dress",
        price: 236.00,
        image: "img-product5.jpg",
    }
]

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
}

const CartItem = ({ product }: { product: Product }) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative mb-4 bg-[#F6F6F6]">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full"
                />
            </div>
            <div className="space-y-2">
                <div className="font-normal text-[12px]">{product.name}</div>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-[#777777]">{product.category}</p>
                    <div className="text-sm">
                        <span className='text-[#FF3333]'>
                            ${product.price.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function BestSeller() {
    return (
        <div className="w-[75%] max-w-[1440px] mx-auto my-16">
            {/* Title */}
            <h2 className="text-4xl font-bold text-center mb-12">Best Seller</h2>
            <div className="mb-[20px] flex jutif">
                <ul className="flex gap-[20px]">
                    <li>All products</li>
                    <li>T-Shirt</li>
                    <li>Hoodles</li>
                    <li>jackets</li>
                </ul>
                <div>

                </div>
            </div>
            {/* Product Grid */}
            <div className="grid grid-cols-4 gap-[20px]">
                {cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}