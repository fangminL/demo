let users=useCurrentData();
export const isAuthenticated = ()=>{
    return users.value.isLoggedIn;
}
export const toLogin=()=>{
    users.value.isLoggedIn=true;
    users.value.name='张三';
    users.value.age=18;
    navigateTo('/users');
}
export const outLogin=()=>{
    users.value.isLoggedIn=false;
    users.value.name=null;
    users.value.age=null;
    navigateTo('/');
}