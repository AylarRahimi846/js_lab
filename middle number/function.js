
function middle(a,b,c){
if(a>b&&a<c || a<b&&a>c){
    return a
}

if(b>a&&b<c || b<a&&b>c){
    return b
}

if(c>a&&c<b || c<a&&c>b){
    return c
}
}
