export default function Mobile(){
    return(
    <div className="fundo-mobile">
        <Icone name='home'/>
        <Icone name='search-outline'/>
        <Icone name='add-circle-outline'/>
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