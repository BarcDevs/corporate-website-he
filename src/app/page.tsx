import { ScrollAnimations } from '@/components/homepage/scroll-animations'
import { AboutSection } from '@/components/homepage/sections/about'
import { ContactSection } from '@/components/homepage/sections/contact'
import { Footer } from '@/components/homepage/sections/footer'
import { HeroSection } from '@/components/homepage/sections/hero'
import { ServicesSection } from '@/components/homepage/sections/services'
import { TestimonialsSection } from '@/components/homepage/sections/testimonials'

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <ScrollAnimations/>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <TestimonialsSection/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default Home
