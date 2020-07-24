import React from "react";
import Thumbnail from "./Thumbnail";
import "./Projects.css";

function Projects(props) {
    return (
    <div className="projects-div row" id="Projects">
        <h3 className="mb-4">Projects</h3>

        <div className="row mb-5 projectRow">
            <Thumbnail
                link="https://lit-woodland-41729.herokuapp.com"
                image="https://lh3.googleusercontent.com/jLKDYcwZRfQi8DMIucHpJUWs64SWoegiDCNRuXnMX4knXFB5D7BWfRoNZd3xdundFkgkaezHQfw-8mLOq16a1VMsLHfbtjMHkAHHrW923gDTYJgjBQyKwCvUuq9KW5S9M7x59n8BnN5LhxlFkwiqsO8AJx1rqRW9iDBbbVq65kh5ijqRYpniVnKWhpTKjKmn8PHDBMgztopDKzFiW-Zs_ra_HiObar6uX_KOX0IXKqrPULlFiFwfUU-Ay_j-TeqtrFB5hWtGlvE7RKlkPvq0ILOZ2rDbtBd1PUXqNs409B1S1Z1XU-lnC5u8UIyaLbR4OO1P5h4yGLXfzIkWDztl8QmJURuRuWSQvnO6p3AxnewhmEP5JVffKInbjeoHVSlT_TdwN6nPgNFRw_JPZVy1n3FE9Hk36SlTB0LcjVBJDSt-a1B0CDCMsHMhGzo1s3UPhTzsqSZlSmpPioKZvDrGXc0rkaKI3gAqW01VLL-2vZvO0oVVWi_O8x0BN-aMaMwvrQRgAQrTERLGgbZFDKwY-I5M9QMqBZDhNVW0a2CNs5tMn80sm_qZro9tjMD1nfsnxuUjZ4zKx6PWUfoCC-z8gCS4niMiUQVBpAFPmVAl8VTkPoqsEZenyFnQe0qGZNWpXzVmB7YxazPFIsx8Mfrmxb2hhPU9iFpcHO9Sjs2XhXpGRgqkaJG_YRc-8WbM6aQ=w2274-h1376-no?authuser=0"
                title="Renovation Hunter"
                description="Intuitive application connecting homeowners to renovation contractors in their local area."
                github="https://github.com/kaylieverner/Renovation-Hunter"
            />
            <Thumbnail
                link="https://peaceful-anchorage-41860.herokuapp.com/"
                image="https://lh3.googleusercontent.com/OjmpTGA180ouuuJbVB0TB6HGrXexXjmqSS5kbLP0WsMDYtqxCKRVPx4AgbKXVfN4jQZ2BymEQoS193mdM4I-9p1U48rivurkk6LG58QabjO_-BDShgBazD7Sn5Vajm9FmXEsLYyFP_6GxJ9JU3LTcoetSfAbD7s4nVC9Txbqo1I1T-t3kVsZLqK2PisqC13R97EMFc9hH5H9qJ8mJLYeDh-HL1wRGSobGNsXwhlegrJZKowQP5HLRNrbwKOSZY5BWow_VGUI1SqbIbdKcNgISVxCHooWHKQw8RnjuYGNpMqjbg3FhnajbncFjFy6sAXVNLxj4Q9eI_WgJ46GVo4Hf5IX5RrOMOyjhMNalyufL5YIP4RiatlDnfKlR-lcLU1Hzg6Nk-bjYdAgITb2i2dS7d23CfCYl48XL2Ya1RLvoUAtZ4wjthK7AzNrnVv4DZuCLwRQMZOUGr4nszJAMh9Q57Gy3oKAxIhIcSlPwZV5a6WTnaf_So45xyPxglmp3eUuENPEWMxTCSSR3HjUiikedxBmqdiuIIPSjDWEoRZ1Y7cnPYTprVv0gVWX1qOA-YGRh2VLYz1eHi5j8Bog7494KARuzMWO9qRxFs65skp3rOC4rdIyAh16VUbIEZWUQxzgJKwfxTxIPgYfC4MPDzOKXTMHaZY-5HrjPuKqHSLRSGAM5aB3uB0WVmfmnPlINA4=w1788-h1447-no?authuser=0"
                title="Budgeter"
                description="Budget tracker application that allows users to enter deposits and expenses on the go."
                github="https://github.com/kaylieverner/Budgeter"
            />
            <Thumbnail
                link="https://rocky-falls-66432.herokuapp.com/notes"
                image="https://lh3.googleusercontent.com/LqKifJXoImNqmqFSm0ajOrLbRtRkXQ9XT7z7UeMlNBC3-LDlChcGQMaXk9H2kl_uH7jU5gJEFNPfLhV0KDQ_iUT8dY57HisE7CE3Y_NxvnOG6XgFIz_qK7G4hPPgzJWGBnClLFmFsrLQqgM9bXOUjXBc2FFX8oop1WecG8awQ2KhOVTyfYNIftGG9HCTMY71TQ_ObXygUrdWOdygMdNaW70xDHBHRiC28qrl7M3Q65SEwr_q37QF3-eHm8jTC--o6CdYARD6mUqsr7c_53Ezp5IjjrfGyZz56aRaIEarksr0RxnLSkQvViRJrLQrd4uY5XG2QjsHCmaQZYOopIOcCQA_Gd1ggkNHT0giBDanFkEWAPVzkwkUdGIFzdkgMp0Y9rURNKESWFyh1kZPBbfcN5RydEnwcxrK_dQFax1C0HDyToMyZZtn64l4Sb8aZauuyoNsu9RT6ExgtPHVRFLmw5znF-F-BQ4LWxIRa8dLTn9N3WxZ9F7li0jcwN_ihDamOSx9q9-uc8IiKe5YnpJ4vQXDYGnROVBYDxNzZ6pJjP8f1mKpmJcpMkSo5gB8z4u12vqJiBjNKgBj1lvrMwMBjU9rqIIcgNweWqP47xzjSaDRDMO7ySPin7n7JA4p9B-jyGYwVkq_CIw7BV0xA1IaLoPeCFTn5A5rf0QLbjjufb7SU5hII00vEJXXyjhSuTY=w2290-h1441-no?authuser=0"
                title="Note Taker"
                description="User friendly application to save, view, and delete existing notes."
                github="https://github.com/kaylieverner/Note-Taker"
            />
        </div>
        </div>
    )
}

export default Projects;