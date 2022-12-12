import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "@/components/modal/modal";
import { OrderDetails } from "@/components/order-details/order-details";
import { ConstructorItem } from "@/components/burger-constructor/constructor-item/constructor-item";
import {
  addBunToConstructor,
  addIngredientToConstructor,
  setOrderIngredients,
} from "@/services/actions-creators/constructor-list";
import { setOrderData } from "@/services/actions/order";
import { setOrderFailed } from "@/services/actions-creators/order";
import { getUserData } from "@/services/actions/user";
import { Iingredient, IKeyIngredient } from "@/utils/types";
import constructorStyles from "./burger-constructor.module.css";
import forgottenImage from "@/images/forgotten.jpeg";

export const BurgerConstructor = React.memo(function BurgerConstructor() {
  const { bun, ingredients } = useSelector((state: any) => {
    return state.constructorIngredients;
  });
  const { orderRequestFailed, errorText } = useSelector((store: any) => {
    return store.order;
  });
  const user = useSelector((store: any) => {
    return store.user;
  });

  const [showModal, setShowModal] = useState(false);
  const [isDisable, setDisable] = useState(false);

  const useAppDispatch: () => any = useDispatch;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.isLoaded) {
      dispatch(getUserData());
    }
  }, [dispatch, user.isLoaded]);

  const total = useMemo(() => {
    const bunSum = bun === null ? 0 : bun.price * 2;
    return (
      ingredients.reduce((sum: number, item: any) => (sum += item.price), 0) +
      bunSum
    );
  }, [ingredients, bun]);

  const fetchOrder = async () => {
    if (bun === null) {
      dispatch(setOrderFailed("Булки добавь!!!"));
    } else {
      const idsList = [
        bun._id,
        ...ingredients.map((item: Iingredient) => item._id),
        bun._id,
      ];
      dispatch(setOrderData(idsList));
    }
    setShowModal(true);
    setDisable(false);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisable(true);
    if (user.data) {
      fetchOrder();
    } else {
      setShowModal(true);
      setDisable(false);
    }
  };

  const addIngredient = (item: Iingredient) => {
    if (item.type === "bun") {
      dispatch(addBunToConstructor(item));
    } else {
      dispatch(addIngredientToConstructor(item, uuidv4()));
    }
  };

  const [{ isHover }, drop] = useDrop(() => ({
    accept: "ingredient",
    drop(item: Iingredient) {
      addIngredient(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  }));

  const moveHandler = useCallback(
    (dropIndex: number, dragIndex: number) => {
      dispatch(setOrderIngredients(dragIndex, dropIndex));
    },
    [dispatch]
  );

  const ModalContent = () => {
    return orderRequestFailed ? (
      <div>
        <img src={forgottenImage} alt="motivator" />
        <div className={`text text_type_main-default pt-4`}>{errorText}</div>
      </div>
    ) : (
      <OrderDetails />
    );
  };

  const UserInfoContent = () => {
    return (
      <div>
        <div className="text text_type_main-default">
          Для оформления заказа необходима учетная запись
        </div>
        <div className="text text_type_main-default">
          <Link to="/login">Войдите</Link> или{" "}
          <Link to="/registration">зарегистрируйтесь</Link>
        </div>
      </div>
    );
  };

  const formStyles = isHover
    ? constructorStyles.burgerConstructor__hover
    : constructorStyles.burgerConstructor;

  return (
    <>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          {user.data ? <ModalContent /> : <UserInfoContent />}
        </Modal>
      )}
      <form
        ref={drop}
        onSubmit={submitHandler}
        className={`${formStyles} pt-15 pl-4`}
      >
        {bun === null ? (
          <div
            className={`${constructorStyles.burgerConstructor__top} text text_type_main-default`}
          >
            Перенесите булку
          </div>
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
          <div
            className={`${constructorStyles.burgerConstructor__middle} text text_type_main-default`}
          >
            Перенесите ингредиенты
          </div>
        ) : (
          <ul
            className={`${constructorStyles.burgerConstructor__list} pt-4 pb-4`}
          >
            {ingredients.map((item: IKeyIngredient, index: number) => (
              <ConstructorItem
                key={item.key}
                index={index}
                ingredient={item}
                moveIngredient={moveHandler}
              />
            ))}
          </ul>
        )}
        {bun === null ? (
          <div
            className={`${constructorStyles.burgerConstructor__bottom} text text_type_main-default`}
          >
            Перенесите булку
          </div>
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
