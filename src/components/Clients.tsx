export function Clients() {
  const clients = [
    "Apollo Clinics",
    "MedPlus",
    "Fortis Healthcare",
    "Max Healthcare",
    "Narayana Health",
    "Manipal Hospitals",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          <p className="text-gray-600">
            Trusted by leading healthcare providers across India
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="h-16 bg-gray-50 rounded-lg flex items-center justify-center px-4 border border-gray-200 hover:border-green-300 transition-colors"
              >
                <span className="text-gray-400 text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
