import { FC } from "react";
import { SOCIALS } from "../utils/constants";
import Icon from "./Icon";

type Props = {
    width?: number
    height?: number
}

const Socials:FC<Props> = ({width = 16, height = 16}) => (
    <ul className="socials">
        {SOCIALS.map(({icon, link}) => (
            <li key={link} title={icon} className="socials-item">
                <a href={link} target="__blank">
                    <Icon 
                        name={icon}
                        height={width}
                        width={height}
                    />
                </a>
            </li>
        ))}
    </ul>
)
    


export default Socials;