

export default function Poster (props){
        const alt = `poster for ${props.title}`
        return(
            <div>
                <img src={props.url} alt={alt}/>
            </div>
        )
}