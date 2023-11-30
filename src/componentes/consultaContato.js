import Pesquisa from "./pesquisa";

export default function ConsultaContato() {
    const contatos = [
        { id: 1, nome: 'maria', email: 'maria@gmail.com' },
        { id: 2, nome: 'josé', email: 'jose@gmail.com' }

    ]
    return (
        <>
            <h2 className="text-center">Consultar Contato</h2>
            <hr></hr>
            <Pesquisa />
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contatos.map(ct =>
                            <tr>
                                <td> {ct.id}</td>
                                <td> {ct.nome}</td>
                                <td> {ct.email}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </>
    )
}