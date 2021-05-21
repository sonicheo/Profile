import {Carousel, Container} from 'react-bootstrap'
import {style} from '../../styles/Arrows.module.css'

const Projects = ()  =>{
    const divStyle = {
        carouselIndicators : {
            backGroundColor: "red"
        }
    }

    return(
        <div className={style} >
           <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://lh3.googleusercontent.com/mrkc3kUgYEndMquGOrQjL_rOZb6KV1XtqnxeUhk6haXZlA-qFYsQtvQ-7B0Goov7pB0WTmg4VV1KbbmotKs897QaQb_WgnyL0__wVrobBIZk2GKNCqrOGXm-g7NzQq77as566v0E6tZPuSamlMnpzc1MCDTJO5yTgfSDCK_gHnnhI73DIN7QJaq03xLPPMCDEavb1DJi5d6x_qo8aysauzeMyQ5wPKkH4ImB7nJ2bdFfyWe6-Iycuo6yuxR_VfpuazNq94cMEsD4TzcFwJtT3rTOt7Fw8d7Ifc6stH3RUbBJwwnpW2Ao9ViDulNCdU6C7Dm4OrQk5-yfsQUzIseZKohHm5nTpBgfusT9VTxUA3RlVRVzwDXdKfmD5us7DYuL8RmNm4Gf6KDNesCNuVz3BRxSzufKWWozRNUc6MClN8_o-1ceZY4jqjdu9F_JZ-TEvzXFVmClrO4lQgDTZUva5nzvkkegCgESRbuxNY2FizGDmjsKinwFBdhOrSReCZnQ-DiQIhdh9nGtx5o_Xoe5giRh4e8vXRCBjDXWlrl2Cn8nWNuvpJPtN8kV6_nUwek4FiN5W5y9iOy90gzysN94z9qWl7hjVmQrhLHe6ujRuXm_IXRieODioVcpWE4zCmtij6eu-9h3xGu8X2-zTjt4zZvegWwKtBaW_FKOL8hca2MyFW0s5h7upmZIr6Bs37CVq92n6qBB-aTA9FQVj9QIy-Dr=w1886-h972-no?authuser=0"
                alt="First slide"
                />
                <div style={{marginTop:"20%"}}>
                <Carousel.Caption style={{color: "black"}} >
                <h3>Colorfill</h3>
                <p>This project takes recreates the fill function in art programs</p>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://lh3.googleusercontent.com/oiJkCi4K7lIf-3kH6sq9wOOssU9sIN9QCxR8bZ0La6WQCFhDcU4rj3dtBHEPMyRblPAdLM8t8-swgXCHMpNq3Kyr2mDB6KJPN4KqiX7fBTOsPoxF5O0Ax8l64bhKugZNQxpZQAslcS_R7Obq6fUi_tM-hcOvB_nE-2jalG5q2bzDDX3TIQEMmT28f2NkBAx7t3bimZMv2UlQpYZpp2uh4hIOI9D9blRoJeFcSYl7c3yfbF8It_PamSnvfZuET4RQQfFQbZB3UKM7e80SFTvndEJNE0qS2YthymXlZmucgmdHNGxTJ_jp5TtQ9FkNRRzNoSn5uu17BTYDUaGhgqS21X1JTt2gx05znKlYjEagxtimo2vlC-L9k6T4Bb5wZ9AaguGHOj64W8-cqGbcWdiTSpaOnS2dYeyLkzQGNUzQYJK20SoUdND2jLG80IuMGTjWQiPdy-pexeq5XLvaTmj38-X0w0g7AL3r_Dw1nBZfIdQc6fymxhcZ5sBLkj3bxyrNAUMjt3ynkE3Xi4eFXCg3sX-tO1Ta5jtv4Pry9R9L0mrzDH--xIXKb2taeYEdmLJtIYHmyYQ2Us4DjhKl-eXYAuBxptlYun7qdBc4IhBwUGXd-0shiGL1paF0sZwB4lKRn2iwzvtsTPFcjuQpKvhpZQaH2Ymxqjk6finkM45gzA5S6ZRmsrV77MGKCadkhT7o1_8nYsA8qRmLCSRbny8kD1ta=w1898-h909-no?authuser=0"
                alt="Second slide"
                />
                <div style={{marginTop:"24%"}}>
                <Carousel.Caption style={{color: "black"}} >
                <h3>YHM</h3>
                <p>
                    A website made for Your Harmonious Minds. I learned how to use
                    various technologies here including TravicCI, Nginx, and Docker.
                </p>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://lh3.googleusercontent.com/LXeRqxh0RFwk-cs22qKnyqxL5pf6myBMmHt8_TdRopKAMTKCGG8ogtqPNlAn9ci4hRsNQFhYo69Xr54hDi4sgosguxetE8YlkXnXJKkeYLx3IVdqCk5C7ULwSTVnzTI6tykWWGAU97EL4KGwsH9Upf8ctPSQEdfdZXzqGCi4s8aCF-HfuiMmnukhcn4pK6WTAaiUwGxgjyG6SMq-1NnmQWuNLqU-4cg9ESFwTZEz4gWNzSYQKypopitiAK6Xd3ucYZaUpTIKwashZ8NyClaXc7J051y9wYpn_kOfpJL_H8OAaqBgPVHYAdelgkfRPN5ruUC5b58xzxpPhf93INEzQHrY9YlgRbVvqJ3aGZESU49S-AT8RbHpZ5FpIolCZj8q6OfbFGTepI5vJ33UDpYNqeb457OFh_fvDMkVngvg-LQdrQ35jJih5e_VMM71EmVSuuf38icutNHpzJ-RWlrVXQa-QBt1y7AKJ8w1_zOn1BLk3MTdol4p8W6gjWPt3JlYFKZgetMW_v7TrALRCZ9f4RgJoWnW-R8GhxVbja0u2mYDLmCCNSCAqyh4fNMc7gahzu4DeopkdfzV6doW9rztHdjl-_Bs4CfPgrhJhzeT6j_yxQlsKJHRm8IGvc0Goa2w3ss2kF3PCBBAXpd_xxnOuTKZmCrad8-RisupApJtWSahd0P3wK-XOVUbulsa91ju3LfFUrfARLSWGMXYXSIXedwl=w1905-h972-no?authuser=0"
                alt="Third slide"
                />
                <div style={{marginTop:"23%"}}>
                <Carousel.Caption style={{color: "black"}} >
                <h3>E-Commerce</h3>
                <p>An E-commerce site that's currently being worked on</p>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Projects;