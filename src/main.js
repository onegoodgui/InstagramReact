import Sidebar from "./sidebar.js"

export default function Corpo(){
    return(
        <div className='corpo'>
            <div className='esquerda'>
                <Stories/>
                <Posts/>
            </div>
            <Sidebar/>
        </div>
    )
}



function Stories(){
  let stories = 
  [{url:'assets/img/9gag.svg',nome:'9gag'},
   {url: 'assets/img/meowed.svg', nome: 'meowed'},
   {url: 'assets/img/barked.svg', nome: 'barked'},
   {url: 'assets/img/nathanwpylestrangeplanet.svg', nome: 'nathanwpylestrangeplanet'},
   {url: 'assets/img/wawawicomics.svg', nome: 'wawawicomics'},
   {url: 'assets/img/respondeai.svg', nome: 'respondeai'},
   {url: 'assets/img/filomoderna.svg', nome:'filomoderna'},
   {url: 'assets/img/memeriagourmet.svg', nome: 'memeriagourmet'}
  ]


    return(
        <div className='stories'>
          {stories.map((story) => (<Story url={story.url} nome={story.nome} />))}

            <Setinha/>
            <Sidebar/>
        </div>
    )
}

function Story(props){

    return(
        <div className='story'>
            <div className="imagem">
                <img src={props.url} />
            </div>
            <div className="usuario">
                {props.nome}
            </div>
        </div>
    )
}

function Setinha(){
    return(
        <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    )
}

function Posts(){
  let posts = [
    {user:'barked', userImage:'assets/img/barked.svg', image:'assets/img/dog.svg', userCurtida:'adorable_animals', userCurtidaImg:'assets/img/adorable_animals.svg', nCurtidas:'99.159'},
    {user:'meowed', userImage:'assets/img/meowed.svg', image:'assets/img/gato-telefone.svg', userCurtida:'respondeai', userCurtidaImg:'assets/img/respondeai.svg', nCurtidas:'101.523'}
  ]

    return(
        <div className='posts'>
          {posts.map((post) => (<Post user={post.user} userImage={post.userImage} image={post.image} userCurtida={post.userCurtida} userCurtidaImg={post.userCurtidaImg} nCurtidas={post.nCurtidas}/>))}
        </div>
    )
}


function Post(props){
    return(
        <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.userImage} />
            {props.user}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src={props.image} />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.userCurtidaImg} />
            <div className="texto">
              Curtido por <strong>{props.userCurtida}</strong> e <strong>outras {props.nCurtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}