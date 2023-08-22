function Card(props){
return(
<div className="border border-2 rounded shadow-sm p-5 text-start">
<p>{props.cardId}</p>
<p>{props.cardName}</p>
<p>{props.cardInstitute}</p>
<p>{props.cardActive}</p>
</div>
);
}
export default Card;