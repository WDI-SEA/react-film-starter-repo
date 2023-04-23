export default function Poster(props){
    
        const {url, alt} = props 
        return (
            <img src={url} alt={alt} />
        )
    }