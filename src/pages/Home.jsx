import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeHero from '../components/homesection/HomeHero'
import Digitaltext from '../components/homesection/Digitaltext'
import AboutLogic from '../components/homesection/aboutlogic'
import Service from '../components/homesection/homeservice'
import Video from '../components/homesection/homevideosection'
import HomeFeedbackSection from '../components/homesection/homefeedbacksection'
import OurProjectsSection from '../components/homesection/OurProjectsSection'
import OurProcessSection from '../components/homesection/OurProcessSection'
import Blog from '../components/homesection/blog'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    
      <main className="flex-grow">
        <HomeHero />
           <Digitaltext />
           <AboutLogic />
           <Service />
          <Video />
          <HomeFeedbackSection />
          <OurProjectsSection />
          <OurProcessSection />
          <Blog />
      </main>
      <Footer />
    </div>
  )
}
