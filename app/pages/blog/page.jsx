"use client"

import Link from "next/link";


const Posts = ({ name }) => (
    <div>
        <div className="path">
            <span className="path-rout" ><Link href='/'>Home</Link></span>
            <img className="path-arrow" src="/icons/pathArrow.svg" />
            <span className="path-rout-Blog">Blogs</span>
        </div>

        <div className="blog-posts">

            <div className="post-cart">
                <img src="/images/posts/b1.jpg" className="post-cart-image" />
                <div className="post-cart-title">BlackRock and Manner acquire The Store House PBSA</div>
                <div className="post-cart-summary">Harris Associates and Savills announce prime purpose-built student
                    accommodation (PBSA) project - The Store House - in Leeds is being acquired by BlackRock and Manner.
                </div>
                <div className="post-card-readmore " id="post-card-readmore">
                    <div className="post-card-readmore-title " id="post-card-readmore-title" ><Link href='./blog/1'>More details</Link></div>
                    <div className="post-card-readmore-undeline " id="post-card-readmore-undeline"></div>
                </div>
            </div>
            <div className="post-cart">
                <img src="/images/posts/b2.jpg" className="post-cart-image" />
                <div className="post-cart-title">BlackRock and Manner acquire The Store House PBSA</div>
                <div className="post-cart-summary">Harris Associates and Savills announce prime purpose-built student
                    accommodation (PBSA) project - The Store House - in Leeds is being acquired by BlackRock and Manner.
                </div>
                <div className="post-card-readmore " id="post-card-readmore">
                    <div className="post-card-readmore-title " id="post-card-readmore-title" ><Link href='./blog/2'>More details</Link></div>
                    <div className="post-card-readmore-undeline " id="post-card-readmore-undeline"></div>
                </div>
            </div>
            <div className="post-cart">
                <img src="/images/posts/b3.jpg" className="post-cart-image" />
                <div className="post-cart-title">BlackRock and Manner acquire The Store House PBSA</div>
                <div className="post-cart-summary">Harris Associates and Savills announce prime purpose-built student
                    accommodation (PBSA) project - The Store House - in Leeds is being acquired by BlackRock and Manner.
                </div>
                <div className="post-card-readmore " id="post-card-readmore">
                    <div className="post-card-readmore-title " id="post-card-readmore-title" ><Link href='./blog/3'>More details</Link></div>
                    <div className="post-card-readmore-undeline " id="post-card-readmore-undeline"></div>
                </div>
            </div>
            <div className="post-cart">
                <img src="/images/posts/b4.jpg" className="post-cart-image" />
                <div className="post-cart-title">BlackRock and Manner acquire The Store House PBSA</div>
                <div className="post-cart-summary">Harris Associates and Savills announce prime purpose-built student
                    accommodation (PBSA) project - The Store House - in Leeds is being acquired by BlackRock and Manner.
                </div>
                <div className="post-card-readmore " id="post-card-readmore">
                    <div className="post-card-readmore-title " id="post-card-readmore-title" ><Link href='./blog/4'>More details</Link></div>
                    <div className="post-card-readmore-undeline " id="post-card-readmore-undeline"></div>
                </div>
            </div>

            <div className="post-cart">
                <img src="/images/posts/b7.jpg" className="post-cart-image" />
                <div className="post-cart-title">BlackRock and Manner acquire The Store House PBSA</div>
                <div className="post-cart-summary">Harris Associates and Savills announce prime purpose-built student
                    accommodation (PBSA) project - The Store House - in Leeds is being acquired by BlackRock and Manner.
                </div>
                <div className="post-card-readmore " id="post-card-readmore">
                    <div className="post-card-readmore-title " id="post-card-readmore-title" ><Link href='./blog/5'>More details</Link></div>
                    <div className="post-card-readmore-undeline " id="post-card-readmore-undeline"></div>
                </div>
            </div>


            <div className="post-cart">
                <img src="/images/posts/b8.jpg" className="post-cart-image" />
                <div className="post-cart-title">BlackRock and Manner acquire The Store House PBSA</div>
                <div className="post-cart-summary">Harris Associates and Savills announce prime purpose-built student
                    accommodation (PBSA) project - The Store House - in Leeds is being acquired by BlackRock and Manner.
                </div>
                <div className="post-card-readmore " id="post-card-readmore">
                    <div className="post-card-readmore-title " id="post-card-readmore-title" ><Link href='./blog/6'>More details</Link></div>
                    <div className="post-card-readmore-undeline " id="post-card-readmore-undeline"></div>
                </div>
            </div>
        </div>
    </div>
)
export default Posts;







