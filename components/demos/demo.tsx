import React from "react";
import "./style.css";
import Input from "../input/Input";
import MenuPopupState from "../Dropdown";
import DefaultButton from "../buttons/DefaultButton";

export function Demo() {
    
    const[text, setText] = React.useState("Login")

   function handleButtonClick() {
       alert("funcionou")
       setText("Carregando")
       setTimeout(() => {
        alert("FUNCIONOU")
           setText("Sucesso")
           
       }, 2000);

    }
  return (
    <div>
      <h2>Cadastro</h2>
      <div className="container">
        <div>
          <p className="description">Digite seu nome: </p>
          <input className="input-name" />
        </div>
        <div>
          <p className="description">Digite seu email: </p>
          <input className="input-name" />
        </div>

        <div>
          <Input title={"Insira seu numero de telefone:"} length={11} />
        </div>
        <DefaultButton title="login" onClick={handleButtonClick}> {text}</DefaultButton>
      </div>
      <MenuPopupState />
    </div>
  );
}

/** 
 * 
 * 
 * 
 *     <div className="first-column">
            <h2 className="title">cadastre-se</h2>
            <p className="description">entre em contato</p>
            <p className="description">entre com seus dados</p>
            <button>entre</button>
        </div>
        <div className="second-column">
            <h2>crie uma conta</h2>
            <div className="social-media">
                <ul>
                    <li>
                        <a href="#">facebook</a>
                        <a href="#">facebook</a>
                        <a href="#">facebook</a>
                    </li>
                </ul>
            </div>
            <p className="description">
                entre novamente
            </p>
            <form action="" className="form">
                <div><input type="text" className="login"/>um</div>
                <div><input type="text" className="login"/>dois</div>
            </form>
        </div>
*/
