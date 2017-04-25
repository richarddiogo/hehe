import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire,AuthProviders,AuthMethods } from "angularfire2";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login { 

  autenticacao: boolean;
  email: string;
  senha: string;

  constructor(public af: AngularFire,public navCtrl: NavController) { 
    this.af.auth.subscribe( estado => {
       this.autenticacao = estado !== null;
    }); 
  }

  cadastrar(){ 
    let dados = { 'email': this.email, 'password': this.senha };
    this.af.auth.createUser(dados).then(() => {
       console.log(this.af.auth); // USUÁRIO CRIADO
    }, erro => {
       console.log("Erro no cadastro"); // TRATAR O ERRO
    });
  }

  login(){ 
	  	this.af.auth.login({
	     email: this.email,
	     password: this.senha,
	   },
	   {
	     provider: AuthProviders.Password,
	     method: AuthMethods.Password,
	   }); 
  }

  logout(){ this.af.auth.logout(); }
}