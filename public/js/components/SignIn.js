import React, {Component} from 'react';

export default class SigninContent extends Component {

  signIn() {
    let nickname = this.nickname.value;
    let sno = this.sno.value;
    let password = this.password.value;
    let password2 = this.password2.value;

    if (!(password === password2)) {
      this.tip.innerHTML = '密码不一致,请重新输入';
      setTimeout(()=> {
        this.tip.innerHTML = '';
      }, 3000);
    } else if (!(sno && password && password2 && nickname)) {
      this.tip.innerHTML = '未完整输入,请重新输入';
      setTimeout(()=> {
        this.tip.innerHTML = '';
      }, 3000);
    } else {
      this.props.submitSignin(sno, password, nickname);
    }
  }

  turnPage() {
    if (this.props.signIn === true) {
      document.cookie = 'nickname=' + this.nickname.value;
      document.cookie = 'sno=' + this.sno.value;
      window.location.href = '/';
    }
    else if (this.props.signIn === false) {
      this.tip.innerHTML = '该账号已存在请重新注册';
      setTimeout(()=> {
        this.tip.innerHTML = '';
      }, 3000);
    }
  }

  verifySno() {
    let sno = this.sno.value;
    if (!sno.match(/^\d{8}$/)) {
      this.tip.innerHTML = '请输入正确的学号';
      setTimeout(()=> {
        this.tip.innerHTML = '';
      }, 2000);

    }
  }

  render() {
    return (
      <div className="register-content">
        <h1>Sign Up, It's Free!</h1>

        <div className="column-left">
          <label>StudentNumber</label><br/>
          <input type="text" ref={(c) => this.sno = c} onBlur={this.verifySno.bind(this)}/>
          <br/>
          <label>Password</label><br/>
          <input type="password" ref={(c) => this.password = c}/>
          <div id="tip" ref={(c) => this.tip = c}></div>
        </div>
        <div className="column-right">
          <label>Nickname</label><br/>
          <input type="text" ref={(c) => this.nickname = c}/>
          <br/>
          <label>Password Again</label><br/>
          <input type="password" ref={(c) => this.password2 = c}/>

          <button type="submit" onClick={this.signIn.bind(this)}>Create Free Account</button>
          {this.turnPage()}
        </div>
      </div>
    );
  }
}


