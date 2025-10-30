import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white">DB</span>
            </div>
            <span className="text-gray-900">DoctorBabu</span>
          </Link>
        </div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link to="/security" className="text-gray-600 hover:text-gray-900 transition-colors">
                Security
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
            </nav>
            <span className="separator"> &nbsp;|&nbsp; </span>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Log In
            </Button>
            <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" asChild>
              <Link to="/book-demo">Book demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
