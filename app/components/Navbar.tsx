import Link from 'next/link';

/*************  ✨ Codeium Command 🌟  *************/
const Navbar: React.FC = () => {
  return (
    <div className="bg-blue-400 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">
          <Link href="/">Blogging App</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-200">
             
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="text-white hover:text-gray-200">
             
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-200">
             
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-200">
             
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
/******  c0b7cd2f-6cdc-4d6b-9424-943f4aabd16b  *******/

export default Navbar;
