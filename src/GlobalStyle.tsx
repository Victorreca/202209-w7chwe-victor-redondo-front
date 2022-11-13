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
  padding: 15px 20px;
  
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


img {
  display: block;
  max-width: 100%;
}


  .form__title {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 20px;
    color: white;
  }

`;

export default GlobalStyle;
