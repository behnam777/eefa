"use client"
import Link from "next/link";

const Project = ({ name }) => (
    <div className='Project-main'>

        <div className="path">
            <span className="path-rout" ><Link href="/">Home</Link></span>
            <img className="path-arrow" src="/icons/pathArrow.svg" />
            <span className="path-rout" ><Link href="./projects">Projects</Link></span>
            <img className="path-arrow" src="/icons/pathArrow.svg" />
            <span className="path-rout">BlackRock and Manner acquire The Store House PBSA</span>
        </div>
        <div className="project">
            <div className="project-title">BlackRock and Manner acquire The Store House PBSA</div>
            <div className="project-container">
                <div className="project-container-details">
                    <img className="project-image" src="/images/projects/p1/p1.jpg" />
                    <div className="project-details">
                        <div className="project-details-manager">Amir Shafeie</div>
                        <div className="project-details-items">
                            <div className="project-details-item-1">Designer: Mahsa Afzaneh and Amir shafiei</div>
                            <div className="project-details-item-2">Client: Behnam Jabari</div>
                            <div className="project-details-item-3">Location: Tehran-IRAN</div>
                            <div className="project-details-item-4">Year: 2018</div>
                            <div className="project-details-item-5">Area: 220 meter</div>
                        </div>
                        <p className="project-details-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                            congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
                            porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
                            aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
                            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur
                            lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium
                            viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
                            aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis.
                            Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin.
                            Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper
                            morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit
                            tellus mauris a diam maecenas sed enim.
                        </p>
                        <div className="project-gallery-phone">
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p1.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p2.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p3.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p4.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p5.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p6.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p7.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p8.jpg" /></div>
                        </div>
                        
                        
                    </div>
                    <div className="project-gallery">
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p1.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p2.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p3.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p4.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p5.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p6.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p7.jpg" /></div>
                            <div className="project-gallery-card"><img className="roject-gallery-card-image" src="/images/projects/p1/p8.jpg" /></div>
                        </div>
                </div>


            </div>





        </div>

    </div>
)
export default Project;
