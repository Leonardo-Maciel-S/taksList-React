import React from "react";
import PropTypes from "prop-types"
import { FaPlus } from 'react-icons/fa'

import "./Form.css"

export default function Form({hundleSubmit, hundleInput, newTask}) {
    return (
        <form className="form" action="#" onSubmit={hundleSubmit}>
            <input
            onChange={hundleInput}
            type="text"
            value={newTask}
            ></input>
            <button type="submit">
            <FaPlus/>
            </button>
        </form>

    )
}

Form.propTypes = {
    hundleSubmit: PropTypes.func.isRequired,
    hundleInput: PropTypes.func.isRequired,
    newTask: PropTypes.string.isRequired,
}
