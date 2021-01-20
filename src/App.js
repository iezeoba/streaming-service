// import { BrowserRouter, Route } from "react-router-dom"; //BrowerRouter no longer used//
import { Router, Route } from "react-router-dom"; //Router instead of BrowserRouter//
import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreateInitial";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";
import "./App.css";
import Header from "./components/Header";
import history from "./history";

const App = () => {
  return (
    <div className="ui container">
      {/* <BrowserRouter history={history}> we are using Router instead of BrowserRouter to enable us track our history manually*/}
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </div>
      </Router>
      {/* </BrowserRouter> */}
    </div>
  );
};
//use the <Switch> tag to wrap the <Routes> right after the <Header> tag//
//this resolves route conflict and renders the first matching path//
//for some reason, I didn't encounter the route issue//

//******************Example*************************************************//
// function Pageone() {
//   return (
//     <div>
//       Page One
//       {/* <a href="/pagetwo">Back to page two</a> */}
//       <Link to="/pagetwo">Back to page two </Link>
//     </div>
//   );
// }
// function Pagetwo() {
//   return (
//     <div>
//       Page Two
//       {/* <a href="/">Back to page one</a> */}
//       <Link to="/">Back to page one </Link>
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div>
//           <Route path="/" exact component={Pageone} />
//           <Route path="/pagetwo" component={Pagetwo} />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };
//***************************************************************************//

export default App;

//'exact' prop in Pageone route is shorthand of passing prop 'exact={true}//
//when the value of a prop is a boolean 'true', you can just pass the prop name alone//
//never use anchor tags <a></a> with react-router instead use 'Link'//
//this is bcos it refreshes the page, wipes data and makes a new network call//
//instead of 'BrowserRouter', we can also use 'HashRouter' or 'MemoryRouter'//
