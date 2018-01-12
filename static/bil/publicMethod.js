export const siblings = (elem) => { //获取所有兄弟节点 
    return sibling((elem.parentNode || {}).firstChild, elem)
}


function sibling(n, elem) {
    let r = [];
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n != elem) {
            r.push(n)
        }
    }
    return r
}
