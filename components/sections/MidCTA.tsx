import { ArrowRight } from 'lucide-react'

export default function MidCTA() {
  return (
    <section className="bg-brand-orange/8 border-y border-brand-orange/20 py-12">
      <div className="container-brand flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-league font-bold text-white text-xl">
            Não sabe por onde começar?
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Em 30 minutos mostramos o que faz mais sentido pro seu negócio.
          </p>
        </div>

        <div>
          <a
            href="https://wa.me/5581992665890?text=Quero%20uma%20consultoria%20gratuita"
            target="_blank"
            className="bg-brand-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-orange-light transition-colors whitespace-nowrap flex items-center gap-2"
          >
            Falar no WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
