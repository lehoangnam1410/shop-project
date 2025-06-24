import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="w-[75%] mx-auto mt-[50px] mb-[50px] grid grid-cols-4 gap-[20px]">
                <div>
                    <h1 className="text-[#1E2832BF]">CORAL</h1>
                    <div className="text-[#1E2832BF]">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</div>
                    <div className="flex gap-4 mt-4">
                        <FaFacebookF size={22} />
                        <FaTwitter size={22} />
                        <FaLinkedinIn size={22} />
                        <FaInstagram size={22} />
                    </div>
                </div>
                <div>
                    <h2 className="font-bold mb-[20px]">CATALOG</h2>
                    <ul className="space-y-[10px]">
                        <li className="mb-[10px]">Necklaces</li>
                        <li className="mb-[10px]">Hoodies</li>
                        <li className="mb-[10px]">Jewelry Box</li>
                        <li className="mb-[10px]">T-Shirt</li>
                        <li className="mb-[10px]">Jacket</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-[20px]">ABOUT US</h2>
                    <ul className="space-y-[10px]">
                        <li className="mb-[10px]">Our Producers</li>
                        <li className="mb-[10px]">Sitemap</li>
                        <li className="mb-[10px]">FAQ</li>
                        <li className="mb-[10px]">About Us</li>
                        <li className="mb-[10px]">Terms & Conditions</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-[20px]">CUSTOMER SERVICES</h2>
                    <ul className="space-y-[10px]">
                        <li className="mb-[10px]">Contact Us</li>
                        <li className="mb-[10px]">Track Your Order</li>
                        <li className="mb-[10px]">Product Care & Repair</li>
                        <li className="mb-[10px]">Book An Appointment</li>
                        <li className="mb-[10px]">Shipping & Returns</li>
                    </ul>
                </div>

            </div>
            <div className="bg-[#1E2832]">
                <div className="w-[75%] mx-auto text-center text-[#1E2832BF] mb-[20px] bg-[#1E2832] flex justify-between items-center py-[20px]">
                    <span className="text-[#fff] text-[12px]">
                        © 2022 Coral. Inc
                    </span>
                    <img src="./icon-payment.png" alt="" />
                    <span className="text-[#fff] cursor-pointer hover:text-[#1E2832BF] transition-colors text-[12px]">
                        Scroll To Top 
                    </span>
                </div>
            </div>
        </>
    );
}