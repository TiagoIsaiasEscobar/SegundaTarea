class Usuario {
    constructor(id,username,mail,password) {
        this.id=id;
        this.username=username;
        this.mail=mail;
        this.password=password;
    }
}
class Repositorio {
    constructor() {
        this.usuarios=[];
        this.contador=1;
    }
    traeTodosLosUsuarios() {
        return this.usuarios;
    }
    crearUsuario(usuario) {
        this.usuarios.push(usuario)
    }
}

//modelos//

const send = document.getElementById("send");
const repositorio = new Repositorio();

send.addEventListener("click", (event)=>{
    event.preventDefault();

    const user=document.getElementById("user").value.trim();
    const mail=document.getElementById("mail").value.trim();
    const password=document.getElementById("password").value.trim();

    if(user===""||mail===""||password===""){
        alert("Falta completar algun dato");
        return;
    }

    const nuevoUsuario = new Usuario(repositorio.contador++, user, mail, password);
    repositorio.crearUsuario(nuevoUsuario);

    const contenedor=document.getElementById("contenedor");
    contenedor.innerHTML="";

    const tarjeta = repositorio.traeTodosLosUsuarios().map(({id,username,mail,password})=>{

        const tarjeta = document.createElement("div");
        const titulo = document.createElement("h2");
        const email = document.createElement("h3");
        const contraseña = document.createElement("h3");

        tarjeta.classList.add("tarjeta")

        titulo.textContent = `Usuario: ${username}`;
        email.textContent = `Email: ${mail}`;
        contraseña.textContent = `Contraseña: ${password}`;

        
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(email);
        tarjeta.appendChild(contraseña)

        return tarjeta;
    });

    tarjeta.forEach(div => contenedor.appendChild(div))
    console.log(repositorio.traeTodosLosUsuarios());
});
