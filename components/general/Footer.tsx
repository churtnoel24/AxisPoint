export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} AxisPoint Technologies. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  