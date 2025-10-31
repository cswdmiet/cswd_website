"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Target, Eye, Lightbulb, Calendar, Code, Users, Trophy, Twitter } from 'lucide-react'

export default function HomePage() {
  const leaders = [
    {
      name: 'Naitik Kumar',
      role: 'President',
      image: 'coreTeam/naitik.jpg',
      bio: 'Leading CSWD with passion for innovation'
    },
    {
      name: 'Prateek Malik',
      role: 'Vice President',
      image: 'coreTeam/prateekMalik1.jpg',
      bio: 'Driving technical excellence'
    },
    {
      name: 'Nikhil Pundir',
      role: 'Technical Head',
      image: 'coreTeam/nikhil.jpg',
      bio: 'Expert in full-stack development'
    },
    {
      name: 'Harshit Verma',
      role: 'Graphic Head',
      image: 'coreTeam/harshitVerma.jpg',
      bio: 'Expert in graphic design and visual storytelling'
    }, {
      name: 'Harshit Singh',
      role: 'Event Head',
      image: 'coreTeam/harshitSingh.jpg',
      bio: 'Expert in event management and coordination'
    }, {
      name: 'Samartha Gupta',
      role: 'Social and Content Head',
      image: 'coreTeam/samarth.jpg',
      bio: 'Expert in social media strategy and content creation'
    }
  ]

  const sponsors = [
    { name: 'TechCorp', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'CodeBase', logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'DevHub', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'WebFlow', logo: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ]

  const tweets = [
    { author: '@CSWD_Official', content: 'Excited to announce our upcoming Web Development Workshop! Register now to secure your spot.', time: '2h ago' },
    { author: '@CSWD_Official', content: 'Congratulations to our team for winning the Hackathon 2024! Amazing work everyone!', time: '1d ago' },
    { author: '@CSWD_Official', content: 'New project showcase coming this Friday. Stay tuned for some incredible student work!', time: '3d ago' }
  ]

  const stats = [
    { icon: Users, value: '50+', label: 'Active Members' },
    { icon: Code, value: '5+', label: 'Projects Completed' },
    { icon: Calendar, value: '5+', label: 'Events Organized' },
    { icon: Trophy, value: '10+', label: 'Awards Won' }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-[#28C0CC]  text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Computer Society of Web Development
              </h1>
              <p className="text-xl text-blue-100">
                Empowering students through technology, innovation, and collaboration. Join us to build the future of web development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white/10">
                  <Link href="/register">
                    Join CSWD <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white/10">
                  <Link href="/events">Explore Events <ArrowRight className="ml-2" size={20} /></Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-lg blur-2xl opacity-30"></div>
                <img
                  src="/logo.png"
                  alt="Students coding"
                  className="relative rounded-lg h-80 w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision, Mission & Aim</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a community of passionate developers and innovators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-blue-600 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading college society that bridges the gap between academic learning and industry demands, creating world-class web developers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-cyan-600 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-cyan-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide hands-on learning experiences, foster innovation, and create opportunities for students to develop technical and professional skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-600 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Aim</h3>
                <p className="text-gray-600 leading-relaxed">
                  To cultivate a collaborative environment where students learn cutting-edge technologies, work on real-world projects, and build lasting connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leaders</h2>
            <p className="text-xl text-gray-600">The team driving CSWD forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative h-64">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{leader.name}</h3>
                    <p className="text-blue-300">{leader.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/team">View Full Team <ArrowRight className="ml-2" size={20} /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Twitter className="text-blue-500" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Latest from Twitter</h2>
            </div>
            <p className="text-xl text-gray-600">Stay updated with our latest activities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tweets.map((tweet, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Twitter className="text-blue-500" size={20} />
                    <span className="font-semibold text-gray-900">{tweet.author}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{tweet.content}</p>
                  <p className="text-sm text-gray-500">{tweet.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
            <p className="text-xl text-gray-600">Partnering with industry leaders</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join CSWD today and be part of a vibrant community of developers, innovators, and tech enthusiasts.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/register">
              Register Now <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
