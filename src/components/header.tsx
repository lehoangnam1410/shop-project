import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <div className="w-full bg-[#fafbfc] mt-[31px]">
                <div className="w-[75%] mx-auto">
                    <div className="w-full h-[60px] flex justify-between border-b border-[#E3E3E3]">
                        <div className="flex">
                            <FaSearch />
                        </div>
                        <div className="flex justify-center text-[28px]">
                            CORAL
                        </div>
                        <div className="flex gap-[20px]">
                            <div className="flex gap-[10px]">
                                <FaUser />
                                <span className="text-[18px]">Account</span>
                            </div>
                            <div className="flex gap-[10px]">
                                <FaShoppingBag />
                                <span className="text-[18px]">Shopping</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-[75%] mx-auto flex justify-between mt-[31px]">
                    <span>Jewelry & Accessories</span>
                    <span>Clothing & Shoes</span>
                    <span>Home & Living</span>
                    <span>Wedding & Party</span>
                    <span>Toys & Entertainment</span>
                    <span>Art & Collectibles</span>
                    <span>Craft Supplies & Tools</span>
                </div>
            </div>
        </>
    );
}