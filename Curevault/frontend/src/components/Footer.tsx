const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-bold">Curevault</h3>
            </div>
            <p className="text-green-100">
              Transforming healthcare through digital innovation and putting patients first.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white">Home</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Services</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Login</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-green-100">123 Medical Plaza</li>
              <li className="text-green-100">Healthcare City, HC 10001</li>
              <li className="text-green-100">info@curevault.com</li>
              <li className="text-green-100">(123) 456-7890</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} Curevault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
