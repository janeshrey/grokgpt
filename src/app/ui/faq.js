import { useState } from 'react';
import Image from 'next/image';
import plusIcon from '../../assets/plus.svg';

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (faqId) => {
    setActiveFaq(activeFaq === faqId ? null : faqId);
  };

  return (
    <section id="faq" className="relative pt-14 lg:pt-40 mx-2">
      <Image src={plusIcon} className="hero-bg hidden lg:block" alt="flare" />
      <div className="mb-10 max-w-[1100px] w-[95%] mx-auto">
        <h1 className="cont text-[1.9em] md:text-4xl blue-text text-center flex-center flex-col md:flex-row mb-10">FAQ</h1>
        <div data-aos="fade-up" data-aos-duration="3000" className="aos-init">
          <FaqItem 
            id="faq1" 
            title="What are the benefits of using GrokGPT?" 
            content="GrokGPT offers several benefits to investors, including access to a wide range of pre-sale opportunities, advanced features for due diligence, and more." 
            isActive={activeFaq === 'faq1'} 
            toggleFaq={toggleFaq} 
          />
          <FaqItem 
            id="faq2" 
            title="How can I participate in pre-sale opportunities on GrokGPT?"
            content="To participate in pre-sale opportunities on GrokGPT, investors are typically redirected to the specific launchpad or platform where the pre-sale is listed."
            isActive={activeFaq === 'faq2'}
            toggleFaq={toggleFaq}
          />
          <FaqItem 
            id="faq3" 
            title="How does GrokGPT ensure the security of user data?"
            content="GrokGPT implements robust security protocols, including encryption techniques, authentication mechanisms, and regular security audits. The platform follows industry best practices to safeguard user data and protect against unauthorized access or data breaches."
            isActive={activeFaq === 'faq3'}
            toggleFaq={toggleFaq}
          />
          <FaqItem 
            id="faq4" 
            title="Can I trust the information and reviews on GrokGPT?"
            content="GrokGPT strives to provide reliable and accurate information by integrating external resources, trusted reviews, expert opinions, and community feedback. While efforts are made to ensure the quality of the information, it's important for investors to conduct their own due diligence and make informed decisions."
            isActive={activeFaq === 'faq4'}
            toggleFaq={toggleFaq}
          />
          <FaqItem 
            id="faq5" 
            title="Is investing in pre-sale opportunities on GrokGPT risky?"
            content="Investing in pre-sale opportunities carries inherent risks. The value and success of projects can be subject to market conditions, regulatory changes, and other factors. Investors should carefully evaluate the risks, conduct due diligence, and consider their own financial situation and risk tolerance before participating in pre-sale investments."
            isActive={activeFaq === 'faq5'}
            toggleFaq={toggleFaq}
          />
          <FaqItem 
            id="faq6" 
            title="How can I contact GrokGPT for support or inquiries?"
            content="GrokGPT provides support and assistance through various channels, such as our official  email, or  community forums. Details on how to contact GrokGPT can be found on their website."
            isActive={activeFaq === 'faq6'}
            toggleFaq={toggleFaq}
          />
        </div>
      </div>
    </section>
  );
}

function FaqItem({ id, title, content, isActive, toggleFaq }) {
  return (
    <div onClick={() => toggleFaq(id)} className={`nunito ${id}d`}>
      <div className="black-bg mt-4 rounded-md p-5 flex items-center gap-2 cursor-pointer">
        <Image src={plusIcon} alt="plus" className="h-7" />
        <h1 className="text-md md:text-lg">{title}</h1>
      </div>
      {isActive && (
        <div className="p-5">
          <p className="text-md">{content}</p>
        </div>
      )}
    </div>
  );
}
