import React from "react"
import styled from "styled-components"
import { Header } from "./Header"
import { Table } from "./Table"


export function EventPage() {
    const Section = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `

    return (
        <Section>
            <Header />
            <Table />
        </Section>
    )
}