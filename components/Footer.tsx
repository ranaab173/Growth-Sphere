import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors">{children}</a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1 */}
          <div className="col-span-2 lg:col-span-1">
             <h3 className="text-xl font-bold mb-4">GROWTH SPHERE</h3>
             <p className="text-gray-400 text-sm">Education that transforms you.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#">About</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
              <li><FooterLink href="#">Press</FooterLink></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#">Growth Sphere App</FooterLink></li>
              <li><FooterLink href="#">Mentoring</FooterLink></li>
              <li><FooterLink href="#">Events</FooterLink></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h4 className="font-semibold text-white mb-4">For Business</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#">Growth Sphere for Teams</FooterLink></li>
              <li><FooterLink href="#">Partnerships</FooterLink></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-2xl">
                <FooterLink href="#"><i className="fab fa-facebook"></i></FooterLink>
                <FooterLink href="#"><i className="fab fa-instagram"></i></FooterLink>
                <FooterLink href="#"><i className="fab fa-youtube"></i></FooterLink>
                <FooterLink href="#"><i className="fab fa-twitter"></i></FooterLink>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Growth Sphere. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Terms of Use</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;