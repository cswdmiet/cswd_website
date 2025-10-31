"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { UserPlus, Calendar } from 'lucide-react'

export default function RegisterPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    event: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Registration successful!",
      description: "You'll receive a confirmation email shortly.",
    })

    setFormData({
      name: '',
      email: '',
      phone: '',
      college: '',
      year: '',
      event: ''
    })
    setIsSubmitting(false)
  }

  const upcomingEvents = [
    'Web Development Workshop - Nov 15, 2025',
    'Hackathon 2025 - Nov 25-26, 2025',
    'Tech Talk: AI in Web Development - Dec 5, 2025',
    'UI/UX Design Masterclass - Dec 12, 2025'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Register Now</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join CSWD and be part of an amazing community of developers and innovators
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <UserPlus className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Become a Member</h3>
                <p className="text-gray-600">
                  Get access to exclusive workshops, networking events, and resources to accelerate your learning journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-cyan-600">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="text-cyan-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Register for Events</h3>
                <p className="text-gray-600">
                  Sign up for upcoming events and secure your spot in our workshops, hackathons, and tech talks.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl">Registration Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="college">College/University *</Label>
                    <Input
                      id="college"
                      name="college"
                      type="text"
                      required
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="Your institution name"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="year">Academic Year *</Label>
                    <Select
                      required
                      value={formData.year}
                      onValueChange={(value) => handleSelectChange('year', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st">1st Year</SelectItem>
                        <SelectItem value="2nd">2nd Year</SelectItem>
                        <SelectItem value="3rd">3rd Year</SelectItem>
                        <SelectItem value="4th">4th Year</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="event">Select Event (Optional)</Label>
                    <Select
                      value={formData.event}
                      onValueChange={(value) => handleSelectChange('event', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Choose an event" />
                      </SelectTrigger>
                      <SelectContent>
                        {upcomingEvents.map((event, index) => (
                          <SelectItem key={index} value={event}>
                            {event}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    By registering, you agree to receive updates about CSWD events and activities. You can unsubscribe at any time.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
