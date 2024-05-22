const conteudo = document.getElementById('conteudo-seg');
const meuperfil = document.getElementById('perfil');

        async function fetchData(username = "cavilix") {
            await fetch(`https://api.github.com/users/${username}`)
                .then((response) => response.json())
                .then(data => {
                    meuperfil.innerHTML = `
                        <div class="image">
                            <img src="${data.avatar_url}" height="400" width="400" alt="">
                        </div>
                        <div class="bio">
                            <p class="bio-nome">${data.name}</p>
                            <p class="bio2">${data.bio}</p>
                            <div class="btns">
                                <p class="curriculo">Download Currículo</p>
                                <p class="contato">Contato</p>
                            </div>
                        </div>
                    `;
                });
        }

        async function mostrarSeguidores(username = "cavilix") {
            await fetch(`https://api.github.com/users/${username}/followers`)
                .then((response) => response.json())
                .then((data) => {
                    conteudo.innerHTML = ""; 
                    data.map((item) => {
                        conteudo.innerHTML += `
                            <div class="seguidor">   
                                <img onclick="troca('${item.login}')" src="${item.avatar_url}" height="266" width="266" alt="">
                                <p class="nome-seg">${item.login}</p>
                            </div>
                        `;
                    });
                });
        }

        async function troca(seguidor) {
            await fetchData(seguidor);
            await mostrarSeguidores(seguidor);
        }

        mostrarSeguidores();
        fetchData();