function Input(props) {
    return (
        <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props}//faço o spreed de props pra refletir automaticamente oqque eu jogar aqui
        />
    );
}

export default Input;