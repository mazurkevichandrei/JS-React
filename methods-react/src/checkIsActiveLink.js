const checkActive = (match, location) => {
    if(!location) return false;
    const {pathname} = location;
    // console.log(pathname);
    return pathname === "/";
}

export default checkActive