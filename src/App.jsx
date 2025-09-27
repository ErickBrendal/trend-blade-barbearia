import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, MapPin, Clock, Phone, Instagram, Calendar, Wifi, CreditCard } from 'lucide-react'
import logoImage from './assets/IMG_7057.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const services = [
    { name: 'Corte', price: 'R$ 45', duration: '30min' },
    { name: 'Barba', price: 'R$ 40', duration: '30min' },
    { name: 'Corte + Barba', price: 'R$ 75', duration: '1h' },
    { name: 'Corte + Sobrancelha', price: 'R$ 55', duration: '30min' },
    { name: 'Corte + Hidratação', price: 'R$ 60', duration: '30min' },
    { name: 'Pacote Completo', price: 'R$ 80', duration: '1h', description: 'Cabelo + Barba + Sobrancelha' }
  ]

  const testimonials = [
    { name: 'Carlos Silva', rating: 5, text: 'Atendimento impecável! O melhor corte que já fiz em Guarulhos.' },
    { name: 'Roberto Santos', rating: 5, text: 'Ambiente aconchegante e profissional muito dedicado. Recomendo!' },
    { name: 'André Costa', rating: 5, text: 'Profissional caprichoso e atencioso. Sempre saio satisfeito!' }
  ]

  const amenities = [
    { icon: Wifi, text: 'Wi-Fi Gratuito' },
    { icon: CreditCard, text: 'Cartão de Crédito' }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={logoImage} alt="Trend Blade Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-yellow-500">Trend Blade</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['home', 'sobre', 'servicos', 'depoimentos', 'contato'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-yellow-500 transition-colors ${
                    activeSection === section ? 'text-yellow-500' : 'text-white'
                  }`}
                >
                  {section === 'servicos' ? 'Serviços' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Estilo &amp; 
                <span className="text-yellow-500 block">Sofisticação</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Mais que um corte, uma experiência premium. Transformamos seu visual com técnica, 
                estilo e o melhor atendimento de Guarulhos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-lg font-semibold">5.0/5</span>
                  <span className="text-gray-400">(145 avaliações)</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={() => scrollToSection('servicos')}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Ver Serviços
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                  onClick={() => scrollToSection('contato')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Entre em Contato
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-yellow-500/20 to-transparent border-2 border-yellow-500/30 flex items-center justify-center">
                <img src={logoImage} alt="Trend Blade Logo" className="w-72 h-72 object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Sobre a <span className="text-yellow-500">Trend Blade</span></h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Localizada no coração de Guarulhos, a Trend Blade Barbearia nasceu da paixão por transformar 
              o cuidado masculino em uma experiência única. Combinamos técnicas tradicionais com tendências 
              modernas, criando um ambiente onde estilo, conforto e qualidade se encontram.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500">Experiência Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Cada cliente recebe atenção personalizada em um ambiente sofisticado e aconchegante.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500">Técnica Apurada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Profissionais dedicados e caprichosos, sempre atualizados com as últimas tendências.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="text-yellow-500">Comodidade Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Wi-Fi gratuito, cartão de crédito e um ambiente aconchegante para sua conveniência.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos <span className="text-yellow-500">Serviços</span></h2>
            <p className="text-xl text-gray-300">Qualidade e estilo em cada detalhe</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white">{service.name}</CardTitle>
                    <Badge variant="secondary" className="bg-yellow-500 text-black">
                      {service.price}
                    </Badge>
                  </div>
                  {service.description && (
                    <CardDescription className="text-gray-400">{service.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Agende seu horário pelo Booksy ou WhatsApp</p>
            <a 
              href="https://booksy.com/pt-br/270879_trend-blade-barbearia_barbearias_931546_guarulhos#ba_s=seo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-md transition-colors"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Agora
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Comodidades &amp; <span className="text-yellow-500">Diferenciais</span></h3>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {amenities.map((amenity, index ) => (
              <div key={index} className="flex items-center space-x-3 text-gray-300">
                <amenity.icon className="h-6 w-6 text-yellow-500" />
                <span>{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que nossos <span className="text-yellow-500">clientes</span> dizem</h2>
            <p className="text-xl text-gray-300">145 avaliações com nota 5.0/5</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-yellow-500/20">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-white text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em <span className="text-yellow-500">Contato</span></h2>
            <p className="text-xl text-gray-300">Estamos prontos para cuidar do seu estilo</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-500">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-gray-300">Av Papa Pio XII, nº 218  
Guarulhos, São Paulo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-gray-300">
                      <a href="https://wa.me/5511951231443" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                        (11 ) 95123-1443
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Instagram</h4>
                    <p className="text-gray-300">@trendbladebarbearia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Horário de Funcionamento</h4>
                    <p className="text-gray-300">
                      Terça a Sexta: 9h às 19h  

                      Sábado: 8h às 17h  

                      Segunda e Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-500">Agende seu Horário</h3>
              <div className="space-y-4">
                <a 
                  href="https://booksy.com/pt-br/270879_trend-blade-barbearia_barbearias_931546_guarulhos#ba_s=seo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-md transition-colors"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar pelo Booksy
                </a>
                <a 
                  href="https://wa.me/5511951231443" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-semibold border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-md transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
              <div className="mt-8 p-6 bg-black rounded-lg border border-yellow-500/20">
                <h4 className="font-semibold mb-4 text-yellow-500">Por que escolher a Trend Blade?</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Profissionais especializados e dedicados</li>
                  <li>✓ Ambiente aconchegante e sofisticado</li>
                  <li>✓ Técnicas modernas e tradicionais</li>
                  <li>✓ Atendimento personalizado</li>
                  <li>✓ Localização privilegiada em Guarulhos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-yellow-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={logoImage} alt="Trend Blade Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-yellow-500">Trend Blade Barbearia</span>
          </div>
          <p className="text-gray-400">
            © 2024 Trend Blade Barbearia. Estilo e sofisticação em Guarulhos.
          </p>
        </div>
      </footer>
    </div>
   )
}

export default App
