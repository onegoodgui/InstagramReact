export default function Topo() {

    return (
        <div>
            <div className="navbar">
                <div className="container">
                    <Logo/>
                    <LogoMobile/>
                    <InstagramMobile/>
                    <Pesquisa/>
                    <Icones/>
                    <IconesMobile/>
                </div>
            </div>
        </div>
    );

}

function Logo(){
    return(
        <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    )
}
function LogoMobile(){
    return(
        <div className="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    )
}

function InstagramMobile(){
    return(
        <div className="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>
    )
}

function Pesquisa(){
    return(
    <div className="pesquisa">
        <input type="text" placeholder="Pesquisar" />
    </div>
    )
}

function Icones(){
    return(
    <div className="icones">
        <Icone name='paper-plane-outline'/>
        <Icone name='compass-outline'/>
        <Icone name='heart-outline'/>
        <Icone name='person-outline'/>
    </div>
    )
}

function Icone(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    )
}

function IconesMobile(){
    return(
        <div className="icones-mobile">
            <Icone name='paper-plane-outline'/>
        </div>
    )
}