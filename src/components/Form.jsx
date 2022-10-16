function Form(){

    function cadasUser(e){
        e.preventDefault()
        console.log("Hello World")
    }

    return(
        <div>
            <h1>Formulário de cadastro</h1>
            <form onSubmit={cadasUser}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form