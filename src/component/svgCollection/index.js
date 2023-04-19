

export function FollowStar({follow}){
    console.log(follow)
    return(
        <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 426.667 426.667"
        style={{ enableBackground: "new 0 0 426.667 426.667" }}
        xmlSpace="preserve"
       
      >
        <polygon
          style={follow ? { fill: "#FAC917" }:{stroke:"#fff",fill:"transparent",strokeWidth:"16px"}}
          points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
        81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
        />
      </svg>
    )
}