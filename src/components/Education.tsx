export default function Education() {
    const education = [
      {
        degree: "BE Computer Science and Engineering",
        institution: "BMS Institute of Technology and Management",
        year: "2022 - Present"
      },
      {
        degree: "Class 12th",
        institution: "Sri Sri Ravishankar Vidya Mandir",
        year: "Batch of 2021-22"
      }
    ]

    return (
      <section className="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
