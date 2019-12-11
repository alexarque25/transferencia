// JavaScript source code
import React from 'react'
import Select from 'react-select'
import AR_tableHeaderPendientes from './AR_TableHeaderTransferencia';

class AR_PendienteAsignacion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            objPendienteAsignacion: this.props.listPendienteAsignacion,
        }
    }

    render() {
        return (
            <div>
                <table className="table">
                    <AR_tableHeaderPendientes />
                    <tbody>
                        {
                            this.props.listPendienteAsignacion.map((recaudaciones, key) => {
                                return (
                                    <tr>
                                        <td className="td1">{key + 1}</td>
                                        <td className="td1">{recaudaciones.observacion}</td>
                                        <td className="td1">{recaudaciones.fecha}</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}
export default AR_PendienteAsignacion
