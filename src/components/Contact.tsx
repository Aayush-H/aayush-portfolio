import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section className="mb-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact</h2>
      <div className="space-y-3">
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-2 text-blue-600" />
          <p>aayushperu04@gmail.com</p>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-blue-600" />
          <p>+91 8317326933</p>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-blue-600" />
          <p>Bengaluru, Karnataka</p>
        </div>
      </div>
    </section>
  )
}
