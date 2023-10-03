import React, { Fragment } from "react";
import "./Modal.css";
import MyBackdrop from "./Backdrop/Backdrop";
export default function Modal(props) {
    const style = {
        width: props.width,
    };
    return (
        <Fragment>
            <MyBackdrop show={props.show} clicked={props.modalClosed} />
            {props.show ? props.children : null}
        </Fragment>
    );
}