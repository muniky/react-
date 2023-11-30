import Pesquisa from "./pesquisa";

export default function ConsultaContato(){
return(
<>
<h2 className="text-center">Consultar Contato</h2>
<hr></hr>
<Pesquisa/>
<table className="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
</>
)
}