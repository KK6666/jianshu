(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{98:function(n,e,t){"use strict";t.r(e);var a=t(4),i=t(5),o=t(7),r=t(6),c=t(8),l=t(0),p=t.n(l),u=t(9),d=t(40),s=t(21),m=t(1),h=t(2);function f(){var n=Object(m.a)(["\n  width:50px;\n  height:50px;\n  border: 1px solid #dcdcdc;\n  position:fixed;\n  right:40px;\n  bottom:50px;\n  text-align:center;\n  line-height:50px;\n  cursor:pointer;\n  .iconfont{\n    font-size: 20px;\n    color:#2f2f2f;\n  }\n"]);return f=function(){return n},n}function g(){var n=Object(m.a)(["\n  img{\n    width:700px;\n    //\u8d1f\u7684margin\u56fe\u7247\u8d85\u51fa\u7236\u8fb9\u6846\n    margin:0 -40px 0 -40px;\n    padding-bottom:25px;\n  }\n  p{\n    margin-bottom:25px;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.7;\n  }\n"]);return g=function(){return n},n}function b(){var n=Object(m.a)(["\n  font-size: 12px;\n  color: #969696;\n  height:24px;\n  line-height:24px;\n  span{\n    padding-right: 5px;\n  }\n  .browse{\n    color:#ea6f5a!important;\n    i{\n      font-size:2px;\n    }\n  }\n"]);return b=function(){return n},n}function x(){var n=Object(m.a)(["\n  margin-right: 3px;\n  font-size: 16px;\n  height:24px;\n  line-height:24px;\n"]);return x=function(){return n},n}function v(){var n=Object(m.a)(["\n  float:left;\n  margin-left: 8px;\n  height:48px;\n"]);return v=function(){return n},n}function w(){var n=Object(m.a)(["\n  margin: 30px 0 40px;\n  overflow:hidden;\n  img{\n    width:48px;\n    height:48px;\n    border: 1px solid #ddd;\n    border-radius: 50%;\n    float:left;\n  }\n"]);return w=function(){return n},n}function E(){var n=Object(m.a)(["\n  font-size: 34px;\n  font-weight: 700;\n  margin: 20px 0 0;\n"]);return E=function(){return n},n}function k(){var n=Object(m.a)(["\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 40px;\n  width: 620px; \n"]);return k=function(){return n},n}var j=h.b.div(k()),O=h.b.h1(E()),T=h.b.div(w()),I=h.b.div(v()),y=h.b.div(x()),B=h.b.div(b()),z=h.b.div(g()),D=h.b.div(f()),S=function(n){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(c.a)(e,n),Object(i.a)(e,[{key:"render",value:function(){var n=this.props,e=n.title,t=n.headPic,a=n.name,i=n.browse,o=n.time,r=n.words,c=n.read,l=n.comment,u=n.like,d=n.content;return p.a.createElement(j,null,p.a.createElement(O,null,e),p.a.createElement(T,null,p.a.createElement("img",{src:t,alt:""}),p.a.createElement(I,null,p.a.createElement(y,null,a),p.a.createElement(B,null,p.a.createElement("span",{className:"browse"},p.a.createElement("i",{className:"iconfont "},"\ue601"),i),p.a.createElement("span",null,o),p.a.createElement("span",null,r),p.a.createElement("span",null,c),p.a.createElement("span",null,l),p.a.createElement("span",null,u)))),p.a.createElement(z,{dangerouslySetInnerHTML:{__html:d}}),this.props.backTopShow?p.a.createElement(D,{onClick:this.handleBackTop},p.a.createElement("i",{className:"iconfont"},"\ue60c")):null)}},{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.bindEvents();var n=this.props.match.params.id;this.props.getDetail(n)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.changeBackTop)}},{key:"bindEvents",value:function(){window.addEventListener("scroll",this.props.changeBackTop)}},{key:"handleBackTop",value:function(){window.scrollTo(0,0)}}]),e}(l.Component);e.default=Object(u.b)(function(n){return{backTopShow:n.getIn(["detail","backTopShow"]),title:n.getIn(["detail","title"]),headPic:n.getIn(["detail","headPic"]),name:n.getIn(["detail","name"]),browse:n.getIn(["detail","browse"]),time:n.getIn(["detail","time"]),words:n.getIn(["detail","words"]),read:n.getIn(["detail","read"]),comment:n.getIn(["detail","comment"]),like:n.getIn(["detail","like"]),content:n.getIn(["detail","content"])}},function(n){return{changeBackTop:function(){if(document.documentElement.scrollTop>300){var e=d.a.getBackTop(!0);n(e)}else{var t=d.a.getBackTop(!1);n(t)}},getDetail:function(e){var t=d.a.getDetailAction(e);n(t)}}})(Object(s.e)(S))}}]);
//# sourceMappingURL=3.cb862869.chunk.js.map