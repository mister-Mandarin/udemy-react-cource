import React from 'react';
import {withLayout} from '@/layout/Layout';
import axios from 'axios';
import {MenuItem} from '@/interface/menu.interface';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import {ProductModel} from '@/interface/product.interface';
import {PageModel} from '@/interface/page.interface';

const firstCategory = 0;

function Course({menu, page, products}: CourseProps): JSX.Element {
    return (
        <>
            {products.length}
        </>
    );
}

export default withLayout(Course);

// Получаем статичные пути
export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
// что же это за хуйня??!!!
// В результате создан массив путей paths, содержащий строки путей к страницам курсов
        // P.S. час искал ошибку в написании и оказалось что я написал path, а надо paths. Зато сам нашел!
        paths: menu.flatMap(menu => menu.pages.map(pages => '/courses/' + pages.alias)),

// JSON ответ выглядит примерно так:
// [{
//     "_id": {
//         "secondCategory": "Аналитика"
//     },
//     "pages": [{
//         "alias": "financial-analytics", !!! вытащили эти данные в alias а перед ним добавили путь /courses/
//         "title": "Курсы по финансовой аналитике",
//         "_id": "6068cc76d084b85d3f1abf56",
//         "category": "Финансовая аналитика"
//     }, { .....
//
        fallback: true
    };
};

// запрос на получение пунктов меню
// GetStaticPropsContext - получаем данные извне для формирования url
export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext) => {

    // если нет входящих параметров то возвращаем 404
    if (!params) {
        return {
            notFound: true
        };
    }
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    const {data: page} = await axios.get<PageModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
    );
    const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
            category: page.category,
            limit: 10
        }
    );
    return {
        props: {
            products,
            page,
            menu,
            firstCategory
        }
    };
};

// В этой папке должны находиться только компоненты страниц
// поэтому типизируем возвращаемые данные с POST запроса тут, а не создаем отдельный файл

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number,
    page: PageModel[],
    products: ProductModel[]
}