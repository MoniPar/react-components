import ConceptsItem from "./ConceptsItem";

const Concepts = (props) => {
    return (
        <ul id="concepts">
            <ConceptsItem
                title={props.data[0].title} 
                alt={props.data[0].alt} 
                imgUrl={props.data[0].image} 
                desc={props.data[0].description}
            />
            <ConceptsItem
                title={props.data[1].title}
                alt={props.data[1].alt}
                imgUrl={props.data[1].image}
                desc={props.data[1].description}
            />
            <ConceptsItem
                title={props.data[2].title}
                alt={props.data[2].alt}
                imgUrl={props.data[2].image}
                desc={props.data[2].description}
            />
        </ul>
    )
};

export default Concepts;