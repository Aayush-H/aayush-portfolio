export default function Projects() {
  const projects = [
    {
      title: "Snake Game",
      description: "C++ game with three modes, showcasing graphical programming and algorithmic thinking.",
      achievement: "Top position in PBL college competition"
    },
    {
      title: "Tairishi",
      description: "All-in-one coastal tourism mobile app using React Native and Node.js.",
      achievement: "SIH 24 Grand Finalist"
    },
    {
      title: "Weather App",
      description: "Real-time weather application using OpenWeatherMap API.",
      achievement: "Demonstrating API integration"
    }
  ]

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-sm text-blue-600 font-medium">{project.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
