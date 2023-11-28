export function Button({type = 'default', children, onClick}){
    let cssClasses = 'text-black'
    if (type != 'default' ){
      cssClasses = type == 'filled' ? 'hover:text-stone-100 bg-stone-100 hover:border-indigo-500/50 border-2 text-black rounded-3xl' : 'bg-indigo-500 hover:bg-slate-400/40 text-stone-100 px-8 rounded-2xl'}
    return (
        <button onClick={onClick} className={`py-3 px-4  font-serif text-2xl  ${cssClasses}`} >{children}</button>
    )
}