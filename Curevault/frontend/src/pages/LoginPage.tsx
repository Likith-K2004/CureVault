import { useState } from 'react';
import PatientLogin from '../components/PatientLogin';
import DoctorLogin from '../components/DoctorLogin';
import PharmacistLogin from '../components/PharmacistLogin';

const LoginPage = () => {
  const [activeLogin, setActiveLogin] = useState<string | null>(null);

  const openLogin = (loginType: string) => {
    setActiveLogin(loginType);
  };

  const closeLogin = () => {
    setActiveLogin(null);
  };

  return (
    <main className="pt-16 flex-grow">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
          Access Your Portal
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" 
              alt="Patient" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Patient Portal</h2>
            <p className="text-gray-600 mb-4">Access your medical records, schedule appointments, and communicate with your healthcare providers.</p>
            <button 
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => openLogin('patient')}
            >
              Patient Login
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" 
              alt="Doctor" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Doctor Portal</h2>
            <p className="text-gray-600 mb-4">Manage patient records, view appointments, and access medical resources to provide the best care.</p>
            <button 
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => openLogin('doctor')}
            >
              Doctor Login
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80" 
              alt="Pharmacy" 
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Pharmacy Portal</h2>
            <p className="text-gray-600 mb-4">Process digital prescriptions, manage inventory, and coordinate with healthcare providers for patient care.</p>
            <button 
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => openLogin('pharmacist')}
            >
              Pharmacy Login
            </button>
          </div>
        </div>
      </section>

      {/* Login Modals */}
      {activeLogin === 'patient' && (
        <PatientLogin onClose={closeLogin} />
      )}
      {activeLogin === 'doctor' && (
        <DoctorLogin onClose={closeLogin} />
      )}
      {activeLogin === 'pharmacist' && (
        <PharmacistLogin onClose={closeLogin} />
      )}
    </main>
  );
};

export default LoginPage;
