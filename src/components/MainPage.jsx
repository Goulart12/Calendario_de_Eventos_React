import styled from "styled-components";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { EventPage } from "./EventPage";
import mainImage from "../assets/mainImage.jpg";
import calendarImg from "../assets/calendar.png";

export function MainPage() {
    const Section = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const MainImage = styled.img`
        width: 51.25rem;
        height: 31.938rem;
        margin-top: 14.125rem;
    `
    const TitleButtonDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: initial;
        flex-direction: column;

        margin-right: 15.313rem;
        margin-left: 2.813rem;
    `
    const TitleDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15.25rem;
    `
    const TitleImg = styled.img`
        width: 4.313rem;
        height: 4.75rem;
        margin-right: 1rem;
    `
    const Title = styled.h1`
        width: 20.625rem;
        height: 7.875rem;
        font-family: "Roboto Mono", monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 3rem;
        line-height: 3.938rem;

        color: var(--dark-color);
    `
    const StartButton = styled(Link)`
        width: 12.938rem;
        height: 6.25rem;
        margin-top: 4.375rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background: var(--dark-background);
        border-radius: 0.938rem;

        font-family: "Roboto Mono", monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 2.25rem;
        line-height: 2.938rem;
        text-decoration: none;

        color: var(--light-color);

        &:hover {
            color: var(--dark-color);
            background-color: var(--light-background);
            border: 0.125rem solid #7D52C5;
        }
    `

    return (
        <Router>
            <Section>
                <MainImage src={mainImage} />

                <TitleButtonDiv>
                    <TitleDiv>
                        <TitleImg src={calendarImg} />
                        <Title>Calendário de Eventos</Title>
                    </TitleDiv>
                    <StartButton to="/events">Começar</StartButton>
                </TitleButtonDiv>

            </Section>
        </Router>
    )
}