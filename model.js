import image    from './Картинки/лого.jpg'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from "./classes/blocks";

const text = `
Повний перелік товарів Ви можете побачити на нашому сайті натиснувши посилання: <a href="https://sport-hub.com.ua/" target="_blank">Sport-Hub</a>. Будемо раді бачити Вас серед наших клієнтів!
`

export const model = [
    new TitleBlock  ('Зареєструйся та отримай знижку -15%',
    {tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #000000, #696969)',
            color: '#DCDCDC',
            padding: '1.5rem',
            'text-align': 'center'
            }
    }),
    new ImageBlock( image, {
        styles: {
            background: 'bleck',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width:'1000px',
            height:'auto',
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock( [
        'Продаж тільки сертифікованої продукції від всіх представлених в магазині брендів.',
        'Гнучка система знижок і подарунків для наших постійних клієнтів.',
        'Безкоштовна доставка при замовленні від 2999грн.'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #D3D3D3, #DCDCDC)',
            padding: '2rem',
            color: '000000',
            'font-weight': 'bold'
        }
        }),
    new TextBlock( text,{
        styles: {
            background: 'linear-gradient(to right, #000000, #696969)',
            padding: '1rem',
            color: '#DCDCDC',
            'font-weight': 'bold',
            'text-align': 'center'
        }
        }),
]

