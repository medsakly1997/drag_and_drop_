"use client";
import React from "react";
import { initialState } from "@/dommyData";
import { Board, BoardAction } from "@/types/types";

const boardInitialState: Board = {
  columns: initialState,
  ordered: Object.keys(initialState),
};

const BoardContext = React.createContext({
  boardState: boardInitialState,
  dispatch: (action: BoardAction) => {},
});

export default BoardContext;
