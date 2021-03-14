import Template from '../components/templates/Default'
import SoupLogo from '../components/elements/SoupLogo'

const CharityPage = () => (
  <Template title="💗 | markgreen.io">
    <div className="w-full flex justify-center pt-12 md:pt-32 relative z-20">
      <div className="container grid grid-cols-2">
        <div className="col-span-2">
          <h1 className="text-8xl text-beige font-bold tracking-tight">
            Charity
          </h1>
          <h2 className="text-beige text-3xl leading-relaxed tracking-wide">
            Giving back
          </h2>
          <div className="max-w-md pb-10">
            <p className="text-beige">
              I enjoy volunteering my time to help others succeed. One of the main projects I co-founded and have been a part of over the past few years is <a href="https://fortwaynesoup.org" target="_blank" rel="nofollow noreferrer" className="text-blue hover:text-green transition-colors duration-700 ease-in">Fort Wayne SOUP</a>.
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <hr className="border-0 border-b border-beige max-w-lg" />
          <div className="pt-10">
            <div className="w-40 h-40 flex rounded-full justify-center items-center p-4 bg-beige shadow-lg">
              <SoupLogo />
            </div>
            <p className="text-beige max-w-lg mt-6">
              FW SOUP started with a discussion between myself and a friend on how we could help grow the city of Fort Wayne. My buddy ran across an article about <a href="https://detroitsoup.com/" target="_blank" rel="nofollow noreferrer" className="text-blue hover:text-green transition-colors duration-700 ease-in">Detroit SOUP</a>, and as we dug into the idea further, we realized this would be a perfect fit for our city.
            </p>
            <p className="text-beige max-w-lg mt-6">
              Using the resources available from Detroit SOUP, we scaffolded out what our version of SOUP would look like. I created the branding, logo and website along with marketing materials, and helped wrangle presenters in the beginning. We quickly built a team of volunteers to help us grow the vision into reality.
            </p>
            <p className="text-beige max-w-lg mt-6">
              Throughout the last 4 years, Fort Wayne SOUP has connected artists, entrepreneurs, established business owners, non-proft leaders, and everyday community members together, and has helped fund over $20,000 for various projects and businesses around the city.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Template>
)

export default CharityPage
