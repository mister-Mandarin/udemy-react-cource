import React from "react";
import {Button, Htag} from "@/components";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h1'>Текст внутри</Htag>
            <Button type={'primary'}>Это кнопка 1</Button>
            <Button type={'simple'}>Это кнопка 2</Button>
        </div>
    );
}