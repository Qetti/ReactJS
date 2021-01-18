import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}    
#root{
 width: 100%;
 margin: 0 auto;
//  float: left;
 overflow: hidden;
}
.form-box{
   display: block;
   width: 92%;
   max-width: 400px;
   margin:1.5rem auto;
}
form{
 display: block;
 width: 100%;
 float: left;
}
.form-group{
 margin-bottom: 1rem;
 width: 100%;
 float: left;
}
label {
   display: inline-block;
   margin-bottom: .5rem;
   font-weight: 500;
}
.form-input {
   display: block;
   width: 100%;
   line-height: 1.5;
   padding: .5rem .75rem;
   font-size: 1rem;
   color: #495057;
   background-color: #fff;
   background-clip: padding-box;
   border:1px solid #ced4da;
   transition: border-color .5s ease-in-out;
   &:focus {
       color: #ff00bf;
       background-color: #fff;
       border-color: #009688;
       outline: 0;
   }
   &.error{
     border-color: red;
   }
}
.error-block{
 color: red;
 font-size: .8rem;
}
button, input {
   overflow: visible;
}
.form-btn {
   display: block;
   width: 100%;
   font-weight: 400;
   text-align: center;
   white-space: nowrap;
   vertical-align: middle;
   user-select: none;
   border: 1px solid #009688;
   padding: .5rem .75rem;
   font-size: 1.35rem;
   line-height: 1.5;
   border-radius: .25rem;
   color: #fff;
   background-color: #009688;
   transition: color .5s ease-in-out,background-color .5s ease-in-out,border-color .5s ease-in-out;
   &:not(:disabled):not(.disabled) {
       cursor: pointer;
   }
   &:not(:disabled):not(.disabled):hover{
     background-color:#00796B;
     border-color:#00796B ;
   }
   &:focus{
     outline: none;
   }
   &.disabled, &:disabled {
       opacity: .65;
   }
}
.btn {
   display: inline-block;
   font-weight: 400;
   text-align: center;
   white-space: nowrap;
   vertical-align: middle;
   user-select: none;
   border: 1px solid #bbb;
   padding: .25rem .5rem;
   font-size: .9rem;
   line-height: 1.25;
   border-radius: .25rem;
   color: #333;
   background-color: #fff;
   transition: color .5s ease-in-out,background-color .5s ease-in-out,border-color .5s ease-in-out;
   &:not(:disabled):not(.disabled) {
       cursor: pointer;
   }
   &:not(:disabled):not(.disabled):hover{
     color: #111;
     background-color:#ff00bf;
     border-color:#999 ;
   }
   &:focus{
     outline: none;
   }
   &.disabled, &:disabled {
       opacity: .65;
   }
}
@keyframes loading{0%{background-position:100% 50%}100%{background-position:0 50%}}
.loading-animate{
           background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);         
           animation: loading 1.4s ease infinite;
           background-size: 400% 100%; 
}
`;
export default GlobalStyle;
