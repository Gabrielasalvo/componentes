import styled from "styled-components"

export const Button = styled.button `
width:15rem;
height: 4rem;
display:flex;
align-items:center;
justify-content:space-evenly;
text-transform:uppercase;
background-color:var(--color-background-default);
border:none;
border-radius:4px;
color:#ffff;
margin: 2rem 0;
label {
    color:#ffff;
    line-height:16px;
}
&:hover {
    background-color:var(--color-background-hover);
   
}
&:focus {
    background-color:var(--color-background-focus);
}

`



