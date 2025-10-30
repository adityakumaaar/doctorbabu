export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white">DB</span>
              </div>
              <span className="text-gray-900">DoctorBabu</span>
            </div>
            <p className="text-gray-600 text-sm">
              All-in-one practice management for healthcare professionals
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/features" className="text-gray-600 hover:text-gray-900">Features</a></li>
              <li><a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="/security" className="text-gray-600 hover:text-gray-900">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; 2025 DoctorBabu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
