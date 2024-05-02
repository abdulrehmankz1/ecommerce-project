import Image from 'next/image';
import logo from '../../../public/assets/images/logo.svg';
// import '../../styles/globals.scss';



const Navbar = () => {
  return (
    <div className="container mx-auto pt-8 ">

    <div className="w-full inline-flex pb-6">
    <i className="fa-solid fa-magnifying-glass text-xl"></i>
      <div className="flex items-center justify-center" style={{position: "relative", left: "42%"}}>
      <Image src={logo} alt="" height="100" width="180" className='mx-auto' />
      </div>
      <div className="flex items-center ms-auto">
        <button className="flex items-center justify-center hover:text-red-500 transition-colors duration-300 ease-in-out">
        <i className="fa-solid fa-user mr-2 text-xl text-[#072b4b]"></i>
          <p className="font-roboto font-normal text-lg text-[#072b4b]">Account</p>
        </button>
        <button className="flex items-center justify-center ml-4 hover:text-red-500 transition-colors duration-300 ease-in-out" 
        >
        <i className="fa-solid fa-bag-shopping mr-2 text-xl text-[#072b4b]"></i>
          <p  className="font-roboto font-normal text-lg text-[#072b4b]">Shopping</p>
        </button>
      </div>
    </div>
    <hr />

    <div className='pt-7'>
    <ul className="flex justify-between flex-row font-base mt-0 space-x-8 rtl:space-x-reverse text-sm font-sans text-[#000000]">
                <li>
                    <a href="#" className=" hover:text-red-500 transition-colors duration-300 ease-in-out"  aria-current="page">Jewelry & Accessories</a>
                </li>
                <li>
                    <a href="#" className=" hover:text-red-500 transition-colors duration-300 ease-in-out" >Clothing & Shoes</a>
                </li>
                <li>
                    <a href="#" className=" hover:text-red-500 transition-colors duration-300 ease-in-out" >Wedding & Party</a>
                </li>
                <li>
                    <a href="#" className=" hover:text-red-500 transition-colors duration-300 ease-in-out" >Toys & Entertainment</a>
                </li>
                <li>
                    <a href="#" className=" hover:text-red-500 transition-colors duration-300 ease-in-out" >Art & Collectibles</a>
                </li>
                <li>
                    <a href="#" className=" hover:text-red-500 transition-colors duration-300 ease-in-out" >Craft Supplies & Tools</a>
                </li>
            </ul>
    </div>
    </div>
  );
};

export default Navbar;
