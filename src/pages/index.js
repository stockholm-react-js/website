import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"
import SEO from '../components/SEO/seo'


const Hero = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & p {
        width: 100%;
        font-size: clamp(1rem, 2vw, 1.5rem);
        margin-bottom: 0.5rem;
        @media (min-width: 1280px) {
            width: 75%;
        }
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
        white-space: normal;
        display: block;
        @media (min-width: 640px) {
            white-space: nowrap;
        }
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
                            href='https://github.com/orgs/stockholm-react-js/'
                            target='_blank'
                            rel="noreferrer"
                        >
                            Github
                    </a>
                        ,&nbsp;
                     <a
                            href='https://www.facebook.com/groups/603541263829425'
                            target='_blank'
                            rel="noreferrer"
                        >
                            Facebook
                    </a>

                    ,&nbsp;

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

