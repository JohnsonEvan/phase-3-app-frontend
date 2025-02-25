import React from "react";

function Patient({ patient }) {


    function handleDeleteClick(event) {
        // TODO: Delete the patient.
    }

    return(
        <tr className="">
            <td><button onClick={handleDeleteClick}>Delete</button></td>
            <td>{patient.id}</td>
            <td>{patient.patient_name}</td>
            <td>{patient.patient_diagnosis}</td>
            <td>{patient.age}</td>
            <td>{patient.patient_floor_id}</td>
            <td>{patient.therapist.name}</td>
        </tr>
    )
}

export default Patient;