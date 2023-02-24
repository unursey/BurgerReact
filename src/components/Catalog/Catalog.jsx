import style from "./Catalog.module.css";
import { Container } from "../Container/Container";
import { Order } from "../Order/Order";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct";
import { useDispatch, useSelector } from "react-redux";
import { productRequestAsync } from "../../store/product/productSlice";
import { useEffect } from "react";

export const Catalog = () => {
  const { products } = useSelector(state => state.product);
  const { category, activeCategory } = useSelector(state => state.category);
  const dispatch = useDispatch()

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }  
  }, [category, activeCategory])

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />

        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>

          <div className={style.wrap_list}>
            <ul className={style.list}>
              {products.length ? (products.map((item) => (
                <li key={item.id} className={style.item}>
                    <CatalogProduct item={item}/>
                </li>) 
              )) : (<li>Здесь пока пусто.</li>)
            }
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
