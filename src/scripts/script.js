window.onload = function() {
    addListener('team__target', 'click', injectElement);
    document.body.addEventListener('click', removeMemberInfo);
    window.addEventListener('resize', getMediaSize);
}
const names = ['Michel Schmitt', 'David Kramer', 'Anna Schreder', 'David Noeman'];
const descriptions = [
    'MWonetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market. ',
    'Interaction design buzz handshake.  MWonetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market twitter ownership success disruptive series A financing user experience buyer client  business-to-consumer paradigm shift traction. Rockstar bandwidth crowdfunding facebook seed round A/B testing mass market social proof validation hypotheses. User experience . ',
    'Etealth agile development branding. MWonetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market. ',
    'A financing user experience buyer . Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market twitter ownership success disruptive series A financing user experience buyer client  business-to-consumer paradigm shift traction. Rockstar bandwidth crowdfunding facebook seed round A/B testing mass market social proof validathandshake.  MWonetization first mover advantage iPad. Interaction design buzz ion hypotheses. User experience . ',
]
const positions = ['Founder & SEO', 'Lead Developer', 'Consaltent', 'Designer'];
const getMediaSize = function(e) {
    const element = document.querySelector('.team__member');
    if(element) {
        element.parentElement.removeChild(element);
    }    
}
function removeMemberInfo(event) {
    const noRedirect = '.team__target, .team__member *';
    const element = document.querySelector('.team__member');
    if (!event.target.matches(noRedirect) && element) {
      element.parentElement.removeChild(element);
    }
  };
// add popup info about member on click
const injectElement = function(event) {
    const innerWidth = window.innerWidth;
    const clicked = event.target;
    const className = clicked.classList[0];
    const clickedNumber = className.charAt(className.length - 1);    
    popupElement.querySelector('.team__member-name').innerText = names[clickedNumber];
    popupElement.querySelector('.team__member-info').innerText = descriptions[clickedNumber];
    if(innerWidth < 1200) {
        clicked.parentNode.appendChild(popupElement);
        popupElement.pseudoStyle("before","visibility",`visible`);
    } else {
        clicked.parentNode.parentNode.parentNode.appendChild(popupElement);
        popupElement.pseudoStyle("before","visibility",`hidden`);
    }    
}
//
const addListener = function (myClass, action, myFunc, dataObj) {
    const elemArr = Array.from(document.getElementsByClassName(myClass));
    elemArr.forEach(item => {
        item.addEventListener(action, function(event) {
            event.preventDefault();
            myFunc(event, action, dataObj);
        }, false);
    });
};