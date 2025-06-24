const cartItems = [
    {
        id: 1,
        name: "Product 1",
        category: "Category 1",
        price: 100,
        image: "img-product1.jpg",
        badge: "SALE"
    },
    {
        id: 2,
        name: "Product 2",
        category: "Category 2",
        price: 150,
        image: "img-product2.jpg",
        badge: null
    },
    {
        id: 3,
        name: "Product 3",
        category: "Category 3",
        price: 200,
        image: "img-product3.jpg",
        badge: "NEW"
    },
    {
        id: 4,
        name: "Product 4",
        category: "Category 4",
        price: 250,
        image: "img-product4.jpg",
        badge: null
    },
    {
        id: 5,
        name: "Product 5",
        category: "Category 5",
        price: 300,
        image: "img-product5.jpg",
        badge: "SALE"
    }
]
interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    badge: string | null;
}
const CartItem = ({ product }: { product: Product }) => {
    return (
        <div>
            <img src={product.image} alt=""  className="w-full object-cover"/>
            <div>
                <div>{product.name}</div>
                <div className="flex justify-between">
                    <div>{product.category}</div>
                    <div>{product.price}</div>
                </div>
            </div>
        </div>
    )
}
export default function Newsletter() {
    return (
        <div className="w-[75%] max-w-[1440px] mx-auto">
            <h1 className="text-center">Or subscribe to the newsletter</h1>
            <div className="grid grid-cols-4 gap-[20px]">
                {cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}