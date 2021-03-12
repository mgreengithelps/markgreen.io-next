import Head from 'next/head'

type Props = {
    title?: string
}

const HtmlHead = ({ title = 'markgreen.io' }: Props) => (
    <Head>
        <title>
            {title}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
)

export default HtmlHead