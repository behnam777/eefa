"use client"
import { useEffect, useState, useRef } from 'react';
import Link from "next/link";


const Projects = () => {
    const [mounted, setMounted] = useState(false)
    const [culture, setCulture] = useState(0)
    const [location, setLocation] = useState(0)
    const cultureRef = useRef(0);
    const locationRef = useRef(0);
    let searchBoxClick = () => {
        if (mounted) {

            document.getElementById('searchInput').focus()
            document.getElementById('searchInputIcon').classList.add('filter-bar-search-icon-focused');
        }

    }

    let searchBoxblure = () => {
        if (mounted) {
            document.getElementById('searchInputIcon').classList.remove('filter-bar-search-icon-focused');
        }
    }
    //-------------------------------------------------------------------------------------------------
    let selectBoxClick = (number) => {
        if (mounted) {
            document.getElementById('componentSelectInput' + number).focus();
            document.getElementById('componentSelectIcon' + number).classList.add('component-select-icons-open');
            document.getElementById('componentSelectOptions' + number).classList.add('component-select-options-open');
        }
    }
    let selectBoxInputBlure = (number) => {
        if (mounted) {
            setTimeout(() => {
                document.getElementById('componentSelectIcon' + number).classList.remove('component-select-icons-open');
                document.getElementById('componentSelectOptions' + number).classList.remove('component-select-options-open');
                document.getElementById('componentSelectInput' + number).blur();
            }, 100);
        }
    }
    //-------------------------------------------------------------------------------------------------
    let cardHover = (number) => {
        if (mounted) {
            document.getElementById('project-card-image' + number).classList.add('project-card-image-open')
            document.getElementById('project-card-gradiant' + number).classList.add('project-card-gradiant-open')
            document.getElementById('project-card-status' + number).classList.add('project-card-status-open')
            document.getElementById('project-card-readmore-title' + number).classList.add('project-card-readmore-title-open')
            document.getElementById('project-card-readmore-undeline' + number).classList.add('project-card-readmore-undeline-open')
        }
    }
    let cardUnHover = (number) => {
        if (mounted) {
            document.getElementById('project-card-image' + number).classList.remove('project-card-image-open')
            document.getElementById('project-card-gradiant' + number).classList.remove('project-card-gradiant-open')
            document.getElementById('project-card-status' + number).classList.remove('project-card-status-open')
            document.getElementById('project-card-readmore-title' + number).classList.remove('project-card-readmore-title-open')
            document.getElementById('project-card-readmore-undeline' + number).classList.remove('project-card-readmore-undeline-open')
        }
    }
    //-------------------------------------------------------------------------------------------------------------------------------
    let ProjectsFilterClear = async () => {
        if (mounted) {
            setLocation(0)
            setCulture(0)
            locationRef.current = 0
            cultureRef.current = 0
            document.getElementById('searchInput').value = "";
            let AllProjects = document.getElementsByClassName('project-card');
            for (let index = 0; index < AllProjects.length; index++) {
                const project = AllProjects[index];
                project.style.display = 'block'
            }
        }
    }
    let selectCultureAndLocation = (value) => {
        if (mounted) {

            selectBoxInputBlure(1);
            selectBoxInputBlure(2);
            let AllProjects = document.getElementsByClassName('project-card')
            for (let index = 0; index < AllProjects.length; index++) {
                const project = AllProjects[index];
                if (locationRef.current != 0 && cultureRef.current != 0) {
                    if (project.getAttribute('culture') == cultureRef.current && project.getAttribute('location') == locationRef.current) {
                        project.style.display = 'block'
                    }
                    else {
                        project.style.display = 'none'
                    }
                }
                else {
                    if (project.getAttribute('culture') == cultureRef.current || project.getAttribute('location') == locationRef.current) {
                        project.style.display = 'block'
                    }
                    else {
                        project.style.display = 'none'
                    }
                }
            }

        }
    }
    //-------------------------------------------------------------------------------------------------
    let searching = async () => {
        if (mounted) {
            let value = document.getElementById('searchInput').value;
            if (!value) {
                console.log(value);
                let AllProjectsTitle = document.getElementsByClassName('project-card');
                for (let index = 0; index < AllProjectsTitle.length; index++) {
                    const project = AllProjectsTitle[index];
                    project.style.display = 'block'
                }
            } 
            if (value) {
                console.log(value);
                let AllProjectsTitle = document.getElementsByClassName('project-card');
                for (let index = 0; index < AllProjectsTitle.length; index++) {
                    const projectTitle = AllProjectsTitle[index];
                    const title = document.querySelector('.project-card-status');
                    if (!(title.innerHTML).includes(value)) {
                        projectTitle.style.display = 'none';
                    }
                    else{
                        projectTitle.style.display = 'block';
                    }
                }
            }

        }
    }
    //-------------------------------------------------------------------------------------------------
    useEffect(() => {
        setMounted(true)
    }, [mounted])

    return (
        <div>

            <div className="projacts-bar">
                <div className="projacts-bar-title">Projects</div>
                <div className="projacts-bar-number">48 Projects</div>
            </div>

            <div className="filter-bar">
                <div className="filter-bar-container">

                    <div className="filter-bar-container-item filter-bar-search" onClick={searchBoxClick}>
                        <img id="searchInputIcon" className="filter-bar-search-icon" src="/icons/search.svg"
                            onClick={searchBoxClick} />
                        <input id="searchInput" className="filter-bar-search-input" placeholder="Search project..."
                            onBlur={searchBoxblure} onChange={searching} />
                    </div>



                    <div className='filter-bar-container-item-component-selects'>
                        <div className="filter-bar-container-item component-select" onClick={() => selectBoxClick(1)}>
                            <input readOnly id="componentSelectInput1" onBlur={() => selectBoxInputBlure(1)}
                                style={{ width: "0px", height: "0px", position: "absolute", padding: "0px", border: "0px" }} />
                            <img id="componentSelectIcon1" className="component-select-icon" src="/icons/combo.svg" />
                            <div className="component-select-title">{culture ? culture : 'Culture'}</div>
                            <div className="component-select-options" id="componentSelectOptions1">
                                <div className="component-select-options-item" onClick={() => { setCulture('Persian'); cultureRef.current = 'Persian'; selectCultureAndLocation('Persian'); }}>Persian</div>
                                <div className="component-select-options-item" onClick={() => { setCulture('Arab'); cultureRef.current = 'Arab'; selectCultureAndLocation('Arab'); }}>Arab</div>
                                <div className="component-select-options-item" onClick={() => { setCulture('Turkish'); cultureRef.current = 'Turkish'; selectCultureAndLocation('Turkish'); }}>Turkish</div>
                                <div className="component-select-options-item" onClick={() => { setCulture('EURO'); cultureRef.current = 'EURO'; selectCultureAndLocation('EURO'); }}>EURO</div>
                            </div>
                        </div>

                        <div className="filter-bar-container-item component-select" onClick={() => selectBoxClick(2)}>
                            <input readOnly id="componentSelectInput2" onBlur={() => selectBoxInputBlure(2)}
                                style={{ width: "0px", height: "0px", position: "absolute", padding: "0px", border: "0px" }} />
                            <img id="componentSelectIcon2" className="component-select-icon" src="/icons/combo.svg" />
                            <div className="component-select-title">{location ? location : 'All Locations'}</div>
                            <div className="component-select-options" id="componentSelectOptions2">
                                <div className="component-select-options-item" onClick={() => { setLocation('Paris'); locationRef.current = 'Paris'; selectCultureAndLocation('Paris'); }}>Paris</div>
                                <div className="component-select-options-item" onClick={() => { setLocation('Dubai'); locationRef.current = 'Dubai'; selectCultureAndLocation('Dubai'); }}>Dubai</div>
                                <div className="component-select-options-item" onClick={() => { setLocation('Tehran'); locationRef.current = 'Tehran'; selectCultureAndLocation('Tehran'); }}>Tehran</div>
                                <div className="component-select-options-item" onClick={() => { setLocation('Baku'); locationRef.current = 'Baku'; selectCultureAndLocation('Baku'); }}>Baku</div>
                            </div>
                        </div>
                    </div>

                    <div className="filter-bar-container-item filter-bar-cleaner" onClick={ProjectsFilterClear}>
                        <img className="filter-bar-cleaner-icon" src="/icons/clean.svg" />
                    </div>

                    <div className="filter-bar-container-item filter-bar-last-item">

                        <div className="filter-bar-cleaner-calander">
                            <div className="filter-bar-cleaner-calander-title">Date</div>
                            <img className="filter-bar-cleaner-calander-icon" src="/icons/calander.svg" />
                        </div>

                        <div className="filter-bar-cleaner-alphabet">
                            <div className="filter-bar-cleaner-alphabet-title">Alphabetical</div>
                            <img className="filter-bar-cleaner-alphabet-icon" src="/icons/alphabet.svg" />
                        </div>

                    </div>

                </div>
            </div>

            <div className="projects-gallery">
                {
                    Array(12).fill().map((_, i) => {
                        return (

                            <div key={i} className="project-card " onMouseOver={() => cardHover(i + 1)} onMouseLeave={() => cardUnHover(i + 1)} href="/pages/project">
                                <img className="project-card-image" id={"project-card-image" + (i + 1)} src={"/images/projects/p" + (i + 1) + "/cover.jpg"} />
                                <div className="project-card-gradiant " id={"project-card-gradiant" + (i + 1)}></div>
                                <div className="project-card-status" id={"project-card-status" + (i + 1)}>BlackRock and Manner acquire The Store House PBSA
                                </div>
                                <div className="project-card-readmore " id={"project-card-readmore" + (i + 1)}>
                                    <div className="project-card-readmore-title " id={"project-card-readmore-title" + (i + 1)}><Link href="/pages/project">More details</Link></div>
                                    <div className="project-card-readmore-undeline " id={"project-card-readmore-undeline" + (i + 1)}></div>
                                </div>
                            </div>
                        )
                    })
                }

                <div key={14} className="project-card " culture="EURO" location='Paris' onMouseOver={() => cardHover(14)} onMouseLeave={() => cardUnHover(14)} href="/pages/project">
                    <img className="project-card-image" id={"project-card-image" + (14)} src={"/images/projects/p" + (2) + "/cover.jpg"} />
                    <div className="project-card-gradiant " id={"project-card-gradiant" + (14)}></div>
                    <div className="project-card-status" id={"project-card-status" + (14)}>BlackRock and Manner acquire The Store House PBSA Paris
                    </div>
                    <div className="project-card-readmore " id={"project-card-readmore" + (14)}>
                        <div className="project-card-readmore-title " id={"project-card-readmore-title" + (14)}><Link href="/pages/project">More details</Link></div>
                        <div className="project-card-readmore-undeline " id={"project-card-readmore-undeline" + (14)}></div>
                    </div>
                </div>


            </div>


        </div>
    )
}
export default Projects;







