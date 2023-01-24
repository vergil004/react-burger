import React, { useRef, FC } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import itemStyles from "./constructor-item.module.css";
import { deleteIngredientFromConstructor } from "../../../services/actions-creators/constructor-list";
import { IKeyIngredient } from "../../../utils/types";

interface IConstructorItem {
  ingredient: IKeyIngredient;
  moveIngredient: (dragIndex: number, dropIndex: number) => void;
  index: number;
}

type TDragItem = {
  index: number;
};

export const ConstructorItem: FC<IConstructorItem> = ({
  ingredient,
  moveIngredient,
  index,
}) => {
  const dispatch = useDispatch();
  const key = ingredient.key;
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "draggableItem",
    hover(item: TDragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const dropIndex = index;
      if (dragIndex === dropIndex) {
        return;
      }
      moveIngredient(dragIndex, dropIndex);
      item.index = dropIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "draggableItem",
    item: () => {
      return { key, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const draggedClasses = isDragging
    ? itemStyles.item__drag
    : itemStyles.item__shadow;

  return (
    <li ref={ref} className={itemStyles.item}>
      <div className="pr-2">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        isLocked={false}
        price={ingredient.price}
        text={ingredient.name}
        thumbnail={ingredient.image}
        handleClose={() =>
          dispatch(deleteIngredientFromConstructor(ingredient.key))
        }
        extraClass={draggedClasses}
      />
    </li>
  );
};
