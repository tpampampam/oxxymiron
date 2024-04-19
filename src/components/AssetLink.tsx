import { renderNode } from "../utils/common";


const AssetLink = ({uri, content}: {uri: string, content: any[]}) => {

    return (
        <a href={uri} target='_blank' rel='noopener noreferrer'>
            {content && content.map(renderNode)}
        </a>
    )
}

export default AssetLink;