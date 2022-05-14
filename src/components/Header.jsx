import React from "react"
import calendarImg from '../assets/calendar.png'
import styled from 'styled-components';
import { Link } from "react-router-dom";

export function Header() {
    const Header = styled.header`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1.875rem;
    `
    const TitleImgDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 42.5rem;
    `
    const Image = styled.img`
        width: 4.313rem;
        height: 4.75rem;
        margin-right: 0.938rem;
    `
    const Title = styled.h1`
        width: 20.625rem;
        height: 5.875rem;
        font-family: "Roboto Mono", monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 2.25rem;
        line-height: 2.938rem;

        color: var(--dark-color);
    `
    const LogoutButton = styled(Link)`
        width: 6.25rem;
        height: 2.5rem;

        background: var(--dark-background);
        border-radius: 0.938rem;
        border: none;
        cursor: pointer;
        font-family: "Roboto Mono", monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 1.5rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--light-color);
        
        &:hover {
            color: var(--dark-color);
            background-color: var(--light-background);
            border: 0.125rem solid #7D52C5;
        }
    `

    return (
        <Header>
            <TitleImgDiv>
                <Image src={calendarImg}></Image>
                <Title>Calendário de Eventos</Title>
            </TitleImgDiv>

            <LogoutButton to="/">Sair</LogoutButton>
        </Header>
    )
}