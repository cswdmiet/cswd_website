"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Linkedin, Github, Twitter } from 'lucide-react'

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Naitik Kumar',
      role: 'President',
      image: 'coreTeam/naitik.jpg',
      bio: 'Leading CSWD with passion for innovation',
      linkedin: '#',
      github: '#',
      twitter: '#',
      isLeader: true
    },
    {
      name: 'Prateek Malik',
      role: 'Vice President',
      image: 'coreTeam/prateekMalik1.jpg',
      bio: 'Driving technical excellence',
      linkedin: '#',
      github: '#',
      twitter: '#',
      isLeader: true
    },
    {
      name: 'Nikhil Pundir',
      role: 'Technical Head',
      image: 'coreTeam/nikhil.jpg',
      bio: 'Expert in full-stack development',
      linkedin: '#',
      github: 'https://github.com/nikhilpundir108',
      twitter: '#',
      isLeader: true
    },
    {
      name: 'Harshit Verma',
      role: 'Graphic Head',
      image: 'coreTeam/harshitVerma.jpg',
      bio: 'Expert in graphic design and visual storytelling',
      linkedin: '#',
      github: '#',
      twitter: '#',
      isLeader: true
    },
    {
      name: 'Harshit Singh',
      role: 'Event Head',
      image: 'coreTeam/harshitSingh.jpg',
      bio: 'Expert in event management and coordination',
      linkedin: '#',
      github: '#',
      twitter: '#',
      isLeader: true
    },
    {
      name: 'Samartha Gupta',
      role: 'Social and Content Head',
      image: 'coreTeam/samarth.jpg',
      bio: 'Expert in social media strategy and content creation',
      linkedin: '#',
      github: '#',
      twitter: '#',
      isLeader: true
    },
    {
      name: "Anshika Gaur",
      image: "/technical/anshikaGaur.jpg",
      role: "Frontend Developer",
      github: "https://github.com/aryan",
      linkedin: "https://linkedin.com/in/aryan",
      bio: 'Crafting interactive and responsive web interfaces',
      isLeader: false
    },
    {
      name: "Manu Chauhan ",
      image: "/technical/manuChauhan.jpeg",
      role: "Backend Developer",
      github: "https://github.com/nikhilpundir108",
      linkedin: "https://linkedin.com/in/nikhilpundir108",
      bio: 'Managing content and communications for CSWD',
      isLeader: false
    },
    {
      name: "Aayush Upadhyay",
      image: "/technical/aayushUpadhyay.jpg",
      role: "Cybersecurity Analyst",
      github: "https://github.com/nikhilpundir108",
      linkedin: "https://linkedin.com/in/nikhilpundir108",
      bio: 'Growing our community and spreading the word',
      isLeader: false
    }
  ]

  const leaders = teamMembers.filter(member => member.isLeader)
  const members = teamMembers.filter(member => !member.isLeader)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet the passionate individuals who make CSWD a thriving community of innovation and learning
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Guiding CSWD towards excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {leaders.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-blue-600">Leader</Badge>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-300 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-200 mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      <a href={member.linkedin} className="hover:text-blue-300 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href={member.github} className="hover:text-blue-300 transition-colors">
                        <Github size={20} />
                      </a>
                      {/* <a href={member.twitter} className="hover:text-blue-300 transition-colors">
                        <Twitter size={20} />
                      </a> */}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4"> Team Members</h2>
            <p className="text-xl text-gray-600">The backbone of our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-blue-600">Team Member</Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-blue-300">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href={member.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.github} className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Github size={20} />
                    </a>
                    {/* <a href={member.twitter} className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Twitter size={20} />
                    </a> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
