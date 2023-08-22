function Select(props){
return(
    <div>
         <select className="p-2">
        {props.options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
)

}
export default Select;