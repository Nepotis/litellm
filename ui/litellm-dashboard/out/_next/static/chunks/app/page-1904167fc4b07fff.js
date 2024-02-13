(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{20661:function(e,t,s){Promise.resolve().then(s.bind(s,6627))},6627:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ee}});var l=s(3827),r=s(64090),n=s(47907),a=s(8792),o=s(2179),i=e=>{let{userID:t,userRole:s,userEmail:r}=e;return console.log("User ID:",t),console.log("userEmail:",r),(0,l.jsxs)("nav",{className:"left-0 right-0 top-0 flex justify-between items-center h-12 mb-4",children:[(0,l.jsx)("div",{className:"text-left mx-4 my-2 absolute top-0 left-0",children:(0,l.jsx)("div",{className:"flex flex-col items-center",children:(0,l.jsx)(a.default,{href:"/",children:(0,l.jsx)("button",{className:"text-gray-800 text-2xl px-4 py-1 rounded text-center",children:"\uD83D\uDE85 LiteLLM"})})})}),(0,l.jsx)("div",{className:"text-right mx-4 my-2 absolute top-0 right-0",children:(0,l.jsxs)(o.Z,{variant:"secondary",children:[r,(0,l.jsxs)("p",{children:["Role: ",s]}),(0,l.jsxs)("p",{children:["ID: ",t]})]})})]})},c=s(80588);let d=async(e,t,s)=>{try{if(console.log("Form Values in keyCreateCall:",s),s.description&&(s.metadata||(s.metadata={}),s.metadata.description=s.description,delete s.description,s.metadata=JSON.stringify(s.metadata)),s.metadata){console.log("formValues.metadata:",s.metadata);try{s.metadata=JSON.parse(s.metadata)}catch(e){throw c.ZP.error("Failed to parse metadata: "+e),Error("Failed to parse metadata: "+e)}}console.log("Form Values after check:",s);let l=await fetch("/key/generate",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({user_id:t,...s})});if(!l.ok){let e=await l.text();throw c.ZP.error("Failed to create key: "+e),console.error("Error response from the server:",e),Error("Network response was not ok")}let r=await l.json();return console.log("API Response:",r),r}catch(e){throw console.error("Failed to create key:",e),e}},u=async(e,t)=>{try{console.log("in keyDeleteCall:",t),c.ZP.info("Making key delete request");let s=await fetch("/key/delete",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({keys:[t]})});if(!s.ok){let e=await s.text();throw c.ZP.error("Failed to delete key: "+e),Error("Network response was not ok")}let l=await s.json();return console.log(l),c.ZP.success("API Key Deleted"),l}catch(e){throw console.error("Failed to create key:",e),e}},h=async(e,t,s)=>{try{let l="/user/info";"App Owner"==s&&(l="".concat(l,"/?user_id=").concat(t)),c.ZP.info("Requesting user data");let r=await fetch(l,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!r.ok){let e=await r.text();throw c.ZP.error(e),Error("Network response was not ok")}let n=await r.json();return c.ZP.info("Received user data"),n}catch(e){throw console.error("Failed to create key:",e),e}},m=async(e,t,s)=>{try{c.ZP.info("Requesting model data");let t=await fetch("/model/info",{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!t.ok){let e=await t.text();throw c.ZP.error(e),Error("Network response was not ok")}let s=await t.json();return c.ZP.info("Received model data"),s}catch(e){throw console.error("Failed to create key:",e),e}},x=async(e,t)=>{try{let s="/spend/logs";console.log("in keySpendLogsCall:",s);let l=await fetch("".concat(s,"/?api_key=").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!l.ok){let e=await l.text();throw c.ZP.error(e),Error("Network response was not ok")}let r=await l.json();return console.log(r),r}catch(e){throw console.error("Failed to create key:",e),e}},p=async(e,t,s,l,r,n)=>{try{let t="/spend/logs";t="App Owner"==s?"".concat(t,"/?user_id=").concat(l,"&start_date=").concat(r,"&end_date=").concat(n):"".concat(t,"/?start_date=").concat(r,"&end_date=").concat(n),c.ZP.info("Making spend logs request");let a=await fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!a.ok){let e=await a.text();throw c.ZP.error(e),Error("Network response was not ok")}let o=await a.json();return console.log(o),c.ZP.success("Spend Logs received"),o}catch(e){throw console.error("Failed to create key:",e),e}},j=async(e,t)=>{try{let s=await fetch("/key/info",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({keys:t})});if(!s.ok){let e=await s.text();throw c.ZP.error(e),Error("Network response was not ok")}let l=await s.json();return console.log(l),l}catch(e){throw console.error("Failed to create key:",e),e}},g=async(e,t)=>{try{let s="/spend/users";console.log("in spendUsersCall:",s);let l=await fetch("".concat(s,"/?user_id=").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!l.ok){let e=await l.text();throw c.ZP.error(e),Error("Network response was not ok")}let r=await l.json();return console.log(r),r}catch(e){throw console.error("Failed to get spend for user",e),e}};var y=s(10384),f=s(46453),Z=s(71801),w=s(13969),k=s(12143),v=s(77171),b=s(29714),S=s(88707),_=s(1861);let{Option:N}=w.default;var D=e=>{let{userID:t,userRole:s,accessToken:n,data:a,userModels:i,setData:u}=e,[h]=k.Z.useForm(),[m,x]=(0,r.useState)(!1),[p,j]=(0,r.useState)(null),g=()=>{x(!1),h.resetFields()},D=()=>{x(!1),j(null),h.resetFields()},I=async e=>{try{c.ZP.info("Making API Call"),x(!0);let s=await d(n,t,e);u(e=>e?[...e,s]:[s]),j(s.key),c.ZP.success("API Key Created"),h.resetFields(),localStorage.removeItem("userData"+t)}catch(e){console.error("Error creating the key:",e)}};return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Z,{className:"mx-auto",onClick:()=>x(!0),children:"+ Create New Key"}),(0,l.jsx)(v.Z,{title:"Create Key",visible:m,width:800,footer:null,onOk:g,onCancel:D,children:(0,l.jsxs)(k.Z,{form:h,onFinish:I,labelCol:{span:6},wrapperCol:{span:16},labelAlign:"left",children:["App Owner"===s||"Admin"===s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k.Z.Item,{label:"Key Name",name:"key_alias",children:(0,l.jsx)(b.Z,{})}),(0,l.jsx)(k.Z.Item,{label:"Team ID",name:"team_id",children:(0,l.jsx)(b.Z,{placeholder:"ai_team"})}),(0,l.jsx)(k.Z.Item,{label:"Models",name:"models",children:(0,l.jsx)(w.default,{mode:"multiple",placeholder:"Select models",style:{width:"100%"},children:i.map(e=>(0,l.jsx)(N,{value:e,children:e},e))})}),(0,l.jsx)(k.Z.Item,{label:"Max Budget (USD)",name:"max_budget",children:(0,l.jsx)(S.Z,{step:.01,precision:2,width:200})}),(0,l.jsx)(k.Z.Item,{label:"Duration (eg: 30s, 30h, 30d)",name:"duration",children:(0,l.jsx)(b.Z,{})}),(0,l.jsx)(k.Z.Item,{label:"Metadata",name:"metadata",children:(0,l.jsx)(b.Z.TextArea,{rows:4,placeholder:"Enter metadata as JSON"})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(k.Z.Item,{label:"Key Name",name:"key_alias",children:(0,l.jsx)(b.Z,{})}),(0,l.jsx)(k.Z.Item,{label:"Team ID (Contact Group)",name:"team_id",children:(0,l.jsx)(b.Z,{placeholder:"ai_team"})}),(0,l.jsx)(k.Z.Item,{label:"Description",name:"description",children:(0,l.jsx)(b.Z.TextArea,{placeholder:"Enter description",rows:4})})]}),(0,l.jsx)("div",{style:{textAlign:"right",marginTop:"10px"},children:(0,l.jsx)(_.ZP,{htmlType:"submit",children:"Create Key"})})]})}),p&&(0,l.jsx)(v.Z,{title:"Save your key",visible:m,onOk:g,onCancel:D,footer:null,children:(0,l.jsxs)(f.Z,{numItems:1,className:"gap-2 w-full",children:[(0,l.jsx)(y.Z,{numColSpan:1,children:(0,l.jsxs)("p",{children:["Please save this secret key somewhere safe and accessible. For security reasons, ",(0,l.jsx)("b",{children:"you will not be able to view it again"})," ","through your LiteLLM account. If you lose this secret key, you will need to generate a new one."]})}),(0,l.jsx)(y.Z,{numColSpan:1,children:null!=p?(0,l.jsxs)(Z.Z,{children:["API Key: ",p]}):(0,l.jsx)(Z.Z,{children:"Key being created, this might take 30s"})})]})})]})},I=s(33393),T=s(13810),E=s(61244),P=s(10827),C=s(3851),A=s(2044),O=s(64167),F=s(74480),R=s(7178),U=s(42440),M=s(9853),K=s(67989),L=s(56863),J=e=>{let{token:t,accessToken:s,keySpend:n,keyBudget:a,keyName:i}=e,[c,d]=(0,r.useState)(!1),[u,h]=(0,r.useState)(null),[m,p]=(0,r.useState)(null),j=async()=>{try{if(null==s||null==t)return;console.log("accessToken: ".concat(s,"; token: ").concat(t));let e=await x(s,t);console.log("Response:",e);let l=Object.values(e).reduce((e,t)=>{let s=new Date(t.startTime),l=new Intl.DateTimeFormat("en-US",{day:"2-digit",month:"short"}).format(s);return e[l]=(e[l]||0)+t.spend,e},{}),r=Object.entries(l);r.sort((e,t)=>{let[s]=e,[l]=t,r=new Date(s),n=new Date(l);return r.getTime()-n.getTime()});let n=Object.fromEntries(r);console.log(n);let a=Object.values(e).reduce((e,t)=>{let s=t.user;return e[s]=(e[s]||0)+t.spend,e},{});console.log(l),console.log(a);let o=[];for(let[e,t]of Object.entries(n))o.push({day:e,spend:t});let i=Object.entries(a).sort((e,t)=>t[1]-e[1]).slice(0,5).map(e=>{let[t,s]=e;return{name:t,value:s}});h(o),p(i),console.log("arrayBarChart:",o)}catch(e){console.error("There was an error fetching the data",e)}};return t?(0,l.jsxs)("div",{children:[(0,l.jsx)(o.Z,{className:"mx-auto",onClick:()=>{console.log("Show Modal triggered"),d(!0),j()},children:"View Spend Report"}),(0,l.jsxs)(v.Z,{visible:c,width:1e3,onOk:()=>{d(!1)},onCancel:()=>{d(!1)},footer:null,children:[(0,l.jsxs)(U.Z,{style:{textAlign:"left"},children:["Key Name: ",i]}),(0,l.jsxs)(L.Z,{children:["Monthly Spend $",n]}),(0,l.jsx)(T.Z,{className:"mt-6 mb-6",children:u&&(0,l.jsx)(M.Z,{className:"mt-6",data:u,colors:["green"],index:"day",categories:["spend"],yAxisWidth:48})}),(0,l.jsx)(U.Z,{className:"mt-6",children:"Top 5 Users Spend (USD)"}),(0,l.jsx)(T.Z,{className:"mb-6",children:m&&(0,l.jsx)(K.Z,{className:"mt-6",data:m,color:"teal"})})]})]}):null},B=e=>{let{userID:t,accessToken:s,data:n,setData:a}=e,[i,c]=(0,r.useState)(!1),[d,h]=(0,r.useState)(!1),[m,x]=(0,r.useState)(null),p=async e=>{null!=n&&(x(e),localStorage.removeItem("userData"+t),h(!0))},j=async()=>{if(null!=m&&null!=n){try{await u(s,m);let e=n.filter(e=>e.token!==m);a(e)}catch(e){console.error("Error deleting the key:",e)}h(!1),x(null)}};if(null!=n)return console.log("RERENDER TRIGGERED"),(0,l.jsxs)(T.Z,{className:"w-full mx-auto flex-auto overflow-y-auto max-h-[50vh] mb-4",children:[(0,l.jsx)(U.Z,{children:"API Keys"}),(0,l.jsxs)(P.Z,{className:"mt-5",children:[(0,l.jsx)(O.Z,{children:(0,l.jsxs)(R.Z,{children:[(0,l.jsx)(F.Z,{children:"Key Alias"}),(0,l.jsx)(F.Z,{children:"Secret Key"}),(0,l.jsx)(F.Z,{children:"Spend (USD)"}),(0,l.jsx)(F.Z,{children:"Key Budget (USD)"}),(0,l.jsx)(F.Z,{children:"Team ID"}),(0,l.jsx)(F.Z,{children:"Metadata"}),(0,l.jsx)(F.Z,{children:"Models"}),(0,l.jsx)(F.Z,{children:"TPM / RPM Limits"}),(0,l.jsx)(F.Z,{children:"Expires"})]})}),(0,l.jsx)(C.Z,{children:n.map(e=>(console.log(e),"litellm-dashboard"===e.team_id)?null:(0,l.jsxs)(R.Z,{children:[(0,l.jsx)(A.Z,{children:null!=e.key_alias?(0,l.jsx)(Z.Z,{children:e.key_alias}):(0,l.jsx)(Z.Z,{children:"Not Set"})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(Z.Z,{children:e.key_name})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(Z.Z,{children:e.spend})}),(0,l.jsx)(A.Z,{children:null!=e.max_budget?(0,l.jsx)(Z.Z,{children:e.max_budget}):(0,l.jsx)(Z.Z,{children:"Unlimited Budget"})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(Z.Z,{children:e.team_id})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(Z.Z,{children:JSON.stringify(e.metadata)})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(Z.Z,{children:JSON.stringify(e.models)})}),(0,l.jsx)(A.Z,{children:(0,l.jsxs)(Z.Z,{children:["TPM Limit: ",e.tpm_limit?e.tpm_limit:"Unlimited"," ",(0,l.jsx)("br",{})," RPM Limit:"," ",e.rpm_limit?e.rpm_limit:"Unlimited"]})}),(0,l.jsx)(A.Z,{children:null!=e.expires?(0,l.jsx)(Z.Z,{children:e.expires}):(0,l.jsx)(Z.Z,{children:"Never expires"})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(E.Z,{onClick:()=>p(e.token),icon:I.Z,size:"sm"})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(J,{token:e.token,accessToken:s,keySpend:e.spend,keyBudget:e.max_budget,keyName:e.key_name})})]},e.token))})]}),d&&(0,l.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto",children:(0,l.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,l.jsx)("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:(0,l.jsx)("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})}),(0,l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,l.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[(0,l.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,l.jsx)("div",{className:"sm:flex sm:items-start",children:(0,l.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,l.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Delete Key"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete this key ?"})})]})})}),(0,l.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[(0,l.jsx)(o.Z,{onClick:j,color:"red",className:"ml-2",children:"Delete"}),(0,l.jsx)(o.Z,{onClick:()=>{h(!1),x(null)},children:"Cancel"})]})]})]})})]})},z=e=>{let{userID:t,userSpendData:s,userRole:n,accessToken:a}=e;console.log("User SpendData:",s);let[o,i]=(0,r.useState)(null==s?void 0:s.spend),[c,d]=(0,r.useState)((null==s?void 0:s.max_budget)||null);return(0,r.useEffect)(()=>{(async()=>{if("Admin"===n)try{let e=await g(a,"litellm-proxy-budget");console.log("Result from callSpendUsers:",e);let t=e[0];i(null==t?void 0:t.spend),d((null==t?void 0:t.max_budget)||null)}catch(e){console.error("Failed to get spend for user",e)}})()},[n,a,t]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(T.Z,{className:"mx-auto mb-4",children:[(0,l.jsxs)(L.Z,{children:["$",o]}),(0,l.jsxs)(U.Z,{children:["/ ",null!==c?"$".concat(c," limit"):"No limit"]})]})})},G=s(37963);console.log("isLocal:",!1);var $=e=>{let{userID:t,userRole:s,setUserRole:a,userEmail:o,setUserEmail:i}=e,[c,d]=(0,r.useState)(null),[u,x]=(0,r.useState)(null),p=(0,n.useSearchParams)();p.get("viewSpend"),(0,n.useRouter)();let j=p.get("token"),[g,Z]=(0,r.useState)(null),[w,k]=(0,r.useState)([]);if((0,r.useEffect)(()=>{if(j){let e=(0,G.o)(j);if(e){if(console.log("Decoded token:",e),console.log("Decoded key:",e.key),Z(e.key),e.user_role){let t=function(e){if(!e)return"Undefined Role";switch(console.log("Received user role: ".concat(e)),e.toLowerCase()){case"app_owner":case"demo_app_owner":return"App Owner";case"app_admin":return"Admin";case"app_user":return"App User";default:return"Unknown Role"}}(e.user_role);console.log("Decoded user_role:",t),a(t)}else console.log("User role not defined");e.user_email?i(e.user_email):console.log("User Email is not set ".concat(e))}}if(t&&g&&s&&!c){let e=localStorage.getItem("userData"+t),l=localStorage.getItem("userSpendData"+t),r=localStorage.getItem("userModels"+t);e&&l&&r?(d(JSON.parse(e)),x(JSON.parse(l)),k(JSON.parse(r))):(async()=>{try{let e=await h(g,t,s);x(e.user_info),d(e.keys),localStorage.setItem("userData"+t,JSON.stringify(e.keys)),localStorage.setItem("userSpendData"+t,JSON.stringify(e.user_info));let l=await m(g,t,s);console.log("model_info:",l);let r=l.data.map(e=>e.model_name);console.log("available_model_names:",r),k(r),console.log("userModels:",w),localStorage.setItem("userModels"+t,JSON.stringify(r))}catch(e){console.error("There was an error fetching the data",e)}})()}},[t,j,g,c,s]),null==t||null==j){let e="/sso/key/generate";return console.log("Full URL:",e),window.location.href=e,null}return null==g?null:(null==s&&a("App Owner"),(0,l.jsx)("div",{children:(0,l.jsx)(f.Z,{numItems:1,className:"gap-0 p-10 h-[75vh] w-full",children:(0,l.jsxs)(y.Z,{numColSpan:1,children:[(0,l.jsx)(z,{userID:t,userSpendData:u,userRole:s,accessToken:g}),(0,l.jsx)(B,{userID:t,accessToken:g,data:c,setData:d}),(0,l.jsx)(D,{userID:t,userRole:s,userModels:w,accessToken:g,data:c,setData:d})]})})}))},W=e=>{let{accessToken:t,token:s,userRole:n,userID:a}=e,[o,i]=(0,r.useState)({data:[]});if((0,r.useEffect)(()=>{if(!t||!s||!n||!a)return;let e=async()=>{try{let e=await m(t,a,n);console.log("Model data response:",e.data),i(e)}catch(e){console.error("There was an error fetching the model data",e)}};t&&s&&n&&a&&e()},[t,s,n,a]),!o)return(0,l.jsx)("div",{children:"Loading..."});for(let e=0;e<o.data.length;e++){var c;let t=o.data[e],s=null==t?void 0:null===(c=t.litellm_params)||void 0===c?void 0:c.model,l=null==t?void 0:t.model_info,r="openai",n="",a="Undefined",i="Undefined",d="Undefined";if(s){let e=s.split("/"),t=e[0];console.log("Provider:",n=1===e.length?r:t)}else console.log("Provider:",n=r);l&&(a=null==l?void 0:l.input_cost_per_token,i=null==l?void 0:l.output_cost_per_token,d=null==l?void 0:l.max_tokens),o.data[e].provider=n,o.data[e].input_cost=a,o.data[e].output_cost=i,o.data[e].max_tokens=d}return(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(f.Z,{className:"gap-2 p-10 h-[75vh] w-full",children:(0,l.jsx)(T.Z,{children:(0,l.jsxs)(P.Z,{className:"mt-5",children:[(0,l.jsx)(O.Z,{children:(0,l.jsxs)(R.Z,{children:[(0,l.jsx)(A.Z,{children:(0,l.jsx)(U.Z,{children:"Model Name "})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(U.Z,{children:"Provider"})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(U.Z,{children:"Input Price per token ($)"})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(U.Z,{children:"Output Price per token ($)"})}),(0,l.jsx)(A.Z,{children:(0,l.jsx)(U.Z,{children:"Max Tokens"})})]})}),(0,l.jsx)(C.Z,{children:o.data.map(e=>(0,l.jsxs)(R.Z,{children:[(0,l.jsx)(A.Z,{children:(0,l.jsx)(U.Z,{children:e.model_name})}),(0,l.jsx)(A.Z,{children:e.provider}),(0,l.jsx)(A.Z,{children:e.input_cost}),(0,l.jsx)(A.Z,{children:e.output_cost}),(0,l.jsx)(A.Z,{children:e.max_tokens})]},e.model_name))})]})})})})},q=s(33509),V=s(30569);let{Sider:Y}=q.default;var X=e=>{let{setPage:t}=e;return(0,l.jsx)(q.default,{style:{minHeight:"100vh",maxWidth:"120px"},children:(0,l.jsx)(Y,{width:120,children:(0,l.jsxs)(V.Z,{mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%",borderRight:0},children:[(0,l.jsx)(V.Z.Item,{onClick:()=>t("api-keys"),children:"API Keys"},"1"),(0,l.jsx)(V.Z.Item,{onClick:()=>t("models"),children:"Models"},"2"),(0,l.jsx)(V.Z.Item,{onClick:()=>t("usage"),children:"Usage"},"3")]})})})};let H=e=>{let{payload:t,active:s}=e;if(!s||!t)return null;let r=t[0].payload,n=r.startTime,a=Object.entries(r.models).map(e=>{let[t,s]=e;return[t,s]});a.sort((e,t)=>t[1]-e[1]);let o=a.slice(0,5);return(0,l.jsxs)("div",{className:"w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown",children:[n,o.map(e=>{let[t,s]=e;return(0,l.jsx)("div",{className:"flex flex-1 space-x-10",children:(0,l.jsx)("div",{className:"p-2",children:(0,l.jsxs)("p",{className:"text-tremor-content text-xs",children:[t,":",(0,l.jsxs)("span",{className:"text-xs text-tremor-content-emphasis",children:[" ",s?s<.01?"<$0.01":s.toFixed(2):""]})]})})},t)})]})};var Q=e=>{let{accessToken:t,token:s,userRole:n,userID:a}=e,o=new Date,[i,c]=(0,r.useState)([]),[d,u]=(0,r.useState)([]),[h,m]=(0,r.useState)([]),x=new Date(o.getFullYear(),o.getMonth(),1),g=new Date(o.getFullYear(),o.getMonth()+1,0),Z=k(x),w=k(g);function k(e){let t=e.getFullYear(),s=e.getMonth()+1,l=e.getDate();return"".concat(t,"-").concat(s<10?"0"+s:s,"-").concat(l<10?"0"+l:l)}return console.log("Start date is ".concat(Z)),console.log("End date is ".concat(w)),(0,r.useEffect)(()=>{t&&s&&n&&a&&(async()=>{try{await p(t,s,n,a,Z,w).then(async e=>{let s=(await j(t,function(e){let t=[];e.forEach(e=>{Object.entries(e).forEach(e=>{let[s,l]=e;"spend"!==s&&"startTime"!==s&&"models"!==s&&"users"!==s&&t.push({key:s,spend:l})})}),t.sort((e,t)=>Number(t.spend)-Number(e.spend));let s=t.slice(0,5).map(e=>e.key);return console.log("topKeys: ".concat(Object.keys(s[0]))),s}(e))).info.map(e=>({key:(e.key_name||e.key_alias||e.token).substring(0,7),spend:e.spend}));u(s),m(function(e){let t={};e.forEach(e=>{Object.entries(e.users).forEach(e=>{let[s,l]=e;""!==s&&null!=s&&"None"!=s&&(t[s]||(t[s]=0),t[s]+=l)})});let s=Object.entries(t).map(e=>{let[t,s]=e;return{user_id:t,spend:s}});s.sort((e,t)=>t.spend-e.spend);let l=s.slice(0,5);return console.log("topKeys: ".concat(Object.values(l[0]))),l}(e)),c(e)})}catch(e){console.error("There was an error fetching the data",e)}})()},[t,s,n,a,Z,w]),(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsxs)(f.Z,{numItems:2,className:"gap-2 p-10 h-[75vh] w-full",children:[(0,l.jsx)(y.Z,{numColSpan:2,children:(0,l.jsxs)(T.Z,{children:[(0,l.jsx)(U.Z,{children:"Monthly Spend"}),(0,l.jsx)(M.Z,{data:i,index:"startTime",categories:["spend"],colors:["blue"],valueFormatter:e=>"$ ".concat(new Intl.NumberFormat("us").format(e).toString()),yAxisWidth:100,tickGap:5,customTooltip:H})]})}),(0,l.jsx)(y.Z,{numColSpan:1,children:(0,l.jsxs)(T.Z,{children:[(0,l.jsx)(U.Z,{children:"Top API Keys"}),(0,l.jsx)(M.Z,{className:"mt-4 h-40",data:d,index:"key",categories:["spend"],colors:["blue"],yAxisWidth:80,tickGap:5,layout:"vertical",showXAxis:!1,showLegend:!1})]})}),(0,l.jsx)(y.Z,{numColSpan:1,children:(0,l.jsxs)(T.Z,{children:[(0,l.jsx)(U.Z,{children:"Top Users"}),(0,l.jsx)(M.Z,{className:"mt-4 h-40",data:h,index:"user_id",categories:["spend"],colors:["blue"],yAxisWidth:200,layout:"vertical",showXAxis:!1,showLegend:!1})]})})]})})},ee=()=>{let[e,t]=(0,r.useState)(null),[s,a]=(0,r.useState)(null),o=(0,n.useSearchParams)(),c=o.get("userID"),d=o.get("token"),[u,h]=(0,r.useState)("api-keys"),[m,x]=(0,r.useState)(null);return(0,r.useEffect)(()=>{if(d){let e=(0,G.o)(d);if(e){if(console.log("Decoded token:",e),console.log("Decoded key:",e.key),x(e.key),e.user_role){let s=function(e){if(!e)return"Undefined Role";switch(console.log("Received user role: ".concat(e)),e.toLowerCase()){case"app_owner":case"demo_app_owner":return"App Owner";case"app_admin":return"Admin";case"app_user":return"App User";default:return"Unknown Role"}}(e.user_role);console.log("Decoded user_role:",s),t(s)}else console.log("User role not defined");e.user_email?a(e.user_email):console.log("User Email is not set ".concat(e))}}},[d]),(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,l.jsx)(i,{userID:c,userRole:e,userEmail:s}),(0,l.jsxs)("div",{className:"flex flex-1 overflow-auto",children:[(0,l.jsx)(X,{setPage:h}),"api-keys"==u?(0,l.jsx)($,{userID:c,userRole:e,setUserRole:t,userEmail:s,setUserEmail:a}):"models"==u?(0,l.jsx)(W,{userID:c,userRole:e,token:d,accessToken:m}):(0,l.jsx)(Q,{userID:c,userRole:e,token:d,accessToken:m})]})]})})}}},function(e){e.O(0,[838,971,69,744],function(){return e(e.s=20661)}),_N_E=e.O()}]);