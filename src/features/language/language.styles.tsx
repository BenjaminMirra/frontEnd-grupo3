import styled, { css } from "styled-components";

interface IProps {
    language: "PORTUGUESE" | "SPANISH" | "ENGLISH";
    children: React.ReactNode;
}

const Language = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 2px 0;
`
const LanguageButtonSpanish = styled.button<IProps>`
    background-color: white;
    padding: 4px 2px;
    margin-right: 10px;
    ${props => props.language === "SPANISH" && css`
        color: white;
        background-color: #17589f;
    `}
`
const LanguageButtonEnglish = styled.button<IProps>`
    background-color: white;
    padding: 4px 2px;
    margin-right: 10px;
    ${props => props.language === "ENGLISH" && css`
        color: white;
        background-color: #17589f;
    `}
`
const LanguageButtonPortuguese = styled.button<IProps>`
    background-color: white;
    padding: 4px 2px;
    margin-right: 10px;
    ${props => props.language === "PORTUGUESE" && css`
        color: white;
        background-color: #17589f;
    `}
`

export { Language, LanguageButtonSpanish, LanguageButtonEnglish, LanguageButtonPortuguese}