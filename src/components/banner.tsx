import { RiShoppingBagLine } from "react-icons/ri";

export default function Banner() {
    return (
        <div className="w-full mt-[81px] bg-[#1E28320D]">
            <div className="w-[75%] mx-auto flex">
                <div className="w-1/2">
                    <div className="text-[70px]">Collections</div>
                    <div className="font-roboto font-normal text-[30px] leading-[55px] mb-[9px] capitalize">
                        You can explore and shop many different collections <br></br> from various brands here.
                    </div>
                    <div className="w-[200px] py-[14px] px-[19px]  flex justify-center items-center gap-2 rounded cursor-pointer bg-[#1E2832]">
                        <RiShoppingBagLine color="#fff" size={20} />
                        <span className="text-[20px] text-[#fff] px-[10px]">Shop Now</span>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full  ">
                    <div className="overflow-hidden rounded-[60px_0_120px_0]">
                        <img
                            src="logo-header.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}