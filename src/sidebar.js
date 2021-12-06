export default function Sidebar(){

    const usuario = [{username:'catanacomics', name:'Catana'}]
 return(
     <div className='sidebar'>
         {usuario.map((user)=>(<Usuario username={user.username} name={user.name} />))}
         <Sugestoes/>
     </div>


 )
}

function Usuario(props){
    return(
        <div className="usuario">
            <img src={`assets/img/${props.username}.svg`}/>
            <div className="texto">
              <strong>{props.username}</strong>
              {props.name}
            </div>
        </div>
    )
}

function Sugestoes(){

    const sugestoes = [{username:'bad.vibes.memes', razao:'Segue você'},
                       {username:'chibirdart', razao:'Segue você'},
                       {username:'razoesparaacreditar', razao:'Novo no Instagram'},
                       {username:'adorable_animals', razao:'Segue você'},
                       {username:'smallcutecats', razao:'Segue você'}]
                       
    return(
        <div className='sugestoes'>
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao)=>(<Sugestao username={sugestao.username} razao={sugestao.razao}/>))}
            <Links/>
            <Copyright/>
        </div>
    )
}

function Sugestao(props){
    return(
        <div className="sugestao">
            <div className="usuario">
            <img src={`assets/img/${props.username}.svg`} />
            <div className="texto">
                <div className="nome">{props.username}</div>
                <div className="razao">{props.razao}</div>
            </div>
            </div>

            <div className="seguir">Seguir</div>
      </div>
    )
}

function Links(){
    return(
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function Copyright(){
    return(
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}