import React, { Component, createRef } from "react";
import Button from '@material-ui/core/Button';

export default function Home() {
    const refresh = () => window.location.reload(true)
    return(
        <Button
              style={{ margin: "20px", color: "grey" }}
              color="secondary"
              variant="contained"
              onClick={refresh}
            >
              {" "}
              Help Button{" "}
        </Button>
    )
}