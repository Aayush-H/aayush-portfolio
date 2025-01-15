export default function Skills() {
    const skills = [
      "React Native",
      "C++",
      "Python",
      "SQL",
      "Excel",
      "Node JS",
      "Flutter",
      "Mongo DB",
      "Leadership",
      "Teamwork",
      "Adaptability"
    ]

    return (
      <section className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>
    )
  }
