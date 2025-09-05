const Footer = () => {
  return (
    <footer className="bg-mustard-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MustardWorks</h3>
            <p className="mb-4">Turning ideas into reality across multiple domains of technology and creativity.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-mustard-light">Home</a></li>
              <li><a href="#about" className="hover:text-mustard-light">About Us</a></li>
              <li><a href="#gallery" className="hover:text-mustard-light">Gallery</a></li>
              <li><a href="#contact" className="hover:text-mustard-light">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="mb-2">Email: info@mustardworks.com</p>
            <p className="mb-2">Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Innovation Drive, Tech City</p>
          </div>
        </div>
        <div className="border-t border-mustard-light mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MustardWorks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;