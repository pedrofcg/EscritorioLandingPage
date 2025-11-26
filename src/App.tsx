import LeadForm from './components/LeadForm';
import { Calculator, TrendingUp, ShieldCheck, Users, Phone, Mail, MapPin, ArrowRight, Check } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              CG
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight text-primary">Organização<br />Caires Gouveia</h1>
            </div>
          </div>
          <a href="#contato" className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
            Fale Conosco <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200 -z-10"></div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-2">
              Contabilidade Especializada
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
              Simplifique a gestão da sua empresa
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Deixe a burocracia com a Organização Caires Gouveia e foque no que realmente importa: o crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-5 h-5 text-accent" />
                <span>Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Check className="w-5 h-5 text-accent" />
                <span>Soluções Digitais</span>
              </div>
            </div>
          </div>
          <div className="relative" id="contato">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl -z-10 transform rotate-1"></div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nossos Serviços</h2>
            <p className="text-slate-600">Soluções completas para atender todas as necessidades contábeis e fiscais da sua empresa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calculator className="w-8 h-8 text-accent" />,
                title: "Contabilidade Consultiva",
                description: "Muito mais que guias de impostos. Análises financeiras para apoiar suas decisões."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-accent" />,
                title: "Planejamento Tributário",
                description: "Estratégias legais para reduzir sua carga tributária e aumentar a lucratividade."
              },
              {
                icon: <Users className="w-8 h-8 text-accent" />,
                title: "Departamento Pessoal",
                description: "Gestão completa de folha de pagamento, benefícios e obrigações trabalhistas."
              }
            ].map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a Organização Caires Gouveia?</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Combinamos tradição e confiança com tecnologia moderna para entregar resultados reais para nossos clientes.
              </p>
              <div className="space-y-4">
                {[
                  "Equipe altamente qualificada e atualizada",
                  "Atendimento ágil via WhatsApp e E-mail",
                  "Segurança total dos seus dados",
                  "Relatórios claros e objetivos"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <ShieldCheck className="w-12 h-12 text-accent" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Compromisso com a Excelência</h3>
                  <p className="text-slate-300 text-sm">Nossa missão é garantir a saúde financeira do seu negócio através de uma contabilidade transparente e eficiente.</p>
                </div>
              </div>
              <div className="h-px bg-white/10 my-6"></div>
              <p className="text-center font-semibold">Junte-se a centenas de empresas satisfeitas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Organização Caires Gouveia</h4>
              <p className="text-sm max-w-xs">
                Excelência em serviços contábeis para impulsionar o seu negócio.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> (62) 98405-7615
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> cairesgouveia.dpessoal@hotmail.com
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" /> Rua 228, 53 - Setor Coimbra
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Horário de Atendimento</h4>
              <p className="text-sm">
                Segunda a Sexta<br />
                08:00 às 18:00
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Organização Caires Gouveia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
