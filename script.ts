class Cabecalho extends HTMLElement{
    constructor(){
        super();

        this.innerHTML = `
        <div id="login">

        <form class="card">

            <div class="card-header">

                <div>
                    <img class="logo" src="./images/sesi-logo.png" alt="">
                </div>

               

            </div>

            <div class="card-content">

                <div class="card-content-area">

                    <label for="usuario">Email</label>

                    <input type="text" id="usuario" autocomplete="off">

                </div>

                <div class="card-content-area">

                    <label for="password">Senha</label>

                    <input type="password" id="password" autocomplete="off">

                </div>

            </div>

            <div class="card-footer">

                <input type="submit" value="login" class="submit">

                <a href="#" class="recuperar_senha">Esqueceu a senha?</a>
                <a href="#">Crie uma conta</a>

            </div>

        </form>

    </div>`
    }
}

customElements.define('cabecalho-sesi', Cabecalho)