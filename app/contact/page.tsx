"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // await new Promise(resolve => setTimeout(resolve, 1000))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        })
        // alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.error || 'Failed to send message.');
      }
    } catch (err) {
        toast({
          title: "Message not sent !",
          description: "some error occurred.",
        })
      // alert('Something went wrong. Try again later.');
      console.error('Error sending message:', err);
    } finally {
      setIsSubmitting(false);
    }

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'cswdclub@gmail.com',
      link: 'cswdclub@gmail.com'
    },
    // {
    //   icon: Phone,
    //   title: 'Phone',
    //   details: '+1 234 567 8900',
    //   link: 'tel:+12345678900'
    // },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Computer Science & Engineering Building',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <a
                    // href={info.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {info.details}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Us</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square">
                <img
                  src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Campus location"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We're located in the Computer Science Building on campus. Drop by during our office hours or attend one of our events to meet the team and learn more about what we do.
                </p>
                {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 2:00 PM - 5:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
