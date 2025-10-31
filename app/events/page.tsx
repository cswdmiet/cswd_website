"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: 'Web Development Workshop',
      description: 'Learn modern web development techniques including React, Next.js, and TypeScript. Hands-on session with live coding and Q&A.',
      date: 'November 15, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Lab, Building A',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      maxParticipants: 50,
      registered: 32
    },
    {
      title: 'Hackathon 2025',
      description: '24-hour coding marathon to build innovative solutions. Great prizes, networking opportunities, and mentorship from industry experts.',
      date: 'November 25-26, 2025',
      time: '9:00 AM - 9:00 AM',
      location: 'Main Auditorium',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      maxParticipants: 100,
      registered: 78
    },
    {
      title: 'Tech Talk: AI in Web Development',
      description: 'Expert speaker session on integrating artificial intelligence into web applications. Explore the latest trends and practical implementations.',
      date: 'December 5, 2025',
      time: '4:00 PM - 6:00 PM',
      location: 'Seminar Hall 2',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      maxParticipants: 80,
      registered: 45
    },
    {
      title: 'UI/UX Design Masterclass',
      description: 'Comprehensive workshop on user interface and user experience design principles. Learn to create beautiful and functional designs.',
      date: 'December 12, 2025',
      time: '1:00 PM - 4:00 PM',
      location: 'Design Studio',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      maxParticipants: 40,
      registered: 28
    }
  ]

  const pastEvents = [
    {
      title: 'JavaScript Fundamentals Workshop',
      description: 'Introduction to JavaScript programming covering basics to advanced concepts. Students built interactive projects.',
      date: 'September 20, 2025',
      location: 'Computer Lab, Building B',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      participants: 45,
      success: true
    },
    {
      title: 'Summer Hackathon 2025',
      description: 'Two-day intensive coding event with participants building amazing projects. Winners received cash prizes and internship opportunities.',
      date: 'August 15-16, 2025',
      location: 'Main Campus',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
      participants: 85,
      success: true
    },
    {
      title: 'Git & GitHub Workshop',
      description: 'Version control workshop teaching best practices for collaborative development and open source contributions.',
      date: 'July 10, 2025',
      location: 'Computer Lab, Building A',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      participants: 60,
      success: true
    },
    {
      title: 'Career Fair: Tech Industry',
      description: 'Networking event connecting students with top tech companies. Multiple companies participated with recruitment opportunities.',
      date: 'June 22, 2025',
      location: 'Exhibition Hall',
      image: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800',
      participants: 150,
      success: true
    },
    {
      title: 'Mobile App Development Bootcamp',
      description: 'Intensive bootcamp covering React Native and mobile app development fundamentals. Students created their own apps.',
      date: 'May 18, 2025',
      location: 'Computer Lab, Building C',
      image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800',
      participants: 38,
      success: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join us for workshops, hackathons, tech talks, and networking events that shape the future of technology
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-green-600">Upcoming</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center text-gray-700">
                          <Calendar size={18} className="mr-2 text-blue-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin size={18} className="mr-2 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Users size={18} className="mr-2 text-blue-600" />
                          <span>{event.registered} / {event.maxParticipants} registered</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button asChild className="w-full">
                          <Link href="/register">
                            Register Now <ArrowRight size={16} className="ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-gray-600">Completed</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center text-gray-700 text-sm">
                          <Calendar size={16} className="mr-2 text-blue-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                          <MapPin size={16} className="mr-2 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                          <Users size={16} className="mr-2 text-blue-600" />
                          <span>{event.participants} participants</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
