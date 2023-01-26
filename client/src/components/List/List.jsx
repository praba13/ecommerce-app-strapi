import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './List.scss';
const List = ({ subCats, maxPrice, sort, catId }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}`
    );

    /*
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Product 1",
            isNew: true,
            oldPrice: 100,
            price: 50
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Product 3",
            isNew: false,
            oldPrice: 200,
            price: 150
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1549202/pexels-photo-1549202.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Product 3",
            isNew: true,
            oldPrice: 200,
            price: 150
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Product 4",
            isNew: false,
            oldPrice: 20,
            price: 15
        }
    ];
    */
    return (
        <div className='list'>
            {loading ? "loading.." : data?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    );
};

export default List;