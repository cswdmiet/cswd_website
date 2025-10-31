import Link from 'next/link'
import { Github, Twitter, Linkedin, Instagram, Mail,MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div> */}
              <img src="/logo.png" alt="Logo" width={70} height={70} />
              <span className="font-bold text-xl text-white">CSWD</span>
            </div>
            <p className="text-sm">
              Computer Society of Web Development - Empowering students through technology and innovation.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/register" className="hover:text-white transition-colors">Register</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/CSWDMIET?t=d8O6AHJE1oGq42aD-Y9g1A&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/computer-society-of-web-developer/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/cswdmiet" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/cswdmiet/#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://chat.whatsapp.com/IFG0duEFvtg2GItmSwy6zm" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
            <p className="text-sm mt-4">
              Email: cswd@miet.ac.in<br />
              Phone: +91 12345 67890

            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Computer Society of Web Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
