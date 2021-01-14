//here we are using redux to manage state//
import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
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
          this.onAuthChange(this.auth.isSignedIn.get());
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

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton = () => {
    return this.props.isSignedIn === null ? null : this.props.isSignedIn ? (
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
  //     if (this.props.isSignedIn === null) {
  //       return <div>User Status Unknown</div>;
  //     } else if (this.props.isSignedIn) {
  //       return <div>User Is Signed In</div>;
  //     } else {
  //       return <div>User Is Signed Out</div>;
  //     }
  //   }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
//window.gapi.load is called with two arguments, a string and a callback function//
//the callback function returns 'window.gapi.client.init' function//
//an object with properties 'clientId' and 'scope' are passed to the init() function//
