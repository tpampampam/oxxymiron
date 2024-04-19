import { FC, useRef } from "react";
import {motion, useScroll, useTransform} from 'framer-motion';


interface Props {
    children: React.ReactNode,
    [key: string]: any
}


const Section:FC<Props> = ({children, ...rest}) => {
    const ref = useRef<HTMLElement | null>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const backgroundY = useTransform(scrollYProgress, [0, 2], ['0%', '100%'])

    return(
        <section {...rest} ref={ref}>
            <motion.div
                style={{y: backgroundY}}
            >
                {children}
            </motion.div>
        </section>
    )
}

export default Section;

