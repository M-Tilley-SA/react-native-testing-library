"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[430],{4782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={id:"api-queries",title:"Queries"},s=void 0,p={unversionedId:"api-queries",id:"api-queries",title:"Queries",description:"Table of contents:",source:"@site/docs/Queries.md",sourceDirName:".",slug:"/api-queries",permalink:"/react-native-testing-library/docs/api-queries",draft:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/docs/Queries.md",tags:[],version:"current",frontMatter:{id:"api-queries",title:"Queries"},sidebar:"docs",previous:{title:"API",permalink:"/react-native-testing-library/docs/api"},next:{title:"Migration to 11.0",permalink:"/react-native-testing-library/docs/migration-v11"}},c={},u=[{value:"Table of contents:",id:"table-of-contents",level:3},{value:"Variants",id:"variants",level:2},{value:"getBy",id:"getby",level:3},{value:"getAllBy",id:"getallby",level:3},{value:"queryBy",id:"queryby",level:3},{value:"queryAllBy",id:"queryallby",level:3},{value:"findBy",id:"findby",level:3},{value:"findAllBy",id:"findallby",level:3},{value:"Queries",id:"queries",level:2},{value:"Options",id:"options",level:3},{value:"<code>ByText</code>",id:"bytext",level:3},{value:"<code>ByPlaceholderText</code>",id:"byplaceholdertext",level:3},{value:"<code>ByDisplayValue</code>",id:"bydisplayvalue",level:3},{value:"<code>ByTestId</code>",id:"bytestid",level:3},{value:"<code>ByLabelText</code>",id:"bylabeltext",level:3},{value:"<code>ByHintText</code>, <code>ByA11yHint</code>, <code>ByAccessibilityHint</code>",id:"byhinttext-bya11yhint-byaccessibilityhint",level:3},{value:"<code>ByRole</code>",id:"byrole",level:3},{value:"Options",id:"options-1",level:4},{value:"<code>ByA11yState</code>, <code>ByAccessibilityState</code>",id:"bya11ystate-byaccessibilitystate",level:3},{value:"<code>ByA11Value</code>, <code>ByAccessibilityValue</code>",id:"bya11value-byaccessibilityvalue",level:3},{value:"TextMatch",id:"textmatch",level:2},{value:"Examples",id:"examples",level:3},{value:"Precision",id:"precision",level:3},{value:"Normalization",id:"normalization",level:3},{value:"Normalization Examples",id:"normalization-examples",level:4},{value:"Unit testing helpers",id:"unit-testing-helpers",level:2},{value:"<code>UNSAFE_ByType</code>",id:"unsafe_bytype",level:3},{value:"<code>UNSAFE_ByProps</code>",id:"unsafe_byprops",level:3}],m={toc:u};function y(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"table-of-contents"},"Table of contents:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#variants"},"Variants"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getby"},"getBy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getallby"},"getAllBy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#queryby"},"queryBy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#queryallby"},"queryAllBy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#findby"},"findBy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#findallby"},"findAllBy")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#queries"},"Queries"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#options"},"Options")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#bytext"},(0,l.kt)("inlineCode",{parentName:"a"},"ByText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#byplaceholdertext"},(0,l.kt)("inlineCode",{parentName:"a"},"ByPlaceholderText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#bydisplayvalue"},(0,l.kt)("inlineCode",{parentName:"a"},"ByDisplayValue"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#bytestid"},(0,l.kt)("inlineCode",{parentName:"a"},"ByTestId"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#bylabeltext"},(0,l.kt)("inlineCode",{parentName:"a"},"ByLabelText"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#byhinttext-bya11yhint-byaccessibilityhint"},(0,l.kt)("inlineCode",{parentName:"a"},"ByHintText"),", ",(0,l.kt)("inlineCode",{parentName:"a"},"ByA11yHint"),", ",(0,l.kt)("inlineCode",{parentName:"a"},"ByAccessibilityHint"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#byrole"},(0,l.kt)("inlineCode",{parentName:"a"},"ByRole")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#options-1"},"Options")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#bya11ystate-byaccessibilitystate"},(0,l.kt)("inlineCode",{parentName:"a"},"ByA11yState"),", ",(0,l.kt)("inlineCode",{parentName:"a"},"ByAccessibilityState"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#bya11value-byaccessibilityvalue"},(0,l.kt)("inlineCode",{parentName:"a"},"ByA11Value"),", ",(0,l.kt)("inlineCode",{parentName:"a"},"ByAccessibilityValue"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#textmatch"},"TextMatch"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#precision"},"Precision")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#normalization"},"Normalization"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#normalization-examples"},"Normalization Examples")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#unit-testing-helpers"},"Unit testing helpers"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#unsafe_bytype"},(0,l.kt)("inlineCode",{parentName:"a"},"UNSAFE_ByType"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#unsafe_byprops"},(0,l.kt)("inlineCode",{parentName:"a"},"UNSAFE_ByProps")))))),(0,l.kt)("h2",{id:"variants"},"Variants"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"getBy")," queries are shown by default in the ",(0,l.kt)("a",{parentName:"p",href:"#queries"},"query documentation"),"\nbelow.")),(0,l.kt)("h3",{id:"getby"},"getBy"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getBy*")," queries return the first matching node for a query, and throw an error if no elements match or if more than one match is found (use ",(0,l.kt)("inlineCode",{parentName:"p"},"getAllBy")," instead)."),(0,l.kt)("h3",{id:"getallby"},"getAllBy"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getAllBy*")," queries return an array of all matching nodes for a query, and throw an error if no elements match."),(0,l.kt)("h3",{id:"queryby"},"queryBy"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"queryBy*")," queries return the first matching node for a query, and return ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if no elements match. This is useful for asserting an element that is not present. This throws if more than one match is found (use ",(0,l.kt)("inlineCode",{parentName:"p"},"queryAllBy")," instead)."),(0,l.kt)("h3",{id:"queryallby"},"queryAllBy"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"queryAllBy*")," queries return an array of all matching nodes for a query, and return an empty array (",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),") if no elements match."),(0,l.kt)("h3",{id:"findby"},"findBy"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"findBy")," queries return a promise which resolves when a matching element is found. The promise is rejected if no elements match or if more than one match is found after a default timeout of 4500ms. If you need to find more than one element, then use ",(0,l.kt)("inlineCode",{parentName:"p"},"findAllBy"),"."),(0,l.kt)("h3",{id:"findallby"},"findAllBy"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"findAllBy")," queries return a promise which resolves to an array when any matching elements are found. The promise is rejected if no elements match after a default timeout of 4500ms."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"In order to properly use ",(0,l.kt)("inlineCode",{parentName:"p"},"findBy")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"findAllBy")," queries you need at least React >=16.9.0 (featuring async ",(0,l.kt)("inlineCode",{parentName:"p"},"act"),") or React Native >=0.61 (which comes with React >=16.9.0).")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"findBy")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"findAllBy")," queries accept optional ",(0,l.kt)("inlineCode",{parentName:"p"},"waitForOptions")," object argument which can contain ",(0,l.kt)("inlineCode",{parentName:"p"},"timeout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"interval")," properies which have the same meaning as respective options for ",(0,l.kt)("a",{parentName:"p",href:"api#waitfor"},(0,l.kt)("inlineCode",{parentName:"a"},"waitFor"))," function.")),(0,l.kt)("h2",{id:"queries"},"Queries"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: most methods like this one return a ",(0,l.kt)("a",{parentName:"em",href:"https://reactjs.org/docs/test-renderer.html#testinstance"},(0,l.kt)("inlineCode",{parentName:"a"},"ReactTestInstance"))," with following properties that you may be interested in:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type ReactTestInstance = {\n  type: string | Function;\n  props: { [propName: string]: any };\n  parent: null | ReactTestInstance;\n  children: Array<ReactTestInstance | string>;\n};\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("p",null,"Usually query first argument can be a ",(0,l.kt)("strong",{parentName:"p"},"string")," or a ",(0,l.kt)("strong",{parentName:"p"},"regex"),". Some queries accept optional argument which change string matching behaviour. See ",(0,l.kt)("a",{parentName:"p",href:"#textmatch"},"TextMatch")," for more info."),(0,l.kt)("h3",{id:"bytext"},(0,l.kt)("inlineCode",{parentName:"h3"},"ByText")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getByText, getAllByText, queryByText, queryAllByText, findByText, findAllByText")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getByText(\n  text: TextMatch,\n  options?: {\n    exact?: boolean;\n    normalizer?: (text: string) => string;\n  }\n): ReactTestInstance;\n")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching text \u2013 may be a string or regular expression."),(0,l.kt)("p",null,"This method will join ",(0,l.kt)("inlineCode",{parentName:"p"},"<Text>")," siblings to find matches, similarly to ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/text#containers"},"how React Native handles these components"),". This will allow for querying for strings that will be visually rendered together, but may be semantically separate React components."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByText('banana');\n")),(0,l.kt)("h3",{id:"byplaceholdertext"},(0,l.kt)("inlineCode",{parentName:"h3"},"ByPlaceholderText")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getByPlaceholderText, getAllByPlaceholderText, queryByPlaceholderText, queryAllByPlaceholderText, findByPlaceholderText, findAllByPlaceholderText")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getByPlaceholderText(\n  text: TextMatch,\n  options?: {\n    exact?: boolean;\n    normalizer?: (text: string) => string;\n  }\n): ReactTestInstance;\n")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," for a ",(0,l.kt)("inlineCode",{parentName:"p"},"TextInput")," with a matching placeholder \u2013 may be a string or regular expression."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByPlaceholderText('username');\n")),(0,l.kt)("h3",{id:"bydisplayvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"ByDisplayValue")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getByDisplayValue, getAllByDisplayValue, queryByDisplayValue, queryAllByDisplayValue, findByDisplayValue, findAllByDisplayValue")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getByDisplayValue(\n  value: TextMatch,\n  options?: {\n    exact?: boolean;\n    normalizer?: (text: string) => string;\n  }\n): ReactTestInstance;\n")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," for a ",(0,l.kt)("inlineCode",{parentName:"p"},"TextInput")," with a matching display value \u2013 may be a string or regular expression."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByDisplayValue('username');\n")),(0,l.kt)("h3",{id:"bytestid"},(0,l.kt)("inlineCode",{parentName:"h3"},"ByTestId")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getByTestId, getAllByTestId, queryByTestId, queryAllByTestId, findByTestId, findAllByTestId")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getByTestId(\n  testId: TextMatch,\n  options?: {\n    exact?: boolean;\n    normalizer?: (text: string) => string;\n  }\n): ReactTestInstance;\n")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",(0,l.kt)("inlineCode",{parentName:"p"},"testID")," prop. ",(0,l.kt)("inlineCode",{parentName:"p"},"testID")," \u2013 may be a string or a regular expression."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByTestId('unique-id');\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"In the spirit of ",(0,l.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/guiding-principles"},"the guiding principles"),", it is recommended to use this only after the other queries don't work for your use case. Using ",(0,l.kt)("inlineCode",{parentName:"p"},"testID")," attributes do not resemble how your software is used and should be avoided if possible. However, they are particularly useful for end-to-end testing on real devices, e.g. using Detox and it's an encouraged technique to use there. Learn more from the blog post ",(0,l.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change"},'"Making your UI tests resilient to change"'),".")),(0,l.kt)("h3",{id:"bylabeltext"},(0,l.kt)("inlineCode",{parentName:"h3"},"ByLabelText")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getByLabelText, getAllByLabelText, queryByLabelText, queryAllByLabelText, findByLabelText, findAllByLabelText")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getByLabelText(\n  text: TextMatch\n): ReactTestInstance;\n")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",(0,l.kt)("inlineCode",{parentName:"p"},"accessibilityLabel")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByLabelText('my-label');\n")),(0,l.kt)("h3",{id:"byhinttext-bya11yhint-byaccessibilityhint"},(0,l.kt)("inlineCode",{parentName:"h3"},"ByHintText"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"ByA11yHint"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"ByAccessibilityHint")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getByA11yHint, getAllByA11yHint, queryByA11yHint, queryAllByA11yHint, findByA11yHint, findAllByA11yHint\ngetByAccessibilityHint, getAllByAccessibilityHint, queryByAccessibilityHint, queryAllByAccessibilityHint, findByAccessibilityHint, findAllByAccessibilityHint\ngetByHintText, getAllByHintText, queryByHintText, queryAllByHintText, findByHintText, findAllByHintText")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getByHintText(\n  hint: TextMatch\n): ReactTestInstance;\n")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",(0,l.kt)("inlineCode",{parentName:"p"},"accessibilityHint")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByHintText('Plays a song');\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Please consult ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint"},"Apple guidelines on how ",(0,l.kt)("inlineCode",{parentName:"a"},"accessibilityHint")," should be used"),".")),(0,l.kt)("h3",{id:"byrole"},(0,l.kt)("inlineCode",{parentName:"h3"},"ByRole")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getByRole, getAllByRole, queryByRole, queryAllByRole, findByRole, findAllByRole")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getByRole(\n  role: TextMatch,\n  option?: {\n    name?: TextMatch\n  }\n): ReactTestInstance;\n")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",(0,l.kt)("inlineCode",{parentName:"p"},"accessibilityRole")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react-native';\n\nrender(<MyComponent />);\nconst element = screen.getByRole('button');\n")),(0,l.kt)("h4",{id:"options-1"},"Options"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"name"),": Finds an element with given ",(0,l.kt)("inlineCode",{parentName:"p"},"accessibilityRole")," and an accessible name (equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"byText")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"byLabelText")," query)."),(0,l.kt)("h3",{id:"bya11ystate-byaccessibilitystate"},(0,l.kt)("inlineCode",{parentName:"h3"},"ByA11yState"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"ByAccessibilityState")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getByA11yState, getAllByA11yState, queryByA11yState, queryAllByA11yState, findByA11yState, findAllByA11yState\ngetByAccessibilityState, getAllByAccessibilityState, queryByAccessibilityState, queryAllByAccessibilityState, findByAccessibilityState, findAllByAccessibilityState")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getByA11yState(\n  state: {\n    disabled?: boolean,\n    selected?: boolean,\n    checked?: boolean | 'mixed',\n    expanded?: boolean,\n    busy?: boolean,\n  }\n): ReactTestInstance;\n")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",(0,l.kt)("inlineCode",{parentName:"p"},"accessibilityState")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react-native';\n\nrender(<Component />);\nconst element = screen.getByA11yState({ disabled: true });\n")),(0,l.kt)("h3",{id:"bya11value-byaccessibilityvalue"},(0,l.kt)("inlineCode",{parentName:"h3"},"ByA11Value"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"ByAccessibilityValue")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"getByA11yValue, getAllByA11yValue, queryByA11yValue, queryAllByA11yValue, findByA11yValue, findAllByA11yValue\ngetByAccessibilityValue, getAllByAccessibilityValue, queryByAccessibilityValue, queryAllByAccessibilityValue, findByAccessibilityValue, findAllByAccessibilityValue")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"getByA11yValue(\n  value: {\n    min?: number;\n    max?: number;\n    now?: number;\n    text?: string;\n  }\n): ReactTestInstance;\n")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching ",(0,l.kt)("inlineCode",{parentName:"p"},"accessibilityValue")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { render, screen } from '@testing-library/react-native';\n\nrender(<Component />);\nconst element = screen.getByA11yValue({ min: 40 });\n")),(0,l.kt)("h2",{id:"textmatch"},"TextMatch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"type TextMatch = string | RegExp;\n")),(0,l.kt)("p",null,"Most of the query APIs take a ",(0,l.kt)("inlineCode",{parentName:"p"},"TextMatch")," as an argument, which means the argument can be either a ",(0,l.kt)("em",{parentName:"p"},"string")," or ",(0,l.kt)("em",{parentName:"p"},"regex"),"."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Given the following render:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"render(<Text>Hello World</Text>);\n")),(0,l.kt)("p",null,"Will ",(0,l.kt)("strong",{parentName:"p"},"find a match"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Matching a string:\nscreen.getByText('Hello World'); // full string match\nscreen.getByText('llo Worl', { exact: false }); // substring match\nscreen.getByText('hello world', { exact: false }); // ignore case-sensitivity\n\n// Matching a regex:\nscreen.getByText(/World/); // substring match\nscreen.getByText(/world/i); // substring match, ignore case\nscreen.getByText(/^hello world$/i); // full string match, ignore case-sensitivity\nscreen.getByText(/Hello W?oRlD/i); // advanced regex\n")),(0,l.kt)("p",null,"Will ",(0,l.kt)("strong",{parentName:"p"},"NOT find a match")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// substring does not match\nscreen.getByText('llo Worl');\n// full string does not match\nscreen.getByText('Goodbye World');\n\n// case-sensitive regex with different case\nscreen.getByText(/hello world/);\n")),(0,l.kt)("h3",{id:"precision"},"Precision"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type TextMatchOptions = {\n  exact?: boolean;\n  normalizer?: (text: string) => string;\n};\n")),(0,l.kt)("p",null,"Queries that take a ",(0,l.kt)("inlineCode",{parentName:"p"},"TextMatch")," also accept an object as the second argument that can contain options that affect the precision of string matching:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exact"),": Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"; matches full strings, case-sensitive. When false, matches substrings and is not case-sensitive.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exact")," has no effect on regex argument."),(0,l.kt)("li",{parentName:"ul"},"In most cases using a ",(0,l.kt)("inlineCode",{parentName:"li"},"regex")," instead of a string gives you more control over fuzzy matching and should be preferred over ",(0,l.kt)("inlineCode",{parentName:"li"},"{ exact: false }"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"normalizer"),": An optional function which overrides normalization behavior. See ",(0,l.kt)("a",{parentName:"li",href:"#normalization"},"Normalization"),".")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"exact")," option defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," but if you want to search for a text slice or make text matching case-insensitive you can override it. That being said we advise you to use regex in more complex scenarios."),(0,l.kt)("h3",{id:"normalization"},"Normalization"),(0,l.kt)("p",null,"Before running any matching logic against text, it is automatically normalized. By default, normalization consists of trimming whitespace from the start and end of text, and collapsing multiple adjacent whitespace characters into a single space."),(0,l.kt)("p",null,"If you want to prevent that normalization, or provide alternative normalization (e.g. to remove Unicode control characters), you can provide a ",(0,l.kt)("inlineCode",{parentName:"p"},"normalizer")," function in the options object. This function will be given a string and is expected to return a normalized version of that string."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Specifying a value for ",(0,l.kt)("inlineCode",{parentName:"p"},"normalizer")," replaces the built-in normalization, but you can call ",(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultNormalizer")," to obtain a built-in normalizer, either to adjust that normalization or to call it from your own normalizer.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultNormalizer")," take options object which allows the selection of behaviour:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"trim"),": Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),". Trims leading and trailing whitespace."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"collapseWhitespace"),": Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),". Collapses inner whitespace (newlines, tabs repeated spaces) into a single space.")),(0,l.kt)("h4",{id:"normalization-examples"},"Normalization Examples"),(0,l.kt)("p",null,"To perform a match against text without trimming:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"screen.getByText(node, 'text', {\n  normalizer: getDefaultNormalizer({ trim: false }),\n});\n")),(0,l.kt)("p",null,"To override normalization to remove some Unicode characters whilst keeping some (but not all) of the built-in normalization behavior:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"screen.getByText(node, 'text', {\n  normalizer: (str) =>\n    getDefaultNormalizer({ trim: false })(str).replace(/[\\u200E-\\u200F]*/g, ''),\n});\n")),(0,l.kt)("h2",{id:"unit-testing-helpers"},"Unit testing helpers"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Use sparingly and responsibly, escape hatches here")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"render")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"@testing-library/react-native")," exposes additional queries that ",(0,l.kt)("strong",{parentName:"p"},"should not be used in component integration testing"),", but some users (like component library creators) interested in unit testing some components may find helpful."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Queries helpful in unit testing"),(0,l.kt)("p",null,"The interface is the same as for other queries, but we won't provide full names so that they're harder to find by search engines."),(0,l.kt)("h3",{id:"unsafe_bytype"},(0,l.kt)("inlineCode",{parentName:"h3"},"UNSAFE_ByType")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"UNSAFE_getByType, UNSAFE_getAllByType, UNSAFE_queryByType, UNSAFE_queryAllByType")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching a React component type."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This method has been marked unsafe, since it requires knowledge about implementation details of the component. Use responsibly.")),(0,l.kt)("h3",{id:"unsafe_byprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"UNSAFE_ByProps")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"UNSAFE_getByProps, UNSAFE_getAllByProps, UNSAFE_queryByProps, UNSAFE_queryAllByProps")),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactTestInstance")," with matching props object."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This method has been marked unsafe, since it requires knowledge about implementation details of the component. Use responsibly."))))}y.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),y=i,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||l;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);