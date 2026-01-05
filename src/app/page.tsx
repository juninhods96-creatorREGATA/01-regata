"use client"

import { ShoppingCart, Check, Shield, Truck, Star, Flame, Heart, TrendingDown, Clock, Lock, CreditCard, Package, Zap, DollarSign, Smartphone, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export default function Home() {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Estado para controlar o carrossel de depoimentos
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0)
  const testimonialImages = [
    "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/dbcb6d54-734f-4779-a564-38e6ee6c8c99.jpg",
    "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/96886d97-1488-440f-978a-2d65a4d2bf0e.webp"
  ]

  const nextTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev + 1) % testimonialImages.length)
  }

  const prevTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Fixo - Mobile Optimized */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-600" />
            <span className="text-sm font-bold text-gray-900">ThermoShape</span>
          </div>
          <Button 
            onClick={scrollToCheckout}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-6 py-5 text-base shadow-lg"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            COMPRAR
          </Button>
        </div>
      </header>

      {/* Banner Pagamento - Mobile Optimized */}
      <div className="fixed top-[60px] w-full bg-gradient-to-r from-red-600 to-red-700 z-40 py-2.5 px-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Package className="w-5 h-5 text-white animate-bounce" />
          <p className="text-white font-bold text-sm text-center">
            💰 PAGUE NA ENTREGA - Em até 12x!
          </p>
        </div>
      </div>

      {/* 🟥 BLOCO 1 — HERO (Capa Principal) COM IMAGEM DA REGATA EM CHAMAS DE FUNDO */}
      <section className="relative pt-28 pb-12 px-4 overflow-hidden">
        {/* Background com imagem da regata em chamas escurecida */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/fd4d82ea-8e88-4c96-949b-c65b890d0e2e.png" 
            alt="Regata em chamas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        {/* Conteúdo por cima */}
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6">
            {/* Título H1 */}
            <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white drop-shadow-2xl">
              Mais suor, menos inchaço — sem academia e sem esforço
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              A Regata Sauna cria efeito sauna enquanto você vive sua rotina normal.
            </p>

            {/* Botão CTA */}
            <Button 
              onClick={scrollToCheckout}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black px-10 py-7 text-xl shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto"
            >
              <Flame className="w-6 h-6 mr-3" />
              VER KITS E PREÇOS
            </Button>

            {/* 🎨 BLOCOS DE BENEFÍCIOS - Estilo Amador Clean */}
            <div className="pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
                {/* Card 1 */}
                <div className="bg-white p-4 rounded border border-gray-300">
                  <Flame className="w-8 h-8 text-red-600 mb-2 mx-auto" />
                  <p className="text-sm font-bold text-gray-900 text-center">Queima 3x Mais Calorias</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-4 rounded border border-gray-300">
                  <TrendingDown className="w-8 h-8 text-blue-600 mb-2 mx-auto" />
                  <p className="text-sm font-bold text-gray-900 text-center">Reduz Medidas</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-4 rounded border border-gray-300">
                  <Heart className="w-8 h-8 text-purple-600 mb-2 mx-auto" />
                  <p className="text-sm font-bold text-gray-900 text-center">Modela o Corpo</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-4 rounded border border-gray-300">
                  <Zap className="w-8 h-8 text-green-600 mb-2 mx-auto" />
                  <p className="text-sm font-bold text-gray-900 text-center">Resultados Rápidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟥 BLOCO 5 — COMO FUNCIONA COM INFOGRÁFICO EM DESTAQUE */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-10 text-gray-900">
            Como funciona o <span className="text-red-600">Efeito Sauna Metabólico™</span>
          </h2>

          {/* IMAGEM COM INFOGRÁFICO EM DESTAQUE (não como fundo) */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/4c19fd95-c5af-4fe6-a282-162c44b8b49a.webp" 
              alt="Como funciona - Infográfico detalhado"
              className="w-full h-auto"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="bg-white border-gray-200 p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">🔥 Aquecimento controlado</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                O tecido especial mantém o corpo aquecido naturalmente.
              </p>
            </Card>

            <Card className="bg-white border-gray-200 p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">⚡ Metabolismo acelerado</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Seu corpo passa a gastar mais energia mesmo parado.
              </p>
            </Card>

            <Card className="bg-white border-gray-200 p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">⏱ Queima prolongada</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                O efeito continua por horas, inclusive durante o descanso e o sono.
              </p>
            </Card>
          </div>

          {/* CTA INTERMEDIÁRIO */}
          <div className="text-center mt-10">
            <Button 
              onClick={scrollToCheckout}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black px-10 py-7 text-xl shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto"
            >
              <Flame className="w-6 h-6 mr-3" />
              VER KITS E PREÇOS
            </Button>
          </div>
        </div>
      </section>

      {/* 🟨 BLOCO 3 — QUEBRA DE CRENÇA (Estilo Amador Clean) */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 text-gray-900 text-center">
            O problema não é você.
          </h2>
          <div className="bg-white border-2 border-gray-300 rounded p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Seu corpo entrou em modo de economia de energia.
              Quanto mais o metabolismo desacelera, mais difícil fica emagrecer —
              mesmo tentando dieta ou exercício.
            </p>
            <p className="text-xl font-bold text-red-600 text-center">
              👉 E é exatamente aqui que a maioria desiste.
            </p>
          </div>
        </div>
      </section>

      {/* 🟥 BLOCO 9 — PROVA SOCIAL (DEPOIMENTOS) */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-10 text-gray-900">
            Mais de <span className="text-red-600">50.000 pessoas</span> já ativaram o Efeito Sauna Metabólico™
          </h2>

          <div className="space-y-6">
            <Card className="bg-white border-gray-200 p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-3 italic leading-relaxed">
                "Em poucos dias já senti diferença na barriga. Uso no trabalho e nem percebo."
              </p>
              <p className="text-gray-900 font-bold">— Carlos, SP</p>
            </Card>

            <Card className="bg-white border-gray-200 p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-3 italic leading-relaxed">
                "Perdi 8kg em 2 meses! A barriga diminuiu muito e consigo subir escadas sem cansar."
              </p>
              <p className="text-gray-900 font-bold">— Roberto, RJ</p>
            </Card>

            <Card className="bg-white border-gray-200 p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-3 italic leading-relaxed">
                "Minha pressão normalizou e perdi 12cm de cintura. O médico ficou impressionado!"
              </p>
              <p className="text-gray-900 font-bold">— José, MG</p>
            </Card>
          </div>

          {/* CARROSSEL DE IMAGENS DE DEPOIMENTOS - Mobile Optimized */}
          <div className="mt-10 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500">
              <img 
                src={testimonialImages[currentTestimonialSlide]} 
                alt={`Depoimento visual ${currentTestimonialSlide + 1} - Resultados reais`}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Botões de navegação do carrossel */}
            <button
              onClick={prevTestimonialSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>

            <button
              onClick={nextTestimonialSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>

            {/* Indicadores de slide */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonialImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonialSlide 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🟥 BLOCO 12 — PACOTES DISPONÍVEIS (Estilo Clean e Amador) */}
      <section id="checkout" className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900">
              Pacotes Disponíveis
            </h2>
            <p className="text-lg text-gray-700">
              Escolha a melhor opção para você
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {/* PACOTE 1 */}
            <div className="bg-white border-2 border-gray-300 rounded p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1 Regata</h3>
              <p className="text-4xl font-black text-gray-900 mb-2">R$129,90</p>
              <p className="text-sm text-gray-600 mb-6">ou 12x de R$11,19</p>
              
              <Button 
                onClick={() => window.open('https://app.hyppe.com.br/venda-multiplos?produto=MTM3&afiliado=NDcxNQ%3D%3D&oferta=MTkxMw%3D%3D', '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3"
              >
                COMPRAR AGORA
              </Button>
            </div>

            {/* PACOTE 2 - DESTAQUE */}
            <div className="bg-yellow-100 border-4 border-yellow-500 rounded p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                MAIS VENDIDO
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">2 Regatas</h3>
              <p className="text-4xl font-black text-gray-900 mb-2">R$169,90</p>
              <p className="text-sm text-gray-600 mb-2">ou 12x de R$15,85</p>
              <p className="text-sm font-bold text-green-700 mb-6">R$84,95 cada</p>
              
              <Button 
                onClick={() => window.open('https://app.hyppe.com.br/venda-multiplos?produto=MTM3&afiliado=NDcxNQ%3D%3D&oferta=MTY2Mw%3D%3D', '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3"
              >
                COMPRAR AGORA
              </Button>
            </div>

            {/* PACOTE 3 */}
            <div className="bg-white border-2 border-gray-300 rounded p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3 Regatas</h3>
              <p className="text-4xl font-black text-gray-900 mb-2">R$219,90</p>
              <p className="text-sm text-gray-600 mb-2">ou 12x de R$19,59</p>
              <p className="text-sm font-bold text-green-700 mb-6">R$73,30 cada</p>
              
              <Button 
                onClick={() => window.open('https://app.hyppe.com.br/venda-multiplos?produto=MTM3&afiliado=NDcxNQ%3D%3D&oferta=MTk0NQ%3D%3D', '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3"
              >
                COMPRAR AGORA
              </Button>
            </div>
          </div>

          {/* Informações de confiança */}
          <div className="bg-gray-50 border border-gray-300 rounded p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <BadgeCheck className="w-8 h-8 text-gray-700 mb-2 mx-auto" />
                <p className="text-xs font-bold text-gray-800">Garantia 30 Dias</p>
              </div>
              <div>
                <Truck className="w-8 h-8 text-gray-700 mb-2 mx-auto" />
                <p className="text-xs font-bold text-gray-800">Frete Grátis</p>
              </div>
              <div>
                <Package className="w-8 h-8 text-gray-700 mb-2 mx-auto" />
                <p className="text-xs font-bold text-gray-800">Pague na Entrega</p>
              </div>
              <div>
                <CreditCard className="w-8 h-8 text-gray-700 mb-2 mx-auto" />
                <p className="text-xs font-bold text-gray-800">12x no Cartão</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟦 BLOCO 13 — GARANTIA */}
      <section className="py-12 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 text-gray-900">
            Risco <span className="text-green-600">ZERO</span> para você
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-500">
            <BadgeCheck className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <p className="text-xl text-gray-800 leading-relaxed mb-4">
              Use a Regata Sauna por <span className="font-bold text-green-600">30 dias</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Se não gostar ou não se adaptar, devolvemos seu dinheiro.
            </p>
            <p className="text-base text-gray-600 mt-4 italic">
              Simples, rápido e sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* 🟥 BLOCO 14 — CTA FINAL (Estilo Amador Clean) */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white border-2 border-gray-300 rounded p-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-6 text-gray-900 text-center">
              Seu corpo não vai mudar sozinho.
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              Quanto mais você adia, mais difícil fica.
              Comece hoje a ativar o Efeito Sauna Metabólico™.
            </p>

            <p className="text-xl font-bold text-red-600 mb-8 text-center">
              ⏰ Quanto mais você espera, mais difícil fica emagrecer.
            </p>

            <Button 
              onClick={scrollToCheckout}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-6 text-xl w-full mb-6"
            >
              QUERO MINHA REGATA SAUNA AGORA
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-600 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Frete Grátis</span>
              </div>
              <div className="flex items-center gap-1">
                <Package className="w-4 h-4 text-orange-600" />
                <span>Pague na Entrega</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-6 h-6 text-red-600" />
                <span className="text-xl font-bold">ThermoShape</span>
              </div>
              <p className="text-gray-400 text-sm">Transformando vidas através da tecnologia e ciência.</p>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-white">Atendimento</h3>
              <p className="text-gray-400 mb-2 text-sm">Segunda a Sexta: 9h às 18h</p>
              <p className="text-gray-400 text-sm">contato@regatasauna.com.br</p>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-white">Garantias</h3>
              <p className="text-gray-400 mb-1 text-sm">✅ 30 dias de garantia</p>
              <p className="text-gray-400 mb-1 text-sm">✅ Frete grátis Brasil</p>
              <p className="text-gray-400 mb-1 text-sm">✅ Pague na entrega</p>
              <p className="text-gray-400 text-sm">✅ Pagamento seguro</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
            <p className="text-sm">© 2025 ThermoShape. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
