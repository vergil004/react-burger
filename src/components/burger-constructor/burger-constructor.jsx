import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "@/components/modal/modal";
import { OrderDetails } from "@/components/order-details/order-details";
import constructorStyles from "./burger-constructor.module.css";
import { ChosenIngredientDataContext } from "@/utils/context";
import { sendOrderData } from "@/utils/burger-api";

export function BurgerConstructor() {
  const { ingredients } = useContext(ChosenIngredientDataContext);
  // Пока выводится одна булка из списка ингредиентов и остальные ингредиенты в отдельном списке
  const bun = ingredients.find((item) => item.type === "bun");
  const goods = ingredients.filter((item) => item.type !== "bun");
  const total = ingredients.reduce((sum, item) => (sum += item.price), 0);
  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState({});
  const [isDisable, setDisable] = useState(false);
  // const [totalSumState, totalSumDispatcher] =

  const fetchOrder = async () => {
    await sendOrderData(goods.map((item) => item._id)).then((data) => {
      setOrder(data);
      setShowModal(true);
      setDisable(false);
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setDisable(true);
    fetchOrder();
  };

  return (
    <>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <OrderDetails order={order} />
        </Modal>
      )}
      <form
        onSubmit={submitHandler}
        className={`${constructorStyles.burgerConstructor} pt-15 pl-4`}
      >
        <div className="pl-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            price={bun.price}
            text={bun.name}
            thumbnail={bun.image}
          />
        </div>
        <ul
          className={`${constructorStyles.burgerConstructor__list} pt-4 pb-4`}
        >
          {goods.map((item, index) => (
            <li key={index}>
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
        <div className="pl-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            price={bun.price}
            text={bun.name}
            thumbnail={bun.image}
          />
        </div>
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
}
