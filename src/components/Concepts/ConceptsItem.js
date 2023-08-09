

const ConceptsItem = (props) => {
    return (
        <li className="concept">
            <img src={props.imgUrl} alt={props.alt} />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </li>

    )
};

export default ConceptsItem;