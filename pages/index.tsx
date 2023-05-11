import React from 'react';
import {Button, Htag, Ptag, Tag} from '@/components';

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h1'>Текст внутри</Htag>
            <Button types={'primary'} arrow={'down'}>Это кнопка 1</Button>
            <Button types={'simple'} arrow={'right'}>Это кнопка 2</Button>
            <Ptag>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым
            </Ptag>

            <Ptag size='small'>
                сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в
            </Ptag>

            <Ptag size={'big'}>
                программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую
            </Ptag>
            <Tag size={'big'} color={'red'} href={'https://ya.ru/'}>hh.ru</Tag>
            <Tag size={'small'} color={'primary'}>Подготовка макетов</Tag>
            <Tag size={'small'} color={'ghost'}>Дизайн</Tag>
            <Tag size={'big'} color={'gray'}>10</Tag>
            <Tag size={'small'} color={'green'}>-10 000 р</Tag>
        </div>
    );
}