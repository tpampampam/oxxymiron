import { FC } from "react";


type Props = {
    text: string
}

const SectionTitle:FC<Props> = ({text}) => {
    return(
        <div
        >
            <h2>{text}</h2>
        </div>
    )
}

export default SectionTitle;