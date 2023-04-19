import styled from "styled-components";
import { SmallTitle } from "./smallTitle";


const Element = ({className} : {className:string})=>{
    return(
        <section id="post-content" className={className}>
            <SmallTitle>程式板</SmallTitle>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ratione. Tempore, enim architecto? Reprehenderit ea blanditiis eligendi vitae temporibus autem nisi, ipsa sed molestias repellendus laboriosam veritatis ipsam harum beatae cumque atque possimus quo, obcaecati quia porro? Rem pariatur beatae, ullam vel tempore nihil facere perferendis ex rerum officiis aut fuga, sed distinctio cupiditate illum nobis consequuntur quasi. Blanditiis recusandae eveniet ipsa dolore nisi sint dolorum molestiae expedita officiis? Ullam itaque vel possimus ipsum laborum vero dolor nisi! Facere impedit unde nostrum sunt. Quaerat repellat, non minima fugiat nesciunt voluptates consequuntur quisquam aspernatur, veniam blanditiis cumque magni incidunt sint, qui repudiandae excepturi. Atque repellendus consectetur ad, consequatur excepturi veritatis quia error dolore pariatur nobis unde quidem fugiat esse illum ex libero reprehenderit sit exercitationem tempore officiis ea odit neque a. Qui nihil praesentium, sint ut vel at perspiciatis quas nobis et minus modi voluptates mollitia consectetur, beatae vitae aliquid voluptatibus hic delectus officiis dolor, tempore nesciunt a! Repellendus magnam quasi libero vero eius, tenetur asperiores excepturi necessitatibus sint nemo esse natus accusamus. Molestias dolores dolor vero est tempora voluptate quae necessitatibus, accusantium dolore at! Nemo quibusdam vero laboriosam ad ex fugit veniam voluptatem est, modi repudiandae quasi pariatur, amet dignissimos.</p>
        </section>
    )
}

const StyledElement = styled(Element)`
    width:100%;
    margin:5vw auto 0;
    padding:5vw 5%;
    border-radius:5px;
    background-color:${(props)=>props.theme.background};
    p{
        letter-spacing:0.15em;
        line-height:1.5em;
        color:${(props)=>props.theme.color};
        font-size:${(props)=>props.theme.sFontSize};
        font-family:${(props)=>props.theme.NotoJapan};
        
    }
  `;
  
  export default function PostContent ():JSX.Element{
      return(
          <StyledElement className="post-content" />
      )
  }