"use client"

import Link from "next/link";
import { useParams } from 'next/navigation'

const Post = () => {
    const params = useParams()
    console.log(params.id);
   
    return (
        <div className="">
            <div className="path">
                <span className="path-rout" ><Link href='/'>Home</Link></span>
                <img className="path-arrow" src="/icons/pathArrow.svg" />
                <span className="path-rout" ><Link href='/pages/blog'>Blog</Link></span>
                <img className="path-arrow" src="/icons/pathArrow.svg" />
                <span className="path-rout-post" style={{color:'#00308E'}}>BlackRock and Manner acquire The Store House PBSA</span>
            </div>

            <div className="post-container">
                <img className="post-img" src={"/images/posts/b"+params.id+".jpg"} />
                <div className="post-title">BlackRock and Manner acquire The Store House PBSA</div>
                <p className="post-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                    congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem
                    mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
                    Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi
                    tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a
                    diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat
                    sed lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
                    rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                    tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et
                    molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
                    eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.
                    Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.
                </p>
                <p className="post-summery">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                    congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem
                    mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
                    Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi
                    tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a
                    diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat
                    sed lectus.
                </p>
            </div>
        </div>
    )
}
export default Post;

