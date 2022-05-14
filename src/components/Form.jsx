import React from "react";
import styled from 'styled-components';
//import { useForm } from "react-hook-form";

export function Form() {
    //const { register, handleSubmit } = useForm();
    //const onSubmit = (data) => console.log(data);

    const SendEventDiv = styled.div`
         margin-top: 5rem;
    `
    const SendEventTitle = styled.h1`
        font-family: 'Roboto Mono', monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 2.25rem;
        line-height: 2.938rem;
        margin-top: 2.5rem;
        margin-bottom: 1.25rem;

        color: var(--dark-color);
    `
    const SendEventRow = styled.div`
        width: 74.628rem;
        display: flex;
        align-items: center;
        justify-content: initial;
    `
    const SendEventField = styled.div`
        display: flex;
        flex-direction: column;
        align-items: initial;
        justify-content: center;

        label {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 1.125rem;
            line-height: 1.313rem;
            margin-bottom: 0.75rem;

            color: var(--dark-color);
        }

        input {
            background: var(--form-background);
            box-shadow: 0rem 0.25rem 0.25rem var(--dark-color);
            border-radius: 0.625rem;
            border: none;
            margin-bottom: 1.25rem;
        }

        input:disabled {
            background: var(--dark-color)
        }

        .dateTime-input,
        .startTime-input {
            width: 35.916rem;
            height: 2.5rem;
        }

        .dateTime-input {
            margin-right: 2.5rem;
        }

        .dateText {
            width: 74.563rem;
            height: 2.5rem;

            background: var(--form-background);
            box-shadow: 0rem 0.25rem 0.25rem var(--dark-color);
            border-radius: 0.625rem;
        }
    `
    const SendEventButton = styled.button`
        width: 6.25rem;
        height: 2.5rem;

        background: var(--dark-background);
        border-radius: 0.938rem;
        border: none;

        font-family: 'Roboto Mono', monospace;
        font-style: normal;
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--light-color);
        cursor: pointer;

        &:hover {
            color: var(--dark-color);
            background-color: var(--light-background);
            border: 0.125rem solid #7D52C5;
        }
    `

    return (
        <SendEventDiv>
            <SendEventTitle>Adicione um Evento</SendEventTitle>

            <form action="" method="POST" >
                <SendEventRow>
                    <SendEventField>
                        <label for="startDate" class="dateTime-label">Data de início</label>
                        <input type="date" name="startDate" class="dateTime-input" id="datefield" />
                    </SendEventField>
                    <SendEventField>
                        <label for="startTime" class="dateTime-label">Hora de início</label>
                        <input type="time" name="startTime" class="startTime-input" id="hourfield" disabled />
                    </SendEventField>
                </SendEventRow>

                <SendEventRow>
                    <SendEventField>
                        <label for="endDate">Data do fim</label>
                        <input type="date" name="endDate" class="dateTime-input" id="datefieldEnd" />
                    </SendEventField>
                    <SendEventField>
                        <label for="endTime">Hora do fim</label>
                        <input type="time" name="endTime" class="startTime-input" id="hourfieldEnd" disabled />
                    </SendEventField>
                </SendEventRow>

                <SendEventRow>
                    <SendEventField>
                        <label for="title">Título</label>
                        <input id="title" name="title" type="text" class="dateText" />
                    </SendEventField>
                </SendEventRow>

                <SendEventRow>
                    <SendEventField>
                        <label for="description">Description</label>
                        <input id="description" name="description" type="text" class="dateText" />
                    </SendEventField>
                </SendEventRow>

                <SendEventButton type="submit">Enviar</SendEventButton>
            </form>

        </SendEventDiv>

    )
}