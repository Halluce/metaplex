import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-6`}>
      <div className={`relative bg-background overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          <Header />
          <div
            className={`relative mt-50 z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <section className="max-w-7xl mx-auto px-5 lg:px-7 py-6 sticky-section">
        <div>
          <h2>What is Halluce?</h2>
        </div>
        <article>
          <p>
            Halluce is a decentralized video marketplace that has been built on
            top of the Solana blockchain. It supports the creation and sale of
            non-fungible tokens (NFTs) that are in the form of videos. It allows
            users to buy and auction such videos that have been distributed on
            social media. You can think of Halluce as a fun and simple to use
            stock market in which videos (in the form of NFTs) are like stocks
            and the performance and success of these videos on social media
            drive their stock price on Halluce. We provide a marketplace that
            allows you to use any major cryptocurrencies for buying and selling
            these NFTs as an individual or in groups. These groups are DAOs
            (Decentralised Autonomous Organisations) that can be customized by
            their participants without the need for any code. Forming these
            groups will be as simple as starting a Whatsapp Group.
          </p>
          <p>
            The best part about Halluce is that the nature of the marketplace
            ensures that the NFTs are non-speculative investments as they are
            tied to the social media performance of the underlying videos. This
            is similar to how a company's stock performance is linked to the
            success of its business and thus based on quantifiable value. It's a
            marketplace that focuses solely on non-speculative NFT investments.
            The marketplace is designed for investors who have both an appetite
            for low risk and high return NFT investments, as well as investors
            who are new to investing and interested in a simpler and quicker
            alternative to reading and understanding annual reports in order to
            make sound investments in financial assets.
          </p>
          <p>
            It doesn't matter what kind of video content you're betting on -
            whether it's funny cat videos, social media challenges, or
            politics-related clips - because we provide support for all original
            videos from all major social media platforms, including TikTok,
            Instagram, Twitter, Youtube and more. However, this excludes sex,
            nudity, harmful, offensive, and inappropriate content.
          </p>
          <a href="">Read our Viral Paper (White Paper) for more on Halluce.</a>
        </article>
      </section>
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
