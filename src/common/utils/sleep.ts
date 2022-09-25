export default (sleepMs: number) => {
    return new Promise( res => setTimeout(res, sleepMs) );
}