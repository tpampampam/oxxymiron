import { FC } from "react";

interface Props {
    name: string
    width?: number
    height?: number
}

const Icon:FC<Props>  = ({name, width, height}) => (
    <svg className={`icon icon-${name}`} style={{width, height}}>
        <use
            xlinkHref={`../images/sprite.svg#${name}`}
        >

        </use>
    </svg>
)


export default Icon;


