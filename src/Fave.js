export default function Fave({onFaveToggle, isFave}){
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('handling the click')
        onFaveToggle()
    }
    const css =  isFave? 'remove_from_queue':'add_to_queue'
    return (

        <div onClick={handleClick} className={`film-row-fave ${css}`}>
            <p className="material-icons">add_to_queue</p>
        </div>
    )
}