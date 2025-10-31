import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Lightbulb, Users, Award, BookOpen, Rocket } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collective learning to achieve greater goals.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from code quality to event organization.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and we are committed to staying current with the latest trends.'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We encourage creative thinking and innovative solutions to real-world problems.'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Active Members' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Events Organized' },
    { number: '15+', label: 'Awards Won' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About CSWD</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn more about our mission, vision, and the values that drive us forward
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Computer Society of Web Development (CSWD) is a vibrant student-led organization dedicated to fostering a passion for technology and web development among college students.
                </p>
                <p>
                  Founded with the vision of bridging the gap between academic learning and industry requirements, we provide a platform for students to learn, collaborate, and innovate together.
                </p>
                <p>
                  Our society brings together aspiring developers, designers, and tech enthusiasts who share a common goal: to build amazing digital experiences and prepare for successful careers in technology.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="border-t-4 border-t-blue-600 hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading college society that bridges the gap between academic learning and industry demands, creating world-class web developers who can contribute meaningfully to the global tech ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-cyan-600 hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-cyan-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide hands-on learning experiences, foster innovation, and create opportunities for students to develop both technical and professional skills through workshops, projects, and industry collaborations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-600 hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="text-green-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Aim</h3>
                <p className="text-gray-600 leading-relaxed">
                  To cultivate a collaborative environment where students learn cutting-edge technologies, work on real-world projects, and build lasting connections with peers and industry professionals.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-blue-100">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
