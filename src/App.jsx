import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import AfterHero from './pages/AfterHero'
import OurFeatures from './pages/OurFeatures'
import Catagories from './pages/Catagories'
import OurBlogs from './pages/OurBlogs'
import ClientSays from './pages/ClientSays'
import ContactUs from './pages/ContactUs'

function App() {
  

  return (
    <>
     <Navbar/>
    <div className='bg-gray-100 mt-[-3.7%] '>
    <Hero/>
    <AfterHero/>
    <OurFeatures />
    <Catagories/>
    <OurBlogs/>
    <ClientSays/>
    <ContactUs/>
    
    </div>
   
     
    </>
  )
}

export default App
