import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../assets/logo.png';
import telegramImage from '../../assets/Telegram.png';
import twitterImage from '../../assets/twitter.png';
import youtubeImage from '../../assets/youtube.png';
import redditImage from '../../assets/Reddit.png';
import facebookImage from '../../assets/FACEBOOK.png';
import mediumImage from '../../assets/Mediume.png';
import etherscanImage from '../../assets/Etherscan.png';
import gitbookImage from '../../assets/Gitbook.png';

export default function Footer() {
  // Additional JavaScript functions can be added here if needed

  return (
    <footer id="footer" className="mt-5s">
      <div className="flex items-center justify-start lg:justify-center flex-col gap-10 py-10 lg:gap-0 lg:flex-row max-w-[1250px] mx-auto w-[95%] border-ts border-gray-800">
        <div className="w-full lg:w-[20%] flex-col flex items-center lg:items-start justify-center lg:justify-start">
          <Image src={logoImage} alt="logo" className="w-[50%] lg:w-[200px]" />
          <p className="hidden md:block opacity-60 text-md text-left text-[16px] mt-5">
            Streamlining preliminary sales research via a robust and intuitive digital platform.
          </p>
          <p className="md:hidden opacity-60 text-sm text-center w-full text-[16px] mt-5">
            Streamlining preliminary sales research <br /> via a robust and intuitive digital platform.
          </p>
          <Link href="mailto:team@grokgpt.com" className="md:px-10 px-5 md:py-3 py-3 rounded-lg link-btn turner default-bg flex-center w-auto mt-3">
              <p className="turn-child blue-text text-lg md:text-xl">team@grokgpt.com</p>
             
          </Link>
        </div>

        {/* Social Media and Links Section */}
        <div className="flex items-center justify-center flex-col w-full lg:w-[50%]">
      {/* Social Medias */}
      <div className="flex items-center justify-center gap-4 lg:gap-7 flex-col lg:flex-row w-full lg:w-auto">
        {/* ROW 1 */}
        <div className="flex items-center justify-center w-full gap-14 mt-2 md:gap-7">
          <Link href="https://t.me/GrokGPT">
            <Image src={telegramImage} alt="telegram" className="w-8" /> 
          </Link>
          <Link href="https://twitter.com/texilix">
            <Image src={twitterImage} alt="twitter" className="w-8" /> 
          </Link>
          <Link href="https://www.youtube.com/@TexilixDeFi">
            <Image src={youtubeImage} alt="youtube" className="w-8" /> 
          </Link>
          <Link href="https://www.reddit.com/u/texilix">
            <Image src={redditImage} alt="reddit" className="w-8" /> 
          </Link>
        </div>
        {/* ROW 2 */}
        <div className="flex items-center justify-center w-full gap-14 mt-2 md:gap-7">
          <Link href="https://web.facebook.com/102093109639949">
            <Image src={facebookImage} alt="facebook" className="w-8" /> 
          </Link>
          <Link href="https://medium.com/@texilix">
            <Image src={mediumImage} alt="medium" className="w-8" /> 
          </Link>
          <Link href="https://etherscan.io/token/0xc3168b1b4807684a2b0650c4b292f901bf27173a">
           <Image src={etherscanImage} alt="etherscan" className="w-8" /> 
          </Link>
          <Link href="https://doc.grokgpt.com/texilix/introduction">
            <Image src={gitbookImage} alt="gitbook" className="w-8" /> 
          </Link>
        </div>
      </div>
      <div className="flex items-start justify-center w-full lg:w-auto lg:flex-row mt-12 lg:mt-5 gap-5 lg:gap-20">
      {/* LINE 1 */}
      <div className="flex items-center lg:justify-left nunito gap-2 w-full flex-col text-left">
        <h1 className="text-xl lg:text-lg mb-2 w-full text-blue">Pages</h1>
        {/* The 'Mobile App' link needs a URL */}
        <Link href="/mobile-app"  className="link w-full text-sm lg:text-xs opacity-60">Mobile App 
        </Link>
        <Link href="https://app.uniswap.org/#/swap?chainName=ethereum&outputCurrency=0xc3168B1B4807684A2b0650C4b292f901bF27173A"  className="link w-full text-sm lg:text-xs opacity-60" target="_blank">Buy $GROKGPT 
        </Link>
        <Link href="https://doc.grokgpt.com/usdtex-token/stake-usdtex"  className="link w-full text-sm lg:text-xs opacity-60" target="_blank">Stake $GROKGPT 
        </Link>
      </div>
      {/* LINE 2 */}
      <div className="flex items-center lg:justify-left nunito gap-2 w-full flex-col text-left">
        <h1 className="tex-xl lg:text-lg mb-2 w-full text-blue">Documents</h1>
        <Link href="https://doc.grokgpt.com/regulatory-and-risk-compliance/audits"  className="link w-full text-sm lg:text-xs opacity-60" target="_blank">Audits 
        </Link>
        <Link href="https://doc.grokgpt.com/usdtex-token/roadmap"  className="link w-full text-sm lg:text-xs opacity-60" target="_blank">Roadmap 
        </Link>
        <Link href="https://doc.grokgpt.com/usdtex-token/tokenomics"  className="link w-full text-sm lg:text-xs opacity-60" target="_blank">Tokenomics 
        </Link>
      </div>
      {/* LINE 3 */}
      <div className="flex items-center lg:justify-left nunito gap-2 w-full flex-col text-left">
        <h1 className="text-xl lg:text-lg mb-2 w-full text-blue">Legal</h1>
        <Link href="https://doc.grokgpt.com/legal/disclaimer" className="link w-full text-sm lg:text-xs opacity-60" target="_blank">Disclaimer 
        </Link>
        <Link href="https://doc.grokgpt.com/legal/terms-of-use" className="link w-full text-sm lg:text-xs opacity-60" target="_blank">Terms of Use 
        </Link>
        <Link href="https://doc.grokgpt.com/legal/privacy-policy"  className="link w-full text-sm lg:text-xs opacity-60" target="_blank">Privacy Policy 
        </Link>
      </div>
    </div>
      </div>
      {/* ... THIRD SECTION ... */}
      <div data-aos="fade-up" data-aos-duration="1500" className="w-full lg:w-[30%] aos-init">
      <h1 className="nunito text-md lg:text-xl blue-text text-center">Subscribe to Our Newsletter</h1>
      <form className="flex items-center justify-center mt-5 relative black-bg rounded-full max-w-[300px] mx-auto">
        <input type="email" placeholder="Enter your email" className="w-auto outline-none border-none bg-transparent text-left flex-1 rounded-full py-3 lg:py-4 px-5" />
        <button className="absolute right-0 black-bg py-2 lg:py-3 px-3 rounded-full border-grad cont text-md blue-text">Subscribe</button>
      </form>
      <p className="nunito text-center text-xs mt-5 mx-5 text-gray-400 hidden lg:block">
        You can unsubscribe anytime. For more details, review our 
        <Link href="https://doc.grokgpt.com/legal/privacy-policy"  className="blue-text">Privacy Policy
        </Link>
      </p>

      <p className="nunito text-center w-full text-xs mt-5 text-gray-400 lg:hidden">
        You can unsubscribe anytime. <br /> For more details, review our 
        <Link href="https://doc.grokgpt.com/legal/privacy-policy"  className="blue-text">Privacy Policy 
        </Link>
      </p>
    </div>
    </div>
    </footer>
  );
}
