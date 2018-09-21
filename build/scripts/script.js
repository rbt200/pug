const createElement = function(options) {
    var el
      , a
      , i
    if (!options.tagName) {
      el = document.createDocumentFragment()
    }
    else {
      el = document.createElement(options.tagName)
      if (options.className) {
        el.className = options.className
      }

      if (options.attributes) {
        for (a in options.attributes) {
          el.setAttribute(a, options.attributes[a])
        }
      }

      if (options.html !== undefined) {
        el.innerHTML = options.html
      }
    }

    if (options.text) {
      el.appendChild(document.createTextNode(options.text))
    }

    // IE 8 doesn"t have HTMLElement
    if (window.HTMLElement === undefined) {
      window.HTMLElement = Element
    }

    if (options.childs && options.childs.length) {
      for (i = 0; i < options.childs.length; i++) {
        el.appendChild(options.childs[i] instanceof window.HTMLElement ? options.childs[i] : createElement(options.childs[i]))
      }
    }

    return el
  }

// document.body.appendChild(createElement({
//   tagName: "div",
//   className: "my-class",
//   text: "Blah blah",
//   attributes: {
//     "id": "element id",
//     "data-truc": "value"
//   },
//   childs: [{ /* recursif call **/}]
// }))
const popupElement = createElement({
    tagName: "div",
    className: "team__member",
    text: "",
    attributes: {
    },
    childs: [{
        tagName: "div",
        className: "team__member-content",
        text: "",
        attributes: {
        },
        childs: [{
            tagName: "p",
            className: "team__member-name",
            text: "",
            attributes: {
            },
            childs: [{ /* recursif call **/}]
          },{
            tagName: "p",
            className: "team__member-info",
            text: "",
            attributes: {
            },
            childs: [{ /* recursif call **/}]
          }]
      }, {
        tagName: "div",
        className: "team__member-social",
        text: "",
        attributes: {
        },
        childs: [{
            tagName: "div",
            className: "team__social-logo",
            text: "",
            attributes: {
            },
            childs: [{
                tagName: "img",
                className: "",
                text: "",
                attributes: {
                    src: "./assets/img/icon-team-share.png",
                    title: "Share"
                },
                childs: [{ /* recursif call **/}]
              }]
          }, {
            tagName: "div",
            className: "team__social-icons",
            text: "",
            attributes: {
            },
            childs: [{
                tagName: "a",
                className: "team__social-link",
                text: "",
                attributes: {
                    href: "#",
                    title: "Instagram"
                },
                childs: [{
                    tagName: "img",
                    className: "",
                    text: "",
                    attributes: {
                        src: "./assets/img/icon-team-0.png",
                        alt: ""
                    },
                    childs: [{ /* recursif call **/}]
                  }]
              },{
                tagName: "a",
                className: "team__social-link",
                text: "",
                attributes: {
                    href: "#",
                    title: "Tweeter"
                },
                childs: [{
                    tagName: "img",
                    className: "",
                    text: "",
                    attributes: {
                        src: "./assets/img/icon-team-1.png",
                        alt: ""
                    },
                    childs: [{ /* recursif call **/}]
                  }]
              },{
                tagName: "a",
                className: "team__social-link",
                text: "",
                attributes: {
                    href: "#",
                    title: "Facebook"
                },
                childs: [{
                    tagName: "img",
                    className: "",
                    text: "",
                    attributes: {
                        src: "./assets/img/icon-team-2.png",
                        alt: ""
                    },
                    childs: [{ /* recursif call **/}]
                  }]
              },{
                tagName: "a",
                className: "team__social-link",
                text: "",
                attributes: {
                    href: "#",
                    title: "Linked"
                },
                childs: [{
                    tagName: "img",
                    className: "",
                    text: "",
                    attributes: {
                        src: "./assets/img/icon-team-3.png",
                        alt: ""
                    },
                    childs: [{ /* recursif call **/}]
                  }]
              }]
          }]
      }]
  });
let UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	let _this = this;
	let _sheetId = "pseudoStyles";
	let _head = document.head || document.getElementsByTagName('head')[0];
	let _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	let className = "pseudoStyle" + UID.getNew();
	
	_this.className +=  " "+className; 
	
	_sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
	_head.appendChild(_sheet);
	return this;
};
window.onload = function() {
    addListener('team__target', 'click', injectElement);
    document.body.addEventListener('click', removeMemberInfo);
    window.addEventListener('resize', getMediaSize);
    // addListener('pricing__link', 'mouseover', paintPrice);
    // addListener('pricing__link', 'mouseout', paintPrice);
}
const names = ['Michel Schmitt', 'David Kramer', 'Anna Schreder', 'David Noeman'];
const descriptions = [
    'MWonetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market. ',
    'Interaction design buzz handshake.  MWonetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market twitter ownership success disruptive series A financing user experience buyer client  business-to-consumer paradigm shift traction. Rockstar bandwidth crowdfunding facebook seed round A/B testing mass market social proof validation hypotheses. User experience . ',
    'Etealth agile development branding. MWonetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding facebook seed round A/B testing mass market. ',
    'A financing user experience buyer . Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market twitter ownership success disruptive series A financing user experience buyer client  business-to-consumer paradigm shift traction. Rockstar bandwidth crowdfunding facebook seed round A/B testing mass market social proof validathandshake.  MWonetization first mover advantage iPad. Interaction design buzz ion hypotheses. User experience . ',
]
const positions = ['Founder & SEO', 'Lead Developer', 'Consaltent', 'Designer'];
const paintPrice = function(event, action) {
    // console.log(event);
    const parent = event.target.parentNode;
    const color = parent.classList[1].split('_')[4];
    if(action === 'mouseover') {
        event.target.animate([
  // keyframes
  { transform: 'translateY(0px)' }, 
  { transform: 'translateY(-300px)' }
], { 
  // timing options
  duration: 1000,
  iterations: Infinity
});

    }
    if(action === 'mouseout') {
        event.target.style.backgroundColor = 'white';
        event.target.style.color = color;
    }
}
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