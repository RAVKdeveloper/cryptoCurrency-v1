import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={10}
    width={744}
    height={126}
    viewBox="0 0 744 126"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="54" y="125" rx="3" ry="3" width="380" height="6" /> 
    <circle cx="36" cy="36" r="36" /> 
    <rect x="91" y="23" rx="8" ry="8" width="198" height="28" /> 
    <rect x="8" y="101" rx="5" ry="5" width="96" height="15" /> 
    <rect x="150" y="101" rx="5" ry="5" width="96" height="15" /> 
    <rect x="282" y="101" rx="5" ry="5" width="96" height="15" /> 
    <rect x="420" y="101" rx="5" ry="5" width="96" height="15" />
  </ContentLoader>
)

export default Skeleton;