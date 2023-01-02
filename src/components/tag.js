
const Tag = ({className, data, color, size}) => {

	let colors = ["red","pink","blue","purple","teal","yellow","orange","brown","gray"];

	let style;

	switch (size) {
		case "xs": style = `h-fit text-xxs bg-zinc-100 text-neutral-800 px-1 py-0.5 rounded-lg notion-${color} notion-${color}_background ${className}`; break;
		case "sm": break;
		default: style = `h-fit text-xs bg-zinc-100 text-neutral-800 px-2 py-1 rounded-lg notion-${color} notion-${color}_background ${className}`;
	}

console.log(data)
	return (
			<span className={style}>
					{data}
				</span>
	)
}

export default Tag;
