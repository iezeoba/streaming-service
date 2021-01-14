//here we are managing state with react//
import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "461058005540-1g9h00abkrv5tue3ese6ivp7a353uvm1.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton = () => {
    return this.state.isSignedIn === null ? null : this.state.isSignedIn ? (
      <button className="ui red google button" onClick={this.onSignOutClick}>
        <i className="google icon" />
        Sign Out
      </button>
    ) : (
      <button className="ui red google button" onClick={this.onSignInClick}>
        <i className="google icon" />
        Sign in with Google
      </button>
    );
  };
  // ***using 'if' 'else' statement***
  //   renderAuthButton() {
  //     if (this.state.isSignedIn === null) {
  //       return <div>User Status Unknown</div>;
  //     } else if (this.state.isSignedIn) {
  //       return <div>User Is Signed In</div>;
  //     } else {
  //       return <div>User Is Signed Out</div>;
  //     }
  //   }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
//window.gapi.load is called with two arguments, a string and a callback function//
//the callback function returns 'window.gapi.client.init' function//
//an object with properties 'clientId' and 'scope' are passed to the init() function//
