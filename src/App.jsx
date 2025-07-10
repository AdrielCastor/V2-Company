import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { 
  Palette, 
  Monitor, 
  Video, 
  MapPin, 
  TrendingUp, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  CheckCircle,
  Users,
  Award,
  Zap
} from 'lucide-react';

function App() {
  const handleContact = () => {
    toast({
      title: "Contato Enviado!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
  };

  const services = [
    {
      icon: Palette,
      title: "Design Gráfico",
      description: "Criamos identidades visuais marcantes que conectam sua marca com o público",
      features: ["Logotipos", "Identidade Visual", "Material Gráfico", "Branding"]
    },
    {
      icon: Monitor,
      title: "Criação de Sites",
      description: "Desenvolvemos sites modernos, responsivos e otimizados para conversão",
      features: ["Sites Responsivos", "E-commerce", "Landing Pages", "SEO"]
    },
    {
      icon: Video,
      title: "Videomaker",
      description: "Produzimos conteúdo audiovisual profissional para suas campanhas",
      features: ["Vídeos Promocionais", "Motion Graphics", "Edição", "Animações"]
    },
    {
      icon: MapPin,
      title: "Google Meu Negócio",
      description: "Otimizamos sua presença local para atrair mais clientes da região",
      features: ["Otimização GMB", "Avaliações", "Posts", "Insights"]
    },
    {
      icon: TrendingUp,
      title: "Gestão de Tráfego",
      description: "Campanhas estratégicas que geram resultados reais e ROI positivo",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "Analytics"]
    }
  ];

  const stats = [
    { icon: Users, number: "200+", label: "Clientes Atendidos" },
    { icon: Award, number: "5", label: "Anos de Experiência" },
    { icon: Zap, number: "98%", label: "Satisfação dos Clientes" },
    { icon: TrendingUp, number: "300%", label: "ROI Médio" }
  ];

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <Toaster />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-effect">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gradient"
            >
              V2 Company
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#home" className="hover:text-purple-400 transition-colors">Início</a>
              <a href="#services" className="hover:text-purple-400 transition-colors">Serviços</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">Sobre</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contato</a>
            </motion.div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transformamos
            <span className="text-gradient block">Ideias em Realidade</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
          >
            Somos dois amigos empreendedores especializados em design, criação de sites, 
            produção audiovisual e marketing digital. Juntos, criamos soluções que fazem a diferença.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="gradient-purple hover:scale-105 transition-transform pulse-glow text-lg px-8 py-4"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all text-lg px-8 py-4"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Fale Conosco
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas para transformar sua presença digital 
              e impulsionar seus resultados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-purple rounded-full mb-6 group-hover:pulse-glow">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre a <span className="text-gradient">V2 Company</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Somos dois amigos que transformaram a paixão por tecnologia e design 
                em um negócio próspero. Nossa jornada começou com a vontade de ajudar 
                empresas a se destacarem no mundo digital.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Com anos de experiência e centenas de projetos entregues, desenvolvemos 
                uma metodologia única que combina criatividade, estratégia e resultados 
                mensuráveis. Cada projeto é tratado com dedicação e atenção aos detalhes.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-gradient mb-2">5+</div>
                  <div className="text-gray-400">Anos de Parceria</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-lg">
                  <div className="text-2xl font-bold text-gradient mb-2">200+</div>
                  <div className="text-gray-400">Projetos Entregues</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img  
                  alt="Dois empreendedores trabalhando juntos em projetos digitais"
                  className="rounded-2xl shadow-2xl w-full"
                 src="https://images.unsplash.com/photo-1580894899378-92e56886cd4d" />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full gradient-purple rounded-2xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos <span className="text-gradient">clientes dizem</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                company: "Boutique Fashion",
                text: "A V2 Company transformou completamente nossa presença digital. O site ficou incrível e as vendas aumentaram 200%!",
                rating: 5
              },
              {
                name: "João Santos",
                company: "Restaurante Sabor",
                text: "Profissionais excepcionais! O trabalho no Google Meu Negócio trouxe muito mais clientes para nosso restaurante.",
                rating: 5
              },
              {
                name: "Ana Costa",
                company: "Clínica Bem Estar",
                text: "Os vídeos promocionais ficaram sensacionais. A qualidade e criatividade superaram nossas expectativas!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-purple-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos <span className="text-gradient">conversar?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pronto para transformar sua presença digital? Entre em contato conosco 
              e vamos criar algo incrível juntos!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Telefone</div>
                    <div className="text-gray-400">(11) 94439-7218</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">E-mail</div>
                    <div className="text-gray-400">driel4mcastor@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-8">
                  <Button variant="outline" size="icon" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-2xl p-8"
            >
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleContact(); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    placeholder="Conte-nos sobre seu projeto..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full gradient-purple hover:scale-105 transition-transform pulse-glow text-lg py-3"
                >
                  Enviar Mensagem
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-4">V2 Company</div>
              <p className="text-gray-400">
                Transformando ideias em realidade digital através de design, 
                tecnologia e estratégia.
              </p>
            </div>
            
            <div>
              <span className="font-bold text-white mb-4 block">Serviços</span>
              <ul className="space-y-2 text-gray-400">
                <li>Design Gráfico</li>
                <li>Criação de Sites</li>
                <li>Videomaker</li>
                <li>Google Meu Negócio</li>
                <li>Gestão de Tráfego</li>
              </ul>
            </div>
            
            <div>
              <span className="font-bold text-white mb-4 block">Contato</span>
              <ul className="space-y-2 text-gray-400">
                <li>(11) 94439-7218</li>
                <li>driel4mcastor@gmail.com</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 V2 Company. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;