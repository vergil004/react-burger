import React from "react";
import { useSelector } from "@/utils/custom-hooks";
import { useRouteMatch } from "react-router-dom";

type Tparams = {
  id: string;
};

export const FeedDetails = () => {
  const { params } = useRouteMatch<Tparams>();
  const { orders } = useSelector((state) => {
    return state.feed;
  });
  return <div>test2</div>;
};
