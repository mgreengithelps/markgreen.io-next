import Template from '../components/templates/Default'
import LogoSmall from '../components/elements/LogoSmall'

type Props = {
  title?: string
}

const IndexPage = ({ title = '🏠 | markGreen.io' }: Props) => (
  <Template title={title}>
    <div className="w-full flex justify-center pt-12 md:pt-48">
      <div className="container grid grid-cols-2">
        <div className="col-span-2 md:col-span-1 border-0 md:border-r border-beige flex justify-end">
          <div className="max-w-sm">
            <h1 className="text-9xl font-bold uppercase tracking-widest text-beige break-words pb-8 md:pb-0 leading-none">
              Portfolio
            </h1>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="max-w-sm md:pl-10">
            <h2 className="text-3xl text-beige tracking-widest uppercase leading-none pb-6">
              Welcome
            </h2>
            <p className="text-beige font-thin tracking-wider leading-relaxed pb-6">
              My name is Mark Green and I am a Web Developer located in the United States.
            </p>
            <p className="text-beige font-thin tracking-wider leading-relaxed pb-6">
              I have worked fulltime as a developer since 2016 and in the IT industry as a whole since 2015.
            </p>
            <p className="text-beige font-thin tracking-wider leading-relaxed pb-6">
              Please feel free to explore my work using the menu&nbsp;<LogoSmall />&nbsp;above and do not hesitate to contact me, I would love to have a chat!
            </p>
            <p className="text-beige font-thin tracking-wider leading-relaxed">
              Thank you for visiting.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Template>
)

export default IndexPage
