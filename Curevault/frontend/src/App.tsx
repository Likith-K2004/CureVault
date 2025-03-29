import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <main className="pt-16 flex-grow">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Healthcare Reimagined
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Welcome to Curevault - your comprehensive digital healthcare platform designed to streamline medical services and enhance patient care.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Digital Healthcare" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Our Digital Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" 
                alt="Electronic Health Records" 
                className="mx-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Electronic Health Records</h3>
              <p className="text-gray-600">Securely access and manage your medical information anytime, anywhere.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" 
                alt="Telemedicine" 
                className="mx-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Telemedicine</h3>
              <p className="text-gray-600">Connect with healthcare professionals from the comfort of your home.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <img 
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" 
                alt="Digital Prescriptions" 
                className="mx-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Digital Prescriptions</h3>
              <p className="text-gray-600">Receive and fulfill prescriptions electronically with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Making a Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <span className="text-4xl font-bold text-green-600 block">10,000+</span>
            <span className="text-gray-600">Patients Served</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <span className="text-4xl font-bold text-green-600 block">500+</span>
            <span className="text-gray-600">Healthcare Providers</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <span className="text-4xl font-bold text-green-600 block">98%</span>
            <span className="text-gray-600">Patient Satisfaction</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <span className="text-4xl font-bold text-green-600 block">24/7</span>
            <span className="text-gray-600">Support Available</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "Curevault has transformed how I manage my healthcare. I can easily access my records and schedule appointments with just a few clicks."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/43.jpg" 
                  alt="Patient" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-green-800">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "As a doctor, this platform has streamlined my workflow enormously. I can check patient history and update records efficiently."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Doctor" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-green-800">Dr. Michael Chen</p>
                  <p className="text-sm text-gray-500">Cardiologist</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">
                "The digital prescription feature has made our pharmacy operations much more efficient. No more deciphering handwritten prescriptions!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg" 
                  alt="Pharmacist" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-green-800">Lisa Rodriguez</p>
                  <p className="text-sm text-gray-500">Pharmacist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

