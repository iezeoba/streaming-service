import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

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
