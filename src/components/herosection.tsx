import { RiShoppingBagLine } from "react-icons/ri";
export default function HeroSection() {
    return (
        <div className="w-full mt-[81px]">
            <div className="w-[75%] mx-auto">
                <div>
                    <div className="text-[70px]">Collections</div>
                    <div>You can explore and shop many different collections from various brands here.</div>
                    <div className="w-[200px] py-[14px] px-[19px] bg-[#1E2832] flex justify-center items-center gap-2 rounded cursor-pointer hover:bg-[#273043] transition-colors">
                        <RiShoppingBagLine color="#fff" size={20} />
                        <span className="text-[20px] text-[#fff] px-[10px]">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}