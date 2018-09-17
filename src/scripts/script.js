window.onload = function() {
    addListener('team__target', 'click', injectElement);
}

const names = ['Michel Schmitt', 'David Kramer', 'Anna Schreder', 'David Noeman'];
const descriptions = [
    'MWonetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market. ',
    'Interaction design buzz handshake.  MWonetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market twitter ownership success disruptive series A financing user experience buyer client  business-to-consumer paradigm shift traction. Rockstar bandwidth crowdfunding facebook seed round A/B testing mass market social proof validation hypotheses. User experience . ',
    'Etealth agile development branding. MWonetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market. ',
    'A financing user experience buyer . Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market twitter ownership success disruptive series A financing user experience buyer client  business-to-consumer paradigm shift traction. Rockstar bandwidth crowdfunding facebook seed round A/B testing mass market social proof validathandshake.  MWonetization first mover advantage iPad. Interaction design buzz ion hypotheses. User experience . ',
]
const positions = ['Founder & SEO', 'Lead Developer', 'Consaltent', 'Designer'];

const injectElement = function(event, action, dataObj) {
    const clicked = event.target;
    console.log(clicked);
}


const displayNone = function(event, action, dataObj) {
    
}

const addListener = function (myClass, action, myFunc, dataObj) {
    const elemArr = Array.from(document.getElementsByClassName(myClass));
    elemArr.forEach(item => {
        item.addEventListener(action, function(event) {
            event.preventDefault();
            myFunc(event, action, dataObj);
        }, false);
    });
};

// const getMemberInfo = function(event, action, dataObj) {
//     const member = document.querySelector('.team__member');
//     try {
//         const element = event.target;
//     const className = element.classList[0];
//     const elementNumber = className.charAt(className.length - 1);
//     let name = '';
//         name = document.getElementsByClassName('team__content-name')[elementNumber].innerText;
        
//     const parent = member.parentElement;
//     const clone = member.cloneNode(true);
    
//     clone.classList.add("team_display_true");
//     parent.removeChild(member);
//     element.appendChild(clone);
//     clone.childNodes[1].firstChild.innerText = name;
//     clone.childNodes[1].lastChild.innerText = descriptions[elementNumber];
//     } catch (error) {
//         member.classList.add('team_display_false');
//         console.log(error);
//     } 
    
    
    // console.log(descriptions[elementNumber]);
//}