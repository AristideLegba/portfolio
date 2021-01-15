(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+fOr":
/*!*****************************************************!*\
  !*** ./src/app/directives/chat-bubble.directive.ts ***!
  \*****************************************************/
/*! exports provided: ChatBubbleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBubbleDirective", function() { return ChatBubbleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ChatBubbleDirective {
    constructor(elemenRef, renderer2, viewContainerRef) {
        this.elemenRef = elemenRef;
        this.renderer2 = renderer2;
        this.viewContainerRef = viewContainerRef;
        this.windowsHeaderAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.greenColor = 'green';
        this.yellowColor = 'yellow';
        this.redColor = 'red';
    }
    clickOnWindow() {
    }
    ngOnInit() {
        //creaate the typing bubble
        let typingBubble = this.createElement('div');
        this.renderer2.addClass(typingBubble, 'typping-bubble');
        for (let i in new Array(3)) {
            let span = this.createElement('span');
            this.renderer2.appendChild(typingBubble, span);
        }
        // this.renderer2.appendChild(this.)
        this.renderer2.addClass(this.elemenRef.nativeElement, 'chat-bubble');
    }
    ngAfterViewInit() {
    }
    createElement(name) {
        return this.renderer2.createElement(name);
    }
    addClass(element, name) {
        this.renderer2.addClass(element, name);
    }
}
ChatBubbleDirective.ɵfac = function ChatBubbleDirective_Factory(t) { return new (t || ChatBubbleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ChatBubbleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ChatBubbleDirective, selectors: [["", "appWindowsCSS", ""]], hostVars: 4, hostBindings: function ChatBubbleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBubbleDirective_click_HostBindingHandler() { return ctx.clickOnWindow(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.bgColor)("color", ctx.color);
    } }, inputs: { isTyping: "isTyping", isCurrentUser: "isCurrentUser" }, outputs: { windowsHeaderAction: "windowsHeaderAction" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatBubbleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appWindowsCSS]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { isTyping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCurrentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.backgroundColor']
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.color']
        }], windowsHeaderAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clickOnWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\github\larislab\portfolio\front\src\main.ts */"zUnb");


/***/ }),

/***/ "0lzo":
/*!*************************************************************!*\
  !*** ./src/app/directives/taskbar-main-button.directive.ts ***!
  \*************************************************************/
/*! exports provided: TaskbarMainButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskbarMainButtonDirective", function() { return TaskbarMainButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TaskbarMainButtonDirective {
    constructor() { }
}
TaskbarMainButtonDirective.ɵfac = function TaskbarMainButtonDirective_Factory(t) { return new (t || TaskbarMainButtonDirective)(); };
TaskbarMainButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TaskbarMainButtonDirective, selectors: [["", "appTaskbarMainButton", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskbarMainButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTaskbarMainButton]'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utils/utils.service */ "HPR3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["presentation"];
const _c1 = ["prev"];
const _c2 = ["next"];
const _c3 = ["skillsPane"];
function HomeComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../assets/images/icons/", skill_r6.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r6.name, " ");
} }
function HomeComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_13_div_2_Template, 4, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.skills);
} }
function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.aboutText, " ");
} }
class HomeComponent {
    constructor(renderer2, utilsService, router) {
        this.renderer2 = renderer2;
        this.utilsService = utilsService;
        this.router = router;
        this.skills = new Array(45);
        this.img = ['../../../assets/images/icons/angular.png'];
        this.sliderData = [
            {
                title: "What I used to work with 0"
            },
            {
                title: "Who Am'I ?"
            },
            {
                title: "What I used to work with 2"
            }
        ];
        this.sliderHeaderText = "What I used to work with";
        this.currentIndex = 0;
        this.aboutText = "";
        this.aboutTextInterval = null;
    }
    ngOnInit() {
        this.skills = [
            { icon: 'angular.svg' },
            { icon: 'css3.svg' },
            { icon: 'figma.svg' },
            { icon: 'flutter.svg' },
            { icon: 'git.png' },
            { icon: 'html.png' },
            { icon: 'ionic.png' },
            { icon: 'js.png' },
            { icon: 'laravel.svg' },
            { icon: 'nodejs.svg' },
            { icon: 'photoshop.svg' },
            { icon: 'php.svg' },
            { icon: 'python.svg' },
            { icon: 'rxjs.svg' },
            { icon: 'sass.svg' },
            { icon: 'typescript.svg' },
        ];
        this.skills = this.skills.map(x => {
            x.name = x.icon.substring(0, x.icon.indexOf('.')).toUpperCase();
            return x;
        });
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.renderer2.listen(this.nextIcon.nativeElement, "click", (e) => {
            if (this.currentIndex < 2) {
                this.currentIndex += 1;
            }
            if (this.currentIndex === 1) {
                window.clearInterval(this.aboutTextInterval);
                this.typingSimulator(300);
            }
            this.renderer2.addClass(this.slidePane.nativeElement, "slide-right");
        });
        this.renderer2.listen(this.prevIcon.nativeElement, "click", (e) => {
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
            }
            this.renderer2.removeClass(this.slidePane.nativeElement, "slide-right");
            this.renderer2.addClass(this.slidePane.nativeElement, "slide-left");
        });
    }
    typingSimulator(rate) {
        let lorem = this.utilsService.getLoremText() + ':)'.split('');
        let i = 0;
        let len = lorem.length;
        let stopTyping = false;
        this.aboutTextInterval = setInterval(() => {
            if (lorem[i] && !stopTyping) {
                const isTenMultiple = ((i % 10) / 1) === 0;
                if (!isTenMultiple) {
                    // stopTyping = true
                    // this.showCursor()
                }
                this.aboutText += '_';
                setTimeout(() => {
                    this.aboutText = this.aboutText.substring(0, this.aboutText.length - 1);
                    this.aboutText += lorem[i];
                    i++;
                }, 10);
            }
        }, rate);
    }
    showCursor() {
        let arr = new Array(3);
        for (let i in arr) {
            this.aboutText += '_';
            setInterval(() => {
                this.aboutText = this.aboutText.substring(0, this.aboutText.length - 1);
            }, 100);
            return false;
        }
    }
    get getSlideTitle() {
        return this.sliderData[this.currentIndex].title;
    }
    showSlide(i) {
        return i === this.currentIndex;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.presentationElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.prevIcon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nextIcon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slidePane = _t.first);
    } }, decls: 15, vars: 3, consts: [["id", "container"], [1, "body"], [1, "body-head"], ["id", "prev"], ["prev", ""], [1, "ri-arrow-left-circle-line"], [1, "title", 3, "click"], ["id", "next"], ["next", ""], [1, "ri-arrow-right-circle-line"], [1, "skills"], ["class", "skills-container", 4, "ngIf"], ["class", "about", 4, "ngIf"], [1, "skills-container"], ["skillsPane", ""], ["class", "skill-item", 4, "ngFor", "ngForOf"], [1, "skill-item"], ["alt", "", 3, "src"], [1, "tooltiptext"], [1, "about"], ["aboutPane", ""], [1, "content"], [1, "right"], [1, "bg"], ["src", "../../../assets/images/bg-&.jpg", "alt", ""], [1, "backdrop"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_7_listener() { return ctx.typingSimulator(100); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 8, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getSlideTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSlide(0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSlide(1));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#container[_ngcontent-%COMP%] {\n  background: #01202c;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100%;\n  height: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 0 0 !important;\n  padding: 0 0 0px 0 !important;\n}\n\n.body[_ngcontent-%COMP%] {\n  padding-top: 10%;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n\n.body[_ngcontent-%COMP%]   [class*=body-][_ngcontent-%COMP%] {\n  height: 20%;\n  width: 100%;\n  padding: 30px 50px;\n  display: flex;\n  align-items: center;\n  color: white;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: 30px;\n}\n\n.skills[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  color: white;\n  justify-content: center;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  transition: 1s;\n}\n\n.skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px;\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  margin: 20px;\n  border: 2px solid #7e965a;\n}\n\n.skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  font-size: 10px;\n  background-color: #00000066;\n  color: #fff;\n  text-align: center;\n  padding: 5px 20px;\n  border-radius: inherit;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-height: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n}\n\n.skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2n+1) {\n  transform: scale(1.5);\n  animation: skillIconAnimation 0.3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-duration: 2s;\n  transition: 1s;\n  animation-direction: alternate;\n}\n\n.skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n}\n\n.skills[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n.skills[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n.skills[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(217, 255, 0, 0.5);\n}\n\n.about[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n}\n\n.about[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 33px;\n  line-height: 1.2;\n  padding: 20px;\n}\n\n.about[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  z-index: 0;\n  position: absolute;\n  top: 0;\n}\n\n.about[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  object-fit: cover;\n  width: 100%;\n}\n\n.about[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%] {\n  background: black;\n  opacity: 0.7;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  top: 0;\n}\n\n.skills-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: stretch;\n  flex-wrap: inherit;\n}\n\n.slide-left[_ngcontent-%COMP%] {\n  transition: ease-in-out 3s;\n  animation: skillsPaneAnimationPrev;\n  animation-duration: 3s;\n  animation-fill-mode: forwards;\n}\n\n.slide-right[_ngcontent-%COMP%] {\n  transition: ease-in-out 3s;\n  animation: skillsPaneAnimationNext;\n  animation-duration: 3s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes skillIconAnimation {\n  0% {\n    \n    \n    transform: scale(1.2);\n  }\n  50% {\n    \n    \n    transform: rotate(5deg);\n  }\n  100% {\n    \n    \n    transform: rotate(-5deg);\n  }\n}\n\n@keyframes skillsPaneAnimationPrev {\n  0% {\n    transform: translateX(-30%);\n    opacity: 1;\n    transition: 2ms;\n  }\n  50% {\n    transform: translateX(-60%);\n    opacity: 0.8;\n    transition: 2ms;\n  }\n  99% {\n    transform: translateX(-100%);\n    opacity: 0.3;\n  }\n  100% {\n    transform: translateX(0%);\n    opacity: 0;\n  }\n}\n\n@keyframes skillsPaneAnimationNext {\n  0% {\n    transform: translateX(30%);\n    opacity: 1;\n    transition: 2ms;\n  }\n  50% {\n    transform: translateX(60%);\n    opacity: 0.8;\n    transition: 2ms;\n  }\n  99% {\n    transform: translateX(100%);\n    opacity: 0.3;\n  }\n  100% {\n    transform: translateX(0%);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFFQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUROOztBQUdJO0VBQ0UsbUJBQUE7QUFETjs7QUFHSTtFQUNFLHFCQUFBO0FBRE47O0FBSU07RUFFRSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FBSFI7O0FBTUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSk47O0FBUUU7RUFDRSxXQUFBO0FBTko7O0FBUUU7RUFDRSxvREFBQTtFQUNBLG1CQUFBO0FBTko7O0FBUUU7RUFDRSxtQkFBQTtFQUNBLHdEQUFBO0FBTko7O0FBVUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTko7O0FBT0k7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFMTjs7QUFRRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQVksVUFBQTtFQUNWLGtCQUFBO0VBQ0EsTUFBQTtBQUxOOztBQU1JO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUpOOztBQU9JO0VBQ0UsaUJBQUE7RUFDRixZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUFMSjs7QUFVQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVNBO0VBRUUsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFQRjs7QUFXQTtFQUVFLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBVEY7O0FBYUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUNBQUE7SUFDQSxxQkFBQTtFQVZGO0VBWUE7SUFDRSxrQkFBQTtJQUNBLGdDQUFBO0lBQ0EsdUJBQUE7RUFWRjtFQVlBO0lBQ0UsZ0JBQUE7SUFDQSxnQ0FBQTtJQUNBLHdCQUFBO0VBVkY7QUFDRjs7QUFhQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtFQVhGO0VBYUE7SUFDRSwyQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBWEY7RUFhQTtJQUNFLDRCQUFBO0lBQ0EsWUFBQTtFQVhGO0VBYUE7SUFDRSx5QkFBQTtJQUNBLFVBQUE7RUFYRjtBQUNGOztBQWNBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VBWkY7RUFjQTtJQUNFLDBCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFaRjtFQWNBO0lBQ0UsMkJBQUE7SUFDQSxZQUFBO0VBWkY7RUFjQTtJQUNFLHlCQUFBO0lBQ0EsVUFBQTtFQVpGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAxMjAyYywgJGFscGhhOiAxKTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93YWxscGFwZXIvd3BwLTIuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMCAwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBbY2xhc3MqPVwiYm9keS1cIl0ge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gcGFkZGluZzogMzBweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB0cmFuc2l0aW9uOiAxcztcclxuICAuc2tpbGwtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMGJhM2RlNjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZTk2NWE7XHJcbiAgICAudG9vbHRpcHRleHQge1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDY2O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgJjpudGgtY2hpbGQoMm4gKyAxKSB7XHJcbiAgICAgICAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgICAgICBhbmltYXRpb246IHNraWxsSWNvbkFuaW1hdGlvbiAwLjNzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAvLyBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgyMTcsIDI1NSwgMCwgMC41KTtcclxuICB9XHJcbn1cclxuXHJcbi5hYm91dCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7ei1pbmRleDogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICB9XHJcbiAgICAuYmFja2Ryb3B7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGxzLWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICBmbGV4LXdyYXA6IGluaGVyaXQ7XHJcbn1cclxuLnNsaWRlLWxlZnQge1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgM3M7XHJcbiAgYW5pbWF0aW9uOiBza2lsbHNQYW5lQW5pbWF0aW9uUHJldjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIC8vIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4uc2xpZGUtcmlnaHQge1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAzcztcclxuICBhbmltYXRpb246IHNraWxsc1BhbmVBbmltYXRpb25OZXh0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgLy8gYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2tpbGxJY29uQW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xyXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyAqL1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLyogb3BhY2l0eTogMC4xOyAqL1xyXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7ICovXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAvKiBvcGFjaXR5OiAxOyAqL1xyXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7ICovXHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNraWxsc1BhbmVBbmltYXRpb25QcmV2IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogMm1zO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02MCUpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdHJhbnNpdGlvbjogMm1zO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2tpbGxzUGFuZUFuaW1hdGlvbk5leHQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IDJtcztcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2MCUpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdHJhbnNpdGlvbjogMm1zO1xyXG4gIH1cclxuICA5OSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { presentationElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['presentation']
        }], prevIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['prev']
        }], nextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['next']
        }], slidePane: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['skillsPane']
        }] }); })();


/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/utils/utils.service */ "HPR3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["presentation"];
function HeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} }
class HeaderComponent {
    constructor(renderer2, utilsService, router) {
        this.renderer2 = renderer2;
        this.utilsService = utilsService;
        this.router = router;
        this.presentationText = "";
        this.skills = new Array(45);
        this.img = ['../../../assets/images/icons/angular.png'];
    }
    ngOnInit() {
        // this.skills = [{}, {}, {}]
    }
    ngAfterViewInit() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        setInterval(() => {
            this.addStyleToPresentationText();
        }, 3000);
        // console.log(this.presentationElement.nativeElement)
    }
    addStyleToPresentationText() {
        if (!this.presentationElement)
            return;
        let element = this.presentationElement.nativeElement;
        this.presentationText = element.textContent;
        let textArray = this.presentationText.split(" ");
        element.innerHTML = "";
        textArray = textArray.map((word) => {
            const color = this.utilsService.getRandomColor();
            const text = word;
            word = `<span class="${color}" style=":hover{color:${this.utilsService.getRandomColor()}}">${word}</span>`;
            word = this.renderer2.createElement('span');
            this.renderer2.addClass(word, color);
            word.innerHTML = text + " ";
            // this.renderer2.listen(word, 'mouseover', (e) => {
            this.renderer2.setStyle(word, 'color', word.className);
            // });
            // this.renderer2.listen(word, 'mouseleave', (e) => {
            // this.renderer2.removeAttribute(word, 'style')
            // })
            this.renderer2.appendChild(element, word);
            return word;
        });
    }
    get currentUrl() {
        return this.router.url;
    }
    get isHomePage() {
        return this.currentUrl === '/home' || this.currentUrl === '/';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.presentationElement = _t.first);
    } }, decls: 20, vars: 2, consts: [[3, "ngClass"], ["class", "presentation", 4, "ngIf"], [1, "nav"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/portfolio", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], ["routerLink", "/misc", "routerLinkActive", "active"], [1, "presentation"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Miscelanneous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isHomePage ? "header" : "header regular-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHomePage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px 20px;\n  display: flex;\n  align-items: center;\n  color: white;\n  justify-content: space-between;\n  background: #01202c;\n  padding: 20px;\n  position: fixed;\n  z-index: 10;\n}\n.header[_ngcontent-%COMP%]   .presentation[_ngcontent-%COMP%] {\n  transition: 500ms ease-in-out;\n  font-size: 6rem;\n  max-width: 50%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  line-height: normal;\n}\n.header[_ngcontent-%COMP%]   .presentation[_ngcontent-%COMP%]   .name-item[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg);\n  color: aqua;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  padding: 20px;\n  font-size: 20px;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: #adfe2f;\n  border-bottom: 2px solid;\n  padding-bottom: 10px;\n}\n.active[_ngcontent-%COMP%] {\n  color: #adfe2f !important;\n  border-bottom: 2px solid;\n  padding-bottom: 10px;\n}\n.regular-navbar[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 15px -6px #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDWTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtBQUNoQjtBQU1RO0VBQ0kscUJBQUE7QUFKWjtBQUtZO0VBQ0ksV0FBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0FBSmhCO0FBS2dCO0VBQ0ksZ0JBQUE7QUFIcEI7QUFNZ0I7RUFDSSxjQUFBO0FBSnBCO0FBTWdCOztFQUVJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBSnBCO0FBV0E7RUFDSSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUFSSjtBQVdBO0VBRUksa0NBQUE7QUFUSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgLy8gaGVpZ2h0OiAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAxMjAyYywgJGFscGhhOiAxLjApO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgLnByZXNlbnRhdGlvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAubmFtZS1pdGVtIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXF1YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXYge1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAvLyBjb2xvcjogd2hlYXQ7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW46aG92ZXIsXHJcbiAgICAgICAgICAgICAgICBzcGFuIGE6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2FkZmUyZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNhZGZlMmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucmVndWxhci1uYXZiYXIge1xyXG4gICAgLy8gaGVpZ2h0OiAxMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDE1cHggLTZweCAjMDAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { presentationElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['presentation']
        }] }); })();


/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    canLogin() {
        if (this.username === undefined || this.username === null || this.username.trim() === "") {
            this.messageError = "Please provide username";
            return false;
        }
        if (this.username === undefined || this.username === null || this.username.trim() === "") {
            this.messageError = "Please provide password";
            return false;
        }
        return true;
    }
}


/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3tD2":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_socket_io_socket_io_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/socket-io/socket-io.service */ "91IW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = ["messageBox"];
function ChatComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("msg-item-", msg_r3.id === ctx_r1.username ? "right" : "left", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", msg_r3.text, " ");
} }
function ChatComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatComponent {
    constructor(socketService) {
        this.socketService = socketService;
        this.username = "";
        this.isTyping = false;
        this.iAmTyping = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.messages = [];
        this.isScrolling = false;
    }
    ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.isTyping = changes.isTyping ? changes.isTyping.currentValue : this.isTyping;
        this.messages = changes.messages ? changes.messages.currentValue : this.messages;
        setTimeout(() => {
            this.scrollToBottom();
        }, 0);
    }
    ngOnInit() {
        this.socketService.listen("message").subscribe(evt => {
        });
        // setInterval(() => {
        //   this.scrollToBottom()
        // }, 10);
    }
    sendMessage() {
        if (this.message.length === 0)
            return;
        this.socketService.emit('message', {
            message: this.message
        });
        this.newMessage.emit({
            id: this.username,
            text: this.message,
            isCurrentUser: false,
            isTyping: false
        });
        this.message = "";
    }
    typingEvent(eventType) {
        if (eventType === 'focus') {
            this.iAmTyping.emit(true);
            this.isScrolling = false;
        }
        if (eventType === 'blur') {
            this.iAmTyping.emit(false);
        }
        setTimeout(() => {
            this.scrollToBottom();
        }, 200);
    }
    scrollToBottom(params) {
        this.messageBox.nativeElement.scroll({
            left: 0, top: this.messageBox.nativeElement.scrollHeight, behavior: 'smooth'
        });
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_io_socket_io_service__WEBPACK_IMPORTED_MODULE_1__["SocketIoService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageBox = _t.first);
    } }, inputs: { username: "username", isTyping: "isTyping", messages: "messages" }, outputs: { iAmTyping: "iAmTyping", newMessage: "newMessage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 3, consts: [[1, "chat-container"], [1, "messages", "custom-scrollbar", 3, "scroll"], ["messageBox", ""], [3, "class", 4, "ngFor", "ngForOf"], ["class", "msg-item-left", 4, "ngIf"], [1, "input-area"], ["type", "text", 3, "ngModel", "focus", "ngModelChange", "blur", "keyup.enter"], [1, "icon"], [1, "ri-send-plane-2-fill"], [1, "inner"], [1, "text"], [1, "msg-item-left"], [1, "typing-bubble"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ChatComponent_Template_div_scroll_1_listener() { return ctx.isScrolling = !ctx.isScrolling; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_div_3_Template, 4, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatComponent_div_4_Template, 7, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ChatComponent_Template_input_focus_6_listener() { return ctx.typingEvent("focus"); })("ngModelChange", function ChatComponent_Template_input_ngModelChange_6_listener($event) { return ctx.message = $event; })("blur", function ChatComponent_Template_input_blur_6_listener() { return ctx.typingEvent("blur"); })("keyup.enter", function ChatComponent_Template_input_keyup_enter_6_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTyping);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".chat-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.chat-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%] {\n  background: #ededed;\n  height: 80%;\n  border: 2px solid #dda7a7;\n  overflow-y: scroll;\n  border-radius: 8px;\n}\n.chat-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   [class^=msg-item][_ngcontent-%COMP%] {\n  min-height: 50px;\n  width: 100%;\n  margin: 10px 0;\n  padding: 0px 10px;\n}\n.chat-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   [class^=msg-item][_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  background: #e227b7;\n  max-width: 70%;\n  padding: 10px 20px;\n}\n.chat-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   [class^=msg-item][_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n.chat-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .msg-item-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.chat-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .msg-item-right[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.chat-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .msg-item-left[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: start;\n  padding-left: 5%;\n  height: 20%;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: relative;\n  left: 3%;\n  vertical-align: middle;\n  display: inline-flex;\n  font-size: 28px;\n  color: #e314d3;\n  align-items: center;\n  border: 1px solid #e227b7;\n  border-radius: 50%;\n  height: 45px;\n  width: 45px;\n}\n.chat-container[_ngcontent-%COMP%]   .input-area[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.chat-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #d6b7b7;\n  border-radius: 15px;\n  color: #0b0e12;\n}\n.chat-container[_ngcontent-%COMP%]   .typing-bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n  float: left;\n  margin: 0 1px;\n  background-color: #ffffff;\n  display: block;\n  border-radius: 50%;\n  opacity: 0.4;\n}\n.chat-container[_ngcontent-%COMP%]   .typing-bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n  animation: 1s blink infinite 0.3333s;\n}\n.chat-container[_ngcontent-%COMP%]   .typing-bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  animation: 1s blink infinite 0.6666s;\n}\n.chat-container[_ngcontent-%COMP%]   .typing-bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3) {\n  animation: 1s blink infinite 0.9999s;\n}\n@keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes bulge {\n  50% {\n    transform: scale(1.05);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVOO0FBRE07RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR1I7QUFGUTtFQUNFLHFCQUFBO0FBSVY7QUFBSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUVOO0FBRE07RUFDRSxnQkFBQTtBQUdSO0FBQUk7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUFFTjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDRixlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBTTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQUVSO0FBRUU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUROO0FBR1E7RUFDRSxvQ0FBQTtBQURWO0FBQVE7RUFDRSxvQ0FBQTtBQUVWO0FBSFE7RUFDRSxvQ0FBQTtBQUtWO0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLHNCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLm1lc3NhZ2VzIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMjEsIDE2NywgMTY3KTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIFtjbGFzc149XCJtc2ctaXRlbVwiXSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgIC5pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTIyN2I3O1xyXG4gICAgICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5tc2ctaXRlbS1yaWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIC5pbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1zZy1pdGVtLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbnB1dC1hcmVhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcblxyXG4gICAgLmljb257XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogMyU7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6ICNlMzE0ZDM7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyMjdiNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICBpe1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmI3Yjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwYjBlMTI7XHJcbiAgfVxyXG4gIC50eXBpbmctYnViYmxlIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbWFyZ2luOiAwIDFweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDMge1xyXG4gICAgICAgICY6bnRoLW9mLXR5cGUoI3skaX0pIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGUgKCRpICogMC4zMzMzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnVsZ2Uge1xyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return [{ type: _services_socket_io_socket_io_service__WEBPACK_IMPORTED_MODULE_1__["SocketIoService"] }]; }, { username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['username']
        }], isTyping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isTyping']
        }], iAmTyping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['messages']
        }], messageBox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messageBox']
        }] }); })();


/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "91IW":
/*!*********************************************************!*\
  !*** ./src/app/services/socket-io/socket-io.service.ts ***!
  \*********************************************************/
/*! exports provided: SocketIoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketIoService", function() { return SocketIoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class SocketIoService {
    constructor() {
        this.endPoint = 'ws://localhost:3000';
        // this.socket = io(this.endPoint)
    }
    listen(eventname) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((sub) => {
            // this.socket.on(eventname, (data) => {
            //   sub.next(data)
            // })
        });
    }
    emit(eventName, data) {
        // this.socket.emit(eventName, data)
    }
}
SocketIoService.ɵfac = function SocketIoService_Factory(t) { return new (t || SocketIoService)(); };
SocketIoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketIoService, factory: SocketIoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketIoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");





class AuthService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
    }
    loginWithGoogle(getUrl) {
        if (getUrl) {
            return new Promise((resolve, reject) => {
                this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'v1/auth/login-with-google/get-url', {}).subscribe(response => {
                    resolve(response);
                }, error => {
                    resolve(undefined);
                });
            });
        }
        return new Promise((resolve, reject) => {
            this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'v1/auth/login-with-google', {}).subscribe(response => {
                resolve(response);
            }, error => {
                resolve(undefined);
            });
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _taskbar_taskbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../taskbar/taskbar.component */ "bK6z");
/* harmony import */ var _directives_windows_css_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/windows-css.directive */ "ZQax");
/* harmony import */ var _directives_chat_bubble_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/chat-bubble.directive */ "+fOr");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");







function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("windowsHeaderAction", function HomeComponent_div_2_Template_div_windowsHeaderAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.windowsHeaderActionListener($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const window_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", window_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("windowInfos", window_r1)("allWindows", ctx_r0.allWindows);
} }
class HomeComponent {
    constructor(elemenRef, renderer2) {
        this.elemenRef = elemenRef;
        this.renderer2 = renderer2;
        this.pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
        this.allWindows = [];
    }
    ngOnInit() {
        this.allWindows = [];
    }
    clickOnNavItem(navItem) {
        console.log(navItem);
        let windowExist = this.allWindows.find(x => x.id === navItem.id) !== undefined;
        if (windowExist) {
            let windowHtmlElement = document.getElementById(navItem.id);
            // if (navItem.navItem.isMinimized === true) {
            //   this.renderer2.removeClass(windowHtmlElement, 'minimize-window')
            //   navItem.navItem.isMinimized = false
            //   return
            // } else {
            //   navItem.navItem.isMinimized = true
            //   this.renderer2.addClass(windowHtmlElement, 'minimize-window')
            // }
            //set related window as the top most
            this.allWindows.forEach(w => {
                const zindex = parseInt(localStorage.getItem('latestWindowId')) - 2;
                this.renderer2.setStyle(document.getElementById(w.id), 'z-index', zindex);
            });
            this.renderer2.setStyle(windowHtmlElement, 'z-index', localStorage.getItem('latestWindowId'));
            console.log('windowExist', navItem.navItem.isMinimized === true);
            this.allWindows = [...this.allWindows];
            return;
        }
        this.allWindows.push(navItem);
        this.allWindows = [...this.allWindows];
    }
    generateWindow() {
        let window = this.renderer2.createElement('div');
        this.renderer2.addClass(window, 'app-window');
        this.renderer2.setProperty(window, 'appWindowsCSS', null);
        this.renderer2.setProperty(window, 'cdkDragBoundary', ".home-container");
        this.renderer2.setProperty(window, 'cdkDrag', null);
        this.allWindows.push(window);
    }
    windowsHeaderActionListener(evt) {
        if (evt.action === 'close') {
            this.allWindows = this.allWindows.filter((w) => {
                return w.id !== evt.id;
            });
        }
        if (evt.action === 'minimize') {
        }
        this.windowsHeaderAction = evt;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 3, consts: [["id", "home-container", 1, "home-container"], [1, "workspace"], ["class", "app-window", "appWindowsCSS", "", "cdkDragBoundary", ".home-container", "cdkDrag", "", 3, "windowInfos", "allWindows", "id", "windowsHeaderAction", 4, "ngFor", "ngForOf"], [3, "listenToWindowsHeaderAction", "allWindows", "clickOnNavItem"], ["appWindowsCSS", "", "cdkDragBoundary", ".home-container", "cdkDrag", "", 1, "app-window", 3, "windowInfos", "allWindows", "id", "windowsHeaderAction"], [1, "app-window-body"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-taskbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnNavItem", function HomeComponent_Template_app_taskbar_clickOnNavItem_3_listener($event) { return ctx.clickOnNavItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allWindows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listenToWindowsHeaderAction", ctx.windowsHeaderAction)("allWindows", ctx.allWindows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _taskbar_taskbar_component__WEBPACK_IMPORTED_MODULE_2__["TaskbarComponent"], _directives_windows_css_directive__WEBPACK_IMPORTED_MODULE_3__["WindowsCSSDirective"], _directives_chat_bubble_directive__WEBPACK_IMPORTED_MODULE_4__["ChatBubbleDirective"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDrag"]], styles: ["#home-container[_ngcontent-%COMP%] {\n  background: #8C8989;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n  position: relative;\n  background-image: url('wpp-2.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n#home-container[_ngcontent-%COMP%]   .workspace[_ngcontent-%COMP%] {\n  height: 85%;\n  width: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM4Qzg5ODk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3dhbGxwYXBlci93cHAtMi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLndvcmtzcGFjZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "CFL1":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
    }
    login(user) {
        return new Promise((resolve, reject) => {
            this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, user).subscribe((response) => {
                if (response.success) {
                    resolve(true);
                }
                resolve(false);
            });
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "FBxv":
/*!*****************************************************************************************************!*\
  !*** ./src/app/softwares/gmail-scrapper/gmail-scrapper-nav-bar/gmail-scrapper-nav-bar.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: GmailScrapperNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmailScrapperNavBarComponent", function() { return GmailScrapperNavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils/utils.service */ "HPR3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











const _c0 = ["presentation"];
function GmailScrapperNavBarComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.viewValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.viewValue, " ");
} }
class GmailScrapperNavBarComponent {
    constructor(renderer2, utilsService, router) {
        this.renderer2 = renderer2;
        this.utilsService = utilsService;
        this.router = router;
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.presentationText = "";
        this.skills = new Array(45);
        this.img = ['../../../assets/images/icons/angular.png'];
        this.queryTopics = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("");
        this.queryFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("");
        this.filterItems = [
            { value: 'steak-0', viewValue: 'Topics' },
            { value: 'pizza-1', viewValue: 'Title' },
            { value: 'tacos-2', viewValue: 'All' }
        ];
    }
    ngOnInit() {
        // this.skills = [{}, {}, {}]
        this.queryFilter.valueChanges.subscribe(v => {
            this.searchEvent.emit({ type: 'filter', query: this.queryFilter.value.toLowerCase() });
        });
        this.queryTopics.valueChanges.subscribe(v => {
            this.searchEvent.emit({ type: 'topics', query: this.queryTopics.value.toLowerCase() });
        });
    }
    ngAfterViewInit() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        setInterval(() => {
            this.addStyleToPresentationText();
        }, 3000);
        // console.log(this.presentationElement.nativeElement)
    }
    addStyleToPresentationText() {
        if (!this.presentationElement)
            return;
        let element = this.presentationElement.nativeElement;
        this.presentationText = element.textContent;
        let textArray = this.presentationText.split(" ");
        element.innerHTML = "";
        textArray = textArray.map((word) => {
            const color = this.utilsService.getRandomColor();
            const text = word;
            word = `<span class="${color}" style=":hover{color:${this.utilsService.getRandomColor()}}">${word}</span>`;
            word = this.renderer2.createElement('span');
            this.renderer2.addClass(word, color);
            word.innerHTML = text + " ";
            // this.renderer2.listen(word, 'mouseover', (e) => {
            this.renderer2.setStyle(word, 'color', word.className);
            // });
            // this.renderer2.listen(word, 'mouseleave', (e) => {
            // this.renderer2.removeAttribute(word, 'style')
            // })
            this.renderer2.appendChild(element, word);
            return word;
        });
    }
    get currentUrl() {
        return this.router.url;
    }
    get isHomePage() {
        return this.currentUrl === '/home' || this.currentUrl === '/';
    }
}
GmailScrapperNavBarComponent.ɵfac = function GmailScrapperNavBarComponent_Factory(t) { return new (t || GmailScrapperNavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
GmailScrapperNavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GmailScrapperNavBarComponent, selectors: [["app-gmail-scrapper-nav-bar"]], viewQuery: function GmailScrapperNavBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.presentationElement = _t.first);
    } }, outputs: { searchEvent: "searchEvent" }, decls: 32, vars: 4, consts: [[3, "ngClass"], [1, "links"], [1, "presentation"], [1, "nav"], ["routerLink", "/gscrapper", "routerLinkActive", "active"], ["routerLink", "/gscrapper/mmm", "routerLinkActive", "active"], ["routerLink", "/gscrapper/lll", "routerLinkActive", "active"], [1, "filters"], [1, "input-search"], ["matInput", "", 3, "formControl"], ["appearance", "standard"], ["name", "filter", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function GmailScrapperNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Search a query string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Filter By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GmailScrapperNavBarComponent_mat_option_31_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isHomePage ? "header" : "header regular-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.queryTopics);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.queryFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: [".header[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  padding: 0px 20px;\n  color: white;\n  background: #01202c;\n  padding: 20px;\n  position: fixed;\n  z-index: 10;\n}\n.header[_ngcontent-%COMP%]   .presentation[_ngcontent-%COMP%] {\n  transition: 500ms ease-in-out;\n  font-size: 6rem;\n  max-width: 50%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  line-height: normal;\n  margin-right: 100px;\n}\n.header[_ngcontent-%COMP%]   .presentation[_ngcontent-%COMP%]   .name-item[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg);\n  color: aqua;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  padding: 20px;\n  font-size: 20px;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: #adfe2f;\n  border-bottom: 2px solid;\n  padding-bottom: 10px;\n}\n.active[_ngcontent-%COMP%] {\n  color: #adfe2f !important;\n  border-bottom: 2px solid;\n  padding-bottom: 10px;\n}\n.links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  background: white;\n  border-radius: 10px;\n  color: black;\n  margin: 0 auto;\n  width: 80%;\n}\n.filters[_ngcontent-%COMP%]   mat-form-field.input-search[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 46px;\n  margin: 0px 20px;\n}\n.filters[_ngcontent-%COMP%]   mat-form-field.input-search[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  color: black;\n  font-size: 20px;\n}\n.regular-navbar[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 15px -6px #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29mdHdhcmVzL2dtYWlsLXNjcmFwcGVyL2dtYWlsLXNjcmFwcGVyLW5hdi1iYXIvZ21haWwtc2NyYXBwZXItbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjtBQUFFO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUFVO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0FBRWQ7QUFLTTtFQUNJLHFCQUFBO0FBSFY7QUFJVTtFQUNJLFdBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBQUhkO0FBSWM7RUFDSSxnQkFBQTtBQUZsQjtBQUtjO0VBQ0ksY0FBQTtBQUhsQjtBQUtjOztFQUVJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBSGxCO0FBVUE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUFQRjtBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFORjtBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNILGNBQUE7RUFDRyxVQUFBO0FBTko7QUFPSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQU1NO0VBQXdCLHVCQUFBO0VBQ3RCLFlBQUE7RUFDQSxlQUFBO0FBSFI7QUFNQTtFQUVFLGtDQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9zb2Z0d2FyZXMvZ21haWwtc2NyYXBwZXIvZ21haWwtc2NyYXBwZXItbmF2LWJhci9nbWFpbC1zY3JhcHBlci1uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHggMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMTIwMmMsICRhbHBoYTogMS4wKTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDtcclxuICAucHJlc2VudGF0aW9uIHtcclxuICAgICAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICAgIC5uYW1lLWl0ZW0ge1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBhcXVhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5uYXYge1xyXG4gICAgICAvLyBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgIC8vIGNvbG9yOiB3aGVhdDtcclxuICAgICAgdWwge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc3Bhbjpob3ZlcixcclxuICAgICAgICAgICAgICBzcGFuIGE6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNhZGZlMmY7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogI2FkZmUyZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4ubGlua3N7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcblxyXG59XHJcbi5maWx0ZXJze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hdC1mb3JtLWZpZWxkLmlucHV0LXNlYXJjaHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gICAgICAubWF0LWJ1dHRvbi13cmFwcGVyeyAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O31cclxuICAgIH1cclxufVxyXG4ucmVndWxhci1uYXZiYXIge1xyXG4gIC8vIGhlaWdodDogMTAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTVweCAtNnB4ICMwMDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GmailScrapperNavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gmail-scrapper-nav-bar',
                templateUrl: './gmail-scrapper-nav-bar.component.html',
                styleUrls: ['./gmail-scrapper-nav-bar.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { presentationElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['presentation']
        }], searchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['searchEvent']
        }] }); })();


/***/ }),

/***/ "HPR3":
/*!*************************************************!*\
  !*** ./src/app/services/utils/utils.service.ts ***!
  \*************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UtilsService {
    constructor() {
        this.loremText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima distinctio non, dignissimos aspernatur iste doloribus numquam veritatis eligendi dolor impedit ipsam esse quae voluptatibus! Nesciunt porro iure eveniet cumque? Labore!";
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    getLoremText() {
        return this.loremText;
    }
}
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JsHC":
/*!************************************!*\
  !*** ./src/app/models/nav-item.ts ***!
  \************************************/
/*! exports provided: NavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
class NavItem {
    constructor(name, icon, data) {
        this.name = name;
        this.icon = icon;
        this.data = data;
    }
}


/***/ }),

/***/ "OSzh":
/*!************************************************************************!*\
  !*** ./src/app/softwares/multi-clipboard/multi-clipboard.component.ts ***!
  \************************************************************************/
/*! exports provided: MultiClipboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiClipboardComponent", function() { return MultiClipboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");










const _c0 = ["copyField"];
const _c1 = ["collectionModalInput"];
const _c2 = ["rowModalInput"];
function MultiClipboardComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topping_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", topping_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topping_r5.name);
} }
function MultiClipboardComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 30);
} }
function MultiClipboardComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_div_20_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r8 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.copyItem(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiClipboardComponent_div_20_div_1_Template, 1, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "clipboardItem", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.content, " ");
} }
function MultiClipboardComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiClipboardComponent_div_37_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.collectionToEditName = $event; })("keyup.enter", function MultiClipboardComponent_div_37_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.handleAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_div_37_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.handleAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_div_37_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.abort(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.collectionToEditName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.collectionToEditName.trim() === "");
} }
function MultiClipboardComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiClipboardComponent_div_38_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.rowToEditContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_div_38_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.handleAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_div_38_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.abort(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.rowToEditContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.rowToEditContent.trim() === "");
} }
class MultiClipboardComponent {
    constructor(rendrer2) {
        this.rendrer2 = rendrer2;
        this.selectedTopping = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](JSON.parse(localStorage.getItem('selectedCollection')));
        this.items = new Array(50).fill({
            id: 0,
            content: "Lorem ipsum"
        });
        this.selectedToppingObj = null;
        this.selectedToppingRow = null;
        this.toppingList = [];
        this.collectionToEditName = "";
        this.rowToEditContent = "";
        this.initParams();
    }
    ngOnInit() {
        // localStorage.clear()
        // 
    }
    initParams() {
        this.toppingList.map((x, i) => x.id = i);
        let cols = localStorage.getItem('collectionList');
        if (cols) {
            this.toppingList = JSON.parse(cols);
        }
        let slctd = localStorage.getItem('selectedCollection');
        if (slctd) {
            console.log(JSON.parse(slctd), this.selectedTopping.value);
            this.selectedTopping.patchValue(JSON.parse(slctd));
            console.log(this.selectedTopping.value);
            this.selectedToppingObj = JSON.parse(slctd);
        }
        this.selectedTopping.valueChanges.subscribe((v) => {
            if (v) {
                this.selectedToppingObj = v;
                localStorage.setItem('selectedCollection', JSON.stringify(v));
            }
        });
    }
    ngAfterContentInit() {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        //  this.initParams()
    }
    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        setTimeout(() => {
            this.selectedTopping = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](JSON.parse(localStorage.getItem('selectedCollection')));
        }, 1000);
    }
    drop(event) {
        // console.log(event)
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.selectedToppingItems, event.previousIndex, event.currentIndex);
    }
    copyItem(index) {
        this.selectedToppingRow = this.selectedToppingItems[index];
        const previousSelectedRowIndex = this.getPreviousSelectedRowIndex;
        localStorage.setItem('previousSelectedRowIndex', index);
        if (previousSelectedRowIndex !== null) {
            const previousItemHtmlElm = document.getElementById('clipboardItem' + previousSelectedRowIndex);
            this.rendrer2.removeClass(previousItemHtmlElm, 'selected-clipboard-row');
        }
        const selectedItemHtmlElm = document.getElementById('clipboardItem' + index);
        this.rendrer2.addClass(selectedItemHtmlElm, 'selected-clipboard-row');
        setTimeout(() => {
            this.copyField.nativeElement.select();
            this.copyField.nativeElement.setSelectionRange(0, 99999);
            document.execCommand("copy");
            console.log('its ok', this.copyField.nativeElement.value);
        }, 200);
    }
    get getPreviousSelectedRowIndex() {
        let id = localStorage.getItem('previousSelectedRowIndex');
        if (id)
            return parseInt(id);
        return null;
    }
    get selectedToppingName() {
        if (this.selectedTopping.value)
            return this.selectedTopping.value.name;
        return '';
    }
    get selectedToppingItems() {
        if (this.selectedTopping.value)
            return this.selectedTopping.value.items;
        return [];
    }
    selectedRowContent() {
        if (this.selectedToppingRow)
            return this.selectedToppingRow.content;
        return '';
    }
    getSelectedToppingObj() {
        if (this.selectedTopping.value) {
            this.selectedToppingObj = this.selectedTopping.value;
        }
        else {
            this.selectedToppingObj = { name: "", items: [] };
        }
        ;
        return this.selectedToppingObj;
    }
    //handle action
    handleAction() {
        switch (this.currentAction) {
            case "addCollection":
                this.addCollection(this.collectionToEditName);
                this.showCollectionModal = false;
                break;
            case "editCollection":
                let index = this.toppingList.findIndex(x => {
                    return x.id === this.selectedToppingObj.id;
                });
                this.editCollection(index, this.collectionToEditName);
                this.showCollectionModal = false;
                break;
            case "addRow":
                // if (this.selectedTopping.value) {
                //   console.log(this.selectedTopping.value)
                //   this.selectedToppingObj.id
                // } else {
                //   console.log('no')
                // }
                this.addRow(this.rowToEditContent, this.selectedToppingObj.id);
                this.showRowModal = false;
                break;
            case "editRow":
                console.log(this.selectedToppingRow.id);
                this.editRow(this.rowToEditContent, this.selectedToppingObj.id, this.selectedToppingRow.id);
                this.showRowModal = false;
                break;
            default:
                break;
        }
        localStorage.setItem('collectionList', JSON.stringify(this.toppingList));
    }
    //collection
    collectionAction(action) {
        switch (action) {
            case 'add':
                this.currentAction = "addCollection";
                break;
            case 'edit':
                this.currentAction = "editCollection";
                this.collectionToEditName = this.selectedToppingName;
                break;
            default:
                break;
        }
        this.showCollectionModal = true;
        setTimeout(() => {
            let input = document.getElementById('collectionModalInput');
            input.focus();
        }, 200);
    }
    addCollection(name) {
        if (!name)
            return;
        let id = this.toppingList.length === 0 ? 0 : this.toppingList.length;
        let newCollection = { id: id, name: name, items: [] };
        this.toppingList.push(newCollection);
        this.selectedTopping.patchValue(newCollection);
        this.collectionToEditName = "";
    }
    editCollection(index, name) {
        this.toppingList[index].name = name;
        this.collectionToEditName = "";
    }
    deleteCollection(index = this.selectedToppingObj.id) {
        this.toppingList.splice(index, 1);
        index = index - 1;
        if (index < 0) {
            index = 0;
        }
        let i = this.toppingList.findIndex(x => {
            return x.id === index;
        });
        this.selectedTopping.patchValue(this.toppingList[i]);
    }
    dropCollection(index = this.selectedToppingObj.id) {
        console.log(index, this.toppingList[index]);
        this.toppingList[index].items = [];
    }
    //row
    rowAction(action) {
        switch (action) {
            case 'add':
                this.currentAction = "addRow";
                break;
            case 'edit':
                if (!this.selectedToppingRow)
                    return;
                this.rowToEditContent = this.selectedToppingRow.content;
                this.currentAction = "editRow";
                break;
            default:
                break;
        }
        if (this.toppingList.length > 0) {
            this.showRowModal = true;
            setTimeout(() => {
                let input = document.getElementById('rowModalInput');
                input.focus();
            }, 200);
        }
    }
    addRow(content, collectionIndex) {
        let id = this.selectedToppingItems.length === 0 ? 0 : this.selectedToppingItems.length;
        let newRow = { id: id, content: content };
        console.log(collectionIndex, this.toppingList);
        this.toppingList[collectionIndex].items.push(newRow);
        this.rowToEditContent = "";
    }
    editRow(content, collectionIndex, rowIndex) {
        console.log(rowIndex);
        this.toppingList[collectionIndex].items[rowIndex].content = content;
    }
    deleteRow(collectionIndex = this.selectedToppingObj.id, rowIndex = this.selectedToppingRow.id) {
        this.toppingList[collectionIndex].items.splice(rowIndex, 1);
        this.selectedToppingRow = null;
    }
    abort() {
        this.collectionToEditName = '';
        this.rowToEditContent = '';
        this.showCollectionModal = false;
        this.showRowModal = false;
    }
}
MultiClipboardComponent.ɵfac = function MultiClipboardComponent_Factory(t) { return new (t || MultiClipboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
MultiClipboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiClipboardComponent, selectors: [["app-multi-clipboard"]], viewQuery: function MultiClipboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.copyField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalTextarea = _t.first);
    } }, decls: 41, vars: 15, consts: [["id", "container"], [1, "header"], [1, "categories"], [1, "custom-label"], [1, "select"], ["appearance", "standard", "floatLabel", "never"], [3, "value", "formControl", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "buttons"], [3, "click"], [1, "ri-add-circle-line"], [3, "disabled", "click"], [1, "ri-edit-line"], [1, "ri-delete-bin-line"], [1, "body"], ["cdkDropList", "", 1, "items", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "item", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "options"], [1, "option-row"], [1, "ri-close-circle-line"], ["class", "collection-modal", 4, "ngIf"], ["class", "row-modal", 4, "ngIf"], ["type", "text", 2, "position", "absolute", "left", "-9999PX", 3, "value"], ["copyField", ""], [3, "value"], ["cdkDrag", "", 1, "item", 3, "id", "click"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "icon"], [1, "ri-file-text-line"], [1, "content"], [1, "example-custom-placeholder"], [1, "collection-modal"], ["type", "text", "id", "collectionModalInput", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "save"], [1, "row-modal"], ["name", "", "id", "", "cols", "30", "rows", "10", "id", "rowModalInput", 3, "ngModel", "ngModelChange"]], template: function MultiClipboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Collections: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function MultiClipboardComponent_Template_mat_select_valueChange_7_listener($event) { return ctx.selectedToppingObj = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MultiClipboardComponent_mat_option_10_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_Template_button_click_12_listener() { return ctx.collectionAction("add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_Template_button_click_14_listener() { return ctx.collectionAction("edit"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_Template_button_click_16_listener() { return ctx.deleteCollection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function MultiClipboardComponent_Template_div_cdkDropListDropped_19_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MultiClipboardComponent_div_20_Template, 6, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_Template_button_click_26_listener() { return ctx.rowAction("add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_Template_button_click_29_listener() { return ctx.rowAction("edit"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_Template_button_click_32_listener() { return ctx.deleteRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiClipboardComponent_Template_button_click_35_listener() { return ctx.dropCollection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MultiClipboardComponent_div_37_Template, 7, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MultiClipboardComponent_div_38_Template, 7, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 22, 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedToppingObj)("formControl", ctx.selectedTopping);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedToppingName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toppingList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selectedToppingObj === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selectedToppingObj === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedToppingItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.selectedToppingItems == null ? null : ctx.selectedToppingItems.length) + " items", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selectedToppingObj === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selectedToppingRow === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selectedToppingRow === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selectedToppingRow === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCollectionModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRowModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedRowContent());
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDragPlaceholder"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\n  height: 100% !important;\n  max-height: 100% !important;\n}\n\n#container[_ngcontent-%COMP%] {\n  background: rgba(213, 219, 222, 0.92);\n  min-height: 100%;\n  height: 100%;\n  max-height: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 0 0 !important;\n  padding: 0 0 20px 0 !important;\n  overflow: hidden;\n}\n\n#container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n#container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n#container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(217, 255, 0, 0.5);\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 58px;\n  border: 1px solid;\n  display: flex;\n}\n\n.header[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%] {\n  width: 80%;\n  background: beige;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 10px 0 10px;\n}\n\n.header[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .custom-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-right: 10px;\n}\n\n.header[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.header[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 30%;\n  background: #4fc50b;\n  display: flex !important;\n  align-items: center;\n  justify-content: space-evenly !important;\n  padding: 6px;\n}\n\n.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  outline: none;\n  height: 40px;\n  width: 40px;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  max-height: 100%;\n  overflow-y: hidden;\n}\n\n.body[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 100%;\n  overflow-y: scroll;\n  width: 90%;\n}\n\n.body[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  height: 40px;\n  border: 1px solid;\n  align-items: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.body[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.body[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n.body[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(37, 36, 36, 0.7);\n  border-radius: 10px;\n}\n\n.body[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px #d9ff00;\n}\n\n.body[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  background: #ecd4d4;\n  height: 100%;\n  max-height: 100%;\n  width: 10%;\n  text-align: center;\n}\n\n.body[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option-row[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.body[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  outline: none;\n  height: 40px;\n  width: 40px;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.selected-clipboard-row[_ngcontent-%COMP%] {\n  background: #eac2c2;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\n.collection-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 30%;\n  height: 120px;\n  width: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  background: #fff;\n  padding: 10px;\n}\n\n.collection-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #00000070;\n}\n\n.collection-modal[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%] {\n  display: flex;\n  width: 60%;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.row-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 8%;\n  height: 300px;\n  width: 74%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  background: #fff;\n  padding: 10px;\n}\n\n.row-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: none;\n}\n\n.row-modal[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%] {\n  display: flex;\n  width: 25%;\n  justify-content: space-around;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29mdHdhcmVzL211bHRpLWNsaXBib2FyZC9tdWx0aS1jbGlwYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFFSSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFDSTtFQUNJLFdBQUE7QUFDUjs7QUFDSTtFQUNJLG9EQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFDSTtFQUNJLG1CQUFBO0VBQ0Esd0RBQUE7QUFDUjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBQ0k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FBQ1I7O0FBQVE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBRVo7O0FBQVE7RUFDSSxVQUFBO0FBRVo7O0FBRFk7RUFDSSxXQUFBO0FBR2hCOztBQUNJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUFRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFWjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUNJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ1I7O0FBQVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFWjs7QUFEWTtFQUNJLGNBQUE7QUFHaEI7O0FBQVE7RUFDSSxXQUFBO0FBRVo7O0FBQVE7RUFDSSx1REFBQTtFQUNBLG1CQUFBO0FBRVo7O0FBQVE7RUFDSSxtQkFBQTtFQUVBLHlDQUFBO0FBQ1o7O0FBRUk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNaOztBQUFZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFaEI7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFFSTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtBQUFSOztBQUVJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQVI7O0FBRUk7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL3NvZnR3YXJlcy9tdWx0aS1jbGlwYm9hcmQvbXVsdGktY2xpcGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAxMjAyYywgJGFscGhhOiAwLjk1KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMTMgMjE5IDIyMiAvIDkyJSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMCAyMHB4IDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMjE3LCAyNTUsIDAsIDAuNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBiZWlnZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxuICAgICAgICAuY3VzdG9tLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0ZmM1MGI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAuaXRlbXMge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMzcsIDM2LCAzNiwgMC43KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjNGZjNTBiO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgyMTcsIDI1NSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9wdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlY2Q0ZDQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLm9wdGlvbi1yb3cge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1jbGlwYm9hcmQtcm93IHtcclxuICAgIGJhY2tncm91bmQ6ICNlYWMyYzI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxufVxyXG5cclxuLmNvbGxlY3Rpb24tbW9kYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA3MDtcclxuICAgIH1cclxuICAgIC5zYXZlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3ctbW9kYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiA4JTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogNzQlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zYXZlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiClipboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multi-clipboard',
                templateUrl: './multi-clipboard.component.html',
                styleUrls: ['./multi-clipboard.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { copyField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['copyField']
        }], modalInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['collectionModalInput']
        }], modalTextarea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['rowModalInput']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
    ngOnInit() {
        //   // swipe box js
        //   $(function () {
        //     $('.swipebox').swipebox();
        //   });
        //   $(function () {
        //     $('.row2').adipoli({
        //       startEffect: 'overlay',
        //       hoverEffect: 'sliceDown'
        //     });
        //   });
        //   // Horizontal-Tabs-JavaScript
        //   $(document).ready(function () {
        //     $('#horizontalTab').easyResponsiveTabs({
        //       type: 'default',
        //       width: 'auto',
        //       fit: true,
        //     });
        //   });
        //   // Stats-Number-Scroller-Animation-JavaScript
        //   $(document).ready(function () {
        //     $('.counter').counterUp({
        //       delay: 10,
        //       time: 1000,
        //     });
        //   });
        //   // for-experience -->
        //   // Show-More-JavaScript -->
        //   $(document).ready(function () {
        //     const size_li = $('#myList li').size();
        //     let x = 1;
        //     $('#myList li:lt(' + x + ')').show();
        //     $('#loadMore').click(function () {
        //       x = (x + 1 <= size_li) ? x + 1 : size_li;
        //       $('#myList li:lt(' + x + ')').show();
        //     });
        //     $('#showLess').click(function () {
        //       x = (x - 1 < 0) ? 1 : x - 1;
        //       $('#myList li').not(':lt(' + x + ')').hide();
        //     });
        //   });
        //   //start-smoth-scrolling
        //   $(document).ready(function () {
        //     $(".scroll").click(function (event) {
        //       event.preventDefault();
        //       $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
        //     });
        //   });
        //   //
        //   $(document).ready(function () {
        //     /*
        //       var defaults = {
        //       containerID: 'toTop', // fading element id
        //       containerHoverID: 'toTopHover', // fading element hover id
        //       scrollSpeed: 1200,
        //       easingType: 'linear'
        //       };
        //     */
        //     $().UItoTop({ easingType: 'easeOutQuart' });
        //   });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WBBN":
/*!********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
  \********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PortfolioComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PortfolioComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const project_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.viewProject(project_r1.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo vitae molestias similique eius cupiditate necessitatibus earum minima explicabo. Ullam, accusamus illum sit quae eos dicta placeat consequatur cumque. Blanditiis. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PortfolioComponent_div_4_div_5_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "video", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.stacks);
} }
class PortfolioComponent {
    constructor(router) {
        this.router = router;
        this.projects = new Array(10);
    }
    ngOnInit() {
        this.projects = this.projects.fill({
            url: '/url-shortener',
            stacks: new Array(5)
        });
        console.log(this.projects);
    }
    viewProject(url) {
        if (!url || url.trim() === '')
            return;
        url = this.router.serializeUrl(this.router.createUrlTree([url]));
        window.open(url, '_blank');
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 5, vars: 1, consts: [["id", "container"], [1, "body"], [1, "projects"], ["class", "project-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "project-item", 3, "click"], [1, "cover"], [1, "header"], ["class", "stack-item", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "link"], [1, "ri-arrow-right-line"], ["src", "../../../assets/images/portfolio/url-shortener/demo.mkv", "autoplay", "", "preload", "auto", "loop", ""], [1, "stack-item"], ["src", "../../../assets/images/g33.jpg", "alt", ""]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioComponent_div_4_Template, 11, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["#container[_ngcontent-%COMP%] {\n  background: rgba(213, 219, 222, 0.92);\n  min-height: 100%;\n  height: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 0 0 !important;\n  padding: 0 0 20px 0 !important;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(217, 255, 0, 0.5);\n}\n.body[_ngcontent-%COMP%] {\n  padding-top: 7%;\n  height: 100%;\n  max-height: 100%;\n}\n.body[_ngcontent-%COMP%]   [class*=body-][_ngcontent-%COMP%] {\n  height: 20%;\n  width: 100%;\n  padding: 30px 50px;\n  display: flex;\n  align-items: center;\n  color: white;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: 30px;\n}\n.projects[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  padding: 30px 20px;\n  display: flex;\n  align-items: center;\n  color: white;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px;\n  height: 300px;\n  width: 385px;\n  background: #64666669;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  margin: 20px;\n  box-shadow: 0px 7px 18px -6px rgba(0, 0, 0, 0.411);\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 20px;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  background: #000000ba;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 35%;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  display: flex;\n  height: 35%;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .stack-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  margin: 0 5px;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .stack-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .stack-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .stack-item[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  height: 35%;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #adf72f;\n  display: flex;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  font-size: 10px;\n  background-color: #00000066;\n  color: #fff;\n  text-align: center;\n  padding: 5px 20px;\n  border-radius: inherit;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-height: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 7px 18px -6px #000;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]:hover   .cover[_ngcontent-%COMP%] {\n  visibility: visible;\n  animation: coverAnimation 0.3s ease-in;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.projects[_ngcontent-%COMP%]   .project-item[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.projects[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n.projects[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n.projects[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(217, 255, 0, 0.5);\n}\n@keyframes coverAnimation {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  50% {\n    opacity: 0.1;\n    transform: translateY(8px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBREo7QUFFSTtFQUNJLFdBQUE7QUFBUjtBQUVJO0VBQ0ksb0RBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRUk7RUFDSSxtQkFBQTtFQUNBLHdEQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBRFI7QUFLQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUdJO0VBRUksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0FBRlI7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURaO0FBRVk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQWhCO0FBRVk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNwQjtBQUFvQjtFQUNJLHFCQUFBO0FBRXhCO0FBQW9COztFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFeEI7QUFFWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBaEI7QUFDZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDcEI7QUFBb0I7RUFDSSxlQUFBO0FBRXhCO0FBR1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRFo7QUFHUTtFQUNJLG1CQUFBO0FBRFo7QUFHUTtFQUlJLGtDQUFBO0FBSlo7QUFLWTtFQUNJLG1CQUFBO0VBQ0Esc0NBQUE7QUFIaEI7QUFNUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFKWjtBQU9RO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFMWjtBQVFJO0VBQ0ksV0FBQTtBQU5SO0FBUUk7RUFDSSxvREFBQTtFQUNBLG1CQUFBO0FBTlI7QUFRSTtFQUNJLG1CQUFBO0VBQ0Esd0RBQUE7QUFOUjtBQVVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUFQTjtFQVNFO0lBQ0ksWUFBQTtJQUNBLDBCQUFBO0VBUE47RUFTRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQVBOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGN1c3RvbUdyZWVuQ29sb3I6ICNhZGY3MmY7XHJcbiNjb250YWluZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMTIwMmMsICRhbHBoYTogMC45NSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjEzIDIxOSAyMjIgLyA5MiUpO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDAgMjBweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMjE3LCAyNTUsIDAsIDAuNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA3JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBbY2xhc3MqPVwiYm9keS1cIl0ge1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvamVjdHMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgLnByb2plY3QtaXRlbSB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BvcnRmb2xpby91cmwtc2hvcnRlbmVyL2ltZy0xLlBORycpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM4NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2NDY2NjY2OTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDdweCAxOHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjQxMSk7XHJcbiAgICAgICAgLmNvdmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMGJhO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNSU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm9keSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNSU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5zdGFjay1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2FkZjcyZjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b29sdGlwdGV4dCB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNjY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICAgICAgICAvLyB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICNkY2UwZDU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggMThweCAtNnB4ICMwMDA7XHJcbiAgICAgICAgICAgIC5jb3ZlciB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjb3ZlckFuaW1hdGlvbiAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZGVvIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMjE3LCAyNTUsIDAsIDAuNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY292ZXJBbmltYXRpb24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLXNsaWRlciB7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcclxuICAgIC8vIHRvcDogMDtcclxuICAgIC8vIGxlZnQ6IDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _components_taskbar_taskbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/taskbar/taskbar.component */ "bK6z");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _directives_taskbar_main_button_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/taskbar-main-button.directive */ "0lzo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _directives_windows_css_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/windows-css.directive */ "ZQax");
/* harmony import */ var _directives_nav_item_css_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/nav-item-css.directive */ "ZK8e");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _pages_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/chat-screen/chat-screen.component */ "bB/R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_chat_bubble_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/chat-bubble.directive */ "+fOr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "WBBN");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _pages_url_shortener_url_shortener_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/url-shortener/url-shortener.component */ "yxuC");
/* harmony import */ var _softwares_multi_clipboard_multi_clipboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./softwares/multi-clipboard/multi-clipboard.component */ "OSzh");
/* harmony import */ var _softwares_gmail_scrapper_gmail_scrapper_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./softwares/gmail-scrapper/gmail-scrapper.component */ "xNT5");
/* harmony import */ var _softwares_gmail_scrapper_gmail_scrapper_nav_bar_gmail_scrapper_nav_bar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./softwares/gmail-scrapper/gmail-scrapper-nav-bar/gmail-scrapper-nav-bar.component */ "FBxv");



































const config = { url: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__["SocketIoModule"].forRoot(config), _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_taskbar_taskbar_component__WEBPACK_IMPORTED_MODULE_8__["TaskbarComponent"],
        _directives_taskbar_main_button_directive__WEBPACK_IMPORTED_MODULE_14__["TaskbarMainButtonDirective"],
        _directives_windows_css_directive__WEBPACK_IMPORTED_MODULE_16__["WindowsCSSDirective"],
        _directives_nav_item_css_directive__WEBPACK_IMPORTED_MODULE_17__["NavItemCssDirective"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_20__["ChatComponent"],
        _pages_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_22__["ChatScreenComponent"],
        _directives_chat_bubble_directive__WEBPACK_IMPORTED_MODULE_25__["ChatBubbleDirective"],
        _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_27__["PortfolioComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"],
        _pages_url_shortener_url_shortener_component__WEBPACK_IMPORTED_MODULE_29__["UrlShortenerComponent"],
        _softwares_multi_clipboard_multi_clipboard_component__WEBPACK_IMPORTED_MODULE_30__["MultiClipboardComponent"],
        _softwares_gmail_scrapper_gmail_scrapper_component__WEBPACK_IMPORTED_MODULE_31__["GmailScrapperComponent"],
        _softwares_gmail_scrapper_gmail_scrapper_nav_bar_gmail_scrapper_nav_bar_component__WEBPACK_IMPORTED_MODULE_32__["GmailScrapperNavBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__["SocketIoModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _components_taskbar_taskbar_component__WEBPACK_IMPORTED_MODULE_8__["TaskbarComponent"],
                    _directives_taskbar_main_button_directive__WEBPACK_IMPORTED_MODULE_14__["TaskbarMainButtonDirective"],
                    _directives_windows_css_directive__WEBPACK_IMPORTED_MODULE_16__["WindowsCSSDirective"],
                    _directives_nav_item_css_directive__WEBPACK_IMPORTED_MODULE_17__["NavItemCssDirective"],
                    _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_20__["ChatComponent"],
                    _pages_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_22__["ChatScreenComponent"],
                    _directives_chat_bubble_directive__WEBPACK_IMPORTED_MODULE_25__["ChatBubbleDirective"],
                    _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_27__["PortfolioComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"],
                    _pages_url_shortener_url_shortener_component__WEBPACK_IMPORTED_MODULE_29__["UrlShortenerComponent"],
                    _softwares_multi_clipboard_multi_clipboard_component__WEBPACK_IMPORTED_MODULE_30__["MultiClipboardComponent"],
                    _softwares_gmail_scrapper_gmail_scrapper_component__WEBPACK_IMPORTED_MODULE_31__["GmailScrapperComponent"],
                    _softwares_gmail_scrapper_gmail_scrapper_nav_bar_gmail_scrapper_nav_bar_component__WEBPACK_IMPORTED_MODULE_32__["GmailScrapperNavBarComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["PdfViewerModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__["SocketIoModule"].forRoot(config), _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZK8e":
/*!******************************************************!*\
  !*** ./src/app/directives/nav-item-css.directive.ts ***!
  \******************************************************/
/*! exports provided: NavItemCssDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemCssDirective", function() { return NavItemCssDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NavItemCssDirective {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
    }
    ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        // console.log(changes)
        this.updateNavItemState();
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.updateNavItemState();
    }
    onMouseEnter(eventData) {
        this.renderer2.addClass(this.elementRef.nativeElement, 'hover-nav-item');
    }
    onMouseLeave(eventData) {
        this.renderer2.removeClass(this.elementRef.nativeElement, 'hover-nav-item');
    }
    updateNavItemState() {
        if (this.navItemInfos.isActive) {
            this.renderer2.addClass(this.elementRef.nativeElement, 'active-nav-item');
        }
        else {
            this.renderer2.removeClass(this.elementRef.nativeElement, 'active-nav-item');
        }
    }
}
NavItemCssDirective.ɵfac = function NavItemCssDirective_Factory(t) { return new (t || NavItemCssDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NavItemCssDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NavItemCssDirective, selectors: [["", "appNavItemCss", ""]], hostBindings: function NavItemCssDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavItemCssDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NavItemCssDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { navItemInfos: "navItemInfos" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavItemCssDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appNavItemCss]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { navItemInfos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "ZQax":
/*!*****************************************************!*\
  !*** ./src/app/directives/windows-css.directive.ts ***!
  \*****************************************************/
/*! exports provided: WindowsCSSDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsCSSDirective", function() { return WindowsCSSDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");





class WindowsCSSDirective {
    constructor(elemenRef, renderer2, viewContainerRef) {
        this.elemenRef = elemenRef;
        this.renderer2 = renderer2;
        this.viewContainerRef = viewContainerRef;
        this.windowsHeaderAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.greenColor = 'green';
        this.yellowColor = 'yellow';
        this.redColor = 'red';
    }
    clickOnWindow() {
        this.allWindows.forEach(w => {
            const zindex = parseInt(localStorage.getItem('latestWindowId')) - 2;
            this.renderer2.setStyle(document.getElementById(w.id), 'z-index', zindex);
        });
        this.renderer2.setStyle(this.elemenRef.nativeElement, 'z-index', localStorage.getItem('latestWindowId'));
    }
    ngOnInit() {
        let zIndex = 0;
        if (localStorage.getItem('latestWindowId') === "undefined") {
            localStorage.setItem('latestWindowId', this.windowInfos.id);
        }
        if (parseInt(localStorage.getItem('latestWindowId')) >= 10) {
            zIndex = 2;
        }
        else {
            zIndex = parseInt(localStorage.getItem('latestWindowId')) + 2;
        }
        this.renderer2.addClass(this.elemenRef.nativeElement, 'app-window');
        localStorage.setItem('latestWindowId', zIndex + '');
        this.renderer2.setStyle(this.elemenRef.nativeElement, 'z-index', zIndex);
        //build header
        let header = this.renderer2.createElement('div');
        this.addClass(header, 'app-window-header');
        this.renderer2.setAttribute(header, 'cdkDragHandle', '');
        //build header's option
        let headerOptions = this.createElement('div');
        this.addClass(headerOptions, 'app-window-header-option');
        let greenButton = this.createElement('div');
        this.addClass(greenButton, 'app-window-header-button');
        this.renderer2.setStyle(greenButton, 'background', this.greenColor);
        this.renderer2.listen(greenButton, "click", (evt) => {
            this.renderer2.addClass(this.elemenRef.nativeElement, 'minimize-window');
            this.windowsHeaderAction.emit({ id: this.windowInfos.id, action: 'minimize' });
        });
        let yellowButton = this.createElement('div');
        this.addClass(yellowButton, 'app-window-header-button');
        this.renderer2.setStyle(yellowButton, 'background', this.yellowColor);
        this.renderer2.listen(yellowButton, "click", (evt) => {
            if (this.elemenRef.nativeElement.offsetWidth > 300) {
                this.renderer2.removeClass(this.elemenRef.nativeElement, 'fullscreen-window');
                this.windowsHeaderAction.emit({ id: this.windowInfos.id, action: 'resize' });
                return;
            }
            this.renderer2.addClass(this.elemenRef.nativeElement, 'fullscreen-window');
            this.renderer2.removeAttribute(this.elemenRef.nativeElement, 'cdkDrag');
            this.windowsHeaderAction.emit({ id: this.windowInfos.id, action: 'resize' });
        });
        let redButton = this.createElement('div');
        this.addClass(redButton, 'app-window-header-button');
        this.renderer2.setStyle(redButton, 'background', this.redColor);
        this.renderer2.listen(redButton, "click", (evt) => {
            this.windowsHeaderAction.emit({ id: this.windowInfos.id, action: 'close' });
        });
        this.renderer2.appendChild(headerOptions, greenButton);
        this.renderer2.appendChild(headerOptions, yellowButton);
        this.renderer2.appendChild(headerOptions, redButton);
        this.renderer2.appendChild(header, headerOptions);
        //add header to window
        this.renderer2.appendChild(this.elemenRef.nativeElement, header);
    }
    ngAfterViewInit() {
    }
    // @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    //   console.log('enter')
    // }
    createElement(name) {
        return this.renderer2.createElement(name);
    }
    addClass(element, name) {
        this.renderer2.addClass(element, name);
    }
}
WindowsCSSDirective.ɵfac = function WindowsCSSDirective_Factory(t) { return new (t || WindowsCSSDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
WindowsCSSDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: WindowsCSSDirective, selectors: [["", "appWindowsCSS", ""]], hostVars: 4, hostBindings: function WindowsCSSDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WindowsCSSDirective_click_HostBindingHandler() { return ctx.clickOnWindow(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.bgColor)("color", ctx.color);
    } }, inputs: { windowInfos: "windowInfos", allWindows: "allWindows" }, outputs: { windowsHeaderAction: "windowsHeaderAction" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowsCSSDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appWindowsCSS]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { windowInfos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allWindows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bgColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.backgroundColor']
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.color']
        }], windowsHeaderAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clickOnWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "bB/R":
/*!************************************************************!*\
  !*** ./src/app/pages/chat-screen/chat-screen.component.ts ***!
  \************************************************************/
/*! exports provided: ChatScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatScreenComponent", function() { return ChatScreenComponent; });
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/user */ "2hxB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user/user.service */ "CFL1");
/* harmony import */ var _services_socket_io_socket_io_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/socket-io/socket-io.service */ "91IW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/chat/chat.component */ "3tD2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function ChatScreenComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-chat", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("iAmTyping", function ChatScreenComponent_div_0_Template_app_chat_iAmTyping_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.isTyping("0", "in", $event); })("newMessage", function ChatScreenComponent_div_0_Template_app_chat_newMessage_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.getMessage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-chat", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("iAmTyping", function ChatScreenComponent_div_0_Template_app_chat_iAmTyping_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.isTyping("1", "in", $event); })("newMessage", function ChatScreenComponent_div_0_Template_app_chat_newMessage_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.getMessage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("username", ctx_r0.user1.username)("isTyping", ctx_r0.isTyping("0", "out"))("messages", ctx_r0.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("username", ctx_r0.user2.username)("isTyping", ctx_r0.isTyping("1", "out"))("messages", ctx_r0.messages);
} }
function ChatScreenComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Please login to enter the chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatScreenComponent_div_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.user.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatScreenComponent_div_1_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatScreenComponent_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Have not account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.user.password);
} }
class ChatScreenComponent {
    constructor(userService, io) {
        this.userService = userService;
        this.io = io;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.messages = [];
        this.user1_IsTyping = false;
        this.user2_IsTyping = false;
        this.user1 = new _models_user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.user2 = new _models_user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.messages = [];
        this.fakeLogin();
    }
    login() {
        this.fakeLogin();
        this.isLoggedIn = true;
    }
    fakeLogin() {
        this.user1.username = 'Dark Vador';
        this.user2.username = 'Skywalker';
    }
    isTyping(user, type, evt) {
        if (type === 'in') {
            if (user === '0') {
                this.user2_IsTyping = evt;
            }
            if (user === '1') {
                this.user1_IsTyping = evt;
            }
        }
        if (type === 'out') {
            if (user === '0')
                return this.user1_IsTyping;
            if (user === '1')
                return this.user2_IsTyping;
        }
    }
    getMessage(evt) {
        this.messages.push(evt);
    }
}
ChatScreenComponent.ɵfac = function ChatScreenComponent_Factory(t) { return new (t || ChatScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socket_io_socket_io_service__WEBPACK_IMPORTED_MODULE_3__["SocketIoService"])); };
ChatScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatScreenComponent, selectors: [["app-chat-screen"]], decls: 2, vars: 2, consts: [["class", "row", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "row"], [1, "col-lg-6"], [1, "chat-kit"], [3, "username", "isTyping", "messages", "iAmTyping", "newMessage"], [1, "container"], [1, "row", "d-flex", "justify-content-center", "h-100"], [1, "col-6", "h-100", "text-center"], [1, "login-container"], [1, "header"], [1, "input-container"], [1, "input"], ["type", "text", "name", "username", "placeholder", "Username", 1, "username", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "password", "placeholder", "password", 1, "password", 3, "ngModel", "ngModelChange"], [1, "custom-row"], [3, "click"], [1, "register-link"]], template: function ChatScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChatScreenComponent_div_0_Template, 7, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatScreenComponent_div_1_Template, 19, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background: #f2c0e736;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  margin-top: 10%;\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 48px 0px;\n  box-shadow: 0px 1px 15px -6px #000;\n  position: relative;\n  background: #fff;\n}\n\n.login-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border: 2px solid #b48f8f;\n  width: 90%;\n  margin: auto;\n  margin-top: 10%;\n}\n\n.login-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #d6b7b7;\n  border-radius: 15px;\n  color: #0b0e12;\n}\n\n.login-container[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 25px;\n  border: transparent;\n  background: #e227b7;\n  color: white;\n  font-weight: bold;\n  margin: 20px;\n}\n\n.login-container[_ngcontent-%COMP%]   .custom-row[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px auto;\n}\n\n.login-container[_ngcontent-%COMP%]   .custom-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 25px;\n  border: transparent;\n  background: #e227b7;\n  color: white;\n  font-weight: bold;\n  height: 50px;\n}\n\n.login-container[_ngcontent-%COMP%]   .custom-row[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #e227b7;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.login-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  margin: auto;\n  height: 20%;\n  background: #e227b7;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  width: 100%;\n  padding-top: 15px;\n  color: white;\n  font-weight: bold;\n}\n\n.chat-kit[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC1zY3JlZW4vY2hhdC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBREU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREU7RUFDRSxXQUFBO0FBR0o7O0FBRkk7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFJTjs7QUFGSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSU47O0FBREU7RUFDRSxXQUFBO0VBVUEsaUJBQUE7QUFOSjs7QUFISTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBS047O0FBRE07RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBR1I7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdC1zY3JlZW4vY2hhdC1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2YyYzBlNzM2O1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDQ4cHggMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTVweCAtNnB4ICMwMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2I0OGY4ZjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG4gIC5pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q2YjdiNztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgY29sb3I6ICMwYjBlMTI7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTIyN2I3O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jdXN0b20tcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgICAgYmFja2dyb3VuZDogI2UyMjdiNztcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAucmVnaXN0ZXItbGluayB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjZTIyN2I3O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgYmFja2dyb3VuZDogI2UyMjdiNztcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi5jaGF0LWtpdHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4ucm93e1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-chat-screen',
                templateUrl: './chat-screen.component.html',
                styleUrls: ['./chat-screen.component.scss']
            }]
    }], function () { return [{ type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_socket_io_socket_io_service__WEBPACK_IMPORTED_MODULE_3__["SocketIoService"] }]; }, null); })();


/***/ }),

/***/ "bK6z":
/*!*********************************************************!*\
  !*** ./src/app/components/taskbar/taskbar.component.ts ***!
  \*********************************************************/
/*! exports provided: TaskbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskbarComponent", function() { return TaskbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_nav_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/nav-item */ "JsHC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _directives_nav_item_css_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/nav-item-css.directive */ "ZK8e");










const _c0 = ["mainMenuButton"];
const _c1 = ["taskbar"];
const _c2 = ["floatingMenuButton"];
function TaskbarComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskbarComponent_div_4_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const navItem_r7 = ctx.$implicit; const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.openWindows(navItem_r7, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItemInfos", navItem_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", navItem_r7.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskbarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskbarComponent_div_4_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toogleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskbarComponent_div_4_div_6_Template, 4, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.navItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.taskbarOrientationIcon);
} }
function TaskbarComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskbarComponent_div_5_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const navItem_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.openWindows(navItem_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", navItem_r15.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskbarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskbarComponent_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.toogleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskbarComponent_div_5_div_6_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.navItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.taskbarOrientationIcon);
} }
class TaskbarComponent {
    constructor(renderer2, elementRef) {
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
        this.taskbarOrientation = '';
        this.taskbarOrientationIcon = 'ri-layout-bottom-line';
        this.clickOnNavItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navItems = [
            new src_app_models_nav_item__WEBPACK_IMPORTED_MODULE_1__["NavItem"]('About', '../../../assets/images/icons/angular.svg', [{
                    content: "Occaecat incididunt nostrud eu incididunt eu consectetur eiusmod. Et occaecat aliqua tempor nisi aliquip consequat enim aute labore velit. Incididunt duis officia irure id anim elit laborum sint veniam voluptate aute. Dolore dolor nisi sit irure pariaturproident incididunt.Est aliquip occaecat laboris aliquip.Culpa in consectetur aliqua ad eiusmod aliqua occaecat non anim sint non occaecat irure.Reprehenderit est ipsum reprehenderit laboris Lorem adipisicing ipsum ea labore.Deserunt tempor sunt pariaturdo adipisicing non occaecat veniam elit adipisicing laboris fugiat dolore.Elit aute in enim aliqua sint cillum cupidatat voluptate commodo aliqua quis minim.Quis duis ut cillum dolor non ullamco amet ipsum.Aliqua eu minim ex laborisreprehenderitsuntdoloreestofficia.Consectetursitcillumadexnoneutemporconsequatadexercitationdoloreenim.FugiatreprehenderitofficiaduisLoremproidentetnostrudproidentmollitadoccaecatdeseruntadconsectetur.Occaecatdocupidatatmollitdeseruntadipisicingeu.Dolorestelitaliquipexcepteurautenostrudipsumquislaborisexproidentincididuntidnulla.Pariaturincididuntveniamexcepteurlaborum.Quinullaauteconsecteturpariaturessenostrudaliquipautesuntduis.Quisadlaborumetveniampariaturveniamlaboris.Laboreetminimexercitationnostrudnullaminimvelit.Dolorelaborumincididuntcommodoeiusmod.Inpariaturtemporaliquipveniaminnullalaboreesse.AliquipcupidatatcillumsitexoccaecatminimidestetametLorem.VoluptateexercitationirureidullamcovelitconsecteturullamcoLoremnisieu.Etdoloreutcupidatatdoloresitidnonpariatur.Utnullamagnasuntquisullamcolaboredoloraliqualaboreveniam.Consequatvoluptatedoautenostrudametsitadlaborumcillumpariatur.Fugiatautemagnaculpainconsequatex.Estsintconsequatexercitationinconsectetur.Consequatdoexercitationlaborumminimdeseruntpariaturlaboriscupidatatlaboredoexercitation.Doloreoccaecatidadipisicinglaboresitnonsuntexcepteur.Reprehenderitmagnanisieupariaturaliquipiruredolorecupidatataute.Nullafugiatullamcolaborumauteessein.Adipisicingaliquanullaaliquacommodoexpariaturdolorutnostrud.MollitdolordoloremagnaeuveniamaliquipsuntdoidlaboristemporirurenisiLoremproident.Adipisicingametelitofficiaamet.VeniamculpaeuLoremexercitationmagnaadreprehenderitquislaborumenimeiusmod.Consecteturduisdositconsecteturdolor eiusmod sit culpa aute.Reprehenderit nostrudvelit minim veniam et officia cupidatat quis.Nisi nisi enim fugiat minim minim.Labore anim incididunt ullamco fugiat est aliqua ut culpa dolor.Est velit incididunt magna laborum anim irure.Ut elit laborum aliqua id id dolor quis fugiat do commodocommodo nulla exercitation.Voluptate ea laboris Lorem qui labore qui ut est cupidatat esse dolor cupidatat"
                }]),
            new src_app_models_nav_item__WEBPACK_IMPORTED_MODULE_1__["NavItem"]('Projects', '../../../assets/images/icons/js.png', []),
            new src_app_models_nav_item__WEBPACK_IMPORTED_MODULE_1__["NavItem"]('Html', '../../../assets/images/icons/html.png', []),
        ];
    }
    ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        // console.log(changes.listenToWindowsHeaderAction.currentValue)
        this.updateState();
    }
    ngOnInit() {
        const lastOrientation = localStorage.getItem('taskBarOrientation');
        this.taskbarOrientation = lastOrientation !== undefined ? lastOrientation : 'b';
    }
    ngAfterViewInit() {
        const lastOrientation = localStorage.getItem('taskBarOrientation');
        this.taskbarOrientation = lastOrientation !== undefined ? lastOrientation : 'b';
        this.toogleMenu(true);
    }
    get toTop() {
        return this.taskbarOrientation === 't';
    }
    get toRight() {
        return this.taskbarOrientation === 'r';
    }
    get toBottom() {
        return this.taskbarOrientation === 'b';
    }
    get toLeft() {
        return this.taskbarOrientation === 'l';
    }
    get getOrientation() {
        return this.taskbarOrientation;
    }
    setOrientation(orientation, icon) {
        this.taskbarOrientation = orientation;
        this.taskbarOrientationIcon = icon;
    }
    handleMousemove(evt) {
        this.mousemove = true;
    }
    toogleMenu(action) {
        let drag;
        let floatingButton = this.floatingMenuButton.nativeElement;
        this.renderer2.listen(floatingButton, 'mousedown', (e) => {
            drag = false;
        });
        this.renderer2.listen(floatingButton, 'mousemove', (e) => {
            drag = true;
        });
        this.renderer2.listen(floatingButton, 'mouseup', (e) => {
            if (drag === false) {
                this.hideFloatingButon(floatingButton);
                drag = true;
            }
        });
        if (action === true) {
            this.hideFloatingButon(floatingButton);
            return;
        }
        // if (!action) {
        //   this.showFloatingButon(floatingButton)
        // }
    }
    showFloatingButon(floatingButton) {
        this.renderer2.removeClass(floatingButton, 'hiddenFloatingButton');
        this.renderer2.addClass(floatingButton, 'menu-opener');
        this.renderer2.addClass(floatingButton, 'floating-menu-opener');
        this.renderer2.addClass(floatingButton, 'nav-item');
        localStorage.setItem('taskBarOrientation', this.taskbarOrientation);
        this.taskbarOrientation = '';
    }
    hideFloatingButon(floatingButton) {
        this.renderer2.addClass(floatingButton, 'hiddenFloatingButton');
        const lastOrientation = localStorage.getItem('taskBarOrientation');
        this.taskbarOrientation = lastOrientation !== undefined ? lastOrientation : 'b';
    }
    getMainMenuButton(element) {
        this.renderer2.appendChild(this.taskbar.nativeElement, element.nativeElement);
    }
    openWindows(navItem, id) {
        navItem = { navItem, id };
        this.clickOnNavItem.emit(navItem);
        this.updateState();
    }
    updateState() {
        this.navItems = this.navItems.map((navItem, id) => {
            if (this.allWindows.find(_ => _.id === id) !== undefined) {
                navItem.isActive = true;
            }
            else {
                navItem.isActive = false;
            }
            if (this.listenToWindowsHeaderAction && id === this.listenToWindowsHeaderAction.id && this.listenToWindowsHeaderAction.action === 'minimize') {
                navItem.isMinimized = true;
            }
            let nav = navItem;
            navItem = Object.create(navItem);
            navItem.name = nav.name;
            navItem.icon = nav.icon;
            navItem.data = nav.data;
            navItem.isActive = nav.isActive;
            return navItem;
        });
    }
}
TaskbarComponent.ɵfac = function TaskbarComponent_Factory(t) { return new (t || TaskbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TaskbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskbarComponent, selectors: [["app-taskbar"]], viewQuery: function TaskbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainMenuButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.taskbar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.floatingMenuButton = _t.first);
    } }, inputs: { listenToWindowsHeaderAction: "listenToWindowsHeaderAction", allWindows: "allWindows" }, outputs: { clickOnNavItem: "clickOnNavItem" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 3, consts: [[1, "taskbar", 3, "id"], ["taskbar", ""], ["id", "align-to-top", 1, "row"], [1, "col-12"], ["class", "taskbar-container-h", 4, "ngIf"], ["class", "taskbar-container-v", 4, "ngIf"], ["id", "taskbar-orientation-option", 1, "taskbar-orientation-option"], ["menu", "matMenu"], ["mat-menu-item", "", "disabled", "", 1, "ri-layout-right-line", 3, "click"], ["mat-menu-item", "", "disabled", "", 1, "ri-layout-left-line", 3, "click"], ["mat-menu-item", "", "disabled", "", 1, "ri-layout-top-line", 3, "click"], ["mat-menu-item", "", 1, "ri-layout-bottom-line", 3, "click"], [1, "floating-button-limit"], ["cdkDragBoundary", ".floating-button-limit", "cdkDrag", "", 1, "", 3, "click", "mousemove", "mousedown", "mouseup"], ["floatingMenuButton", ""], ["mat-button", "", 1, "nav-item-img"], ["src", "../../../assets/images/icons/angular.svg", "alt", ""], [1, "taskbar-container-h"], [1, "icons"], [1, "menu-opener", "nav-item", 3, "click"], ["mainMenuButton", ""], ["appNavItemCss", "", "class", "nav-item", 3, "navItemInfos", "click", 4, "ngFor", "ngForOf"], [1, "options"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["appNavItemCss", "", 1, "nav-item", 3, "navItemInfos", "click"], [1, "nav-item-img"], ["alt", "", 3, "src"], [1, "nav-item-desc"], [1, "taskbar-container-v"], ["class", "nav-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "click"]], template: function TaskbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskbarComponent_div_4_Template, 10, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskbarComponent_div_5_Template, 10, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskbarComponent_Template_i_click_9_listener() { return ctx.setOrientation("r", "ri-layout-right-line"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskbarComponent_Template_i_click_10_listener() { return ctx.setOrientation("l", "ri-layout-left-line"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskbarComponent_Template_i_click_11_listener() { return ctx.setOrientation("t", "ri-layout-top-line"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskbarComponent_Template_i_click_12_listener() { return ctx.setOrientation("b", "ri-layout-bottom-line"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskbarComponent_Template_div_click_14_listener() { return ctx.toogleMenu("click"); })("mousemove", function TaskbarComponent_Template_div_mousemove_14_listener() { return ctx.handleMousemove("$event"); })("mousedown", function TaskbarComponent_Template_div_mousedown_14_listener() { return ctx.toogleMenu("mousedown"); })("mouseup", function TaskbarComponent_Template_div_mouseup_14_listener() { return ctx.toogleMenu("mouseup"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "taskbar-", ctx.taskbarOrientation, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toBottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toLeft);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _directives_nav_item_css_directive__WEBPACK_IMPORTED_MODULE_6__["NavItemCssDirective"]], styles: ["[id^=taskbar-][_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n  bottom: 0;\n}\n\n#taskbar-v[_ngcontent-%COMP%], #taskbar-l[_ngcontent-%COMP%], #taskbar-r[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100px;\n}\n\n#taskbar-v[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], #taskbar-v[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%], #taskbar-l[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], #taskbar-l[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%], #taskbar-r[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%], #taskbar-r[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n#taskbar-r[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n#taskbar-t[_ngcontent-%COMP%] {\n  top: 0;\n}\n\n#taskbar-b[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\n.taskbar-container-h[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  max-height: 100px;\n  height: 100px;\n  min-height: 100px;\n  display: block;\n  box-shadow: 0px 1px 25px black;\n}\n\n.taskbar-container-h[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  float: left;\n  max-height: 100%;\n  height: 100%;\n}\n\n.taskbar-container-h[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  float: right;\n  max-height: 100%;\n  height: 100%;\n  padding: 20px;\n}\n\n.taskbar-container-v[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  max-height: 100%;\n  height: 100%;\n  min-height: 100%;\n  display: block;\n  padding: 20px;\n  box-shadow: 0px 1px 25px black;\n  width: 100px;\n}\n\n.taskbar-container-v[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  max-height: 90%;\n  height: 90%;\n}\n\n.taskbar-container-v[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  max-height: 10%;\n  height: 10%;\n}\n\n.taskbar-container-v[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  display: block;\n  height: 10%;\n  margin: 19px 5px;\n}\n\n.taskbar-container-v[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%], .taskbar-container-v[_ngcontent-%COMP%]   .nav-item-img[_ngcontent-%COMP%], .taskbar-container-v[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  margin: 0 2px;\n  padding: 20px;\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-item-img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  height: 100%;\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.menu-opener[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  box-shadow: 0 0 12px white;\n  height: 85px !important;\n  width: 85px !important;\n  margin-left: 40px;\n  margin-right: 10px;\n}\n\n.options[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.floating-menu-opener[_ngcontent-%COMP%] {\n  background: #000;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  top: 6%;\n  left: 1%;\n  z-index: 999;\n}\n\n.hiddenFloatingButton[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.floating-button-limit[_ngcontent-%COMP%] {\n  min-width: 100%;\n  width: 100%;\n  max-width: 100%;\n  min-height: 100%;\n  height: 100%;\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrYmFyL3Rhc2tiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUE7OztFQUdJLFlBQUE7RUFDQSxZQUFBO0FBREo7O0FBRUk7Ozs7OztFQUVJLFlBQUE7QUFJUjs7QUFBQTtFQUNJLFFBQUE7QUFHSjs7QUFBQTtFQUNJLE1BQUE7QUFHSjs7QUFBQTtFQUNJLFNBQUE7QUFHSjs7QUFBQTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBRUEsOEJBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFHUjs7QUFESTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBR1I7O0FBQ0E7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFESTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBR1I7O0FBREk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUdSOztBQURJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdSOztBQURJOzs7RUFHSSxXQUFBO0FBR1I7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUVKOztBQURJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBR1I7O0FBRlE7RUFDSSxZQUFBO0FBSVo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFESTtFQUNJLGVBQUE7QUFHUjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrYmFyL3Rhc2tiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmxhY2s6ICMwMDAwMDA7XHJcbltpZF49XCJ0YXNrYmFyLVwiXSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4jdGFza2Jhci12LFxyXG4jdGFza2Jhci1sLFxyXG4jdGFza2Jhci1yIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIC5yb3csXHJcbiAgICAuY29sLTEyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN0YXNrYmFyLXIge1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbiN0YXNrYmFyLXQge1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4jdGFza2Jhci1iIHtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnRhc2tiYXItY29udGFpbmVyLWgge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICRjb2xvci1ibGFjaywgJGFscGhhOiAwLjcpO1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDI1cHggYmxhY2s7XHJcbiAgICAuaWNvbnMge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm9wdGlvbnMge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFza2Jhci1jb250YWluZXItdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogJGNvbG9yLWJsYWNrLCAkYWxwaGE6IDAuNyk7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMjVweCBibGFjaztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIC5pY29ucyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgfVxyXG4gICAgLm9wdGlvbnMge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgIH1cclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxOXB4IDVweDtcclxuICAgIH1cclxuICAgIC5uYXYtaXRlbSxcclxuICAgIC5uYXYtaXRlbS1pbWcsXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAubmF2LWl0ZW0taW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudS1vcGVuZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEycHggd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDg1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA4NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbG9hdGluZy1tZW51LW9wZW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2JTtcclxuICAgIGxlZnQ6IDElO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uaGlkZGVuRmxvYXRpbmdCdXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZsb2F0aW5nLWJ1dHRvbi1saW1pdCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4kdmlvbGV0OiB2aW9sZXQ7XHJcbiRibHVlOiAjMGZmO1xyXG4vLyBib2R5IHsgYmFja2dyb3VuZDogIzAwMDsgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-taskbar',
                templateUrl: './taskbar.component.html',
                styleUrls: ['./taskbar.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { mainMenuButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mainMenuButton']
        }], taskbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['taskbar']
        }], floatingMenuButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['floatingMenuButton']
        }], clickOnNavItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], listenToWindowsHeaderAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allWindows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    apiUrl: 'http://localhost:5000/',
    prod_api_url: 'https://main-node-js-api.herokuapp.com/',
    ws_url: 'http://localhost:5000',
    google_client_id: "557505131617-th68pr5jlcirmd1ib8rng08l53rpbqkl.apps.googleusercontent.com"
};


/***/ }),

/***/ "oZWX":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");





class ApiService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
    }
    shortenUrl(url) {
        return new Promise((resolve, reject) => {
            this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'v1/portfolio/demo', { longUrl: url }, { headers: this.headers }).subscribe(response => {
                resolve(response);
            }, error => {
                resolve(undefined);
            });
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _softwares_multi_clipboard_multi_clipboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./softwares/multi-clipboard/multi-clipboard.component */ "OSzh");
/* harmony import */ var _pages_url_shortener_url_shortener_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/url-shortener/url-shortener.component */ "yxuC");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/chat-screen/chat-screen.component */ "bB/R");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "WBBN");
/* harmony import */ var _softwares_gmail_scrapper_gmail_scrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./softwares/gmail-scrapper/gmail-scrapper.component */ "xNT5");










const routes = [
    {
        path: '',
        redirectTo: 'gscrapper',
        pathMatch: "full"
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'portfolio',
        component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"]
    },
    {
        path: 'url-shortener',
        component: _pages_url_shortener_url_shortener_component__WEBPACK_IMPORTED_MODULE_1__["UrlShortenerComponent"]
    },
    {
        path: 'multi-clipboard',
        component: _softwares_multi_clipboard_multi_clipboard_component__WEBPACK_IMPORTED_MODULE_0__["MultiClipboardComponent"]
    },
    {
        path: 'chat',
        component: _pages_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_5__["ChatScreenComponent"]
    },
    {
        path: 'gscrapper',
        component: _softwares_gmail_scrapper_gmail_scrapper_component__WEBPACK_IMPORTED_MODULE_7__["GmailScrapperComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xNT5":
/*!**********************************************************************!*\
  !*** ./src/app/softwares/gmail-scrapper/gmail-scrapper.component.ts ***!
  \**********************************************************************/
/*! exports provided: GmailScrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmailScrapperComponent", function() { return GmailScrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gmail_scrapper_nav_bar_gmail_scrapper_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gmail-scrapper-nav-bar/gmail-scrapper-nav-bar.component */ "FBxv");





function GmailScrapperComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GmailScrapperComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.loginWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.data.description, "", ctx_r0.data.description, " ");
} }
function GmailScrapperComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r6 = ctx.$implicit;
    const alert_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.google.com/search?q=", alert_r4.topic, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alert_r4.topic, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alert_r4.entity.subtitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", widget_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](widget_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](widget_r6.description);
} }
function GmailScrapperComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GmailScrapperComponent_div_9_div_1_Template, 13, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", alert_r4.widgets);
} }
class GmailScrapperComponent {
    constructor(authService) {
        this.authService = authService;
        this.data = {
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque aperiam quibusdam molestiae et, quaerat deleniti ipsam officiis beatae dicta voluptatem aspernatur omnis perferendis doloribus sequi voluptatum qui rerum recusandae! Pariatur."
        };
        this.alerts = [
            {
                "api_version": "1.0",
                "publisher": {
                    "api_key": "668269e72cfedea31b22524041ff21d9",
                    "name": "Google Alerts"
                },
                "entity": {
                    "external_key": "Google Alert - bitcoin",
                    "title": "Google Alert - bitcoin",
                    "subtitle": "Latest: January 13, 2021",
                    "avatar_image_url": "https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png",
                    "main_image_url": "https://www.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/smartmail/mobile/il_newspaper_header_r1.png"
                },
                "updates": {
                    "snippets": [
                        {
                            "icon": "BOOKMARK",
                            "message": "Programmer has two guesses left to access B#175m bitcoin wallet"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Go read this NYT story about losing $220 million in bitcoin"
                        }
                    ]
                },
                "cards": [
                    {
                        "title": "Google Alert - bitcoin",
                        "subtitle": "Highlights from the latest email",
                        "actions": [
                            {
                                "name": "See more results",
                                "url": "https://www.google.fr/alerts?s=AB2Xq4gNEl8SakilJJ2tBlgzaeC1GFV1QRPDfAM&start=1610467880&end=1610553944&source=alertsmail&hl=en&gl=FR&msgid=NzA1OTgzMjQ5NjcwODg3NzQ3Nw#history"
                            }
                        ],
                        "widgets": [
                            {
                                "type": "LINK",
                                "title": "Programmer has two guesses left to access B#175m bitcoin wallet",
                                "description": "Now each bitcoin is worth $34,000, and the contents of his wallet are valued at $240m. But Thomas has forgotten the password that will unlock his ...",
                                "image_url": "https://i.ytimg.com/vi/Um63OQz3bjo/mqdefault.jpg",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theguardian.com/technology/2021/jan/12/in-bits-the-programmer-locked-out-of-his-130m-bitcoin-account&ct=ga&cd=CAEYACoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHwnmJ-bAqYwbfuXsP1GJTfodUSgQ"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed",
                                "description": "Bitcoin's parabolic gains are attracting more regulatory scrutiny to cryptocurrencies -- which the co-founder of a mining company says is positive for ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.bloomberg.com/news/articles/2021-01-12/bitcoin-miner-that-s-risen-1-400-says-more-regulation-is-needed&ct=ga&cd=CAEYASoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNGxFkHpo7zyPVxztTRczRDsihWdJA"
                            },
                            {
                                "type": "LINK",
                                "title": "Go read this NYT story about losing $220 million in bitcoin",
                                "description": "Stefan Thomas' 7,002 bitcoin (worth roughly $220 million) are locked away in an IronKey hard drive, according to NYT's Nathaniel Popper.",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theverge.com/2021/1/12/22227535/nyt-bitcoin-millions-forgot-passwords-digital-wallet&ct=ga&cd=CAEYBSoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNFNHxa4EmMaK8F3KLPNu0SVIiEFcA"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin's wild ride leaves traditional money managers queasy",
                                "description": "Bitcoin, the most actively-traded cryptocurrency, has endured its worst bout of tumult since the global market ructions in March. At one point on Monday, it ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.ft.com/content/0746e3c6-9177-4fcd-91bb-e427aa9f9267&ct=ga&cd=CAEYByoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHK8ExNzlZYQCnTeaaDOOdzZKfuOQ"
                            }
                        ]
                    }
                ],
                "id": 0,
                "createdAt": "4-1-2021 20:26:52:315"
            },
            {
                "api_version": "1.0",
                "publisher": {
                    "api_key": "668269e72cfedea31b22524041ff21d9",
                    "name": "Google Alerts"
                },
                "entity": {
                    "external_key": "Google Alert - bitcoin",
                    "title": "Google Alert - bitcoin",
                    "subtitle": "Latest: January 13, 2021",
                    "avatar_image_url": "https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png",
                    "main_image_url": "https://www.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/smartmail/mobile/il_newspaper_header_r1.png"
                },
                "updates": {
                    "snippets": [
                        {
                            "icon": "BOOKMARK",
                            "message": "Programmer has two guesses left to access B#175m bitcoin wallet"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Go read this NYT story about losing $220 million in bitcoin"
                        }
                    ]
                },
                "cards": [
                    {
                        "title": "Google Alert - bitcoin",
                        "subtitle": "Highlights from the latest email",
                        "actions": [
                            {
                                "name": "See more results",
                                "url": "https://www.google.fr/alerts?s=AB2Xq4gNEl8SakilJJ2tBlgzaeC1GFV1QRPDfAM&start=1610467880&end=1610553944&source=alertsmail&hl=en&gl=FR&msgid=NzA1OTgzMjQ5NjcwODg3NzQ3Nw#history"
                            }
                        ],
                        "widgets": [
                            {
                                "type": "LINK",
                                "title": "Programmer has two guesses left to access B#175m bitcoin wallet",
                                "description": "Now each bitcoin is worth $34,000, and the contents of his wallet are valued at $240m. But Thomas has forgotten the password that will unlock his ...",
                                "image_url": "https://i.ytimg.com/vi/Um63OQz3bjo/mqdefault.jpg",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theguardian.com/technology/2021/jan/12/in-bits-the-programmer-locked-out-of-his-130m-bitcoin-account&ct=ga&cd=CAEYACoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHwnmJ-bAqYwbfuXsP1GJTfodUSgQ"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed",
                                "description": "Bitcoin's parabolic gains are attracting more regulatory scrutiny to cryptocurrencies -- which the co-founder of a mining company says is positive for ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.bloomberg.com/news/articles/2021-01-12/bitcoin-miner-that-s-risen-1-400-says-more-regulation-is-needed&ct=ga&cd=CAEYASoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNGxFkHpo7zyPVxztTRczRDsihWdJA"
                            },
                            {
                                "type": "LINK",
                                "title": "Go read this NYT story about losing $220 million in bitcoin",
                                "description": "Stefan Thomas' 7,002 bitcoin (worth roughly $220 million) are locked away in an IronKey hard drive, according to NYT's Nathaniel Popper.",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theverge.com/2021/1/12/22227535/nyt-bitcoin-millions-forgot-passwords-digital-wallet&ct=ga&cd=CAEYBSoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNFNHxa4EmMaK8F3KLPNu0SVIiEFcA"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin's wild ride leaves traditional money managers queasy",
                                "description": "Bitcoin, the most actively-traded cryptocurrency, has endured its worst bout of tumult since the global market ructions in March. At one point on Monday, it ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.ft.com/content/0746e3c6-9177-4fcd-91bb-e427aa9f9267&ct=ga&cd=CAEYByoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHK8ExNzlZYQCnTeaaDOOdzZKfuOQ"
                            }
                        ]
                    }
                ],
                "id": 1,
                "createdAt": "4-1-2021 20:26:52:337"
            },
            {
                "api_version": "1.0",
                "publisher": {
                    "api_key": "668269e72cfedea31b22524041ff21d9",
                    "name": "Google Alerts"
                },
                "entity": {
                    "external_key": "Google Alert - bitcoin",
                    "title": "Google Alert - bitcoin",
                    "subtitle": "Latest: January 13, 2021",
                    "avatar_image_url": "https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png",
                    "main_image_url": "https://www.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/smartmail/mobile/il_newspaper_header_r1.png"
                },
                "updates": {
                    "snippets": [
                        {
                            "icon": "BOOKMARK",
                            "message": "Programmer has two guesses left to access B#175m bitcoin wallet"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Go read this NYT story about losing $220 million in bitcoin"
                        }
                    ]
                },
                "cards": [
                    {
                        "title": "Google Alert - bitcoin",
                        "subtitle": "Highlights from the latest email",
                        "actions": [
                            {
                                "name": "See more results",
                                "url": "https://www.google.fr/alerts?s=AB2Xq4gNEl8SakilJJ2tBlgzaeC1GFV1QRPDfAM&start=1610467880&end=1610553944&source=alertsmail&hl=en&gl=FR&msgid=NzA1OTgzMjQ5NjcwODg3NzQ3Nw#history"
                            }
                        ],
                        "widgets": [
                            {
                                "type": "LINK",
                                "title": "Programmer has two guesses left to access B#175m bitcoin wallet",
                                "description": "Now each bitcoin is worth $34,000, and the contents of his wallet are valued at $240m. But Thomas has forgotten the password that will unlock his ...",
                                "image_url": "https://i.ytimg.com/vi/Um63OQz3bjo/mqdefault.jpg",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theguardian.com/technology/2021/jan/12/in-bits-the-programmer-locked-out-of-his-130m-bitcoin-account&ct=ga&cd=CAEYACoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHwnmJ-bAqYwbfuXsP1GJTfodUSgQ"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed",
                                "description": "Bitcoin's parabolic gains are attracting more regulatory scrutiny to cryptocurrencies -- which the co-founder of a mining company says is positive for ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.bloomberg.com/news/articles/2021-01-12/bitcoin-miner-that-s-risen-1-400-says-more-regulation-is-needed&ct=ga&cd=CAEYASoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNGxFkHpo7zyPVxztTRczRDsihWdJA"
                            },
                            {
                                "type": "LINK",
                                "title": "Go read this NYT story about losing $220 million in bitcoin",
                                "description": "Stefan Thomas' 7,002 bitcoin (worth roughly $220 million) are locked away in an IronKey hard drive, according to NYT's Nathaniel Popper.",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theverge.com/2021/1/12/22227535/nyt-bitcoin-millions-forgot-passwords-digital-wallet&ct=ga&cd=CAEYBSoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNFNHxa4EmMaK8F3KLPNu0SVIiEFcA"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin's wild ride leaves traditional money managers queasy",
                                "description": "Bitcoin, the most actively-traded cryptocurrency, has endured its worst bout of tumult since the global market ructions in March. At one point on Monday, it ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.ft.com/content/0746e3c6-9177-4fcd-91bb-e427aa9f9267&ct=ga&cd=CAEYByoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHK8ExNzlZYQCnTeaaDOOdzZKfuOQ"
                            }
                        ]
                    }
                ],
                "id": 2,
                "createdAt": "4-1-2021 20:26:52:350"
            },
            {
                "api_version": "1.0",
                "publisher": {
                    "api_key": "668269e72cfedea31b22524041ff21d9",
                    "name": "Google Alerts"
                },
                "entity": {
                    "external_key": "Google Alert - bitcoin",
                    "title": "Google Alert - bitcoin",
                    "subtitle": "Latest: January 13, 2021",
                    "avatar_image_url": "https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png",
                    "main_image_url": "https://www.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/smartmail/mobile/il_newspaper_header_r1.png"
                },
                "updates": {
                    "snippets": [
                        {
                            "icon": "BOOKMARK",
                            "message": "Programmer has two guesses left to access B#175m bitcoin wallet"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Go read this NYT story about losing $220 million in bitcoin"
                        }
                    ]
                },
                "cards": [
                    {
                        "title": "Google Alert - bitcoin",
                        "subtitle": "Highlights from the latest email",
                        "actions": [
                            {
                                "name": "See more results",
                                "url": "https://www.google.fr/alerts?s=AB2Xq4gNEl8SakilJJ2tBlgzaeC1GFV1QRPDfAM&start=1610467880&end=1610553944&source=alertsmail&hl=en&gl=FR&msgid=NzA1OTgzMjQ5NjcwODg3NzQ3Nw#history"
                            }
                        ],
                        "widgets": [
                            {
                                "type": "LINK",
                                "title": "Programmer has two guesses left to access B#175m bitcoin wallet",
                                "description": "Now each bitcoin is worth $34,000, and the contents of his wallet are valued at $240m. But Thomas has forgotten the password that will unlock his ...",
                                "image_url": "https://i.ytimg.com/vi/Um63OQz3bjo/mqdefault.jpg",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theguardian.com/technology/2021/jan/12/in-bits-the-programmer-locked-out-of-his-130m-bitcoin-account&ct=ga&cd=CAEYACoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHwnmJ-bAqYwbfuXsP1GJTfodUSgQ"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed",
                                "description": "Bitcoin's parabolic gains are attracting more regulatory scrutiny to cryptocurrencies -- which the co-founder of a mining company says is positive for ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.bloomberg.com/news/articles/2021-01-12/bitcoin-miner-that-s-risen-1-400-says-more-regulation-is-needed&ct=ga&cd=CAEYASoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNGxFkHpo7zyPVxztTRczRDsihWdJA"
                            },
                            {
                                "type": "LINK",
                                "title": "Go read this NYT story about losing $220 million in bitcoin",
                                "description": "Stefan Thomas' 7,002 bitcoin (worth roughly $220 million) are locked away in an IronKey hard drive, according to NYT's Nathaniel Popper.",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theverge.com/2021/1/12/22227535/nyt-bitcoin-millions-forgot-passwords-digital-wallet&ct=ga&cd=CAEYBSoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNFNHxa4EmMaK8F3KLPNu0SVIiEFcA"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin's wild ride leaves traditional money managers queasy",
                                "description": "Bitcoin, the most actively-traded cryptocurrency, has endured its worst bout of tumult since the global market ructions in March. At one point on Monday, it ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.ft.com/content/0746e3c6-9177-4fcd-91bb-e427aa9f9267&ct=ga&cd=CAEYByoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHK8ExNzlZYQCnTeaaDOOdzZKfuOQ"
                            }
                        ]
                    }
                ],
                "id": 3,
                "createdAt": "4-1-2021 20:26:52:356"
            },
            {
                "api_version": "1.0",
                "publisher": {
                    "api_key": "668269e72cfedea31b22524041ff21d9",
                    "name": "Google Alerts"
                },
                "entity": {
                    "external_key": "Google Alert - bitcoin",
                    "title": "Google Alert - bitcoin",
                    "subtitle": "Latest: January 13, 2021",
                    "avatar_image_url": "https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png",
                    "main_image_url": "https://www.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/smartmail/mobile/il_newspaper_header_r1.png"
                },
                "updates": {
                    "snippets": [
                        {
                            "icon": "BOOKMARK",
                            "message": "Programmer has two guesses left to access B#175m bitcoin wallet"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Go read this NYT story about losing $220 million in bitcoin"
                        }
                    ]
                },
                "cards": [
                    {
                        "title": "Google Alert - bitcoin",
                        "subtitle": "Highlights from the latest email",
                        "actions": [
                            {
                                "name": "See more results",
                                "url": "https://www.google.fr/alerts?s=AB2Xq4gNEl8SakilJJ2tBlgzaeC1GFV1QRPDfAM&start=1610467880&end=1610553944&source=alertsmail&hl=en&gl=FR&msgid=NzA1OTgzMjQ5NjcwODg3NzQ3Nw#history"
                            }
                        ],
                        "widgets": [
                            {
                                "type": "LINK",
                                "title": "Programmer has two guesses left to access B#175m bitcoin wallet",
                                "description": "Now each bitcoin is worth $34,000, and the contents of his wallet are valued at $240m. But Thomas has forgotten the password that will unlock his ...",
                                "image_url": "https://i.ytimg.com/vi/Um63OQz3bjo/mqdefault.jpg",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theguardian.com/technology/2021/jan/12/in-bits-the-programmer-locked-out-of-his-130m-bitcoin-account&ct=ga&cd=CAEYACoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHwnmJ-bAqYwbfuXsP1GJTfodUSgQ"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed",
                                "description": "Bitcoin's parabolic gains are attracting more regulatory scrutiny to cryptocurrencies -- which the co-founder of a mining company says is positive for ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.bloomberg.com/news/articles/2021-01-12/bitcoin-miner-that-s-risen-1-400-says-more-regulation-is-needed&ct=ga&cd=CAEYASoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNGxFkHpo7zyPVxztTRczRDsihWdJA"
                            },
                            {
                                "type": "LINK",
                                "title": "Go read this NYT story about losing $220 million in bitcoin",
                                "description": "Stefan Thomas' 7,002 bitcoin (worth roughly $220 million) are locked away in an IronKey hard drive, according to NYT's Nathaniel Popper.",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theverge.com/2021/1/12/22227535/nyt-bitcoin-millions-forgot-passwords-digital-wallet&ct=ga&cd=CAEYBSoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNFNHxa4EmMaK8F3KLPNu0SVIiEFcA"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin's wild ride leaves traditional money managers queasy",
                                "description": "Bitcoin, the most actively-traded cryptocurrency, has endured its worst bout of tumult since the global market ructions in March. At one point on Monday, it ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.ft.com/content/0746e3c6-9177-4fcd-91bb-e427aa9f9267&ct=ga&cd=CAEYByoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHK8ExNzlZYQCnTeaaDOOdzZKfuOQ"
                            }
                        ]
                    }
                ],
                "id": 4,
                "createdAt": "4-1-2021 20:26:52:365"
            },
            {
                "api_version": "1.0",
                "publisher": {
                    "api_key": "668269e72cfedea31b22524041ff21d9",
                    "name": "Google Alerts"
                },
                "entity": {
                    "external_key": "Google Alert - bitcoin",
                    "title": "Google Alert - bitcoin",
                    "subtitle": "Latest: January 13, 2021",
                    "avatar_image_url": "https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png",
                    "main_image_url": "https://www.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/smartmail/mobile/il_newspaper_header_r1.png"
                },
                "updates": {
                    "snippets": [
                        {
                            "icon": "BOOKMARK",
                            "message": "Programmer has two guesses left to access B#175m bitcoin wallet"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Go read this NYT story about losing $220 million in bitcoin"
                        }
                    ]
                },
                "cards": [
                    {
                        "title": "Google Alert - bitcoin",
                        "subtitle": "Highlights from the latest email",
                        "actions": [
                            {
                                "name": "See more results",
                                "url": "https://www.google.fr/alerts?s=AB2Xq4gNEl8SakilJJ2tBlgzaeC1GFV1QRPDfAM&start=1610467880&end=1610553944&source=alertsmail&hl=en&gl=FR&msgid=NzA1OTgzMjQ5NjcwODg3NzQ3Nw#history"
                            }
                        ],
                        "widgets": [
                            {
                                "type": "LINK",
                                "title": "Programmer has two guesses left to access B#175m bitcoin wallet",
                                "description": "Now each bitcoin is worth $34,000, and the contents of his wallet are valued at $240m. But Thomas has forgotten the password that will unlock his ...",
                                "image_url": "https://i.ytimg.com/vi/Um63OQz3bjo/mqdefault.jpg",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theguardian.com/technology/2021/jan/12/in-bits-the-programmer-locked-out-of-his-130m-bitcoin-account&ct=ga&cd=CAEYACoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHwnmJ-bAqYwbfuXsP1GJTfodUSgQ"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed",
                                "description": "Bitcoin's parabolic gains are attracting more regulatory scrutiny to cryptocurrencies -- which the co-founder of a mining company says is positive for ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.bloomberg.com/news/articles/2021-01-12/bitcoin-miner-that-s-risen-1-400-says-more-regulation-is-needed&ct=ga&cd=CAEYASoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNGxFkHpo7zyPVxztTRczRDsihWdJA"
                            },
                            {
                                "type": "LINK",
                                "title": "Go read this NYT story about losing $220 million in bitcoin",
                                "description": "Stefan Thomas' 7,002 bitcoin (worth roughly $220 million) are locked away in an IronKey hard drive, according to NYT's Nathaniel Popper.",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theverge.com/2021/1/12/22227535/nyt-bitcoin-millions-forgot-passwords-digital-wallet&ct=ga&cd=CAEYBSoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNFNHxa4EmMaK8F3KLPNu0SVIiEFcA"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin's wild ride leaves traditional money managers queasy",
                                "description": "Bitcoin, the most actively-traded cryptocurrency, has endured its worst bout of tumult since the global market ructions in March. At one point on Monday, it ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.ft.com/content/0746e3c6-9177-4fcd-91bb-e427aa9f9267&ct=ga&cd=CAEYByoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHK8ExNzlZYQCnTeaaDOOdzZKfuOQ"
                            }
                        ]
                    }
                ],
                "id": 5,
                "createdAt": "4-1-2021 20:26:52:371"
            },
            {
                "api_version": "1.0",
                "publisher": {
                    "api_key": "668269e72cfedea31b22524041ff21d9",
                    "name": "Google Alerts"
                },
                "entity": {
                    "external_key": "Google Alert - bitcoin",
                    "title": "Google Alert - bitcoin",
                    "subtitle": "Latest: January 13, 2021",
                    "avatar_image_url": "https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png",
                    "main_image_url": "https://www.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/smartmail/mobile/il_newspaper_header_r1.png"
                },
                "updates": {
                    "snippets": [
                        {
                            "icon": "BOOKMARK",
                            "message": "Programmer has two guesses left to access B#175m bitcoin wallet"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Go read this NYT story about losing $220 million in bitcoin"
                        }
                    ]
                },
                "cards": [
                    {
                        "title": "Google Alert - bitcoin",
                        "subtitle": "Highlights from the latest email",
                        "actions": [
                            {
                                "name": "See more results",
                                "url": "https://www.google.fr/alerts?s=AB2Xq4gNEl8SakilJJ2tBlgzaeC1GFV1QRPDfAM&start=1610467880&end=1610553944&source=alertsmail&hl=en&gl=FR&msgid=NzA1OTgzMjQ5NjcwODg3NzQ3Nw#history"
                            }
                        ],
                        "widgets": [
                            {
                                "type": "LINK",
                                "title": "Programmer has two guesses left to access B#175m bitcoin wallet",
                                "description": "Now each bitcoin is worth $34,000, and the contents of his wallet are valued at $240m. But Thomas has forgotten the password that will unlock his ...",
                                "image_url": "https://i.ytimg.com/vi/Um63OQz3bjo/mqdefault.jpg",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theguardian.com/technology/2021/jan/12/in-bits-the-programmer-locked-out-of-his-130m-bitcoin-account&ct=ga&cd=CAEYACoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHwnmJ-bAqYwbfuXsP1GJTfodUSgQ"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed",
                                "description": "Bitcoin's parabolic gains are attracting more regulatory scrutiny to cryptocurrencies -- which the co-founder of a mining company says is positive for ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.bloomberg.com/news/articles/2021-01-12/bitcoin-miner-that-s-risen-1-400-says-more-regulation-is-needed&ct=ga&cd=CAEYASoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNGxFkHpo7zyPVxztTRczRDsihWdJA"
                            },
                            {
                                "type": "LINK",
                                "title": "Go read this NYT story about losing $220 million in bitcoin",
                                "description": "Stefan Thomas' 7,002 bitcoin (worth roughly $220 million) are locked away in an IronKey hard drive, according to NYT's Nathaniel Popper.",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theverge.com/2021/1/12/22227535/nyt-bitcoin-millions-forgot-passwords-digital-wallet&ct=ga&cd=CAEYBSoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNFNHxa4EmMaK8F3KLPNu0SVIiEFcA"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin's wild ride leaves traditional money managers queasy",
                                "description": "Bitcoin, the most actively-traded cryptocurrency, has endured its worst bout of tumult since the global market ructions in March. At one point on Monday, it ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.ft.com/content/0746e3c6-9177-4fcd-91bb-e427aa9f9267&ct=ga&cd=CAEYByoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHK8ExNzlZYQCnTeaaDOOdzZKfuOQ"
                            }
                        ]
                    }
                ],
                "id": 6,
                "createdAt": "4-1-2021 20:26:52:377"
            },
            {
                "api_version": "1.0",
                "publisher": {
                    "api_key": "668269e72cfedea31b22524041ff21d9",
                    "name": "Google Alerts"
                },
                "entity": {
                    "external_key": "Google Alert - bitcoin",
                    "title": "Google Alert - bitcoin",
                    "subtitle": "Latest: January 13, 2021",
                    "avatar_image_url": "https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png",
                    "main_image_url": "https://www.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/smartmail/mobile/il_newspaper_header_r1.png"
                },
                "updates": {
                    "snippets": [
                        {
                            "icon": "BOOKMARK",
                            "message": "Programmer has two guesses left to access B#175m bitcoin wallet"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed"
                        },
                        {
                            "icon": "BOOKMARK",
                            "message": "Go read this NYT story about losing $220 million in bitcoin"
                        }
                    ]
                },
                "cards": [
                    {
                        "title": "Google Alert - bitcoin",
                        "subtitle": "Highlights from the latest email",
                        "actions": [
                            {
                                "name": "See more results",
                                "url": "https://www.google.fr/alerts?s=AB2Xq4gNEl8SakilJJ2tBlgzaeC1GFV1QRPDfAM&start=1610467880&end=1610553944&source=alertsmail&hl=en&gl=FR&msgid=NzA1OTgzMjQ5NjcwODg3NzQ3Nw#history"
                            }
                        ],
                        "widgets": [
                            {
                                "type": "LINK",
                                "title": "Programmer has two guesses left to access B#175m bitcoin wallet",
                                "description": "Now each bitcoin is worth $34,000, and the contents of his wallet are valued at $240m. But Thomas has forgotten the password that will unlock his ...",
                                "image_url": "https://i.ytimg.com/vi/Um63OQz3bjo/mqdefault.jpg",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theguardian.com/technology/2021/jan/12/in-bits-the-programmer-locked-out-of-his-130m-bitcoin-account&ct=ga&cd=CAEYACoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHwnmJ-bAqYwbfuXsP1GJTfodUSgQ"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin Miner That's Risen 1400% Says More Regulation Is Needed",
                                "description": "Bitcoin's parabolic gains are attracting more regulatory scrutiny to cryptocurrencies -- which the co-founder of a mining company says is positive for ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.bloomberg.com/news/articles/2021-01-12/bitcoin-miner-that-s-risen-1-400-says-more-regulation-is-needed&ct=ga&cd=CAEYASoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNGxFkHpo7zyPVxztTRczRDsihWdJA"
                            },
                            {
                                "type": "LINK",
                                "title": "Go read this NYT story about losing $220 million in bitcoin",
                                "description": "Stefan Thomas' 7,002 bitcoin (worth roughly $220 million) are locked away in an IronKey hard drive, according to NYT's Nathaniel Popper.",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.theverge.com/2021/1/12/22227535/nyt-bitcoin-millions-forgot-passwords-digital-wallet&ct=ga&cd=CAEYBSoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNFNHxa4EmMaK8F3KLPNu0SVIiEFcA"
                            },
                            {
                                "type": "LINK",
                                "title": "Bitcoin's wild ride leaves traditional money managers queasy",
                                "description": "Bitcoin, the most actively-traded cryptocurrency, has endured its worst bout of tumult since the global market ructions in March. At one point on Monday, it ...",
                                "url": "https://www.google.com/url?rct=j&sa=t&url=https://www.ft.com/content/0746e3c6-9177-4fcd-91bb-e427aa9f9267&ct=ga&cd=CAEYByoTNzA1OTgzMjQ5NjcwODg3NzQ3NzIZOWQyMjU2NTI4MTc4MWMwNDpmcjplbjpGUg&usg=AFQjCNHK8ExNzlZYQCnTeaaDOOdzZKfuOQ"
                            }
                        ]
                    }
                ],
                "id": 7,
                "createdAt": "4-1-2021 20:26:52:383"
            }
        ];
    }
    ngOnInit() {
        this.alertsArrayCopy = [...this.alerts];
        this.alertsArrayCopy.forEach((x, index) => {
            x.topic = x.entity.title.substring(x.entity.title.indexOf('-') + 2, x.entity.title.length);
            x.topic = x.topic.split('').map((char, i) => {
                if (i === 0)
                    return char.toUpperCase();
                return char;
            }).join('');
            x.widgets = [...x.cards[0].widgets].map(x => {
                x.parentId = index;
                return x;
            });
            return x;
        });
        console.log(this.alerts);
        this.alerts = [...this.alertsArrayCopy];
    }
    loginWithGoogle() {
        this.authService.loginWithGoogle(true).then((res) => {
            console.log(res);
            if (res.status === 'ok') {
                window.open(res.url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
            }
        });
    }
    search(searchData) {
        let type = searchData.type;
        let query = searchData.query;
        if (type === 'filter') {
            this.filterBy = searchData.query;
            return;
        }
        switch (this.filterBy) {
            case 'topic':
                this.alerts = this.alertsArrayCopy.filter(item => {
                    if (query === "")
                        return true;
                    return item.topic.toLowerCase().indexOf(query) >= 0;
                });
                break;
            case 'title':
                this.alerts = [...this.alertsArrayCopy].filter((item) => {
                    if (query === "")
                        return true;
                    item.widgets = item.widgets.filter(w => {
                        return w.title.toLowerCase().indexOf(query) >= 0;
                    });
                    return true;
                });
                console.log(this.alerts);
                break;
            default:
                this.alerts = this.alertsArrayCopy.filter(item => {
                    if (query === "")
                        return true;
                    return item.topic.toLowerCase().indexOf(query) >= 0;
                });
                break;
        }
    }
    getAlertCount() {
        let len = 0;
        this.alerts.forEach((x) => {
            len += x.widgets.length;
        });
        return len;
    }
}
GmailScrapperComponent.ɵfac = function GmailScrapperComponent_Factory(t) { return new (t || GmailScrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
GmailScrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GmailScrapperComponent, selectors: [["app-gmail-scrapper"]], decls: 10, vars: 3, consts: [["id", "container"], ["class", "login-form custom-flex-center", 4, "ngIf"], [3, "searchEvent"], [1, "custom-flex-center", "custom-body"], [1, "alerts"], [1, "item-count"], ["class", "", 4, "ngFor", "ngForOf"], [1, "login-form", "custom-flex-center"], [1, "inner", "shadow-2xl"], [1, "logo", "custom-flex-center"], ["src", "../../../assets/images/icons/figma.svg", "alt", ""], [1, "description", "custom-flex-center"], [1, "button", "custom-flex-center"], [1, "btn", "btn-secondary", 3, "click"], [1, ""], ["class", "alert-item", 4, "ngFor", "ngForOf"], [1, "alert-item"], [1, "head"], [1, "cat"], ["target", "_blank", 3, "href"], [1, "date"], [1, "body"]], template: function GmailScrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GmailScrapperComponent_div_1_Template, 9, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-gmail-scrapper-nav-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEvent", function GmailScrapperComponent_Template_app_gmail_scrapper_nav_bar_searchEvent_2_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Items founds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GmailScrapperComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getAlertCount() + " ", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _gmail_scrapper_nav_bar_gmail_scrapper_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["GmailScrapperNavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#container[_ngcontent-%COMP%] {\n  background: rgba(213, 219, 222, 0.92);\n  min-height: 100%;\n  height: 100%;\n  max-height: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 0 0 !important;\n  padding: 0 0 20px 0 !important;\n  overflow-y: scroll;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\n.login-form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.login-form[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 80%;\n  background: #fff;\n}\n.login-form[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n  padding: 20px;\n}\n.login-form[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.login-form[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 20px;\n  height: 60%;\n  width: 100%;\n  text-align: center;\n  line-height: 1.2;\n  max-height: 60%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.login-form[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  height: 20%;\n  width: 100%;\n}\n.login-form[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #1684e2;\n  width: 23%;\n  font-size: 25px;\n}\n.custom-body[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  padding-top: 10px;\n}\n.custom-body[_ngcontent-%COMP%]   .alerts[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.custom-body[_ngcontent-%COMP%]   .alerts[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%] {\n  background: #fff;\n  margin: 30px 0px;\n  padding: 20px;\n}\n.custom-body[_ngcontent-%COMP%]   .alerts[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 2px 6px -1px #000;\n}\n.custom-body[_ngcontent-%COMP%]   .alerts[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.custom-body[_ngcontent-%COMP%]   .alerts[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .cat[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: 900;\n}\n.item-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 20px;\n  color: #6d6969;\n}\n.item-count[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-right: 10px;\n  color: #f71100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29mdHdhcmVzL2dtYWlsLXNjcmFwcGVyL2dtYWlsLXNjcmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUNFO0VBQ0Usb0RBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLG9EQUFBO0FBQ0o7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUY7QUFDRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRU47QUFETTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBR1I7QUFBSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFTjtBQUFJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFFTjtBQURNO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFHUjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUFBSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBRU47QUFETTtFQUNFLGlDQUFBO0FBR1I7QUFETTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBR1I7QUFGUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUlWO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc29mdHdhcmVzL2dtYWlsLXNjcmFwcGVyL2dtYWlsLXNjcmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgLy8gYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMTIwMmMsICRhbHBoYTogMC45NSk7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIxMyAyMTkgMjIyIC8gOTIlKTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMCAyMHB4IDAgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLmlubmVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDYwJTtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxNjg0ZTI7XHJcbiAgICAgICAgd2lkdGg6IDIzJTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jdXN0b20tYm9keSB7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgLmFsZXJ0cyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLmFsZXJ0LWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAtMXB4ICMwMDA7XHJcbiAgICAgIH1cclxuICAgICAgLmhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLmNhdCB7XHJcbiAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tY291bnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzZkNjk2OTtcclxuICBzcGFue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6ICNmNzExMDA7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GmailScrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gmail-scrapper',
                templateUrl: './gmail-scrapper.component.html',
                styleUrls: ['./gmail-scrapper.component.scss']
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "yxuC":
/*!****************************************************************!*\
  !*** ./src/app/pages/url-shortener/url-shortener.component.ts ***!
  \****************************************************************/
/*! exports provided: UrlShortenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlShortenerComponent", function() { return UrlShortenerComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api/api.service */ "oZWX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["searchInput"];
const _c1 = ["shortUrlCopy"];
const _c2 = ["modal"];
function UrlShortenerComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.showModal ? "custom-modal" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.toastMessge, " ");
} }
class UrlShortenerComponent {
    constructor(apiService, renderer2) {
        this.apiService = apiService;
        this.renderer2 = renderer2;
        this.isTyping = false;
        this.isLoading = false;
        this.longUrl = "";
        this.shortUrl = "My shortened url...";
    }
    ngAfterViewInit() {
        this.search$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((evt) => evt.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])());
        this.search$ = this.search$.subscribe(text => {
            const reg = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
            if (!reg.test(this.longUrl)) {
                this.validUrl = false;
            }
            else {
                this.validUrl = true;
            }
            console.log(this.validUrl);
        });
    }
    ngOnInit() {
        // this.showModal = true
    }
    shortenUrl() {
        if (!this.validUrl) {
            this.toastMessge = "Invalid url";
            this.showToast();
            return;
        }
        this.apiService.shortenUrl(this.longUrl).then((res) => {
            console.log(res);
            if (!res || res.status === "error") {
                this.toastMessge = "Connection error";
                this.showToast();
                return;
            }
            if (res.data) {
                this.urlObj = res.data;
                this.shortUrl = res.data.shortUrl;
                return;
            }
            this.shortUrl = "";
        });
    }
    copyUrl() {
        if (!this.urlObj) {
            this.toastMessge = "Please provide url";
            this.showToast();
            return;
        }
        this.shortUrlCopy.nativeElement.select();
        this.shortUrlCopy.nativeElement.setSelectionRange(0, 99999);
        document.execCommand("copy");
        this.toastMessge = "Copied to clipboard";
        this.showToast();
    }
    previewPage() {
        this.showModal = true;
    }
    openPage() {
        if (!this.urlObj) {
            this.toastMessge = "Please provide url";
            this.showToast();
            return;
        }
        const url = this.urlObj.shortUrl;
        window.open(url, '_blank');
    }
    showToast() {
        this.showModal = true;
        if (this.modal) {
            this.renderer2.removeClass(this.modal.nativeElement, "animate");
            this.renderer2.addClass(this.modal.nativeElement, "animate");
        }
        setTimeout(() => {
            this.showModal = false;
        }, 3000);
    }
}
UrlShortenerComponent.ɵfac = function UrlShortenerComponent_Factory(t) { return new (t || UrlShortenerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
UrlShortenerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UrlShortenerComponent, selectors: [["app-url-shortener"]], viewQuery: function UrlShortenerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.shortUrlCopy = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, decls: 23, vars: 5, consts: [["id", "container"], [1, "body"], [1, "header"], [1, "search-bar"], ["type", "search", "placeholder", "Type your url here...", "name", "search", "id", "search", 3, "ngModel", "ngClass", "ngModelChange", "keyup.enter"], ["searchInput", ""], ["title", "Shorten the url", 3, "click"], [1, "ri-link-unlink"], [1, "result"], [1, "inner"], [1, "urls"], [1, "url-container", 3, "click"], [1, "url"], [1, "buttons-custom"], ["title", "Copy to clipboard", 3, "click"], [1, "ri-file-copy-line"], ["title", "Open in new tab", 3, "click"], [1, "ri-external-link-line"], [3, "ngClass", 4, "ngIf"], ["type", "text", 2, "position", "absolute", "left", "-9999PX", 3, "value"], ["shortUrlCopy", ""], [3, "ngClass"], ["modal", ""]], template: function UrlShortenerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UrlShortenerComponent_Template_input_ngModelChange_5_listener($event) { return ctx.longUrl = $event; })("keyup.enter", function UrlShortenerComponent_Template_input_keyup_enter_5_listener() { return ctx.shortenUrl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrlShortenerComponent_Template_button_click_7_listener() { return ctx.shortenUrl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrlShortenerComponent_Template_div_click_12_listener() { return ctx.copyUrl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrlShortenerComponent_Template_button_click_16_listener() { return ctx.copyUrl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UrlShortenerComponent_Template_button_click_18_listener() { return ctx.openPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UrlShortenerComponent_div_20_Template, 4, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 19, 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.longUrl)("ngClass", !ctx.validUrl ? "error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.shortUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.shortUrl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["#container[_ngcontent-%COMP%] {\n  background: url('rainbow-mac.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 100%;\n  height: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  width: 100%;\n  max-width: 100%;\n  margin: 0 0 !important;\n  padding: 10% 0 20px 0 !important;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n#container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(217, 255, 0, 0.5);\n}\n.body[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 100%;\n}\n.body[_ngcontent-%COMP%]   [class*=body-][_ngcontent-%COMP%] {\n  height: 20%;\n  width: 100%;\n  padding: 30px 50px;\n  display: flex;\n  align-items: center;\n  color: white;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: 30px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 50px;\n  border: none;\n  color: black;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  width: 50%;\n  color: #0f1e19;\n  font-size: 2.5rem;\n  font-family: fantasy;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 2px solid aquamarine;\n  outline: none;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: fantasy;\n}\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 50px;\n  border: none;\n  background: mediumaquamarine;\n  width: 50px;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  outline: none;\n}\n.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n}\n.result[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 52%;\n  display: flex;\n  margin-top: 2%;\n  align-items: center;\n  justify-content: center;\n}\n.result[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #fff;\n  width: 63%;\n  height: 52%;\n}\n.buttons-custom[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n}\n.buttons-custom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: #66cdaa;\n  border-radius: 5px;\n  color: white;\n  font-size: 30px;\n  height: inherit;\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 23px;\n  box-shadow: #00000052 3px 4px 5px;\n  outline: none;\n}\n.urls[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n  display: flex;\n  \n  align-items: center;\n  justify-content: center;\n}\n.urls[_ngcontent-%COMP%]   .url-container[_ngcontent-%COMP%] {\n  border: 2px solid;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width: 80%;\n  max-width: 80%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.urls[_ngcontent-%COMP%]   .url-container[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%] {\n  max-width: 80%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.custom-modal[_ngcontent-%COMP%] {\n  height: 7%;\n  width: 50%;\n  position: absolute;\n  background: #66cdaa;\n  top: 0%;\n  left: 25%;\n  margin: 0 auto;\n  opacity: 5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 17px;\n}\n.custom-modal[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  position: relative;\n}\n.custom-modal[_ngcontent-%COMP%]:hover {\n  transition: 1s ease-in;\n  transform: rotateY(361deg);\n}\n.error[_ngcontent-%COMP%], .error[_ngcontent-%COMP%]:focus {\n  color: red !important;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n@keyframes rotate {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    transition: 1s ease-in;\n    transform: translateX(20);\n  }\n}\n.animate[_ngcontent-%COMP%] {\n  animation: rotate 1s backwards;\n}\n.header[_ngcontent-%COMP%] {\n  font-size: 50px;\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-style: italic;\n  font-family: fantasy;\n  color: #66cdaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXJsLXNob3J0ZW5lci91cmwtc2hvcnRlbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBREo7QUFFSTtFQUNJLFdBQUE7QUFBUjtBQUVJO0VBQ0ksb0RBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRUk7RUFDSSxtQkFBQTtFQUNBLHdEQUFBO0FBQVI7QUFJQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFEUjtBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRko7QUFHSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFEUjtBQUVRO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0FBQVo7QUFFUTtFQUNJLG9CQUFBO0FBQVo7QUFHSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUtBLGFBQUE7QUFMUjtBQUNRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFDWjtBQUtBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUdJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRFI7QUFLQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRko7QUFHSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtBQURSO0FBS0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURSO0FBRVE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQVo7QUFLQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRko7QUFHSTtFQUNJLGtCQUFBO0FBRFI7QUFJSTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUFGUjtBQU1BOztFQUdJLHFCQUFBO0FBSko7QUFPQTtFQUNJLGFBQUE7QUFKSjtBQU9BO0VBQ0k7SUFDSSxVQUFBO0VBSk47RUFRRTtJQUNJLHNCQUFBO0lBQ0EseUJBQUE7RUFOTjtBQUNGO0FBU0E7RUFDSSw4QkFBQTtBQVBKO0FBVUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUFQSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VybC1zaG9ydGVuZXIvdXJsLXNob3J0ZW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRlcnJvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiNjb250YWluZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMTIwMmMsICRhbHBoYTogMC45NSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy93YWxscGFwZXIvcmFpbmJvdy1tYWMuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMCUgMCAyMHB4IDAgIWltcG9ydGFudDtcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgyMTcsIDI1NSwgMCwgMC41KTtcclxuICAgIH1cclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIFtjbGFzcyo9XCJib2R5LVwiXSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBjb2xvcjogIzBmMWUxOTtcclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogZmFudGFzeTtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYXF1YW1hcmluZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogZmFudGFzeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWVkaXVtYXF1YW1hcmluZTtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUyJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiA2MyU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b25zLWN1c3RvbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzY2Y2RhYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogIzAwMDAwMDUyIDNweCA0cHggNXB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51cmxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogbWFyZ2luLXRvcDogMiU7ICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAudXJsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1pbi13aWR0aDogODAlO1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAudXJsIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1tb2RhbCB7XHJcbiAgICBoZWlnaHQ6IDclO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICM2NmNkYWE7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvcGFjaXR5OiA1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIC5pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5jbG9zZSB7fVxyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbjtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYxZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmVycm9yLFxyXG4uZXJyb3I6Zm9jdXMge1xyXG4gICAgLy8gYm9yZGVyOiA1cHggc29saWQgJGVycm9yICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJGVycm9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC8vIHRyYW5zaXRpb246IDFzIGVhc2UtaW47XHJcbiAgICAgICAgLy8gdHJhbnNmb3JtOiByb3RhdGVZKDM2MWRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlIHtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlIDFzIGJhY2t3YXJkcztcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcclxuICAgIGNvbG9yOiAjNjZjZGFhO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UrlShortenerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-url-shortener',
                templateUrl: './url-shortener.component.html',
                styleUrls: ['./url-shortener.component.scss']
            }]
    }], function () { return [{ type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['searchInput']
        }], shortUrlCopy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['shortUrlCopy']
        }], modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modal']
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map