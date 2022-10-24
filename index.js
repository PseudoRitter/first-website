// window.addEventListener('load', (event) => {
//     document.body.classList.add('loaded');
//     window.setTimeout(() => {
//         document.body.classList.add('loaded_hidding')
//     }, 1 * 1000);
// });

addEventListener('load', () =>{
    const preload = document.querySelector(".preload")
    setTimeout(() => {
        preload.classList.add('preload__finish');
    }, 1000);
});

