import React, {Component} from 'react';

export default class LoginContent extends Component {
  logIn() {
    let inputSno = this.inputSno.value;
    let inputPassword = this.inputPassword.value;
    if (this.inputSno.value == '' || this.inputPassword.value == '') {
      this.loginTip.innerHTML = '信息不完整，请补充！';
      setTimeout(function () {
        this.loginTip.innerHTML = '';
      }, 1000);
    } else {
      this.props.submitLogin(inputSno, inputPassword);
    }
  }

  setTip() {
    let isMatch = this.props.isMatch;

    if (isMatch == 'true') {
      document.cookie = 'nickname=' + this.props.userMes.nickname;
      document.cookie = 'sno=' + this.props.userMes.sno;
      window.location.href = '/';
    }
    if (isMatch == 'false') {
      this.loginTip.innerHTML = '用户名或密码错误';
      setTimeout(function () {
        this.props.fixLoginFlag();
        this.loginTip.innerHTML = '';
      }.bind(this), 2000);
    }
  }

  render() {
    return (
      <div className="login-content">
        <h1>Student Login</h1>

        <form id="login-form">
          <label>StudentNumber</label><br/>
          <input type="text" ref={(c)=>this.inputSno = c}/>
          <br/>
          <label>Password</label><br/>
          <input type="password" ref={(c)=>this.inputPassword = c}/>

          <p className="forgot-password-callout"><a href="#">I forgot my login!</a></p>
          <p className="submit-login"><a onClick={this.logIn.bind(this)}>Log In</a></p>

          <div id="loginTip" ref={(c) => this.loginTip = c}></div>
          {this.setTip()}
        </form>
      </div>
    );
  }
}
