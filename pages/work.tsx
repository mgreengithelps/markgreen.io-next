import Template from '../components/templates/Default'
import MainWorkText from '../components/elements/MainWorkText'
import SubWorkText from '../components/elements/SubWorkText'

const WorkPage = () => (
  <Template title="🖥️ | markgreen.io">
    <div className="w-full flex justify-center pt-12 md:pt-24 relative z-20">
      <div className="container grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <h1 className="text-7xl md:text-8xl text-beige font-bold tracking-tight break-words">
            Work Experience
          </h1>
        </div>
        <div className="col-span-2 md:col-span-1 border-0 md:border-r border-beige md:pr-10">
          <MainWorkText
            title="Brand Innovation Group"
            link={{ href: '/work/big', text: 'Check out some of my projects.' }}
            years="2020 &mdash; Present"
          >
            <p className="text-beige pb-4">
              I am currently employed full-time as a web developer at <a href="https://www.gotobig.com/" target="_blank" rel="nofollow noreferrer" className="text-blue hover:text-green transition-colors duration-700 ease-in">Brand Innovation Group (BIG)</a>. We handle different projects for a variety of clients, but most of our work is built upon Craft CMS.
            </p>
            <p className="text-beige pb-4">
              Along with Craft, I have created projects at BIG in eCommerce via Shopify's Liquid theming code, quick turn-around projects using Vue/Nuxtjs, and a variety of other development work including Wordpress, emails, and Magento eCommerce.
            </p>
          </MainWorkText>
        </div>
        <div className="col-span-2 md:col-span-1 md:pl-10 pt-6 md:pt-0">
          <MainWorkText
            title="G IT Helps LLC"
            link={{ href: '/work/githelps', text: 'Read about my experiences.' }}
            years="2016 &mdash; Present"
          >
            <p className="text-beige pb-4">
              Along with being employed by BIG, I also have my own LLC where I work on a variety of different small, web-based projects for clients.
            </p>
            <p className="text-beige pb-4">
              Most of my clients have small websites, but one of my larger projects was for Mad Anthonys Children's Hope House. I built them a house management system with Vue/Nuxtjs, a Nodejs backend, hosted on Google's Firebase platform.
            </p>
          </MainWorkText>
        </div>
        <div className="col-span-2 pt-16">
          <h3 className="text-6xl text-beige font-bold">
            Prior Employment
          </h3>
        </div>
        <div className="col-span-2 md:col-span-1 pt-4 md:pr-10">
          <SubWorkText
            title="Adams Health Network"
            link={{ href: '/work/ahn', text: 'Learn more about my work at AHN.' }}
            years="2015 &mdash; 2020"
          >
            <p className="text-beige pb-4">
              I began my career at AHN working IT. I learned a lot about server management, general troubleshooting, phone systems, and networking, and really enjoyed the work. Eventually I became a Web Devloper for the network where I was able to work on some pretty cool stuff.
            </p>
          </SubWorkText>
        </div>
        <div className="col-span-2 md:col-span-1 pt-4 md:pl-10">
          <SubWorkText
            title="Misc"
            link={{ href: '/contact', text: 'I would be happy to discuss more upon request.' }}
            years="Prior to 2015"
          >
            <p className="text-beige pb-4">
              Like many people, I have worked all sorts of different jobs to pay the bills. I've worked in the service industry, sales, and even refereed. All of these opportunities helped me grow professionally: learning how to interact and work with different personalities, leading teams, creating great experiences for customers, and much more.
            </p>
          </SubWorkText>
        </div>
        <div className="col-span-2 pt-16">
          <h3 className="text-6xl text-beige font-bold">
            Education & Hobbies
          </h3>
        </div>
        <div className="col-span-2 md:col-span-1 pt-4 md:pr-10">
          <SubWorkText
            title="IPFW"
            years="2003 &mdash; 2008"
          >
            <p className="text-beige pb-4">
              I am an art student turned developer! I earned a B.F.A. studying Computer Art at Indiana-Purdue Fort Wayne. When I started getting into programming, I really fell in love with it. Having a background in design has helped broaden my skill set. I can walk clients through the whole experience, from branding through development, and have a strong understanging of a project's entire lifecycle.
            </p>
          </SubWorkText>
        </div>
        <div className="col-span-2 md:col-span-1 pt-4 md:pl-10">
          <SubWorkText
            title="Travel, Food, & Running"
            years="1984 &mdash; Present"
          >
            <p className="text-beige pb-4">
              As much as I like to work, my wife and I love to travel so vacation time is really important to us. We enjoy going out to local restaurants, pubs, bars, etc. and taking in a variety of cultural experiences. I also spend a lot of my free time running. I ran competively in high school and college, and enjoy competing in marathons and other distance races to this day.
            </p>
          </SubWorkText>
        </div>
      </div>
    </div>
  </Template>
)

export default WorkPage
