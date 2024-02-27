import React from "react";
import { useParams } from "react-router-dom";

import Button from "./Button";

const TaskDetails = () => {
    const params = useParams();

    console.log(params);

    return(
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-datails-container">
                <h2>{params.TaskDetails}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero accusamus ab quisquam debitis excepturi architecto, dignissimos similique? Illum, deserunt tempora veritatis molestias eligendi quaerat voluptate reiciendis dicta, distinctio ab excepturi.</p>
            </div>
        </>
    );
}

export default TaskDetails;