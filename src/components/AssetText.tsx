

const AssetText = ({value}: any) => (
    <span dangerouslySetInnerHTML={{__html: value.replaceAll("\n\n", "<br/>")}}/>
)

export default AssetText;