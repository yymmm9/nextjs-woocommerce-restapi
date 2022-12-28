
const Tag = ({className, data, color}) => {

	let colors = ["red","pink","blue","purple","teal","yellow","orange","brown","gray"];

console.log(data)
	return (
			<span className={`h-fit text-xs bg-zinc-100 text-neutral-800 px-2 py-1 rounded-lg notion-${color} notion-${color}_background ${className}`}>
					{data}
				</span>
	)
}

export default Tag;
