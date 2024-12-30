const Footer: React.FC = () => {
    return (
      <footer className="bg-zinc-600 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Blogging App. All rights reserved.
          </p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-farhan-09b7962a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/FarhanCodesLife"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+923182127256"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  