import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #aa00aa;
}

input,
button,
textarea,
select {
  font: inherit;
  padding: 10px
}

button,
a {
  cursor: pointer;
}

ul {
  list-style: none;
  list-style-position: outside;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  
}
label{
  display: block;
  color: white;
  padding-bottom: 10px;
  padding-top: 10px;
}

.form__title {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 20px;
    color: white;
}

img {
  display: block;
  max-width: 100%;
}

.button {
    margin-top: 25px;
    border-radius: 10px;
    border: none;
}
.button:hover {
  background: #00f1ff;;
  
  text-decoration: none;
}
input{
  border-radius: 10px;
}
`;

export default GlobalStyle;
