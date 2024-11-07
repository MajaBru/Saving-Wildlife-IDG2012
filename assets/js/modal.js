
/* Some inspiration comes from: https://bitsofco.de/accessible-modal-dialog/ 
Mostly the part of making an array from the focusable elements in the popup
*/
let popupWrapper = document.querySelector(".popup-wrapper");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".close-popup");
let focusedElementBefore; 
let focusableElements;
let firstFocus;
let lastFocus;


function openPopup() {
    popupWrapper.style.visibility = "visible";
    focusedElementBefore = document.activeElement; //remember last item before popup shows

    focusableElements = popup.querySelectorAll('a[href], button');
    focusableElements = Array.prototype.slice.call(focusableElements); //but the focusable elements in an array
    console.log(focusableElements);

    firstFocus = focusableElements[0]
    lastFocus = focusableElements[1];   

    // setting focus on the first interactive part of the popup
    firstFocus.focus();

    // focus trap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && e.shiftKey) {
            if (document.activeElement === firstFocus) {
                lastFocus.focus();
            }
            } else if (e.key === 'Tab') {
            if (document.activeElement === lastFocus) {
                firstFocus.focus();
            }
        }
    });

};

// will appear after 2 seconds. Learnt about it here: https://www.w3schools.com/js/js_timing.asp 
setTimeout("openPopup()", 2000);


function closePopup() {
    popupWrapper.style.visibility = "hidden";
    focusedElementBefore.focus() //put focus back on the element before popup showed

};

/* if closebtn is pressed, popup is closed */
closeBtn.addEventListener('click', () => {

    closePopup();

});


/* if esc is pressed, popup gets closed */
document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' ) {
    closePopup();
    }
});


