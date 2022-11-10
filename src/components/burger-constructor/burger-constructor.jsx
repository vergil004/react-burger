import React, { useState, useContext, useMemo } from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "@/components/modal/modal";
import { OrderDetails } from "@/components/order-details/order-details";
import constructorStyles from "./burger-constructor.module.css";
import {
  addBunToConstructor,
  addIngredientToConstructor,
} from "@/services/actions-creators/constructor-list";
import { ChosenIngredientDataContext } from "@/utils/context";
import { sendOrderData } from "@/utils/burger-api";

export const BurgerConstructor = React.memo(function BurgerConstructor() {
  const { bun, ingredients } = useSelector((state) => {
    return state.constructorIngredients;
  });

  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState({});
  const [isDisable, setDisable] = useState(false);

  const dispatch = useDispatch();

  const total = useMemo(() => {
    const bunSum = bun === null ? 0 : bun.price * 2;
    return ingredients.reduce((sum, item) => (sum += item.price), 0) + bunSum;
  }, [ingredients, bun]);

  // const idsList = useMemo(() => {
  //   return [bun._id, ...ingredients.map((item) => item._id), bun._id];
  // }, [ingredients, bun]);

  // const fetchOrder = async () => {
  //   await sendOrderData(idsList).then((data) => {
  //     setOrder(data);
  //     setShowModal(true);
  //     setDisable(false);
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    setDisable(true);
    // fetchOrder();
  };

  const addIngredient = (item) => {
    if (item.type === "bun") {
      dispatch(addBunToConstructor(item));
    } else {
      dispatch(addIngredientToConstructor(item));
    }
  };

  const [{ isHover }, drop] = useDrop(() => ({
    accept: "ingredient",
    drop(item) {
      addIngredient(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  }));

  const formStyles = isHover
    ? constructorStyles.burgerConstructor__hover
    : constructorStyles.burgerConstructor;

  return (
    <>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <OrderDetails order={order} />
        </Modal>
      )}
      <form
        ref={drop}
        onSubmit={submitHandler}
        className={`${formStyles} pt-15 pl-4`}
      >
        {bun === null ? (
          <div className={constructorStyles.burgerConstructor__top}>{bun}</div>
        ) : (
          <div className="pl-8">
            <ConstructorElement
              type="top"
              isLocked={true}
              price={bun.price}
              text={`${bun.name} (верх)`}
              thumbnail={bun.image}
            />
          </div>
        )}
        {ingredients.length === 0 ? (
          <div className={constructorStyles.burgerConstructor__middle}></div>
        ) : (
          <ul
            className={`${constructorStyles.burgerConstructor__list} pt-4 pb-4`}
          >
            {ingredients.map((item, index) => (
              <li
                className={constructorStyles.burgerConstructor__item}
                key={index}
              >
                <div className="pr-2">
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement
                  isLocked={false}
                  price={item.price}
                  text={item.name}
                  thumbnail={item.image}
                />
              </li>
            ))}
          </ul>
        )}
        {bun === null ? (
          <div className={constructorStyles.burgerConstructor__bottom}></div>
        ) : (
          <div className="pl-8">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              price={bun.price}
              text={`${bun.name} (низ)`}
              thumbnail={bun.image}
            />
          </div>
        )}
        {/*<div className="pl-8">*/}
        {/*  <ConstructorElement*/}
        {/*    type="top"*/}
        {/*    isLocked={true}*/}
        {/*    price={bun.price}*/}
        {/*    text={`${bun.name} (верх)`}*/}
        {/*    thumbnail={bun.image}*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<ul*/}
        {/*  className={`${constructorStyles.burgerConstructor__list} pt-4 pb-4`}*/}
        {/*>*/}
        {/*  {goods.map((item, index) => (*/}
        {/*    <li*/}
        {/*      className={constructorStyles.burgerConstructor__item}*/}
        {/*      key={index}*/}
        {/*    >*/}
        {/*      <div className="pr-2">*/}
        {/*        <DragIcon type="primary" />*/}
        {/*      </div>*/}
        {/*      <ConstructorElement*/}
        {/*        isLocked={false}*/}
        {/*        price={item.price}*/}
        {/*        text={item.name}*/}
        {/*        thumbnail={item.image}*/}
        {/*      />*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
        {/*<div className="pl-8">*/}
        {/*  <ConstructorElement*/}
        {/*    type="bottom"*/}
        {/*    isLocked={true}*/}
        {/*    price={bun.price}*/}
        {/*    text={`${bun.name} (низ)`}*/}
        {/*    thumbnail={bun.image}*/}
        {/*  />*/}
        {/*</div>*/}
        <div
          className={`${constructorStyles.burgerConstructor__total} pt-10 pr-3`}
        >
          <div className={`${constructorStyles.burgerConstructor__sum} pr-10`}>
            <div className="pr-2 text text_type_digits-medium">{total}</div>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            htmlType="submit"
            disabled={isDisable}
            type="primary"
            size="medium"
          >
            Оформить заказ
          </Button>
        </div>
      </form>
    </>
  );
});
