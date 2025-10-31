"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, product management, and user authentication. Built with modern web technologies and best practices.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling features, and comprehensive reporting tools.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express', 'Chart.js', 'Redis'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform for online courses with video streaming, quiz functionality, progress tracking, and certificate generation.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'AWS'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Forecasting App',
      description: 'Real-time weather application with location-based forecasts, weather alerts, and detailed meteorological data visualization.',
      image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'OpenWeather API', 'Redux'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Generator',
      description: 'Dynamic portfolio website generator allowing developers to create professional portfolios with customizable themes and templates.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Tailwind CSS', 'MDX', 'Vercel'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the innovative projects built by our talented members, showcasing real-world applications and cutting-edge technologies
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
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
