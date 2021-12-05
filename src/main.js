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
    return(
        <div className='stories'>
            <Story url='assets/img/9gag.svg' nome='9gag'/>
            <Story url='assets/img/meowed.svg' nome='meowed'/>
            <Story url='assets/img/barked.svg' nome='barked'/>
            <Story url='assets/img/nathanwpylestrangeplanet.svg' nome='nathanwpylestrangeplanet'/>
            <Story url='assets/img/wawawicomics.svg' nome='wawawicomics'/>
            <Story url='assets/img/respondeai.svg' nome='respondeai'/>
            <Story url='assets/img/filomoderna.svg' nome='filomoderna'/>
            <Story url='assets/img/memeriagourmet.svg' nome='memeriagourmet'/>

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
    return(
        <div className='posts'>
            <Post user='meowed' userImage='assets/img/meowed.svg' image='assets/img/gato-telefone.svg' userCurtida='respondeai' userCurtidaImg='assets/img/respondeai.svg' nCurtidas ='101.523'/>
            <Post user='barked' userImage='assets/img/barked.svg' image='assets/img/dog.svg' userCurtida='adorable_animals' userCurtidaImg='assets/img/adorable_animals.svg' nCurtidas = '99.159'/>
        </div>
    )
}


function Post(props){
    return(
        <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.userImage} />
            meowed
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