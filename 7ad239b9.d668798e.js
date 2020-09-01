(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return o}));var a=n(1),i=n(6),l=(n(0),n(80)),c={id:"api-queries",title:"Queries"},b={unversionedId:"api-queries",id:"api-queries",isDocsHomePage:!1,title:"Queries",description:"Variants",source:"@site/docs/Queries.md",permalink:"/react-native-testing-library/docs/api-queries",editUrl:"https://github.com/callstack/react-native-testing-library/blob/master/docs/Queries.md",sidebar:"docs",previous:{title:"API",permalink:"/react-native-testing-library/docs/api"},next:{title:"Migration to 7.0",permalink:"/react-native-testing-library/docs/migration-v7"}},r=[{value:"Variants",id:"variants",children:[{value:"getBy",id:"getby",children:[]},{value:"getAllBy",id:"getallby",children:[]},{value:"queryBy",id:"queryby",children:[]},{value:"queryAllBy",id:"queryallby",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findAllBy",id:"findallby",children:[]}]},{value:"Queries",id:"queries",children:[{value:"<code>ByText</code>",id:"bytext",children:[]},{value:"<code>ByPlaceholderText</code>",id:"byplaceholdertext",children:[]},{value:"<code>ByDisplayValue</code>",id:"bydisplayvalue",children:[]},{value:"<code>ByTestId</code>",id:"bytestid",children:[]},{value:"<code>ByA11yLabel</code>, <code>ByAccessibilityLabel</code>, <code>ByLabelText</code>",id:"bya11ylabel-byaccessibilitylabel-bylabeltext",children:[]},{value:"<code>ByA11yHint</code>, <code>ByAccessibilityHint</code>, <code>ByHintText</code>",id:"bya11yhint-byaccessibilityhint-byhinttext",children:[]},{value:"<code>ByA11yStates</code>, <code>ByAccessibilityStates</code>",id:"bya11ystates-byaccessibilitystates",children:[]},{value:"<code>ByA11yRole</code>, <code>ByAccessibilityRole</code>, <code>ByRole</code>",id:"bya11yrole-byaccessibilityrole-byrole",children:[]},{value:"<code>ByA11yState</code>, <code>ByAccessibilityState</code>",id:"bya11ystate-byaccessibilitystate",children:[]},{value:"<code>ByA11Value</code>, <code>ByAccessibilityValue</code>",id:"bya11value-byaccessibilityvalue",children:[]}]},{value:"Unit testing helpers",id:"unit-testing-helpers",children:[{value:"<code>UNSAFE_ByType</code>",id:"unsafe_bytype",children:[]},{value:"<code>UNSAFE_ByProps</code>",id:"unsafe_byprops",children:[]}]}],s={rightToc:r};function o(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"variants"},"Variants"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"getBy")," queries are shown by default in the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#queries"}),"query documentation"),"\nbelow.")),Object(l.b)("h3",{id:"getby"},"getBy"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"getBy*")," queries return the first matching node for a query, and throw an error if no elements match or if more than one match is found (use ",Object(l.b)("inlineCode",{parentName:"p"},"getAllBy")," instead)."),Object(l.b)("h3",{id:"getallby"},"getAllBy"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"getAllBy*")," queries return an array of all matching nodes for a query, and throw an error if no elements match."),Object(l.b)("h3",{id:"queryby"},"queryBy"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"queryBy*")," queries return the first matching node for a query, and return ",Object(l.b)("inlineCode",{parentName:"p"},"null")," if no elements match. This is useful for asserting an element that is not present. This throws if more than one match is found (use ",Object(l.b)("inlineCode",{parentName:"p"},"queryAllBy")," instead)."),Object(l.b)("h3",{id:"queryallby"},"queryAllBy"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"queryAllBy*")," queries return an array of all matching nodes for a query, and return an empty array (",Object(l.b)("inlineCode",{parentName:"p"},"[]"),") if no elements match."),Object(l.b)("h3",{id:"findby"},"findBy"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"findBy")," queries return a promise which resolves when a matching element is found. The promise is rejected if no elements match or if more than one match is found after a default timeout of 4500ms. If you need to find more than one element, then use ",Object(l.b)("inlineCode",{parentName:"p"},"findAllBy"),"."),Object(l.b)("h3",{id:"findallby"},"findAllBy"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"findAllBy")," queries return a promise which resolves to an array when any matching elements are found. The promise is rejected if no elements match after a default timeout of 4500ms."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"In order to properly use ",Object(l.b)("inlineCode",{parentName:"p"},"findBy")," and ",Object(l.b)("inlineCode",{parentName:"p"},"findAllBy")," queries you need at least React >=16.9.0 (featuring async ",Object(l.b)("inlineCode",{parentName:"p"},"act"),") or React Native >=0.60 (which comes with React >=16.9.0)."))),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},Object(l.b)("inlineCode",{parentName:"p"},"findBy")," and ",Object(l.b)("inlineCode",{parentName:"p"},"findAllBy")," queries accept optional ",Object(l.b)("inlineCode",{parentName:"p"},"waitForOptions")," object argument which can contain ",Object(l.b)("inlineCode",{parentName:"p"},"timeout")," and ",Object(l.b)("inlineCode",{parentName:"p"},"interval")," properies which have the same meaning as respective options for ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"api#waitfor"}),Object(l.b)("inlineCode",{parentName:"a"},"waitFor"))," function."))),Object(l.b)("h2",{id:"queries"},"Queries"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note: most methods like this one return a ",Object(l.b)("a",Object(a.a)({parentName:"em"},{href:"https://reactjs.org/docs/test-renderer.html#testinstance"}),Object(l.b)("inlineCode",{parentName:"a"},"ReactTestInstance"))," with following properties that you may be interested in:")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"type ReactTestInstance = {\n  type: string | Function,\n  props: { [propName: string]: any },\n  parent: null | ReactTestInstance,\n  children: Array<ReactTestInstance | string>,\n};\n")),Object(l.b)("h3",{id:"bytext"},Object(l.b)("inlineCode",{parentName:"h3"},"ByText")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getByText, getAllByText, queryByText, queryAllByText, findByText, findAllByText")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching text \u2013 may be a string or regular expression."),Object(l.b)("p",null,"This method will join ",Object(l.b)("inlineCode",{parentName:"p"},"<Text>")," siblings to find matches, similarly to ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/text#containers"}),"how React Native handles these components"),". This will allow for querying for strings that will be visually rendered together, but may be semantically separate React components."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { render } from '@testing-library/react-native';\n\nconst { getByText } = render(<MyComponent />);\nconst element = getByText('banana');\n")),Object(l.b)("h3",{id:"byplaceholdertext"},Object(l.b)("inlineCode",{parentName:"h3"},"ByPlaceholderText")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getByPlaceholderText, getAllByPlaceholderText, queryByPlaceholderText, queryAllByPlaceholderText, findByPlaceholderText, findAllByPlaceholderText")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," for a ",Object(l.b)("inlineCode",{parentName:"p"},"TextInput")," with a matching placeholder \u2013 may be a string or regular expression."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { render } from '@testing-library/react-native';\n\nconst { getByPlaceholderText } = render(<MyComponent />);\nconst element = getByPlaceholderText('username');\n")),Object(l.b)("h3",{id:"bydisplayvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"ByDisplayValue")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getByDisplayValue, getAllByDisplayValue, queryByDisplayValue, queryAllByDisplayValue, findByDisplayValue, findAllByDisplayValue")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," for a ",Object(l.b)("inlineCode",{parentName:"p"},"TextInput")," with a matching display value \u2013 may be a string or regular expression."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { render } from '@testing-library/react-native';\n\nconst { getByDisplayValue } = render(<MyComponent />);\nconst element = getByDisplayValue('username');\n")),Object(l.b)("h3",{id:"bytestid"},Object(l.b)("inlineCode",{parentName:"h3"},"ByTestId")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getByTestId, getAllByTestId, queryByTestId, queryAllByTestId, findByTestId, findAllByTestId")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(l.b)("inlineCode",{parentName:"p"},"testID")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { render } from '@testing-library/react-native';\n\nconst { getByTestId } = render(<MyComponent />);\nconst element = getByTestId('unique-id');\n")),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Please be mindful when using these API and ",Object(l.b)("strong",{parentName:"p"},"treat it as an escape hatch"),". Your users can't interact with ",Object(l.b)("inlineCode",{parentName:"p"},"testID")," anyhow, so you may end up writing tests that provide false sense of security. Favor text and accessibility queries instead."))),Object(l.b)("h3",{id:"bya11ylabel-byaccessibilitylabel-bylabeltext"},Object(l.b)("inlineCode",{parentName:"h3"},"ByA11yLabel"),", ",Object(l.b)("inlineCode",{parentName:"h3"},"ByAccessibilityLabel"),", ",Object(l.b)("inlineCode",{parentName:"h3"},"ByLabelText")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getByA11yLabel, getAllByA11yLabel, queryByA11yLabel, queryAllByA11yLabel, findByA11yLabel, findAllByA11yLabel\ngetByAccessibilityLabel, getAllByAccessibilityLabel, queryByAccessibilityLabel, queryAllByAccessibilityLabel, findByAccessibilityLabel, findAllByAccessibilityLabel\ngetByLabelText, getAllByLabelText, queryByLabelText, queryAllByLabelText, findByLabelText, findAllByLabelText")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityLabel")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { render } from '@testing-library/react-native';\n\nconst { getByA11yLabel } = render(<MyComponent />);\nconst element = getByA11yLabel('my-label');\n")),Object(l.b)("h3",{id:"bya11yhint-byaccessibilityhint-byhinttext"},Object(l.b)("inlineCode",{parentName:"h3"},"ByA11yHint"),", ",Object(l.b)("inlineCode",{parentName:"h3"},"ByAccessibilityHint"),", ",Object(l.b)("inlineCode",{parentName:"h3"},"ByHintText")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getByA11yHint, getAllByA11yHint, queryByA11yHint, queryAllByA11yHint, findByA11yHint, findAllByA11yHint\ngetByAccessibilityHint, getAllByAccessibilityHint, queryByAccessibilityHint, queryAllByAccessibilityHint, findByAccessibilityHint, findAllByAccessibilityHint\ngetByHintText, getAllByHintText, queryByHintText, queryAllByHintText, findByHintText, findAllByHintText")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityHint")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { render } from '@testing-library/react-native';\n\nconst { getByA11yHint } = render(<MyComponent />);\nconst element = getByA11yHint('my-hint');\n")),Object(l.b)("h3",{id:"bya11ystates-byaccessibilitystates"},Object(l.b)("inlineCode",{parentName:"h3"},"ByA11yStates"),", ",Object(l.b)("inlineCode",{parentName:"h3"},"ByAccessibilityStates")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getByA11yStates, getAllByA11yStates, queryByA11yStates, queryAllByA11yStates\ngetByAccessibilityStates, getAllByAccessibilityStates, queryByAccessibilityStates, queryAllByAccessibilityStates")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityStates")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { render } from '@testing-library/react-native';\n\nconst { getByA11yStates } = render(<MyComponent />);\nconst element = getByA11yStates(['checked']);\nconst element2 = getByA11yStates('checked');\n")),Object(l.b)("h3",{id:"bya11yrole-byaccessibilityrole-byrole"},Object(l.b)("inlineCode",{parentName:"h3"},"ByA11yRole"),", ",Object(l.b)("inlineCode",{parentName:"h3"},"ByAccessibilityRole"),", ",Object(l.b)("inlineCode",{parentName:"h3"},"ByRole")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getByA11yRole, getAllByA11yRole, queryByA11yRole, queryAllByA11yRole, findByA11yRole, findAllByA11yRole\ngetByAccessibilityRole, getAllByAccessibilityRole, queryByAccessibilityRole, queryAllByAccessibilityRole, findByAccessibilityRole, findAllByAccessibilityRole\ngetByRole, getAllByRole, queryByRole, queryAllByRole, findByRole, findAllByRole")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityRole")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { render } from '@testing-library/react-native';\n\nconst { getByA11yRole } = render(<MyComponent />);\nconst element = getByA11yRole('button');\n")),Object(l.b)("h3",{id:"bya11ystate-byaccessibilitystate"},Object(l.b)("inlineCode",{parentName:"h3"},"ByA11yState"),", ",Object(l.b)("inlineCode",{parentName:"h3"},"ByAccessibilityState")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getByA11yState, getAllByA11yState, queryByA11yState, queryAllByA11yState, findByA11yState, findAllByA11yState\ngetByAccessibilityState, getAllByAccessibilityState, queryByAccessibilityState, queryAllByAccessibilityState, findByAccessibilityState, findAllByAccessibilityState")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityState")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { render } from '@testing-library/react-native';\n\nconst { getByA11yState } = render(<Component />);\nconst element = getByA11yState({ disabled: true });\n")),Object(l.b)("h3",{id:"bya11value-byaccessibilityvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"ByA11Value"),", ",Object(l.b)("inlineCode",{parentName:"h3"},"ByAccessibilityValue")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"getByA11yValue, getAllByA11yValue, queryByA11yValue, queryAllByA11yValue, findByA11yValue, findAllByA11yValue\ngetByAccessibilityValue, getAllByAccessibilityValue, queryByAccessibilityValue, queryAllByAccessibilityValue, findByAccessibilityValue, findAllByAccessibilityValue")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityValue")," prop."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { render } from '@testing-library/react-native';\n\nconst { getByA11yValue } = render(<Component />);\nconst element = getByA11yValue({ min: 40 });\n")),Object(l.b)("h2",{id:"unit-testing-helpers"},"Unit testing helpers"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Use sparingly and responsibly, escape hatches here")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"render")," from ",Object(l.b)("inlineCode",{parentName:"p"},"@testing-library/react-native")," exposes additional queries that ",Object(l.b)("strong",{parentName:"p"},"should not be used in component integration testing"),", but some users (like component library creators) interested in unit testing some components may find helpful."),Object(l.b)("details",null,Object(l.b)("summary",null,"Queries helpful in unit testing"),Object(l.b)("p",null,"The interface is the same as for other queries, but we won't provide full names so that they're harder to find by search engines."),Object(l.b)("h3",{id:"unsafe_bytype"},Object(l.b)("inlineCode",{parentName:"h3"},"UNSAFE_ByType")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"UNSAFE_getByType, UNSAFE_getAllByType, UNSAFE_queryByType, UNSAFE_queryAllByType")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching a React component type."),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This method has been marked unsafe, since it requires knowledge about implementation details of the component. Use responsibly."))),Object(l.b)("h3",{id:"unsafe_byprops"},Object(l.b)("inlineCode",{parentName:"h3"},"UNSAFE_ByProps")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"UNSAFE_getByProps, UNSAFE_getAllByProps, UNSAFE_queryByProps, UNSAFE_queryAllByProps")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching props object."),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"This method has been marked unsafe, since it requires knowledge about implementation details of the component. Use responsibly.")))))}o.isMDXComponent=!0}}]);