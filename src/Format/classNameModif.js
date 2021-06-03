// custom tambah ClassName
export function addClass(e, classes){
    e.classList && e.classList.add(...classes.split(" "));
}