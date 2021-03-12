import { useRef, useEffect } from 'react'


const LargeName = () => {
    const containerRef = useRef(null)
    const devItems = [
        'Javascript',
        'React Nextjs',
        'Vue Nuxtjs',
        'Node Express',
        'PHP Twig',
        'Shopify Liquid'
    ]
    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    const toggleOpacity = item => {
        return sleep(200).then(() => {
            item.classList.toggle('opacity-30')
            setTimeout(() => item.classList.toggle('opacity-30'), 500)
        })
    }
    const animate = () => {
        const items = (containerRef && containerRef.current) ? containerRef.current.children : null
        if (items) {
            const forLoop = async () => {

                for (let i = 0; i < items.length; i++) {
                    await toggleOpacity(items[i])
                }
            }
            forLoop()
        }
        setTimeout(() => {
            animate()
        }, 3000)
    }
    useEffect(() => {
        animate()
    }, [])
    return (
        <ul ref={containerRef} className="opacity-10 text-right pb-6 md:pb-12">
                {devItems.map((item, i) => <li key={i} className="text-7xl md:text-9xl font-bold text-beige leading-none -mb-4 md:-mb-8 tracking-tightest transition-opacity duration-700 ease-in-out opacity-10">{item}</li>)}
            </ul>
    )
}

export default LargeName