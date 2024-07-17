// const heading = React.createElement(
//     "h1", 
//     {"id":"heading"}, //props
//      "Hello World from React!" //children, which goes inside the h1 element
//      );
// console.log(heading) // This is a object

const parent = React.createElement(
    "div",
    {"id": "parent"},
    React.createElement(
        "div",
        {"id": "children"},[
            React.createElement(
                "h1",{}, "h1 using React"
            ),
            React.createElement(
                "h2",{}, "h2 using React"
            ),
            React.createElement(
                "h3",{}, "h3 using React"
            )
        ]
    )    

)

// If I need to create more than one sub child element (sibling) then you have to put it in array 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent) // this will replace whatever content in the root element