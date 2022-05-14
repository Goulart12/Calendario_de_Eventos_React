import React from "react"
import styled from 'styled-components';

export function Table() {
    const ShowEvent = styled.div`
     width: 74.628rem;
        height: 5rem;

        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
    `

    const ShowEventTitle = styled.h1`
        font-family: 'Roboto Mono', monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2.938rem;
        margin-top: 1.25rem;

        color: var(--dark-color);
    `

    const TopLine = styled.span`
        width: 74.628rem;
        height: 0.063rem;

        background: var(--dark-color);
        border: 0.063rem solid var(--dark-color);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center; 
        margin-top: 1.25rem;  
    `

    const EventTable = styled.table`
        width: 74.628rem;
        margin-top: 1.25rem;

        th {
        font-family: 'Roboto Mono', monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem;
        text-align: initial;

        color: var(--dark-color);
    }

        td {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 1.313rem;
        
        color: var(--dark-color);
    }

        .btn-small {
        width: 6.25rem;
        height: 2.5rem;

        background: var(--dark-background);
        border-radius: 0.938rem;
        border: none;

        font-family: "Roboto Mono", monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--light-color);
        cursor: pointer;
    }

    .btn-small:hover {
        color: var(--dark-color);
        background-color: var(--light-background);
        border: 0.125rem solid #7D52C5;
    }

        .th-btn {
        text-align: end;
    }

        .td-btn {
        text-align: end;
    }
    `
    const BottomLine = styled.span`
        width: 74.628rem;
        height: 0.063rem;

        background: var(--dark-color);
        border: 0.063rem solid var(--dark-color);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center; 
        margin-top: 1.25rem;  
    `
    return (
        <ShowEvent>
            <ShowEventTitle>Lista de Eventos de Juarez</ShowEventTitle>

            <TopLine />

            <EventTable>
                <thead>
                    <tr>
                        <th>Início</th>
                        <th>Fim</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th class="th-btn"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Algum valor</td>
                        <td> Algum valor</td>
                        <td>Algum valor</td>
                        <td>Algum valor</td>
                        <td class="td-btn">
                            <button id="eventDelete" class="btn-small">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </EventTable>

            <BottomLine />
        </ShowEvent>
    )
}