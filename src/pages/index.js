import React from "react"
import tw from 'twin.macro'
import styled from 'styled-components'
import Layout from "../components/Layout"
import SEO from '../components/SEO/seo'


const HeroSection = styled.section`
    ${tw`
        relative h-screen flex 
        justify-center items-center overflow-hidden
    `}
`;

const Hero = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
& p {
     ${tw`
     w-full md:w-full xl:w-9/12 mb-2
     `}
     font-size: clamp(1.2rem, 2vw, 1.5rem);
     /* text-lg sm:text-2xl md:text-2xl lg:text-3xl */
}

& a {
    text-decoration: underline;
}

& h1 {
    font-family: 'poppins';
    font-size: clamp(2.6rem, 8vw, 8rem);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

& span {
    ${tw`whitespace-normal sm:whitespace-no-wrap`}
    display: block;
}

`;




export default () => {

    return (
        <Layout>
            <SEO title="Home" />
            <Hero>
                <h1>
                    <span>Stockholm</span>
                    <span>React JS Meetup</span>
                </h1>
                <div>
                    <p>A meetup group for people interested in talking about, learning more about and developing React applications together.</p>
                    <p>We're always looking for speakers and sponsors. Feel free to contact us through&nbsp;
                    <a
                            href='https://www.facebook.com/groups/603541263829425'
                            target='_blank'
                            rel="noreferrer"
                        >
                            Facebook
                    </a>

                    &nbsp;,&nbsp;

                    <a href='mailto: stockholm.react.meetup@gmail.com'>
                            Email
                    </a>

                    &nbsp;or at our&nbsp;

                    <a href='https://www.meetup.com/Stockholm-ReactJS-Meetup'
                            target='_blank'
                            rel="noreferrer"
                        >
                            Meetup Group
                    </a>
                    .

                </p>
                </div>
            </Hero>

        </Layout >
    )
}

