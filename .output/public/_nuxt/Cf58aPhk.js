import{u as s}from"./BKDBYnB6.js";import{v as a}from"./FDRnG0H-.js";let e=s();const o=()=>e.value.isLoggedIn,n=()=>{e.value.isLoggedIn=!0,e.value.name="张三",e.value.age=18,a("/users")},l=()=>{e.value.isLoggedIn=!1,e.value.name=null,e.value.age=null,a("/")};export{o as i,l as o,n as t};
