export default function Pesquisa() {
    function ola(){
        alert('')
    }
    return (
        <>
            <div>
                <label className="form-label">Informe um critério de pesquisa</label>
                <input className="" type="text" />
                <button className="btn btn-success" onClick={ola}>Pesquisar</button>
            </div>
        </>
    )
}