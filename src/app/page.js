'use client'
import Image from 'next/image'
import 'aos/dist/aos.css';
import React, { useEffect, useState,  useRef } from 'react';
import { useRouter } from 'next/navigation'
// import dynamic from 'next/dynamic';
import AOS from 'aos';
import Navigation from '@/app/ui/navigation';
import Hero from '@/app/ui/herosection';
import FeaturesSection from '@/app/ui/featureSection';
import AggregatedLaunchpads from '@/app/ui/aggregatedLaunchpads';
import Partners from '@/app/ui/partners';
import FAQ from '@/app/ui/faq';
import Press from '@/app/ui/press';
import Footer from '@/app/ui/footer';








function googleTranslateElementInit() {

    new google.translate.TranslateElement({

      pageLanguage: 'en',

      autoDisplay: 'true',
     includedLanguages:'hi,en,bn,id,fr',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE

    }, 'google_translate_element');

}




export default function Home() {
  const [showCookieModal, setShowCookieModal] = useState(true);
  const router = useRouter();

  const partnersRef = useRef(null);
const contactRef = useRef(null);
const faqRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Handle URL Redirection
    if (window.location.href.includes('.finance')) {
      router.push('https://www.grokgpt.com');
    }

    // Check for cookie consent in localStorage
    const cookieConsent = localStorage.getItem('cookie');
    if (cookieConsent) {
      setShowCookieModal(false);
    }
  }, [router]);

  // Handle cookie consent
  const handleCookieConsent = () => {
    setShowCookieModal(false);
    localStorage.setItem('cookie', 'true');
  };

  // Function to open external links
  const goLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <main >
       
       <div id="loading-animation" className="flex-center" style={{ width: '100%', height: '100vh', overflow: 'hidden', display: 'none' }}>
        <img src="/Loader.gif" className="h-[90px] object-contain" style={{ objectFit: 'contain', width: '200px' }} />
      </div>

      <div id="page-content" className="body relative">
      {showCookieModal && (

      <div className="modal" style={{ display: 'none' }}></div> )}

{/* 
      <div className="shadow-lg rounded-xl p-5 turner absolute cookie-cont cookie-turner md:max-h-[650px] max-h-[550px] hidden">
      <div className="turn-child nunito flex justify-center items-center flex-col gap-5 m-5">
        <img src="/logo.png" alt="texilix-logo" className="h-[100px] md:h-[150px] object-contain" />
        <h1 className="text-4xl">Cookies Notice</h1>
        <p className="text-center text-opacity-70">This website makes use of cookies to improve your experience within our website.</p>
        <p className="text-md text-center text-opacity-70">
          By continuing to view this website, you agree to our
          <a href="https://doc.grokgpt.com/legal/terms-of-use" className="blue-text"> Terms of Use</a>, and
          <a href="https://doc.grokgpt.com/legal/privacy-policy" className="blue-text"> Privacy Policy.</a>
        </p>
        <button className="px-10 py-4 blue-grad rounded-xl cont text-xl mt-5 md:mt-20 cookie-btn" onClick={handleCookieConsent} >Accept</button>
      </div>
    </div> */}


    <Navigation />
    <Hero />
    <FeaturesSection />
    <AggregatedLaunchpads />
    <section id="partnersSection" ref={partnersRef}>
    <Partners />
    </section>
    <section id="faqSection" ref={faqRef}>
    <FAQ />
    </section>
    <Press />
    <section id="contactSection" ref={contactRef}>
    <Footer />
    </section>

    </div>
    </main>
  )
}
