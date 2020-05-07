(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,t,n){e.exports=n(80)},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),l=n(25),c=n(47),s=n(22),d=n(23),u=n(26),v=n(24),h=n(27),E=function(e){return e.events.collection},f=function(e){return e.events.editedEvent},p={setStart:"COLLECTION_SET_START",setSuccess:"COLLECTION_SET_SUCCESS",setFail:"COLLECTION_SET_FAIL",dragEvent:"DRAG_EVENT",removeEvent:"REMOVE_EVENT",eventToEdit:"GET_EVENT_TO_EDIT",editStart:"EDIT_EVENT_START",editSuccess:"EDIT_EVENT_SUCCESS",editFail:"EDIT_EVENT_FAIL"};var m=n(48),y=n(28),g=n(49),b=n(50),S=function(e){return function(t){t({type:p.setStart});try{t((n=e,{type:p.setSuccess,payload:{event:n}}))}catch(a){t(function(e){return{type:p.setFail,payload:{err:e}}}(a))}var n}},C=function(e){return function(t){t({type:p.editStart});try{t(function(e){return{type:p.editSuccess,payload:{event:e}}}(e))}catch(n){t(function(e){return{type:p.editStart,payload:{err:e}}}(n))}}},O=n(51),j=n(113),T=n(111),w=n(112),D=n(55),_=n.n(D),k=(n(73),function(e){var t=e.onClose,n=e.onChange,a=e.onDelete,o=e.state,i=e.error;return r.a.createElement("div",{className:"modal"},r.a.createElement(T.a,{id:"title",label:"Event name",required:!0,onChange:n,value:o.title,helperText:i,error:o.title.length>10&&!0}),r.a.createElement(T.a,{id:"date",label:"Event date",type:"date",InputLabelProps:{shrink:!0},onChange:n,value:o.date}),r.a.createElement(T.a,{id:"time",label:"Event time",type:"time",value:o.time,InputLabelProps:{shrink:!0},onChange:n}),r.a.createElement(T.a,{id:"notes",label:"Notes",onChange:n,value:o.notes}),r.a.createElement("div",{className:"modal__buttons"},r.a.createElement(w.a,{color:"secondary",onClick:t,variant:"contained",size:"small"},"Cancel"),o.id&&r.a.createElement(w.a,{color:"secondary",variant:"contained",size:"small",onClick:a},"Delete"),r.a.createElement(w.a,{color:"primary",type:"submit",variant:"contained",size:"small"},o.id?"Edit":"Save")),r.a.createElement(_.a,{className:"modal__close",onClick:t}))}),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={time:"00:00",date:"",title:"",notes:"",error:"",id:"",allDay:!1},n.handleChange=function(e){var t=e.target;n.setState(Object(O.a)({},t.id,t.value))},n.handleKeyPress=function(e){"Escape"===e.code&&(0,n.props.onClose)()},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.title,r=t.notes,o=t.time,i=t.date,l=t.allDay,c=t.id,s=n.props,d=s.setEvent,u=s.editEvent,v=s.onClose,h="".concat(i,"T").concat(o,":00");a.length>30?n.setState({error:"Title should not be longer than 30 chars"}):(n.setState({error:""}),c?u({title:a,notes:r,start:h,allDay:l,id:c}):d({title:a,notes:r,start:h,allDay:l,id:Object(j.a)()}),v())},n.handleDelete=function(){var e=n.props,t=e.deleteEvent,a=e.onClose;t(n.state),a()},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress);var e=this.props,t=e.date,n=e.event;t?this.setState({date:t}):n&&this.setState({title:n.title,date:n.date,time:n.hours,notes:n.notes,id:n.id})}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.date,a=t.event;e.date!==n&&this.setState({date:n}),e.event!==a&&this.setState({title:a.title,date:a.date,time:a.hours,notes:a.notes,id:a.id})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props,t=e.onClose,n=e.innerRef,a=this.state.error;return r.a.createElement("div",{className:"form-modal",ref:n},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(k,{state:this.state,onClose:t,onChange:this.handleChange,error:a,onDelete:this.handleDelete})))}}]),t}(a.Component);N.defaultProps={date:""};var R=r.a.forwardRef(function(e,t){return r.a.createElement(N,Object.assign({innerRef:t},e))}),I=Object(l.b)(function(e){return{event:f(e)}},function(e){return{setEvent:function(t){return e(S(t))},editEvent:function(t){return e(C(t))},deleteEvent:function(t){return e(function(e){return{type:p.removeEvent,payload:{event:e}}}(t))}}})(R);n(76);var L={left:"today,prev,next",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay",prev:"left-double-arrow"},F={hour:"2-digit",minute:"2-digit",hour12:!1};function M(e){return e<10?"0".concat(e):e}var P=Object(a.createRef)(),A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={isShown:!1,isEdit:!1,isDraggable:!0,dateEvent:""},n.handleDay=function(e){n.setState({isShown:!0,isEdit:!1,dateEvent:e.dateStr});var t=n.getCoords(e.dayEl);n.setModalPosition(t,P)},n.handleEditEvent=function(e){var t=e.event,a=e.el,r=function(e){var t=e.start,n=e.title,a=e.extendedProps.notes,r=e.id,o=function(e){var t=e+1;return t<10?"0".concat(t):t}(t.getMonth()),i=function(e){return e<10?"0".concat(e):e}(t.getDate()),l=M(t.getHours()),c=M(t.getMinutes()),s=a;return a||(s=""),{date:"".concat(t.getFullYear(),"-").concat(o,"-").concat(i),hours:"".concat(l,":").concat(c),notes:s,title:n,id:r}}(t);(0,n.props.getEvent)(r),n.setState({isEdit:!0,isShown:!1});var o=n.getCoords(a);n.setModalPosition(o,P)},n.handleDragEvent=function(e){var t=function(e){var t=e.event;return{title:t.title,notes:t.notes,start:t.start,allDay:t.allDay,id:t.id}}(e);(0,n.props.dragEvent)(t)},n.handleClose=function(){n.setState({isShown:!1})},n.handleCloseEdit=function(){n.setState({isEdit:!1})},n.setModalPosition=function(e,t){t.current.style.left="".concat(e.left,"px"),t.current.style.top="".concat(e.top,"px")},n.getCoords=function(e){var t=e.getBoundingClientRect();return{top:t.bottom+pageYOffset+10,left:t.left+pageXOffset-e.offsetWidth/2}},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isDraggable,n=e.dateEvent,a=e.isShown,o=e.isEdit,i=this.props.events;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{weekNumberCalculation:"ISO",defaultView:"dayGridMonth",header:L,plugins:[y.d,g.a,b.a],events:i,eventTimeFormat:F,dateClick:this.handleDay,eventClick:this.handleEditEvent,eventDrop:this.handleDragEvent,eventStartEditable:t,eventResizeStart:this.handleEditEvent}),a&&r.a.createElement(I,{date:n,onClose:this.handleClose,innerRef:P}),o&&r.a.createElement(I,{onClose:this.handleCloseEdit,innerRef:P}))}}]),t}(a.Component),V=Object(l.b)(function(e){return{events:E(e)}},function(e){return{dragEvent:function(t){return e(function(e){return{type:p.dragEvent,payload:{event:e}}}(t))},getEvent:function(t){return e(function(e){return{type:p.eventToEdit,payload:{event:e}}}(t))}}})(A),x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null))}}]),t}(a.Component),G=(n(77),n(12)),z=n(56),U=n(57),W=n(34),K=n(58),B=n.n(K),J=n(36);var Y={date:"",hours:"",title:"",notes:""};var q={key:"events",storage:B.a,whitelist:["collection"]},H=Object(G.combineReducers)({collection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.setSuccess:return[].concat(Object(J.a)(e),[t.payload.event]);case p.dragEvent:case p.editSuccess:return[].concat(Object(J.a)(e.filter(function(e){return e.id!==t.payload.event.id})),[t.payload.event]);case p.removeEvent:return Object(J.a)(e.filter(function(e){return e.id!==t.payload.event.id}));default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.setFail:case p.editFail:return t.payload.err;default:return e}},editedEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.eventToEdit:return t.payload.event;default:return e}}}),X=Object(G.combineReducers)({events:Object(W.a)(q,H)}),Q=[U.a],Z=G.applyMiddleware.apply(void 0,Q);var $,ee=($=X,Object(G.createStore)($,Object(z.composeWithDevTools)(Z))),te=Object(W.b)(ee);i.a.render(r.a.createElement(l.a,{store:ee},r.a.createElement(c.a,{loading:null,persistor:te},r.a.createElement(x,null))),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.641402a1.chunk.js.map