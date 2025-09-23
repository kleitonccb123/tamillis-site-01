import { useState, useEffect } from 'react';
import { Menu, X, Star, ChevronRight, Phone, Instagram, MessageCircle, Award, Heart, Sparkles, MapPin, Mail, Gift, Clock, Calendar } from 'lucide-react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [quizData, setQuizData] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showQuizForm, setShowQuizForm] = useState(false);
  const [showOffer, setShowOffer] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatStep, setChatStep] = useState('menu');
  const [chatMessages, setChatMessages] = useState([]);
const whatsappUrl = "https://wa.me/5573999668197?text=Oi%2C+quero+agendar+meu+hor%C3%A1rio+no+TS+Concept.";
  const services = [{
    title: "Mechas Saudáveis",
    desc: "Luzes radiantes sem danificar os fios – técnica exclusiva para resultados naturais.",
    icon: <Star className="w-8 h-8 stroke-1" />,
    whatsapp: "Quero agendar mechas saudáveis!"
  }, {
    title: "Coloração Exclusiva",
    desc: "Cores vibrantes e duradouras, feitas sob medida para realçar sua personalidade.",
    icon: <Sparkles className="w-8 h-8 stroke-1" />,
    whatsapp: "Quero uma coloração exclusiva!"
  }, {
    title: "Tratamento Restaurador",
    desc: "Recuperação profunda dos fios – cabelos sedosos e fortalecidos em poucas sessões.",
    icon: <Heart className="w-8 h-8 stroke-1" />,
    whatsapp: "Quero tratamento restaurador!"
  }, {
    title: "Consultoria Capilar",
    desc: "Diagnóstico completo e personalizado – descubra o que seu cabelo realmente precisa.",
    icon: <Award className="w-8 h-8 stroke-1" />,
    whatsapp: "Quero consultoria capilar!"
  }];
  const testimonials = [{
    name: "Ariane de Jesus",
    text: "Muito obrigado por esse dia, Tamii! Tu e as meninas aí são todas maravilhosas e me deixaram muito confortável. O trabalho de vocês é excepcional!!! Estou radiante, muito feliz, amei o resultado!",
    rating: 5
  }, {
    name: "Thalyta Martins",
    text: "Eu amei demais! Já possuía altas recomendações sobre o salão, serviço e equipe, mas vocês superaram minhas expectativas. Saí com autoestima renovada e com a percepção de que meu cabelo foi respeitado. Me senti em casa. Voltarei com certeza!",
    rating: 5
  }, {
    name: "Karla Kristinne",
    text: "Apaixonada por esse cabelo! Não é só sobre cabelo, é também elevar nossa autoestima. Sem palavras pra agradecer a você e toda sua equipe, um time de mulheres incríveis. Nunca me senti tão segura pra fazer algo no meu cabelo como no seu salão.",
    rating: 5
  }, {
    name: "Letícia Barbosa",
    text: "Muito obrigada por realizar meu sonho com tanta perfeição. Eu amei! Ainda me adaptando ao novo visual, mas amando. Mulher, toda hora fico olhando pra ver se eu conheço essa pessoa.",
    rating: 5
  }, {
    name: "Catarine Mamedio",
    text: "Você é uma ótima profissional, carinhosa com os clientes! Gente boa demais! Amei fazer meu cabelo com você pela segunda vez... Assim que eu puder, estarei aí pra cuidar dele de novo.",
    rating: 5
  }, {
    name: "Cliente Especial",
    text: "Amei, ameii! Não me canso de falar o quanto amei esse cabelo. Você é maravilhosa! Uma excelente profissional! Que Deus lhe abençoe ainda mais.",
    rating: 5
  }];
   const portfolio = [{
    image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/33bd3eaa-71c6-4d13-75c3-01ee9f604500/public",
    title: "Corte LongBob",
    description: "Estilo moderno e sofisticado"
  }, {
    image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/072540d1-a14a-4d13-3944-eafd2ab1d500/public",
    title: "Iluminada clássica",
    description: "Luzes naturais e elegantes"
  }, {
    image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/febe9727-8d6a-4625-ba1c-d34f6e551500/public",
    title: "Loiro bege dourado",
    description: "Tom sofisticado e luminoso"
  }, {
    image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/19a2af0b-df7a-424f-51c0-d97cc74b6e00/public",
    title: "Loiro dourado",
    description: "Reflexos dourados naturais"
  }, {
    image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/a21e3807-a1f4-473c-6b08-073b3c8cc600/public",
    title: "Morena Iluminada",
    description: "Contorno suave"
  }, {
    image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/6536c476-f409-4e7f-c4d2-7a2d97d60000/public",
    title: "Loiro marrom acobreado",
    description: "Tom rico e sofisticado"
  }]; 
  const chatFAQ = {
    menu: {
      message: "Olá! Precisa agendar ou tirar dúvidas? 😊\nEstou aqui para te ajudar! Escolha uma opção:",
      options: [{
        text: "⏰ Horários disponíveis",
        value: "horarios"
      }, {
        text: "📍 Como chegar",
        value: "localizacao"
      }, {
        text: "📸 Ver meu Instagram",
        value: "instagram"
      }, {
        text: "📱 Falar no WhatsApp",
        value: "whatsapp"
      }]
    },
    horarios: {
      message: "⏰ Funcionamos:\n\n• Terça a Sexta: 9h às 18h\n• Sábado: 9h às 14h\n• Domingos e segundas: Fechado\n\nAgendamento obrigatório!",
      options: [{
        text: "📱 Agendar horário",
        value: "whatsapp"
      }, {
        text: "← Voltar ao menu",
        value: "menu"
      }]
    },
    localizacao: {
      message: "📍 Estamos localizados:\n\nAv. G. Vargas, 96 - Gandu, BA\n\nAtendemos clientes de toda Bahia!\nVale a pena fazer o trajeto 😉",
      options: [{
        text: "🗺️ Ver no mapa",
        value: "mapa"
      }, {
        text: "📱 Pedir informações",
        value: "whatsapp"
      }, {
        text: "← Voltar ao menu",
        value: "menu"
      }]
    },
    tratamentos: {
      message: "💇‍♀️ Nossos tratamentos:\n\n• Mechas personalizadas\n• Coloração exclusiva\n• Tratamentos pré-química\n• Consultoria capilar\n\nTodos com avaliação gratuita!",
      options: [{
        text: "🧪 Fazer teste capilar",
        value: "quiz"
      }, {
        text: "📱 Agendar avaliação",
        value: "whatsapp"
      }, {
        text: "← Voltar ao menu",
        value: "menu"
      }]
    },
    instagram: {
      message: "📸 Siga meu Instagram para ver mais trabalhos:\n\n@tamillissantos\n\nPostagens diárias com transformações incríveis e dicas de cuidados capilares!",
      options: [{
        text: "📱 Abrir Instagram",
        value: "open_instagram"
      }, {
        text: "📱 Falar no WhatsApp",
        value: "whatsapp"
      }, {
        text: "← Voltar ao menu",
        value: "menu"
      }]
    }
  };
  const handleChatOption = value => {
    if (value === 'whatsapp') {
      window.open(whatsappUrl, '_blank');
    } else if (value === 'mapa') {
      window.open('https://maps.google.com/?q=Av.+G.+Vargas,+96,+Gandu,+BA', '_blank');
    } else if (value === 'open_instagram') {
      window.open('https://www.instagram.com/tamillissantos/', '_blank');
    } else if (value === 'quiz') {
      setShowChatbot(false);
      document.getElementById('quiz').scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      setChatStep(value);
    }
  };
  const quizQuestions = [{
    question: "Qual seu tipo de cabelo?",
    options: ["Liso", "Ondulado", "Cacheado", "Crespo"],
    multiple: false
  }, {
    question: "Como está a saúde dos seus fios?",
    options: ["Saudáveis", "Ressecados", "Danificados", "Quebradiços"],
    multiple: false
  }, {
    question: "Qual resultado você busca? (pode escolher mais de uma opção)",
    options: ["Coloração", "Mechas", "Protocolo de tratamento", "Corte personalizado"],
    multiple: true
  }];
  const handleQuizNext = answer => {
    const currentQuestion = quizQuestions[quizStep];
    if (currentQuestion.multiple) {
      const updatedAnswers = selectedAnswers.includes(answer) ? selectedAnswers.filter(item => item !== answer) : [...selectedAnswers, answer];
      setSelectedAnswers(updatedAnswers);
      return;
    }
    setQuizData(prev => ({
      ...prev,
      [quizStep]: answer
    }));
    setSelectedAnswers([]);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setShowQuizForm(true);
    }
  };
  const handleMultipleNext = () => {
    setQuizData(prev => ({
      ...prev,
      [quizStep]: selectedAnswers.join(', ')
    }));
    setSelectedAnswers([]);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setShowQuizForm(true);
    }
  };
  const handleQuizFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = formData.get('whatsapp');
    const result = Object.values(quizData).join(', ');
    window.open(`https://api.whatsapp.com/send/?phone=5573999668197&text=Oi, Tamillis! Sou ${nome} (${whatsapp}). Fiz o teste no seu site e quero agendar minha avaliação. Meu perfil: ${encodeURIComponent(result)}`, '_blank');
    setQuizStep(0);
    setQuizData({});
    setSelectedAnswers([]);
    setShowQuizForm(false);
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      telefone: formData.get('telefone')
    };
    window.open(`https://api.whatsapp.com/send/?phone=5573999668197&text=Olá! Me chamo ${data.nome}, meu email é ${data.email} e telefone ${data.telefone}. Quero agendar e ganhar 10% de desconto no próximo atendimento!`, '_blank');
    e.target.reset();
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const chatTimer = setTimeout(() => setShowChatbot(true), 5000);
    return () => clearTimeout(chatTimer);
  }, []);
  return <div className="min-h-screen bg-gray-800 font-inter"> 
           {/* Announcement Bar */}
           {showOffer && <div className="bg-nude-dark text-warm-white py-4 px-4 text-center relative shadow-lg">
          <div className="text-sm font-medium flex items-center justify-center gap-2">
                       <span className="animate-bounce">🎯</span>
            <strong className="text-yellow-200">Novidade:</strong> Sala de espera para mentoria - 
                       <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=5573999668197&text=Quero fazer parte da sala de espera para mentoria!', '_blank')} className="bg-wine px-3 py-1 rounded-full hover:bg-wine/90 hover:scale-105 font-semibold text-xs transition-all ml-2">
             
              Entre na sala de espera
            </button> 
          </div> 
          <button onClick={() => setShowOffer(false)} className="absolute right-4 top-3 hover:bg-white/20 rounded-full p-1 transition-colors">

            <X className="w-4 h-4" />
          </button>
        </div>} 

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-effect" style={{
      top: showOffer ? '48px' : '0'
    }}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/4c828838-cd59-4dfd-63cf-45fcd913db00/public" alt="Tamillis Santos Logo" className="h-10 w-auto mr-3" />

          </div>
          
          <nav className="hidden md:flex space-x-8">
                       {['Início', 'Serviços', 'Portfólio', 'Quiz', 'Sobre', 'Contato'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-brown hover:text-soft-black hover:underline hover:decoration-wine transition-colors font-medium">
                {item}
              </a>)} 
          </nav>

                            <a href={whatsappUrl} className="hidden md:inline-flex items-center btn-primary rounded-full font-semibold px-6 py-2 text-sm">

            Agendar Avaliação
          </a> 

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>

            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && <div className="md:hidden bg-white border-t">
            {['Início', 'Serviços', 'Portfólio', 'Quiz', 'Sobre', 'Contato'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="block px-4 py-3 text-gray-700 hover:bg-nude-light" onClick={() => setIsMenuOpen(false)}>

                {item}
              </a>)}
          </div>}
      </header>

                {/* Hero Section */}
      <section id="início" className={`min-h-screen relative flex items-center ${showOffer ? 'pt-32' : 'pt-20'}`} style={{
      backgroundImage: `url('https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/e3d460e9-761e-4d19-9e52-f752d376b000/public')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="animate-fade-in text-left"> 
              
              <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-tight">
                Transforme seu cabelo<br />
                <span className="text-yellow-300 text-2xl sm:text-3xl lg:text-4xl font-bold">com saúde, beleza e confiança</span>
              </h1>
              <blockquote className="text-base lg:text-lg text-gray-200 mb-8 leading-relaxed italic border-l-4 border-wine pl-4 lg:pl-6 font-medium">
                "No nosso salão, a beleza é consequência de técnica, verdade e experiência."
              </blockquote>
              <a href={whatsappUrl} className="inline-flex items-center bg-[#C9B6A1] hover:bg-yellow-500 text-warm-white rounded-full font-bold text-base lg:text-lg px-8 lg:px-12 py-4 lg:py-5 shadow-lg transition-all hover:scale-105 hover:shadow-xl">

                Quero minha transformação agora <ChevronRight className="ml-2 lg:ml-3 w-5 lg:w-6 h-5 lg:h-6" />
              </a>
            </div>
          </div>
        </div> 
      </section> 

      {/* Services */}
           <section id="serviços" className="py-20 bg-gray-800"> 
        <div className="container mx-auto px-4">
                   <h2 className="font-playfair text-4xl font-bold text-center mb-4 text-brown"> 
            Nossos Serviços
          </h2>
                            <div className="text-center text-brown-light mb-16 max-w-2xl mx-auto"> 
            Oferecemos tratamentos personalizados com as melhores técnicas do mercado
            <div className="w-12 h-px bg-wine opacity-30 mx-auto mt-4"></div>
          </div> 
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => <div key={idx} className="bg-gradient-to-br from-nude-light to-brown-light p-8 rounded-3xl text-center hover-scale group">
                               <div className="text-brown mb-6 flex justify-center group-hover:scale-110 transition-transform"> 
                  {service.icon}
                </div>
                                              <h3 className="font-playfair text-xl font-semibold mb-4 text-brown">{service.title}</h3> 
                <div className="text-brown-light leading-relaxed mb-4">{service.desc}</div> 
                                              <a href={`https://api.whatsapp.com/send/?phone=5573999668197&text=${encodeURIComponent(service.whatsapp)}`} className="inline-flex items-center bg-[#C9B6A1] hover:bg-[#C9B6A1]/90 text-warm-white px-4 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105">
                 
                  Quero este serviço <ChevronRight className="ml-1 w-4 h-4" />
                </a> 
              </div>)}
          </div>
        </div>
      </section>

      {/* Quiz */}
           <section id="quiz" className="py-20 bg-gray-800 relative overflow-hidden"> 
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-wine rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-brown rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h2 className="font-playfair text-5xl font-bold mb-6 text-brown">
            Descubra o tratamento ideal para seus fios
          </h2>
          <div className="text-brown-light mb-4 text-xl font-medium">
            ✨ Teste personalizado em 3 minutos
          </div>
          <div className="text-brown-light mb-12 text-lg">
            Responda perguntas rápidas e receba sua recomendação exclusiva no WhatsApp
          </div> 
                                              <div className="bg-gradient-to-br from-warm-white via-nude-light/30 to-warm-white rounded-3xl p-10 shadow-2xl border border-brown-light/20">
            {!showQuizForm ? <div>

                <div className="mb-8">
                  
                  <span className="text-sm text-brown font-semibold bg-nude-light px-3 py-1 rounded-full">
                    Pergunta {quizStep + 1} de {quizQuestions.length}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-brown leading-tight">
                  {quizQuestions[quizStep].question}
                </h3>
                <div className="text-brown-light mb-8 text-lg">
                  Escolha a opção que melhor descreve seu cabelo
                </div>
                
                                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quizQuestions[quizStep].options.map((option, idx) => {
                const isSelected = selectedAnswers.includes(option);
                return <button key={idx} onClick={() => handleQuizNext(option)} className={`group p-6 border-2 rounded-2xl transition-all duration-300 text-lg font-semibold hover:shadow-lg hover:scale-105 transform text-white ${quizQuestions[quizStep].multiple && isSelected ? 'border-wine bg-wine scale-105' : 'border-brown-light hover:border-wine'}`} style={{
                  backgroundColor: quizQuestions[quizStep].multiple && isSelected ? '#8B4B6B' : '#C9B6A1'
                }}>

                        <span className="transition-colors">
                          {quizQuestions[quizStep].multiple && isSelected && '✓ '}
                          {option}
                        </span>
                      </button>;
              })} 
                </div>
                
                {quizQuestions[quizStep].multiple && <div className="mt-8 flex justify-between items-center">
                    <div className="text-brown-light text-sm">
                      {selectedAnswers.length > 0 ? `${selectedAnswers.length} selecionado(s)` : 'Selecione pelo menos uma opção'}
                    </div>
                    <button onClick={handleMultipleNext} disabled={selectedAnswers.length === 0} className="bg-wine hover:bg-wine/90 disabled:bg-gray-400 text-white px-8 py-3 rounded-full font-bold transition-all disabled:cursor-not-allowed">

                      Continuar
                    </button>
                  </div>} 
              </div> : <div className="text-center" style={{
            backgroundColor: '#4A4A4A'
          }}>
                <div className="bg-gradient-to-br from-gray-700 to-gray-600 text-white p-5 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg animate-pulse">
                  <Star className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Perfeito! Suas respostas foram registradas</h3>
                <div className="bg-gray-600 p-4 rounded-2xl mb-8 border border-gray-500">
                  <p className="text-white font-semibold text-lg">
                    Para receber sua recomendação personalizada e exclusiva, 
                    precisamos apenas de suas informações:
                  </p>
                </div> 
                
                <form onSubmit={handleQuizFormSubmit} className="space-y-6 max-w-md mx-auto">
                  <div className="relative">
                    <input type="text" name="nome" placeholder="Seu nome completo" className="w-full p-5 rounded-2xl border-2 border-gray-500 focus:border-gray-400 outline-none text-lg bg-gray-700 text-white shadow-inner transition-all focus:shadow-lg" required />

                  </div>
                  
                  <div className="relative">
                    <input type="tel" name="whatsapp" placeholder="Seu WhatsApp (com DDD)" className="w-full p-5 rounded-2xl border-2 border-gray-500 focus:border-gray-400 outline-none text-lg bg-gray-700 text-white shadow-inner transition-all focus:shadow-lg" required />

                  </div>
                  
                  <button type="submit" className="w-full bg-white hover:bg-gray-100 text-gray-800 rounded-2xl font-bold py-5 text-lg transition-all hover:scale-105 hover:shadow-xl transform duration-300">

                    Receber Minha Recomendação Exclusiva
                  </button>
                  
                  <div className="text-xs text-gray-300 text-center bg-gray-600 p-3 rounded-lg">
                    Resultado personalizado • Dados protegidos • Enviado no WhatsApp
                  </div>
                </form>  
                
                               <button onClick={() => {
              setShowQuizForm(false);
              setSelectedAnswers([]);
            }} className="text-brown-light hover:text-brown text-sm mt-4">

                  ← Voltar às perguntas
                </button> 
              </div>}
          </div> 
        </div>
      </section>

      {/* Portfolio */}
           <section id="portfólio" className="py-20 bg-gray-800"> 
        <div className="container mx-auto px-4">
                     <h2 className="font-playfair text-4xl font-bold text-center mb-4 text-brown"> 
            Portfólio
          </h2>
                   <div className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Veja alguns dos nossos trabalhos e transformações incríveis
            <div className="w-12 h-px bg-wine opacity-30 mx-auto mt-4"></div>
          </div> 
          <div className="grid grid-cols-3 gap-1 md:gap-2">
            {portfolio.map((item, idx) => <div key={idx} className="relative overflow-hidden bg-gray-100 aspect-square group cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>)}
          </div> 
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-nude-light to-brown-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <img src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/4c828838-cd59-4dfd-63cf-45fcd913db00/public" alt="Tamillis Santos" className="rounded-3xl shadow-2xl w-full" />

            </div>
            <div className="animate-fade-in">
                           <h2 className="font-playfair text-4xl font-bold mb-6 text-brown"> 
                Tamillis Santos
              </h2>
                                                     <div className="text-lg text-brown-light mb-6 leading-relaxed"> 
                Desde o início, Tamillis sempre acreditou que beleza vai muito além da aparência — é sobre autoestima, confiança e transformação.
              </div>
              <div className="text-brown-light mb-6 leading-relaxed"> 
                O salão nasceu do desejo genuíno de cuidar, acolher e realçar a essência única de cada mulher.
                Com um olhar sensível e técnico, cada atendimento é pensado para unir arte, verdade e experiência, criando resultados que valorizam a individualidade.
              </div>
              <div className="text-brown-light mb-8 leading-relaxed"> 
                <em>"No meu salão, cada mulher é especial. A beleza verdadeira floresce quando respeitamos quem você é e cuidamos com carinho de cada detalho."</em>
              </div>  
                           <a href={whatsappUrl} className="inline-flex items-center text-brown font-semibold hover:text-opacity-80 text-lg">
                 
                Quero conhecer seu trabalho <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

                     {/* Location */}
      <section className="py-20 bg-gray-800"> 
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4 text-brown">
            Nossa Localização
          </h2>
          <div className="text-center text-brown-light mb-16">
            Venha nos visitar em nosso espaço aconchegante
            <div className="w-12 h-px bg-wine opacity-30 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Map */}
                       <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.8!2d-39.4868478!3d-13.7457775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzQ0LjgiUyAzOcKwMjknMTIuNyJX!5e0!3m2!1sen!2sbr!4v1635000000000!5m2!1sen!2sbr" width="100%" height="600" style={{
              border: 0
            }} allowFullScreen="" loading="lazy" className="w-full h-full" title="Localização Tamillis Santos - Av. G. Vargas, 96, Gandu, BA">
              </iframe> 
              <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Location Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-nude-light to-brown-light p-8 rounded-3xl">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-wine mr-3" />
                  <h3 className="font-playfair text-2xl font-bold text-brown">Endereço</h3>
                </div>
                             <div className="text-brown-light text-lg mb-6">
                  <strong>Av. G. Vargas, 96</strong><br />
                  Gandu, Bahia - Brasil<br />
                  CEP: 45450-000
                </div> 
                
                <a href="https://www.google.com/maps/dir/?api=1&destination=-13.7457775,-39.4868478" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#C9B6A1] hover:bg-[#C9B6A1]/90 text-warm-white rounded-full font-bold px-8 py-4 shadow-lg transition-all hover:scale-105 hover:shadow-xl">

                  <MapPin className="mr-3 w-5 h-5" />
                  Ver no Google Maps
                </a>
              </div>

              <div className="bg-gradient-to-br from-brown-light to-nude-light p-8 rounded-3xl text-center">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-wine mr-3" />
                  <h3 className="font-playfair text-xl font-bold text-brown">Horário de Funcionamento</h3>
                </div>
                               <div className="text-brown-light space-y-2">
                  <div><strong>Terça a Sexta:</strong> 9h às 18h</div>
                  <div><strong>Sábado:</strong> 9h às 14h</div>
                  <div><strong>Domingos e segundas:</strong> Fechado</div>
                </div> 
                <div className="mt-4 text-sm text-wine font-semibold">
                  📅 Agendamento obrigatório
                </div>
              </div>

                           <div className="bg-wine text-warm-white p-6 rounded-3xl text-center">
                <div className="text-lg font-bold mb-2">
                  🌟 Atendemos clientes de toda Bahia
                </div>
                <div className="text-nude-light">
                  De Gandu para toda a região, levando beleza com propósito
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section> 

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-nude-light to-brown-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-playfair text-4xl font-bold text-center mb-4 text-soft-black">
            Depoimentos
          </h2>
                            <div className="text-center text-brown-light mb-16"> 
            Veja o que nossas clientes falam sobre nosso trabalho
            <div className="w-12 h-px bg-wine opacity-30 mx-auto mt-4"></div>
          </div> 
                   <div className="bg-warm-white rounded-3xl p-10 shadow-2xl text-center"> 
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
            </div>
                                  <div className="text-xl text-brown-light mb-8 italic leading-relaxed"><span className="text-wine text-2xl leading-none">"</span>{testimonials[currentSlide].text}<span className="text-wine text-2xl leading-none">"</span></div> 
            <div className="font-semibold text-brown text-lg">{testimonials[currentSlide].name}</div> 
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, idx) => <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-brown' : 'bg-brown-light/30'}`} />)}
            </div>
          </div>
        </div>
      </section>

           {/* Lead Capture */}
      <section id="contato" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gradient-to-br from-nude-light to-brown-light rounded-3xl p-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-brown text-warm-white p-4 rounded-full">
                <Gift className="w-8 h-8" />
              </div>
            </div>
            <h2 className="font-playfair text-4xl font-bold mb-6 text-brown">
              Oferta Especial
            </h2>
            <div className="text-brown-light mb-10 text-lg leading-relaxed">
              Agende hoje seu atendimento e ganhe <strong>10% de desconto</strong> no seu próximo retorno!<br />
              Transformação com cuidado e economia.
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-6 max-w-md mx-auto">
              <input type="text" name="nome" placeholder="Seu nome completo" className="w-full p-4 rounded-2xl border-2 border-brown-light focus:border-wine outline-none text-lg" required />

              <input type="email" name="email" placeholder="Seu melhor email" className="w-full p-4 rounded-2xl border-2 border-brown-light focus:border-wine outline-none text-lg" required />

              <input type="tel" name="telefone" placeholder="Seu WhatsApp com DDD" className="w-full p-4 rounded-2xl border-2 border-brown-light focus:border-wine outline-none text-lg" required />

              <button type="submit" className="w-full btn-primary rounded-2xl font-bold text-lg py-4">

                Quero Agendar e Ganhar Desconto
              </button>
            </form>
            
            <div className="mt-12">
              <div className="bg-wine/20 backdrop-blur-sm rounded-2xl p-6 inline-block">
                <span className="text-lg text-brown font-bold mb-2 block">
                  <span className="inline-block w-2 h-2 bg-wine rounded-full mr-2"></span>Mais de 1.800 mulheres já conquistaram
                </span>
                <span className="text-brown-light block font-medium">
                  fios saudáveis e radiantes. Venha viver essa transformação.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Footer */}
           <footer className="bg-brown text-warm-white py-16"> 
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
                           <h3 className="font-playfair text-2xl font-bold mb-4 text-warm-white">Tamillis Santos</h3> 
                                        <div className="text-lg text-nude-light mb-2">Beleza & Saúde Capilar</div> 
                           <div className="text-brown-light leading-relaxed"> 
                Transformando a beleza dos seus fios com técnicas exclusivas e atendimento personalizado.
              </div> 
            </div>
            <div>
              <h4 className="font-playfair text-xl font-semibold mb-4">Menu Rápido</h4>
              <div className="space-y-2">
                {['Início', 'Serviços', 'Portfólio', 'Quiz', 'Sobre'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="block text-brown-light hover:text-warm-white transition-colors"> 
                    {item}
                  </a>)}
              </div>
            </div>
            <div>
              <h4 className="font-playfair text-xl font-semibold mb-4">Contato</h4>
              <div className="space-y-4">
                <a href={whatsappUrl} className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors">

                  <Phone className="w-5 h-5" />
                  <span>(73) 99972-0561</span>
                </a>
                               <a href="https://www.instagram.com/tamillissantos/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-pink-400 hover:text-pink-300 transition-colors">

                  <Instagram className="w-5 h-5" />
                  <span>@tamillissantos</span>
                </a> 
                               <div className="flex items-center space-x-3 text-brown-light"> 
                  <Mail className="w-5 h-5" />
                  <span>tamy.angular@gmail.com</span>
                </div>
                               <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>Av. G. Vargas, 96 - Gandu, BA</span>
                </div> 
              </div>
            </div>
          </div>
          
                            <div className="text-center text-brown-light text-sm border-t border-brown-light/30 pt-8"> 
            <span>&copy; 2024 Tamillis Santos. Todos os direitos reservados.</span>
          </div> 
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={whatsappUrl} className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover-scale z-50">

        <MessageCircle className="w-7 h-7" />
      </a>

           {/* Chatbot */}
      {showChatbot && <div className="fixed bottom-24 right-6 w-80 bg-white rounded-3xl shadow-2xl z-50 border border-gray-200">
          <div className="bg-wine text-white p-4 rounded-t-3xl flex justify-between items-center">
            <h3 className="font-semibold">💬 Chat TS Concept</h3>
            <button onClick={() => setShowChatbot(false)} className="hover:bg-white/20 rounded-full p-1">

              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-2xl text-sm">
                {chatFAQ[chatStep].message}
              </div>
              
              <div className="space-y-2">
                {chatFAQ[chatStep].options.map((option, idx) => <button key={idx} onClick={() => handleChatOption(option.value)} className="w-full text-left p-3 bg-wine/10 hover:bg-wine/20 rounded-xl text-sm transition-colors border border-wine/20">

                    {option.text}
                  </button>)}
              </div>
            </div>
          </div>
        </div>}

      <button onClick={() => setShowChatbot(!showChatbot)} className="fixed bottom-24 right-6 bg-wine text-white p-3 rounded-full shadow-lg hover:bg-wine/90 transition-all hover:scale-110 z-40">

        <MessageCircle className="w-6 h-6" />
      </button>  
    </div>;
}
export default App;
