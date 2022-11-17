import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Gaurav Singh</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Data Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I'm a Data Engineer/ BigData Engineer and a backend developer building products and working
                on real time problems, participating in hackathons and working on real time technologies.
                I am a cloud enthusiast and have explored a lot of tools related to cloud computing.
                I am also passionate about Databases, Data Warehouses, ETL/ELT, IAC(Infrastructure as a Code),
                BI Analytics & Reporting , Container Orchestration, Task Orchestration, Reverse ETL and
                Data Science.
                <br />
                My learnings are basically on the understanding of datasets of different companies and how
                raw data of those companies uses those in a Data Pipeline using Data Engineering and uses that later
                for a Data Science and Bi & Reporting. I am also a part of my college's coding community Point Blank and
                also am the Data Science Lead of Google Student Developer Club of my college.
            </p>
        </div>
    )
}

export default Intro;