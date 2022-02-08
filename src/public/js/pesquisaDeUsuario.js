function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url,false)

    request.send()

    return request.responseText
}

function pesquisarUsuario() {
    const userName = document.getElementById("name")
    const avatarUser = document.getElementById("avatar")

    try {
        
        const res = JSON.parse(fazGet(`http://localhost:3333/users/${userName.value}`))

        if (res.erro){
            console.log(Erro)
        } else {
        document.getElementById("nameUser").innerHTML = res.name

        avatarUser.src = res.avatar_url
        }
    } catch (error) {
        document.getElementById("nameUser").innerHTML = "Não foi possível achar o usuário, tente novamente."
        const url = "./img/erro.png"

        avatarUser.src = url

    }

    
    
}   