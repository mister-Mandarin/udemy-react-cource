import React from "react";
import {Button, Htag} from "@/components";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h1'>Текст внутри</Htag>
            <Button types={'primary'} arrow={"down"}>Это кнопка 1</Button>
            <Button types={'simple'} arrow={"right"}>Это кнопка 2</Button>
        </div>
    );
}