import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время!"
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: "Cake",
      title: "Организация праздника",
      description: "Полное сопровождение вашего праздника от идеи до реализации",
      color: "bg-secondary"
    },
    {
      icon: "Sparkles",
      title: "Аниматоры и шоу",
      description: "Профессиональные аниматоры, интерактивные программы и шоу",
      color: "bg-accent"
    },
    {
      icon: "Palette",
      title: "Декор и оформление",
      description: "Яркое оформление шарами, декором и тематическими элементами",
      color: "bg-muted"
    },
    {
      icon: "Camera",
      title: "Фото и видео",
      description: "Профессиональная фото и видеосъемка ваших счастливых моментов",
      color: "bg-secondary"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/22f14d67-65b8-4fba-8ffb-2019aa51ae4c/files/0815e6ce-0c6c-4c04-a05e-0d6d091c4e46.jpg",
      title: "День рождения 5 лет",
      description: "Тематика: Супергерои"
    },
    {
      image: "https://cdn.poehali.dev/projects/22f14d67-65b8-4fba-8ffb-2019aa51ae4c/files/413bfa5e-8321-45e2-aff6-4ca333c70adb.jpg",
      title: "Выпускной в саду",
      description: "60 счастливых детей"
    },
    {
      image: "https://cdn.poehali.dev/projects/22f14d67-65b8-4fba-8ffb-2019aa51ae4c/files/14cb73a5-efa2-403e-9a0d-121e0f3cca42.jpg",
      title: "Праздник принцессы",
      description: "Волшебная атмосфера"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Потрясающий праздник для моей дочки! Дети были в восторге, а аниматоры просто волшебники!",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      text: "Организация на высшем уровне! Все продумано до мелочей. Спасибо за незабываемый день!",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      text: "Лучший праздник для сына! Профессиональный подход и креативные идеи. Рекомендую всем!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl md:text-4xl font-bold text-primary">🎈🎈🎈 Vanilla loft</div>
          
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a href="#home" onClick={handleNavClick} className="text-lg hover:text-primary transition-colors py-2">Главная</a>
              <a href="#about" onClick={handleNavClick} className="text-lg hover:text-primary transition-colors py-2">Обо мне</a>
              <a href="#services" onClick={handleNavClick} className="text-lg hover:text-primary transition-colors py-2">Услуги</a>
              <a href="#portfolio" onClick={handleNavClick} className="text-lg hover:text-primary transition-colors py-2">Портфолио</a>
              <a href="#testimonials" onClick={handleNavClick} className="text-lg hover:text-primary transition-colors py-2">Отзывы</a>
              <a href="#contact" onClick={handleNavClick} className="text-lg hover:text-primary transition-colors py-2">Контакты</a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl animate-float">🎈</div>
        <div className="absolute top-40 right-20 text-6xl animate-float" style={{ animationDelay: '0.5s' }}>🎉</div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-float" style={{ animationDelay: '1s' }}>⭐</div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Создаём волшебство<br />
            <span className="text-primary">для ваших детей!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Незабываемые праздники, яркие эмоции и счастливые улыбки
          </p>
          <Button size="lg" className="text-lg px-8 py-6 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <a href="#contact">Заказать праздник 🎊</a>
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/22f14d67-65b8-4fba-8ffb-2019aa51ae4c/files/413bfa5e-8321-45e2-aff6-4ca333c70adb.jpg" 
                alt="Организатор праздников"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Привет! Я Мария 👋
              </h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Я профессиональный организатор детских праздников с 8-летним опытом работы. 
                Моя миссия — создавать волшебные моменты, которые запомнятся на всю жизнь!
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Более 500 счастливых праздников, тысячи довольных родителей и детей. 
                Каждый праздник для меня — это уникальная история, наполненная радостью и творчеством.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="font-semibold">500+ праздников</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" size={24} />
                  <span className="font-semibold">8 лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" className="text-primary" size={24} />
                  <span className="font-semibold">100% довольных клиентов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши услуги 🎪
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Всё для идеального праздника вашего ребёнка
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={service.icon as any} size={40} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Портфолио 📸
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Моменты счастья, которые мы создали
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Отзывы 💬
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Что говорят наши клиенты
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="animate-scale-in hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Свяжитесь со мной 📞
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Давайте создадим незабываемый праздник вместе!
          </p>
          
          <Card className="animate-fade-in-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold">Ваше имя</label>
                  <Input 
                    placeholder="Как вас зовут?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Расскажите о празднике</label>
                  <Textarea 
                    placeholder="Дата, возраст ребёнка, пожелания..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку 🎉
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Phone" className="text-primary" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Mail" className="text-primary" />
                  <span className="text-lg">hello@kids-party.ru</span>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-primary/5 text-center">
        <p className="text-muted-foreground">
          © 2025 Vanilla loft. Создаём счастливые моменты! 🎈
        </p>
      </footer>
    </div>
  );
};

export default Index;