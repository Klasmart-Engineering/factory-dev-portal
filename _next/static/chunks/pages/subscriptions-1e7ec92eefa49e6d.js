(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{6429:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/subscriptions",function(){return t(3670)}])},6932:function(n,e,t){"use strict";t.d(e,{Z:function(){return G}});var r=t(5893),i=t(181),o=t(3508),s=t(7922),a=t(8462),c=t(7212),d=t(8619),l=t(8885),x=t(9334),u=t(1664),h=t.n(u),p=t(7294);function j(n){var e=n.categoryText,t=n.categoryIcon,u=n.routeIcon,j=n.routeParams,f=(0,p.useState)(!0),v=f[0],m=f[1];return(0,r.jsxs)(a.Z,{component:"nav",children:[(0,r.jsxs)(d.Z,{onClick:function(){m(!v)},children:[t&&(0,r.jsx)(l.Z,{children:t}),(0,r.jsx)(x.Z,{primary:e}),v?(0,r.jsx)(i.Z,{}):(0,r.jsx)(o.Z,{})]}),(0,r.jsx)(s.Z,{unmountOnExit:!0,in:v,timeout:"auto",children:(0,r.jsx)(a.Z,{color:"primary",children:j.map((function(n){return(0,r.jsx)(h(),{passHref:!0,href:n.path,children:(0,r.jsxs)(c.ZP,{button:!0,component:"a",children:[u&&(0,r.jsx)(l.Z,{children:u}),(0,r.jsx)(x.Z,{primary:n.displayName})]})},n.id)}))})})]})}var f=t(535),v=t(155),m=t(5675),Z=t.n(m);function g(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(v.Z,{color:"primary",style:{padding:"1rem"},children:(0,r.jsx)(h(),{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)(Z(),{loader:function(n){return"/".concat(n.src)},src:"kidsloop-default.svg",alt:"kidsloop logo",width:150,height:50})})})}),(0,r.jsx)(j,{categoryText:"Subscriptions",routeIcon:(0,r.jsx)(f.Z,{}),routeParams:[{id:"subscriptions-root",path:"/subscriptions",displayName:"Root"},{id:"subscriptions-more",path:"/subscriptions/more",displayName:"More"}]})]})}var b=t(3540),y=t(5398),S=t(9661),E=t(7357),w=t(7720),T=t(3946),C=t(5294),R=t(8972),_=t(6893),k=t(5861);function I(){var n=[{name:"Profile",icon:(0,r.jsx)(y.Z,{})},{name:"Sign out",icon:(0,r.jsx)(b.Z,{})}],e=(0,p.useState)(null),t=e[0],i=e[1],o=function(){i(null)};return(0,r.jsxs)(E.Z,{sx:{flexGrow:0},children:[(0,r.jsx)(_.Z,{title:"Open User Menu",children:(0,r.jsx)(T.Z,{sx:{p:0},onClick:function(n){i(n.currentTarget)},children:(0,r.jsx)(S.Z,{alt:"Remy Sharp"})})}),(0,r.jsx)(C.Z,{keepMounted:!0,sx:{mt:5},id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(t),onClose:o,children:n.map((function(n,e){return(0,r.jsxs)("div",{children:[0!==e&&(0,r.jsx)(w.Z,{}),(0,r.jsxs)(R.Z,{onClick:o,children:[(0,r.jsx)(l.Z,{children:n.icon},"".concat(n.name,"-icon")),(0,r.jsx)(k.Z,{textAlign:"center",children:n.name})]})]},n.name)}))})]})}var P=t(326),O=t(2293),D=t(4128),N=t(7036),A=t(8815),F=t(7533),U=t(9518),M=t(1796),B=t(1927),z=300,Q=(0,U.Z)({palette:{mode:"dark",background:{paper:(0,M._j)(D.Z[900],.7)}}});function G(n){var e=n.children,t=(0,p.useState)(!1),i=t[0],o=t[1],s=function(){o(!i)},a=(0,r.jsx)(g,{});return(0,r.jsxs)(E.Z,{sx:{display:"flex",width:"100%",height:"100%"},children:[(0,r.jsx)(A.ZP,{}),(0,r.jsx)(O.Z,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(z,"px)")},ml:{sm:"".concat(z,"px")}},children:(0,r.jsxs)(v.Z,{sx:{justifyContent:{xs:"space-between",sm:"flex-end"},height:{xs:"".concat(64,"px")}},children:[(0,r.jsx)(T.Z,{color:"inherit","aria-label":"open drawer",edge:"start",sx:{mr:2,display:{sm:"none"}},onClick:s,children:(0,r.jsx)(P.Z,{})}),(0,r.jsx)(I,{})]})}),(0,r.jsx)(E.Z,{component:"nav",sx:{width:{sm:z},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:(0,r.jsxs)(B.Z,{theme:Q,children:[(0,r.jsx)(F.ZP,{variant:"temporary",open:i,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:z}},onClose:s,children:a}),(0,r.jsx)(F.ZP,{open:!0,variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:z}},children:a})]})}),(0,r.jsx)(E.Z,{component:"main",sx:{display:"flex",overflow:"auto",height:"calc(100% - ".concat(64,"px)"),marginTop:{xs:"".concat(64,"px")},width:{sm:"calc(100% - ".concat(z,"px)")},backgroundColor:N.Z[300]},children:e})]})}},3670:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return O}});var r,i=t(5893),o=t(6886),s=t(6142),a=t(7357),c=t(3321),d=t(5861);function l(n){var e=n.state,t=n.onChangeState,o=e===s.SubscriptionState.DISABLED?r.ACTIVATE:r.DEACTIVATE;return(0,i.jsxs)(a.Z,{sx:{display:"flex",paddingTop:2,alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsxs)(d.Z,{variant:"body1",color:"text.secondary",children:[(0,i.jsx)("strong",{children:"State: "}),e]}),(0,i.jsx)(c.Z,{variant:"contained",onClick:function(){return t()},children:o})]})}!function(n){n.ACTIVATE="Activate",n.DEACTIVATE="Deactivate"}(r||(r={}));var x=t(6242),u=t(4267),h=t(7294);function p(n){var e=n.children,t=n.title;return(0,i.jsx)(x.Z,{sx:{maxWidth:1024,margin:2},children:(0,i.jsxs)(u.Z,{children:[t&&(0,i.jsx)(d.Z,{gutterBottom:!0,variant:"h5",component:"div",children:t}),e]})})}var j=t(7113),f=t(7720),v=t(8979);function m(){var n=(0,h.useState)(s.SubscriptionState.DISABLED),e=n[0],t=n[1],r=(0,j.KX)({subscriptionId:"1966f368-5528-4591-99d1-3c475a02b1f5"}),o=r.data,a=r.isFetching,c=r.error,x=r.refetch,u=(0,j.PH)({subscriptionId:"1966f368-5528-4591-99d1-3c475a02b1f5",state:e},{queryOptions:{enabled:!1}}),m=(u.data,u.isFetching),Z=u.error,g=u.refetch;(0,h.useEffect)((function(){a||c||(null===o||void 0===o?void 0:o.state)&&t(o.state)}),[o,a,c]),(0,h.useEffect)((function(){m||Z||x()}),[m,g]);return(0,i.jsx)(p,{title:"Subscription",children:(0,i.jsxs)(i.Fragment,{children:[a&&!c&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.Z,{animation:"wave"}),(0,i.jsx)(v.Z,{animation:"wave"}),(0,i.jsx)(v.Z,{animation:"wave"}),(0,i.jsx)(v.Z,{animation:"wave"})]}),!a&&!c&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.Z,{variant:"body2",color:"text.secondary",children:[(0,i.jsx)("strong",{children:"Account id:"})," ",null===o||void 0===o?void 0:o.account_id]}),(0,i.jsxs)(d.Z,{variant:"body2",color:"text.secondary",children:[(0,i.jsx)("strong",{children:"Created on:"})," ",null===o||void 0===o?void 0:o.created_on]}),(0,i.jsxs)(d.Z,{variant:"body2",color:"text.secondary",children:[(0,i.jsx)("strong",{children:"Subscription id:"})," ",null===o||void 0===o?void 0:o.subscription_id]}),(null===o||void 0===o?void 0:o.state)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.Z,{sx:{marginTop:2}}),(0,i.jsx)(l,{state:o.state,onChangeState:function(){g()}})]})]}),!a&&c&&(0,i.jsx)(d.Z,{variant:"body2",color:"text.secondary",children:"uh oh, this was not supposed to happen"})]})})}var Z=t(4687);function g(n){var e=n.id,t=(0,j.jP)({subscriptionId:"1966f368-5528-4591-99d1-3c475a02b1f5",usageReportId:e}),r=t.data,o=t.isFetching,s=t.error,a=t.refetch,l=(0,j.lQ)({subscriptionId:"1966f368-5528-4591-99d1-3c475a02b1f5",usageReportId:e,state:Z.UsageReportState.PROCESSING},{queryOptions:{enabled:!1}}),x=l.isFetching,u=l.error,p=l.refetch;return(0,h.useEffect)((function(){x||(null===r||void 0===r?void 0:r.state)===Z.UsageReportState.NOT_REQUESTED&&p()}),[x,p,r]),(0,h.useEffect)((function(){o||(null===r||void 0===r?void 0:r.state)&&r.state!==Z.UsageReportState.NOT_REQUESTED&&r.state!==Z.UsageReportState.READY&&a()}),[o,a,r]),(0,i.jsxs)(i.Fragment,{children:[o&&!s&&(0,i.jsx)(v.Z,{animation:"wave"}),!o&&!s&&(0,i.jsxs)(i.Fragment,{children:[(null===r||void 0===r?void 0:r.state)===Z.UsageReportState.READY&&(0,i.jsxs)(i.Fragment,{children:[(null===r||void 0===r?void 0:r.id)&&(0,i.jsxs)(d.Z,{variant:"body2",color:"text.secondary",children:[(0,i.jsx)("strong",{children:"id:"})," ",r.id]}),(null===r||void 0===r?void 0:r.from)&&(0,i.jsxs)(d.Z,{variant:"body2",color:"text.secondary",children:[(0,i.jsx)("strong",{children:"from:"})," ",r.from]}),(null===r||void 0===r?void 0:r.to)&&(0,i.jsxs)(d.Z,{variant:"body2",color:"text.secondary",children:[(0,i.jsx)("strong",{children:"to:"})," ",r.to]}),(null===r||void 0===r?void 0:r.report_completed_at)&&(0,i.jsxs)(d.Z,{variant:"body2",color:"text.secondary",children:[(0,i.jsx)("strong",{children:"completed at:"})," ",r.report_completed_at]}),(null===r||void 0===r?void 0:r.products)&&(0,i.jsxs)(d.Z,{variant:"body2",color:"text.secondary",children:[(0,i.jsx)("strong",{children:"products:"})," ",Object.getOwnPropertyNames(r.products).join(",")]})]}),!u&&((null===r||void 0===r?void 0:r.state)===Z.UsageReportState.NOT_REQUESTED||(null===r||void 0===r?void 0:r.state)===Z.UsageReportState.PROCESSING)&&(0,i.jsx)("div",{children:"Processing..."}),u&&((null===r||void 0===r?void 0:r.state)===Z.UsageReportState.NOT_REQUESTED||(null===r||void 0===r?void 0:r.state)===Z.UsageReportState.PROCESSING)&&(0,i.jsx)(c.Z,{variant:"contained",onClick:function(){return p()},children:"Refetch"})]}),!o&&s&&(0,i.jsx)(d.Z,{variant:"body2",color:"text.secondary",children:"uh oh, this was not supposed to happen"})]})}var b=t(5503),y=t(813),S=t(7922),E=t(3946),w=t(3252),T=t(3816);function C(n){var e=n.row,t=(0,h.useState)(!1),r=t[0],o=t[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(T.Z,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,i.jsx)(w.Z,{children:(0,i.jsx)(E.Z,{"aria-label":"expand row",size:"small",onClick:function(){return o(!r)},children:r?(0,i.jsx)(y.Z,{}):(0,i.jsx)(b.Z,{})})}),(0,i.jsx)(w.Z,{align:"left",children:e.id}),(0,i.jsx)(w.Z,{align:"left",children:e.from}),(0,i.jsx)(w.Z,{align:"left",children:e.to})]}),(0,i.jsx)(T.Z,{children:(0,i.jsx)(w.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:(0,i.jsx)(S.Z,{unmountOnExit:!0,in:r,timeout:"auto",children:(0,i.jsx)(a.Z,{sx:{margin:1},children:r&&(0,i.jsx)(g,{id:e.id})})})})})]})}var R=t(7906),_=t(295),k=t(3184);function I(){var n=(0,j.vi)({subscriptionId:"1966f368-5528-4591-99d1-3c475a02b1f5"}),e=n.data,t=n.isFetching,r=n.error,o=(n.refetch,null!==e&&void 0!==e?e:[]);return(0,i.jsx)(p,{title:"Reports",children:(0,i.jsxs)(i.Fragment,{children:[t&&!r&&(0,i.jsx)(v.Z,{animation:"wave"}),!t&&!r&&(0,i.jsxs)(R.Z,{"aria-label":"collapsible table",children:[(0,i.jsx)(k.Z,{children:(0,i.jsxs)(T.Z,{children:[(0,i.jsx)(w.Z,{}),(0,i.jsx)(w.Z,{children:"ID"}),(0,i.jsx)(w.Z,{align:"left",children:"From"}),(0,i.jsx)(w.Z,{align:"left",children:"To"}),(0,i.jsx)(w.Z,{})]})}),(0,i.jsx)(_.Z,{children:o.map((function(n){return(0,i.jsx)(C,{row:{id:n.id,from:n.from,to:n.to}},n.id)}))})]}),!t&&r&&(0,i.jsx)(d.Z,{variant:"body2",color:"text.secondary",children:"uh oh, this was not supposed to happen"})]})})}var P=t(6932);function O(){var n=[(0,i.jsx)(m,{},"subscription-card"),(0,i.jsx)(I,{},"usage-reports-card")];return(0,i.jsx)(o.ZP,{container:!0,direction:"column",flexWrap:"nowrap",children:n.map((function(n){return(0,i.jsx)(o.ZP,{item:!0,children:n},n.key)}))})}O.getLayout=function(n){return(0,i.jsx)(P.Z,{children:n})}}},function(n){n.O(0,[545,269,362,334,774,888,179],(function(){return e=6429,n(n.s=e);var e}));var e=n.O();_N_E=e}]);