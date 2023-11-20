import ContentLoader from "react-content-loader"

const SkeletonPrewiev = (props) => (
  <ContentLoader 
    speed={2}
    width={870}
    height={133}
    viewBox="0 0 870 133"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="87" height="34" /> 
    <rect x="102" y="0" rx="8" ry="8" width="87" height="34" /> 
    <rect x="202" y="0" rx="8" ry="8" width="87" height="34" /> 
    <rect x="303" y="0" rx="8" ry="8" width="87" height="34" />
  </ContentLoader>
)

export default SkeletonPrewiev;