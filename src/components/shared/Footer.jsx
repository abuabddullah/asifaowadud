const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <hr className="h-px my-6 bg-[#1a2c4160] border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-[#1A2C41] dark:text-white">
            © Brand {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
