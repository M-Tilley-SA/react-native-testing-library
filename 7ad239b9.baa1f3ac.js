(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(1),i=a(6),r=(a(0),a(81)),l={id:"api-queries",title:"Queries"},c={unversionedId:"api-queries",id:"api-queries",isDocsHomePage:!1,title:"Queries",description:"Table of contents:",source:"@site/docs/Queries.md",permalink:"/react-native-testing-library/docs/api-queries",editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/docs/Queries.md",sidebar:"docs",previous:{title:"API",permalink:"/react-native-testing-library/docs/api"},next:{title:"Migration to 9.0",permalink:"/react-native-testing-library/docs/migration-v9"}},b=[{value:"Table of contents:",id:"table-of-contents",children:[]},{value:"Variants",id:"variants",children:[{value:"getBy",id:"getby",children:[]},{value:"getAllBy",id:"getallby",children:[]},{value:"queryBy",id:"queryby",children:[]},{value:"queryAllBy",id:"queryallby",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findAllBy",id:"findallby",children:[]}]},{value:"Queries",id:"queries",children:[{value:"Options",id:"options",children:[]},{value:"<code>ByText</code>",id:"bytext",children:[]},{value:"<code>ByPlaceholderText</code>",id:"byplaceholdertext",children:[]},{value:"<code>ByDisplayValue</code>",id:"bydisplayvalue",children:[]},{value:"<code>ByTestId</code>",id:"bytestid",children:[]},{value:"<code>ByLabelText</code>",id:"bylabeltext",children:[]},{value:"<code>ByHintText</code>, <code>ByA11yHint</code>, <code>ByAccessibilityHint</code>",id:"byhinttext-bya11yhint-byaccessibilityhint",children:[]},{value:"<code>ByRole</code>",id:"byrole",children:[]},{value:"<code>ByA11yState</code>, <code>ByAccessibilityState</code>",id:"bya11ystate-byaccessibilitystate",children:[]},{value:"<code>ByA11Value</code>, <code>ByAccessibilityValue</code>",id:"bya11value-byaccessibilityvalue",children:[]}]},{value:"TextMatch",id:"textmatch",children:[{value:"Examples",id:"examples",children:[]},{value:"Precision",id:"precision",children:[]},{value:"Normalization",id:"normalization",children:[]}]},{value:"Unit testing helpers",id:"unit-testing-helpers",children:[{value:"<code>UNSAFE_ByType</code>",id:"unsafe_bytype",children:[]},{value:"<code>UNSAFE_ByProps</code>",id:"unsafe_byprops",children:[]}]}],o={rightToc:b};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"table-of-contents"},"Table of contents:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#variants"}),"Variants"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#getby"}),"getBy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#getallby"}),"getAllBy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#queryby"}),"queryBy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#queryallby"}),"queryAllBy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#findby"}),"findBy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#findallby"}),"findAllBy")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#queries"}),"Queries"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#options"}),"Options")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#bytext"}),Object(r.b)("inlineCode",{parentName:"a"},"ByText"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#byplaceholdertext"}),Object(r.b)("inlineCode",{parentName:"a"},"ByPlaceholderText"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#bydisplayvalue"}),Object(r.b)("inlineCode",{parentName:"a"},"ByDisplayValue"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#bytestid"}),Object(r.b)("inlineCode",{parentName:"a"},"ByTestId"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#bylabeltext"}),Object(r.b)("inlineCode",{parentName:"a"},"ByLabelText"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#byhinttext-bya11yhint-byaccessibilityhint"}),Object(r.b)("inlineCode",{parentName:"a"},"ByHintText"),", ",Object(r.b)("inlineCode",{parentName:"a"},"ByA11yHint"),", ",Object(r.b)("inlineCode",{parentName:"a"},"ByAccessibilityHint"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#byrole"}),Object(r.b)("inlineCode",{parentName:"a"},"ByRole"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#bya11ystate-byaccessibilitystate"}),Object(r.b)("inlineCode",{parentName:"a"},"ByA11yState"),", ",Object(r.b)("inlineCode",{parentName:"a"},"ByAccessibilityState"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#bya11value-byaccessibilityvalue"}),Object(r.b)("inlineCode",{parentName:"a"},"ByA11Value"),", ",Object(r.b)("inlineCode",{parentName:"a"},"ByAccessibilityValue"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#textmatch"}),"TextMatch"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#examples"}),"Examples")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#precision"}),"Precision")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#normalization"}),"Normalization"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#normalization-examples"}),"Normalization Examples")))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#unit-testing-helpers"}),"Unit testing helpers"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#unsafe_bytype"}),Object(r.b)("inlineCode",{parentName:"a"},"UNSAFE_ByType"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#unsafe_byprops"}),Object(r.b)("inlineCode",{parentName:"a"},"UNSAFE_ByProps")))))),Object(r.b)("h2",{id:"variants"},"Variants"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"getBy")," queries are shown by default in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#queries"}),"query documentation"),"\nbelow.")),Object(r.b)("h3",{id:"getby"},"getBy"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"getBy*")," queries return the first matching node for a query, and throw an error if no elements match or if more than one match is found (use ",Object(r.b)("inlineCode",{parentName:"p"},"getAllBy")," instead)."),Object(r.b)("h3",{id:"getallby"},"getAllBy"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"getAllBy*")," queries return an array of all matching nodes for a query, and throw an error if no elements match."),Object(r.b)("h3",{id:"queryby"},"queryBy"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"queryBy*")," queries return the first matching node for a query, and return ",Object(r.b)("inlineCode",{parentName:"p"},"null")," if no elements match. This is useful for asserting an element that is not present. This throws if more than one match is found (use ",Object(r.b)("inlineCode",{parentName:"p"},"queryAllBy")," instead)."),Object(r.b)("h3",{id:"queryallby"},"queryAllBy"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"queryAllBy*")," queries return an array of all matching nodes for a query, and return an empty array (",Object(r.b)("inlineCode",{parentName:"p"},"[]"),") if no elements match."),Object(r.b)("h3",{id:"findby"},"findBy"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"findBy")," queries return a promise which resolves when a matching element is found. The promise is rejected if no elements match or if more than one match is found after a default timeout of 4500ms. If you need to find more than one element, then use ",Object(r.b)("inlineCode",{parentName:"p"},"findAllBy"),"."),Object(r.b)("h3",{id:"findallby"},"findAllBy"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"findAllBy")," queries return a promise which resolves to an array when any matching elements are found. The promise is rejected if no elements match after a default timeout of 4500ms."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In order to properly use ",Object(r.b)("inlineCode",{parentName:"p"},"findBy")," and ",Object(r.b)("inlineCode",{parentName:"p"},"findAllBy")," queries you need at least React >=16.9.0 (featuring async ",Object(r.b)("inlineCode",{parentName:"p"},"act"),") or React Native >=0.61 (which comes with React >=16.9.0)."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"findBy")," and ",Object(r.b)("inlineCode",{parentName:"p"},"findAllBy")," queries accept optional ",Object(r.b)("inlineCode",{parentName:"p"},"waitForOptions")," object argument which can contain ",Object(r.b)("inlineCode",{parentName:"p"},"timeout")," and ",Object(r.b)("inlineCode",{parentName:"p"},"interval")," properies which have the same meaning as respective options for ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"api#waitfor"}),Object(r.b)("inlineCode",{parentName:"a"},"waitFor"))," function."))),Object(r.b)("h2",{id:"queries"},"Queries"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note: most methods like this one return a ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://reactjs.org/docs/test-renderer.html#testinstance"}),Object(r.b)("inlineCode",{parentName:"a"},"ReactTestInstance"))," with following properties that you may be interested in:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"type ReactTestInstance = {\n  type: string | Function;\n  props: { [propName: string]: any };\n  parent: null | ReactTestInstance;\n  children: Array<ReactTestInstance | string>;\n};\n")),Object(r.b)("h3",{id:"options"},"Options"),Object(r.b)("p",null,"Usually query first argument can be a ",Object(r.b)("strong",{parentName:"p"},"string")," or a ",Object(r.b)("strong",{parentName:"p"},"regex"),". Some queries accept optional argument which change string matching behaviour. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#textmatch"}),"TextMatch")," for more info."),Object(r.b)("h3",{id:"bytext"},Object(r.b)("inlineCode",{parentName:"h3"},"ByText")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"getByText, getAllByText, queryByText, queryAllByText, findByText, findAllByText")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching text \u2013 may be a string or regular expression."),Object(r.b)("p",null,"This method will join ",Object(r.b)("inlineCode",{parentName:"p"},"<Text>")," siblings to find matches, similarly to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/text#containers"}),"how React Native handles these components"),". This will allow for querying for strings that will be visually rendered together, but may be semantically separate React components."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByText('banana');\n")),Object(r.b)("h3",{id:"byplaceholdertext"},Object(r.b)("inlineCode",{parentName:"h3"},"ByPlaceholderText")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"getByPlaceholderText, getAllByPlaceholderText, queryByPlaceholderText, queryAllByPlaceholderText, findByPlaceholderText, findAllByPlaceholderText")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," for a ",Object(r.b)("inlineCode",{parentName:"p"},"TextInput")," with a matching placeholder \u2013 may be a string or regular expression."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByPlaceholderText('username');\n")),Object(r.b)("h3",{id:"bydisplayvalue"},Object(r.b)("inlineCode",{parentName:"h3"},"ByDisplayValue")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"getByDisplayValue, getAllByDisplayValue, queryByDisplayValue, queryAllByDisplayValue, findByDisplayValue, findAllByDisplayValue")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," for a ",Object(r.b)("inlineCode",{parentName:"p"},"TextInput")," with a matching display value \u2013 may be a string or regular expression."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByDisplayValue('username');\n")),Object(r.b)("h3",{id:"bytestid"},Object(r.b)("inlineCode",{parentName:"h3"},"ByTestId")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"getByTestId, getAllByTestId, queryByTestId, queryAllByTestId, findByTestId, findAllByTestId")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(r.b)("inlineCode",{parentName:"p"},"testID")," prop. ",Object(r.b)("inlineCode",{parentName:"p"},"testID")," \u2013 may be a string or a regular expression."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByTestId('unique-id');\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In the spirit of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://testing-library.com/docs/guiding-principles"}),"the guiding principles"),", it is recommended to use this only after the other queries don't work for your use case. Using ",Object(r.b)("inlineCode",{parentName:"p"},"testID")," attributes do not resemble how your software is used and should be avoided if possible. However, they are particularly useful for end-to-end testing on real devices, e.g. using Detox and it's an encouraged technique to use there. Learn more from the blog post ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change"}),'"Making your UI tests resilient to change"'),"."))),Object(r.b)("h3",{id:"bylabeltext"},Object(r.b)("inlineCode",{parentName:"h3"},"ByLabelText")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"getByLabelText, getAllByLabelText, queryByLabelText, queryAllByLabelText, findByLabelText, findAllByLabelText")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(r.b)("inlineCode",{parentName:"p"},"accessibilityLabel")," prop."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByLabelText('my-label');\n")),Object(r.b)("h3",{id:"byhinttext-bya11yhint-byaccessibilityhint"},Object(r.b)("inlineCode",{parentName:"h3"},"ByHintText"),", ",Object(r.b)("inlineCode",{parentName:"h3"},"ByA11yHint"),", ",Object(r.b)("inlineCode",{parentName:"h3"},"ByAccessibilityHint")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"getByA11yHint, getAllByA11yHint, queryByA11yHint, queryAllByA11yHint, findByA11yHint, findAllByA11yHint\ngetByAccessibilityHint, getAllByAccessibilityHint, queryByAccessibilityHint, queryAllByAccessibilityHint, findByAccessibilityHint, findAllByAccessibilityHint\ngetByHintText, getAllByHintText, queryByHintText, queryAllByHintText, findByHintText, findAllByHintText")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(r.b)("inlineCode",{parentName:"p"},"accessibilityHint")," prop."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByHintText('Plays a song');\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Please consult ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint"}),"Apple guidelines on how ",Object(r.b)("inlineCode",{parentName:"a"},"accessibilityHint")," should be used"),"."))),Object(r.b)("h3",{id:"byrole"},Object(r.b)("inlineCode",{parentName:"h3"},"ByRole")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"getByRole, getAllByRole, queryByRole, queryAllByRole, findByRole, findAllByRole")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(r.b)("inlineCode",{parentName:"p"},"accessibilityRole")," prop."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByRole('button');\n")),Object(r.b)("h3",{id:"bya11ystate-byaccessibilitystate"},Object(r.b)("inlineCode",{parentName:"h3"},"ByA11yState"),", ",Object(r.b)("inlineCode",{parentName:"h3"},"ByAccessibilityState")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"getByA11yState, getAllByA11yState, queryByA11yState, queryAllByA11yState, findByA11yState, findAllByA11yState\ngetByAccessibilityState, getAllByAccessibilityState, queryByAccessibilityState, queryAllByAccessibilityState, findByAccessibilityState, findAllByAccessibilityState")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(r.b)("inlineCode",{parentName:"p"},"accessibilityState")," prop."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { render, screen } from '@testing-library/react-native';\n\nrender(<Component />);\nconst element = screen.getByA11yState({ disabled: true });\n")),Object(r.b)("h3",{id:"bya11value-byaccessibilityvalue"},Object(r.b)("inlineCode",{parentName:"h3"},"ByA11Value"),", ",Object(r.b)("inlineCode",{parentName:"h3"},"ByAccessibilityValue")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"getByA11yValue, getAllByA11yValue, queryByA11yValue, queryAllByA11yValue, findByA11yValue, findAllByA11yValue\ngetByAccessibilityValue, getAllByAccessibilityValue, queryByAccessibilityValue, queryAllByAccessibilityValue, findByAccessibilityValue, findAllByAccessibilityValue")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",Object(r.b)("inlineCode",{parentName:"p"},"accessibilityValue")," prop."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { render, screen } from '@testing-library/react-native';\n\nrender(<Component />);\nconst element = screen.getByA11yValue({ min: 40 });\n")),Object(r.b)("h2",{id:"textmatch"},"TextMatch"),Object(r.b)("p",null,"Most of the query APIs take a ",Object(r.b)("inlineCode",{parentName:"p"},"TextMatch")," as an argument, which means the argument can be either a ",Object(r.b)("em",{parentName:"p"},"string")," or ",Object(r.b)("em",{parentName:"p"},"regex"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"type TextMatchOptions = {\n  exact?: boolean;\n  normalizer?: (textToNormalize: string) => string;\n  trim?: boolean;\n  collapseWhitespace?: boolean;\n};\n")),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("p",null,"Given the following render:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"render(<Text>Hello World</Text>);\n")),Object(r.b)("p",null,"Will ",Object(r.b)("strong",{parentName:"p"},"find a match"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Matching a string:\nscreen.getByText('Hello World'); // full string match\nscreen.getByText('llo Worl', { exact: false }); // substring match\nscreen.getByText('hello world', { exact: false }); // ignore case-sensitivity\n\n// Matching a regex:\nscreen.getByText(/World/); // substring match\nscreen.getByText(/world/i); // substring match, ignore case\nscreen.getByText(/^hello world$/i); // full string match, ignore case-sensitivity\nscreen.getByText(/Hello W?oRlD/i); // advanced regex\n")),Object(r.b)("p",null,"Will ",Object(r.b)("strong",{parentName:"p"},"NOT find a match")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// substring does not match\nscreen.getByText('llo Worl');\n// full string does not match\nscreen.getByText('Goodbye World');\n\n// case-sensitive regex with different case\nscreen.getByText(/hello world/);\n")),Object(r.b)("h3",{id:"precision"},"Precision"),Object(r.b)("p",null,"Queries that take a ",Object(r.b)("inlineCode",{parentName:"p"},"TextMatch")," also accept an object as the final argument that can contain options that affect the precision of string matching:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"exact"),": Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"; matches full strings, case-sensitive. When false, matches substrings and is not case-sensitive.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"exact")," has no effect on regex argument."),Object(r.b)("li",{parentName:"ul"},"In most cases using a ",Object(r.b)("inlineCode",{parentName:"li"},"regex")," instead of a string gives you more control over fuzzy matching and should be preferred over ",Object(r.b)("inlineCode",{parentName:"li"},"{ exact: false }"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"normalizer"),": An optional function which overrides normalization behavior. See ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#normalization"}),"Normalization"),".")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"exact")," option defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," but if you want to search for a text slice or make text matching case-insensitive you can override it. That being said we advise you to use regex in more complex scenarios."),Object(r.b)("h3",{id:"normalization"},"Normalization"),Object(r.b)("p",null,"Before running any matching logic against text, it is automatically normalized. By default, normalization consists of trimming whitespace from the start and end of text, and collapsing multiple adjacent whitespace characters into a single space."),Object(r.b)("p",null,"If you want to prevent that normalization, or provide alternative normalization (e.g. to remove Unicode control characters), you can provide a ",Object(r.b)("inlineCode",{parentName:"p"},"normalizer")," function in the options object. This function will be given a string and is expected to return a normalized version of that string."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Specifying a value for ",Object(r.b)("inlineCode",{parentName:"p"},"normalizer")," replaces the built-in normalization, but you can call ",Object(r.b)("inlineCode",{parentName:"p"},"getDefaultNormalizer")," to obtain a built-in normalizer, either to adjust that normalization or to call it from your own normalizer."))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"getDefaultNormalizer")," take options object which allows the selection of behaviour:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"trim"),": Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),". Trims leading and trailing whitespace."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"collapseWhitespace"),": Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),". Collapses inner whitespace (newlines, tabs repeated spaces) into a single space.")),Object(r.b)("h4",{id:"normalization-examples"},"Normalization Examples"),Object(r.b)("p",null,"To perform a match against text without trimming:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"screen.getByText(node, 'text', {\n  normalizer: getDefaultNormalizer({ trim: false }),\n});\n")),Object(r.b)("p",null,"To override normalization to remove some Unicode characters whilst keeping some (but not all) of the built-in normalization behavior:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"screen.getByText(node, 'text', {\n  normalizer: (str) => getDefaultNormalizer({ trim: false })(str).replace(/[\\u200E-\\u200F]*/g, ''),\n});\n")),Object(r.b)("h2",{id:"unit-testing-helpers"},"Unit testing helpers"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Use sparingly and responsibly, escape hatches here")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"render")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@testing-library/react-native")," exposes additional queries that ",Object(r.b)("strong",{parentName:"p"},"should not be used in component integration testing"),", but some users (like component library creators) interested in unit testing some components may find helpful."),Object(r.b)("details",null,Object(r.b)("summary",null,"Queries helpful in unit testing"),Object(r.b)("p",null,"The interface is the same as for other queries, but we won't provide full names so that they're harder to find by search engines."),Object(r.b)("h3",{id:"unsafe_bytype"},Object(r.b)("inlineCode",{parentName:"h3"},"UNSAFE_ByType")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"UNSAFE_getByType, UNSAFE_getAllByType, UNSAFE_queryByType, UNSAFE_queryAllByType")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching a React component type."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This method has been marked unsafe, since it requires knowledge about implementation details of the component. Use responsibly."))),Object(r.b)("h3",{id:"unsafe_byprops"},Object(r.b)("inlineCode",{parentName:"h3"},"UNSAFE_ByProps")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"UNSAFE_getByProps, UNSAFE_getAllByProps, UNSAFE_queryByProps, UNSAFE_queryAllByProps")),Object(r.b)("p",null,"Returns a ",Object(r.b)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching props object."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This method has been marked unsafe, since it requires knowledge about implementation details of the component. Use responsibly.")))))}s.isMDXComponent=!0},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),s=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=s(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return a?i.a.createElement(u,c({ref:t},o,{components:a})):i.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<r;o++)l[o]=a[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);