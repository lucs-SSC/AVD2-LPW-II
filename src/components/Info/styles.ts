import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;
    }
    th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }
    td {
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem;
        margin-top: 20px;
        button{
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: 0;
                &.delete {
                background-color: var(--red);
                }
                &.like {
                background-color: var(--green);
                }
            transition: filter 0.3s;

            &:hover{
                filter: brightness(0.7);
            }
        }

        &.title {
            color: var(--text-tile);
        } 
        
        
    }
`