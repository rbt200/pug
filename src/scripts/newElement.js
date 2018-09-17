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