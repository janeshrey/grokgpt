import Image from 'next/image';
import Link from 'next/link';
import ApNewsImage from '../../assets/Ap News.png';
import BenzingaImage from '../../assets/Benzinga.png';
import BinanceFeedImage from '../../assets/BINANCE FEED.png';
import BloombergImage from '../../assets/Bloomberg.png';
import CoinMarketCapImage from '../../assets/CoinMarketCap.png';
import MarketWatchImage from '../../assets/MarketWatch.png';
import YahooFinanceImage from '../../assets/Yahoo Finance.png';
import DigitalJournalImage from '../../assets/DIGITAL JOURNEY.png';
import GlobeNewswireImage from '../../assets/NEW WIRE.png';
import StreetInsiderImage from '../../assets/SI.png';

// Import other images similarly

export default function Press() {
  return (
    <section id="press" className="pt-20 backers">
      <h1 className="cont text-[1.5em] md:text-4xl blue-text text-center">
        Featured On
      </h1>

      <div className="w-[90%] mx-auto mt-10">
        <div className="backersMobile flex-col">
          <div className="scroll-parent">
            <div className="scroll-element primary">
              {/* ROW 1 */}
              <Link href="https://apnews.com/press-release/globenewswire-mobile/introducing-texilix-the-ultimate-toolkit-for-all-defi-investors-d3823850b6f8535e3ab1f5713d0a7fe3" target="_blank">
                <Image src={ApNewsImage} alt="Ap News" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.benzinga.com/pressreleases/23/08/g34009014/introducing-texilix-the-ultimate-toolkit-for-all-defi-investors" target="_blank">
                <Image src={BenzingaImage} alt="Benzinga" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.grokgpt.com/" target="_blank">
                <Image src={BinanceFeedImage} alt="Binance Feed" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.bloomberg.com/press-releases/2023-08-23/introducing-texilix-the-ultimate-toolkit-for-all-defi-investors" target="_blank">
                <Image src={BloombergImage} alt="Bloomberg" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://coinmarketcap.com/community/articles/64e7081dd3d4a15a7b714984/" target="_blank">
                <Image src={CoinMarketCapImage} alt="Coinmarketcap" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.marketwatch.com/press-release/introducing-texilix-the-ultimate-toolkit-for-all-defi-investors-396e8f8c?mod=search_headline" target="_blank">
                <Image src={MarketWatchImage} alt="Market Watch" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://finance.yahoo.com/introducing-texilix-ultimate-toolkit-defi-170000259.html" target="_blank">
                <Image src={YahooFinanceImage} alt="Yahoo Finance" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.digitaljournal.com/pr/news/blockchain-wire/introducing-texilix-the-ultimate-toolkit-for-all-defi-investors" target="_blank">
                <Image src={DigitalJournalImage} alt="Digital Journal" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.globenewswire.com/news-release/2023/08/23/2730664/0/en/Introducing-GrokGPT-the-ultimate-toolkit-for-all-DeFi-investors.html" target="_blank">
                <Image src={GlobeNewswireImage} alt="Globe Newswire" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.streetinsider.com/Globe+Newswire/Introducing+GrokGPT+%E2%80%93+the+ultimate+toolkit+for+all+DeFi+investors/22079999.html" target="_blank">
                <Image src={StreetInsiderImage} alt="Street Insider" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              {/* ROW 2 */}
              <Link href="https://apnews.com/press-release/globenewswire-mobile/introducing-texilix-the-ultimate-toolkit-for-all-defi-investors-d3823850b6f8535e3ab1f5713d0a7fe3" target="_blank">
                <Image src={ApNewsImage} alt="Ap News" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.benzinga.com/pressreleases/23/08/g34009014/introducing-texilix-the-ultimate-toolkit-for-all-defi-investors" target="_blank">
                <Image src={BenzingaImage} alt="Benzinga" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.grokgpt.com/" target="_blank">
                <Image src={BinanceFeedImage} alt="Binance Feed" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.bloomberg.com/press-releases/2023-08-23/introducing-texilix-the-ultimate-toolkit-for-all-defi-investors" target="_blank">
                <Image src={BloombergImage} alt="Bloomberg" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://coinmarketcap.com/community/articles/64e7081dd3d4a15a7b714984/" target="_blank">
                <Image src={CoinMarketCapImage} alt="Coinmarketcap" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.marketwatch.com/press-release/introducing-texilix-the-ultimate-toolkit-for-all-defi-investors-396e8f8c?mod=search_headline" target="_blank">
                <Image src={MarketWatchImage} alt="Market Watch" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://finance.yahoo.com/introducing-texilix-ultimate-toolkit-defi-170000259.html" target="_blank">
                <Image src={YahooFinanceImage} alt="Yahoo Finance" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.digitaljournal.com/pr/news/blockchain-wire/introducing-texilix-the-ultimate-toolkit-for-all-defi-investors" target="_blank">
                <Image src={DigitalJournalImage} alt="Digital Journal" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.globenewswire.com/news-release/2023/08/23/2730664/0/en/Introducing-GrokGPT-the-ultimate-toolkit-for-all-DeFi-investors.html" target="_blank">
                <Image src={GlobeNewswireImage} alt="Globe Newswire" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
              <Link href="https://www.streetinsider.com/Globe+Newswire/Introducing+GrokGPT+%E2%80%93+the+ultimate+toolkit+for+all+DeFi+investors/22079999.html" target="_blank">
                <Image src={StreetInsiderImage} alt="Street Insider" className="max-w-[180px] md:max-w-[250px] h-[40px] md:h-[60px] opacity-70" />
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
